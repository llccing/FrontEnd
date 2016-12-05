define(["esri/map",
        "esri/layers/ArcGISTiledMapServiceLayer",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/geometry/Extent",
        "esri/SpatialReference",
        "dojo/on",
        "esri/geometry/Point",
        "dojo/topic",
        "esri/layers/GraphicsLayer",
        'esri/graphic',
        "esri/symbols/PictureMarkerSymbol",
        "dojo/query",
        "dojo/request/xhr",
        'esri/tasks/GeometryService',
        'esri/tasks/BufferParameters',
        'esri/geometry/Polygon', "esri/tasks/query",
        "esri/tasks/QueryTask",
        "esri/symbols/TextSymbol",
        'extras/TransCoordinate',
        'extras/pointsLayer',
        'extras/areaLayer',
        "esri/layers/FeatureLayer", 'jquery',
        "esri/toolbars/draw","esri/tasks/LengthsParameters","esri/tasks/AreasAndLengthsParameters","esri/tasks/ProjectParameters",
        "esri/symbols/Font",
        'mapLayers/pathLineLayer',
        'mapLayers/pathBar',
        'esri/symbols/TextSymbol',
        'common',
        "dojo/domReady!"],
    function (Map, ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer, Extent, SpatialReference, on,
              Point, topic, GraphicsLayer, Graphic, PictureMarkerSymbol, query, xhr, GeometryService,
              BufferParameters, Polygon, EQuery, QueryTask, TextSymbol,
              TransCoordinate, PointsLayer, AreaLayer, FeatureLayer, $,drawTool,LengthsParameters,
              AreasAndLengthsParameters,ProjectParameters,Font,pathLineLayer,pathBar,TextSymbol) {
        var url = location.pathname.replace(/\/[^/]+$/, ''),
            configData = {},
            BM = "4205",//权限
            mapLoadFlag=false;
            treeData=[],
            legendList=[],showlegendList=false,initLegendFlag=false,isMeasureFlag=false,isVideoFlag=false,
            gsvc = null,showPt=null,
            flagNum = 1,//地图切换标识
            doQueryNum=0;
            relevanceFlag=true;//联动标志
            areaLayer = new GraphicsLayer(),//面临时图层
            ptsLayer = new GraphicsLayer(),//点群图层
            ptLayer = new GraphicsLayer();//地图定位

        /*
         *地图
         */
        var map = new Map("map", {
            logo: false,
            isZoomSlider: false,
            isDoubleClickZoom: false,
            slider: true,
            autoResize: true,
            sliderPosition: "top-right",
            spatialReference: new SpatialReference({wkid: 2434})
        });

        //地图初始化
        function initMap() {
            //加载配置文件
            xhr(url + "/config.json", {
                handleAs: "json"
            }).then(function (data) {
                configData = data;
                //初始化图层
                initLayers(configData);
            }, function (err) {
                alert("error:" + err.message);
            });

            map.on("load", function () {
                reSizeMap();
                initMapEvent();
                mapLoadFlag=true;
                //触发地图加载完毕事件
                $.publish('ycsf.mapLoad', {msg: 'ycsf.mapLoad'});
            });

            map.on("dbl-click", function (evt) {
                if(!isMeasureFlag) {
                    mapDoubleClickHandler(evt);
                }
            });
        }
        //toc
        function initToc(layer){
            //legend
            getLegend(layer.url);
            //toc
            var tmpArr=[];
            for(var h=0;h<layer.layerInfos.length;h++)
            {
                var arrTemp=layer.layerInfos[h];
                if(arrTemp.subLayerIds!=null)
                {
                    var tmpArr1=[];
                    for(var j=0;j<arrTemp.subLayerIds.length;j++)
                    {
                        var arrTemp1=layer.layerInfos[arrTemp.subLayerIds[j]];
                        tmpArr1.push({id:arrTemp1.id,pId:arrTemp1.parentLayerId,name:arrTemp1.name,checked:arrTemp1.defaultVisibility,
                            label:layer.id,path:layer.url});
                    }
                    tmpArr.push({id:arrTemp.id,pId:arrTemp.parentLayerId,name:arrTemp.name,checked:arrTemp.defaultVisibility,
                            label:layer.id,path:layer.url,children:tmpArr1});
                }else if(arrTemp.parentLayerId==-1&&layer.layerInfos.length>1)
                {
                    tmpArr.push({id:arrTemp.id,pId:arrTemp.parentLayerId,name:arrTemp.name,checked:arrTemp.defaultVisibility,
                        label:layer.id,path:layer.url,children:[]});
                }

            }
            treeData.push({id:-1,name:layer.id,checked:false,
                label:layer.id,path:layer.url,children:tmpArr});

        }
        //后台服务取出legend json
        function getLegend(url){
            $.get(url + "/legend?f=json",function(data){
              data=$.parseJSON(data);
              var arr=data.layers,tmpLabel="";
                for(var i=0;i<arr.length;i++)
                {
                    for(var j=0;j<arr[i].legend.length;j++)
                    {
                        var tmpLegend=arr[i].legend[j];
                        if(tmpLabel!=(arr[i].layerName+"-"+tmpLegend.label))
                        {
                            tmpLabel=(arr[i].layerName+"-"+tmpLegend.label);
                            if(tmpLegend.label=="")
                            {
                                legendList.push({name:arr[i].layerName,
                                    src:"data:"+tmpLegend.contentType+";base64,"+tmpLegend.imageData});
                            }else
                            {
                                legendList.push({name:arr[i].layerName+"-"+tmpLegend.label,
                                    src:"data:"+tmpLegend.contentType+";base64,"+tmpLegend.imageData});
                            }
                        }
                    }

                }
            });

        }
        function initLayers(data) {
            //tiled
            if (data.map.baseMaps.length > 0) {
                var baseMaps = data.map.baseMaps;
                for (var i = 0; i < baseMaps.length; i++) {
                    var tiledLayer = baseMaps[i];
                    map.addLayer(new ArcGISTiledMapServiceLayer(tiledLayer.url, {
                        visible: tiledLayer.visible,
                        id: tiledLayer.label
                    }), tiledLayer.index);
                }

            }

            //dymic
            if (data.map.operationalLayers.length > 0) {
                var operationalLayers = data.map.operationalLayers;
                for (var i = 0; i < operationalLayers.length; i++) {
                    var dymicLayer = operationalLayers[i];
                    var layerTmp=new ArcGISDynamicMapServiceLayer(dymicLayer.url, {
                        visible: dymicLayer.visible,
                        id: dymicLayer.label
                    });
                    //treeData 图层控制
                    if(dymicLayer.treeVisible)
                    {
                        layerTmp.on("load", function(e){
                            initToc(e.layer);
                        });

                    }
                    map.addLayer(layerTmp,dymicLayer.index);
                }
            }

            //服务
            gsvc = new GeometryService(data.map.geometryService);
            gsvc.on("lengths-complete",function(evt){
                showMeasureMent("测量长度:"+String(evt.result.lengths[0].toFixed(3)) +"米");
            });
            gsvc.on("areas-and-lengths-complete",function(evt){
                showMeasureMent("测量面积:"+String(evt.result.areas[0].toFixed(3)) +"平方公里");
            });
            //临时文件
            map.addLayer(areaLayer);
            map.addLayer(ptLayer);
            map.addLayer(ptsLayer);


            //添加点群图层的点击事件
            ptsLayer.on("click", function (e) {
                var graItem = e.graphic.attributes,
                    length = graItem.bm.length;
                //通过消息弹出
                switch (length) {
                    //法务指导中心
                    case 9:
                        $('.fwstation-master').empty().html(graItem.zr);
                        $('.fwvice-master').empty().html(graItem.fzr);
                        $('.fwstation-number').empty().html(graItem.zrlxdh);
                        $('.fwvice-number').empty().html(graItem.fzrlxdh);
                        $('.fwgzsl').hide();
                        $('.fwzx').empty().html(graItem.name);
                        $('#fwcenter').show();
                        break;
                    //法务工作站
                    case 12:
                        var data = {id: graItem.jlbh};
                        $.ajax({
                            type: 'GET',
                            url: sessionStorage.URL + '/wjpt/querySecond',
                            contentType: 'text/html;charset=utf-8',
                            dataType: 'json',
                            data: data,
                            success: function (data) {
                                let people = data.data.people[0],
                                    law = data.data.law[0],
                                    legal = data.data.legal[0],
                                    special = data.data.special[0],
                                    assitance = data.data.assitance[0],
                                    grid = data.data.grid[0],
                                    jutice = data.data.jutice[0];
                                $('.rmtjy').empty().html(people[0].sum);
                                $('.fwry').empty().html(law[0].sum);
                                $('.fzxc').empty().html(legal[0].sum);
                                $('.tsgz').empty().html(special[0].sum);
                                $('.flyz').empty().html(assitance[0].sum);
                                $('.wgsl').empty().html(grid[0].sum);
                                $('.fwll').empty().html(jutice[0].sum);
                            }
                        });
                        $('.stationmaster').empty().html(graItem.zr);
                        $('.vice-master').empty().html(graItem.fzr);
                        $('.stationmaster-number').empty().html(graItem.zrlxdh);
                        $('.viceMaster-number').empty().html(graItem.fzrlxdh);
                        $('.number').empty().html(graItem.name);
                        $('#LegalStation').show();
                        break;
                    //法务工作队伍
                    case 14:
                        if(graItem.rylx != '法务联络员'){
                            $('#fwrylx').empty().html(graItem.rylx);
                            $('#fwname').empty().html(graItem.name);
                            $('#fwxb').empty().html(graItem.xb);
                            $('#fwlxdh').empty().html(graItem.lxdh);
                            $('#fwgzdw').empty().html(graItem.gzdw);
                            $('#fwjtzz').empty().html(graItem.jtzz);
                            $('#personnel').show();
                        }else{
                            $('#fwlly').empty().html(graItem.rylx);
                            $('.fwlname').empty().html(graItem.name);
                            $('#fwlxb').empty().html(graItem.xb);
                            $('#fwlcsrq').empty().html(graItem.csrq);
                            $('#fwlsfzh').empty().html(graItem.sfzhm);
                            $('#fwlwhcd').empty().html(graItem.whcd);
                            $('#fwllxdh').empty().html(graItem.lxdh);
                            $('#fwljtzz').empty().html(graItem.jtzz);
                            $('#fwlgzwg').empty().html(graItem.gzwg);
                            $('#fwlsqet').empty().html(graItem.sqet);
                            $('#fwlsssq').empty().html(graItem.sssq);
                            $('#fwPhoto').attr('src',graItem.zp);
                            $('#liaisonMan').show();
                        }
                        break;
                }
            });

            //areaLayer（点击事件）
            areaLayer.on("click", function (e) {
                var graItem = e.graphic.attributes;
                $.publish('', {
                   bm: graItem.BM
                });
            });
        }

        //事件初始化
        function initMapEvent() {
            //底图切换功能
            query("#switchBaseMap").on("click", function () {

                if (flagNum == 0) {
                    flagNum = 1;
                    mapSwitch(0, flagNum);
                }else{
                    mapSwitch(flagNum, flagNum-1);
                    flagNum=flagNum-1;
                }

                //清除所有图层
                initAreaLayers();
            });
            //home
            query("#switchHome").on("click", function () {
                initHome(BM);
            });
            //距离测量
            query("#distanceMeasurement").on("click", function () {
                doMeasure("距离测量");
            });
            //面积测量
            query("#areaMeasurement").on("click", function () {
                doMeasure("面积测量");
            });

            //图例
            $(".legend").on("click", function () {
                showlegendList=!showlegendList;
                if(showlegendList)
                {
                    $(".legend").css({"width":"230px","height":"300px"});
                    $(".legend-init").css("display","none");
                    $(".legend-expan").css("display","block");
                    if(!initLegendFlag)
                    {
                        initLegend();
                        initLegendFlag=true;
                    }
                }else
                {
                    $(".legend").css({"width":"32px","height":"32px"});
                    $(".legend-init").css("display","block");
                    $(".legend-expan").css("display","none");
                }
            });
            //视频
            query("#videoLayer").on("click", function () {
                isVideoFlag=!isVideoFlag;
                showLayerVisible("视频",0,isVideoFlag)
            });
        };

        //initLegend
        function initLegend(){
            var html="";
            for(var i=0;i<legendList.length;i++)
            {
                var item=legendList[i];
               html+="<tr><td><img src='"+item.src+"'></td><td><span>"+item.name+"</span></td>></tr>";
            }
            $("#legendList").html(html);
        };
        //home
        function initHome(bm) {
            initAreaLayers();
            getLayer(bm);
            reSizeMap();
        }

        //地图切换
        function mapSwitch(curIndex, nextIndex) {
            console.log([nextIndex,curIndex]);
            map.getLayer(map.layerIds[nextIndex]).setVisibility(true);
            map.getLayer(map.layerIds[curIndex]).setVisibility(false);
        }

        //关闭图层
        function initAreaLayers() {
            layerClear();
            var operationalLayers = configData.map.operationalLayers;
            for (var i = 0; i < operationalLayers.length; i++) {
                setLayerVisible(operationalLayers[i].index, false);
            }
        }

        //清空所有图层
        function layerClear() {
            ptLayer.clear();
            ptsLayer.clear();
            areaLayer.clear();
        }

        //地图定位-经纬
        function showPointByLatLon(lat, lon, img) {
            if (isNaN(lat) || isNaN(lon)) {
                return;
            }
            layerClear();
            var pt1 = TransCoordinate.fromWGS84(lat, lon);
            var pt = new Point(pt1.x, pt1.y, new SpatialReference({wkid: 2434}));
            ptLayer.add(new Graphic(pt, new PictureMarkerSymbol(img, 32, 32), {}));
            map.centerAt(pt);
        }

        //地图定位-54坐标
        function showPointByXY(x, y, img) {
            if (isNaN(x) || isNaN(y)) {
                return;
            }
            layerClear();
            var pt = new Point(x, y, new SpatialReference({wkid: 2434}));
            ptLayer.add(new Graphic(pt, new PictureMarkerSymbol(img, 32, 32), {}));
            map.centerAt(pt);
        }

        //多个点地图定位-54坐标
        //Array[{x:,y:,img:''},{x:,y:,img:''}]
        function showPointsByXY(array) {
            layerClear();
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                var pt = new Point(item.x, item.y, new SpatialReference({wkid: 2434}));
                ptsLayer.add(new Graphic(pt, new PictureMarkerSymbol(item.img, 32, 32), item));
            }
            ptsLayer.refresh();
        }

        //区域图层联动
        function showArea(bm) {
            getLayer(bm, "1");
        }

        /*
         *显示图层，flag:"0"显示当前图层；"1"显示下一级图层
         */
        function getLayer(bm) {
            var sql = " BM LIKE '" + bm + "%'",
                id = 0,
                layer = getLayerByBm(bm);
            filterArcGISDynamicMapServiceLayer(sql, id, layer);
            filterTheme(bm,'司法专题');
        }

        //通过bm获取url
        function getLayerByBm(bm) {
            var name = "", tmp = "";
            switch (String(bm).length)
            {
                case 4 :
                    name = "行政区划";
                    break;
                case 6 :
                    tmp = "行政区划";
                    name = "街道";
                    break;
                case 9 :
                    tmp = "街道";
                    name = "社区";
                    break;
                case 12 :
                    tmp = "社区";
                    name = "网格";
                    break;
                case 14 :
                    tmp = "";
                    name = "网格";
                    break;
            }

            if (map.layerIds.length > 0 && name != "") {
                var operationalLayers = map.layerIds;
                for (var i = 0; i < operationalLayers.length; i++) {
                    var layer = map.getLayer(map.layerIds[i]);
                    if (layer.id == tmp && tmp != "") {
                        layer.setVisibility(false);
                        //缩放地图范围
                        getExten(layer.url, bm);
                    }
                    if (layer.id == name) {
                        if(tmp=="")
                        {
                            //缩放地图范围
                            getExten(layer.url, bm);
                        }
                        return layer;
                    }
                }
            }
        }

        function getLayerByName(name) {
            if (map.layerIds.length > 0 && name != "") {
                var operationalLayers = map.layerIds;
                for (var i = 0; i < operationalLayers.length; i++) {
                    var layer = map.getLayer(map.layerIds[i]);
                    if (layer.id == name) {
                        return layer;
                    }
                }
            }
        }

        function filterArcGISDynamicMapServiceLayer(sql, id, layer) {
            var layerDefinitions = [];//定义过滤条件
            //过滤指定图层
            layerDefinitions[id] = sql;
            layer.setLayerDefinitions(layerDefinitions);//开始过滤
            layer.refresh();
            layer.setVisibility(true);

        }


        //图层显示联动
        function showLayers(treeNode) {
            relevanceFlag=false;
            var sql="";
            if(treeNode.label=="司法专题")
            {
                sql=" WGBM LIKE '"+BM+"%'";
            }
            if(treeNode.isParent==false&&treeNode.id==-1)
            {
                var layer=getLayerByName(treeNode.label);
                layer.refresh();
                layer.setVisibility(treeNode.checked);
            }else
            {
                //当节点是父节点时，遍历子节点
                if(treeNode.isParent)
                {
                    initChildLayer(treeNode);
                }else{
                    showTocLayer(getLayerByName(treeNode.label),treeNode.id,treeNode.checked,sql);
                }
            }


        }
        /*
         *遍历子节点
         */
        function initChildLayer(treeNode){
            var sql=" WGBM LIKE '"+BM+"%'";
            for(var i=0;i<treeNode.children.length;i++)
            {
                var tmp=treeNode.children[i];
                if(tmp.isParent)
                {
                    initChildLayer(tmp);
                }else{
                    showTocLayer(getLayerByName(tmp.label),tmp.id,tmp.checked,sql);
                }
            }
        }

        /*
         *图层控制
         */
        function showTocLayer(layer, id, flag, sql) {
            var layerDefinitions = layer.layerDefinitions == null ? [] : layer.layerDefinitions,//过滤条件
                visibleLayers = layer.visibleLayers == null ? [] : layer.visibleLayers;//可见图层
            //过滤指定图层
            if (layerDefinitions[id] == null) {
                layerDefinitions[id] = sql;
                layer.setLayerDefinitions(layerDefinitions);//开始过滤
            }
            if (flag) {
                var tmpFlag=false;
                for (var h = 0; h < visibleLayers.length; h++) {
                    if (visibleLayers[h] == id) {
                        tmpFlag=true;
                        break;
                    }
                }
                if(!tmpFlag)
                    visibleLayers.push(id);
            } else {
                for (var j = 0; j < visibleLayers.length; j++) {
                    if (visibleLayers[j] == id) {
                        visibleLayers.splice(j, 1);
                        break;
                    }
                }
            }
            layer.setVisibleLayers(visibleLayers);
            layer.refresh();
            if(visibleLayers.length==0)
            {
                layer.setVisibility(flag);
            }else{
                layer.setVisibility(true);
            }

        }

        //地图双击事件
        function mapDoubleClickHandler(evt) {
            if(isPosition&&ptTmp==null)
            {
                ptTmp={x:evt.mapPoint.x,y:evt.mapPoint.y,address:""};
                ptLayer.clear();
                var pt=new Point(ptTmp.x,ptTmp.y, new SpatialReference({wkid: 2434}));
                ptLayer.add(new Graphic(pt,new PictureMarkerSymbol("img/pointCursor.png",13,15),{}));
                map.centerAt(pt);
                map.setMapCursor("url(cursor/default.cur),auto");
                bufferGeometry(pt,1);
            }else{
                var point = evt.mapPoint;
                var point1 = map.toMap({
                    spatialReference: evt.screenPoint.spatialReference, type: "point",
                    x: evt.screenPoint.x - 12, y: evt.screenPoint.y - 12
                });
                var distance = point.x - point1.x;
                bufferGeometry(point, distance);
            }

        }

        function bufferGeometry(geo, distance) {
            var bufferParameters = new BufferParameters();
            bufferParameters.geometries = [geo];
            bufferParameters.distances = [distance];
            bufferParameters.unit = GeometryService.UNIT_METER;
            bufferParameters.outSpatialReference = map.spatialReference;
            gsvc.buffer(bufferParameters,bufferCompleteHandler);
        }

        function bufferCompleteHandler(geos) {
            if (geos.length > 0) {
                var polygon = new Polygon(geos[0]);
                var graphic = new Graphic(polygon);
                doQuery(graphic.geometry);
            }
        }

        function doQuery(geo) {
            var layerIds = map.layerIds,
                queryUrl = "",
                layer = null, layerName = "";
            doQueryNum+=1;
            for (var i = 0; i < layerIds.length; i++) {
                layer = map.getLayer(layerIds[i]);
                queryUrl = layer.url;
                layerName = layer.id;
                if(isPosition)
                {
                    if(layerName=="网格")
                    {
                        queryDm(queryUrl + "/0", geo, ["*"],"地址",0,0);
                    }
                }else
                {
                    if (!layer.visible) continue;
                    switch (layerName) {
                        case "行政区划":
                        case "街道":
                        case "社区":
                            queryDm(queryUrl + "/0", geo, ["*"], layerName,false,0,0);
                            break;
                        case "视频":
                            queryDm(queryUrl + "/0", geo, ["*"], layerName,false,0,0);
                            break;
                        case "网格":
                             layer=getLayerByName("司法专题");
                             queryUrl=layer.url;
                             var visibleArr = layer.visibleLayers == null ? [] : layer.visibleLayers;
                             for (var j = 0; j < visibleArr.length; j++) {
                                var num = visibleArr[j];
                                if (num == 1) {
                                    queryDm(queryUrl + "/1", geo, ["*"], "安置帮教",true,j,visibleArr.length-1);
                                }
                                if (num == 2) {
                                    queryDm(queryUrl + "/2", geo, ["*"], "社区矫正",true,j,visibleArr.length-1);
                                }
                                if (num == 4|| num==5) {
                                    queryDm(queryUrl + "/"+String(num), geo, ["*"], "人民调解",true,j,visibleArr.length-1);
                                }
                                if (num>=7&&num<=12 ) {
                                    queryDm(queryUrl + "/"+String(num), geo, ["*"], "法律服务机构",true,j,visibleArr.length-1);
                                }
                             }
                             break;
                        case "司法专题":
                            if(!relevanceFlag)
                            {
                                var visibleArr = layer.visibleLayers == null ? [] : layer.visibleLayers;
                                for (var j = 0; j < visibleArr.length; j++) {
                                    var num = visibleArr[j];
                                    if (num == 1) {
                                        queryDm(queryUrl + "/1", geo, ["*"], "安置帮教",true,j,visibleArr.length-1);
                                    }
                                    if (num == 2) {
                                        queryDm(queryUrl + "/2", geo, ["*"], "社区矫正",true,j,visibleArr.length-1);
                                    }
                                    if (num == 4|| num==5) {
                                        queryDm(queryUrl + "/"+String(num), geo, ["*"], "人民调解",true,j,visibleArr.length-1);
                                    }
                                    if (num>=7&&num<=12 ) {
                                        queryDm(queryUrl + "/"+String(num), geo, ["*"], "法律服务机构",true,j,visibleArr.length-1);
                                    }
                                }
                            }
                            break;
                    }
                }
            }
        }

        function queryDm(url, geometry, outFields, type,flag,index,maxIndex) {
            var query = new EQuery();
            query.geometry = geometry;
            query.outFields = outFields;
            query.returnGeometry = true;
            var queryTask = new QueryTask(url);
            queryTask.execute(query, function (featureSet) {
                showResult(featureSet, type,flag,index,maxIndex);
            }, function (error) {
                console.log(error);
            });
        }

        function showResult(featureSet, type,flag,index,maxIndex) {
            if (featureSet.features.length > 0) {
                if(type=="地址")
                {
                    isPosition=false;
                    var item=featureSet.features[0].attributes;
                    ptTmp.WGBH=item.BM;
                    ptTmp.address=item.SSXZQH+item.SSSQ+item.SSJB+item.NAME;
                    //传送坐标信息 ptTmp
                    $.publish('selectLocation',ptTmp);
                }else
                {
                    if(!flag)
                    {
                        if (featureSet.features.length == 1) {
                            switch (type) {
                                case "行政区划":
                                case "街道":
                                case "社区":
                                    getLayer(featureSet.features[0].attributes.BM, "1");
                                    $.publish('ycsf.homePage.initTableByXzbm', {
                                        xzbm: featureSet.features[0].attributes.BM,
                                        name: featureSet.features[0].attributes.NAME
                                    });
                                case "视频":
                                    showInfoWindow(type,featureSet.features[0]);
                                    break;
                            }
                        }else
                        {
                            switch (type) {
                                case "视频":
                                    var list=[];
                                    for(var i=0;i<featureSet.features.length;i++)
                                    {
                                        var item=featureSet.features[i].attributes;
                                        list.push({name:item.DEVICE_NAME,type:type,id:item.ID});
                                    }
                                    $.publish('ycsf.homePage.showPopuList', {list:list,flag:doQueryNum});
                                    break;
                            }

                        }
                    }else
                    {
                        if(maxIndex==0)
                        {
                            showInfoWindow(type, featureSet.features[0]);
                        }else
                        {
                            var list=[];
                            for(var i=0;i<featureSet.features.length;i++)
                            {
                                var item=featureSet.features[i].attributes;
                                switch(type)
                                {
                                    case "安置帮教":
                                    case "社区矫正":
                                        list.push({name:item.NAME,type:type,id:item.SFZHM});
                                        break;
                                    case "人民调解":
                                        list.push({name:"["+getDmmc(item.JFLX)+"]"+item.TJYXM,type:type,id:item.JLBH});
                                        break;
                                    case "法律服务机构":
                                        list.push({name:item.JGMC,type:type,id:item.JLBH});
                                        break;
                                }
                            }
                            $.publish('ycsf.homePage.showPopuList', {list:list,flag:doQueryNum});
                        }
                    }
                }

            }
        }

        //类型
        function getDmmc(JFLX){
            var mc="";
            switch (JFLX) {
                case "0":
                    mc = "婚姻家庭纠纷";
                    break;
                case "1":
                    mc = "邻里纠纷";
                    break;
                case "2":
                    mc = "房屋宅基地纠纷";
                    break;
                case "3":
                    mc = "合同纠纷";
                    break;
                case "4":
                    mc = "生产经营纠纷";
                    break;
                case "5":
                    mc = "损害赔偿纠纷";
                    break;
                case "6":
                    mc = "山林土地纠纷";
                    break;
                case "7":
                    mc = "征地拆迁纠纷";
                    break;
                case "8":
                    mc = "环境污染纠纷";
                    break;
                case "9":
                    mc = "劳动争议纠纷";
                    break;
                case "10":
                    mc = "医疗纠纷";
                    break;
                case "11":
                    mc = "道路交通事故纠纷";
                    break;
                case "12":
                    mc = "物业纠纷";
                    break;
                case "13":
                    mc = "消防纠纷";
                    break;
                default:
                    mc = "其他纠纷";
                    break;
            }
            return mc;
        }


        function showInfoWindow(type,graphic){
            var item=graphic.attributes;
            switch(type) {
                case "安置帮教":
                case "社区矫正":
                    $.publish('ycsf.homePage.showThemeInfo', {id:item.SFZHM,type:type});
                    break;
                case "人民调解":
                case "法律服务机构":
                    $.publish('ycsf.homePage.showThemeInfo', {id:item.JLBH,type:type});
                    break;
                case "视频":
                    $.publish('ycsf.homePage.showThemeInfo', {id:item.ID,type:type});
                    break;
            }
        };

        //调整地图大小
        function reSizeMap() {
            if(mapLoadFlag)
            {
                map.disableDoubleClickZoom();
                map.reposition();
                var extent = configData.map.extent;
                map.setExtent(new Extent(extent.xmin, extent.ymin, extent.xmax, extent.ymax, new SpatialReference({wkid: 2434})));
            }

        }

        //图层显示
        function setLayerVisible(index, flag) {
            var layer=map.getLayer(map.layerIds[index]);
            if(layer)
            {
                if(!flag)
                {
                    if(layer.layerDefinitions)
                        layer.setLayerDefinitions([]);
                     if(layer.visibleLayers)
                         layer.setVisibleLayers([]);
                }
                layer.refresh();
                map.getLayer(map.layerIds[index]).setVisibility(flag);
            }

        }

        //根据bm缩放地图范围
        function getExten(url, bm) {
            var query = new EQuery();
            query.where = " BM like '" + bm + "%'";
            query.returnGeometry = true;
            var queryTask = new QueryTask(url + "/0");
            queryTask.execute(query, function (featureSet) {

                if (featureSet.features.length > 0) {
                    var graphTmp = featureSet.features[0];
                    map.setExtent(graphTmp.geometry.getExtent());
                }
            });
        };
        /*
         *地图取点:全局参数 isPosition:false正常地图双击事件；true地图取点,返回数据后自动更新成false
         */
        var isPosition=false,
            ptTmp=null;
        function getMapXY(){
            ptTmp=null;
            isPosition=true;
            //修改鼠标样式
            map.setMapCursor("url(img/pointCursor.png),auto");
        }

        //测量
        function doMeasure(type){
            isMeasureFlag=true;
            map.graphics.clear();
            map.infoWindow.hide();
            map.setMapCursor("url(img/measure_tool.png),auto");
            var measurementTool=new drawTool(map);
            switch(type)
            {
                case "面积测量":
                    measurementTool.activate(drawTool.POLYGON);
                    break;
                case "距离测量":
                    measurementTool.activate(drawTool.POLYLINE);
                    break;
            }
            measurementTool.on("draw-end",function(evt){
                measurementTool.deactivate();
                map.setMapCursor("default");
                var geometry = evt.geometry;
                showPt=null,symbol=null;
                switch (geometry.type) {
                    case "polyline":{
                        var length = geometry.paths[0].length;
                        symbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0]), 2);
                        showPt = new Point(geometry.paths[0][length-1],map.spatialReference);
                        var lengthParams = new LengthsParameters();
                        lengthParams.lengthUnit = GeometryService.UNIT_METER;
                        lengthParams.polylines = [geometry];
                        lengthParams.polylines[0].spatialReference = map.spatialReference;
                        gsvc.lengths(lengthParams);
                        break;
                    }
                    case "polygon":{
                        symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0]), 2),new dojo.Color([170, 0, 0,80]));
                        showPt = new Point(geometry.rings[0][0],map.spatialReference);
                        var params = new ProjectParameters();
                        params.geometries = [geometry];
                        params.outSR = map.spatialReference;
                        gsvc.project(params, function (geometry) {
                            gsvc.simplify(geometry, function (simplifiedGeometries) {
                                var areasAndLengthParams = new AreasAndLengthsParameters();
                                areasAndLengthParams.areaUnit = GeometryService.UNIT_SQUARE_KILOMETERS;
                                areasAndLengthParams.polygons = simplifiedGeometries;
                                areasAndLengthParams.polygons[0].spatialReference = map.spatialReference;
                                gsvc.areasAndLengths(areasAndLengthParams);
                            });
                        });
                        break;
                    }
                }
                var graphic = new Graphic(geometry,symbol);
                map.graphics.add(graphic);
                //关闭
                var grapClose=new Graphic(showPt, new PictureMarkerSymbol("img/measure_clear.png",20,20), {});
                map.graphics.add(grapClose);
                map.graphics.on("click",measureMentClose);

            });
        };
        //显示测量结果
        function showMeasureMent(name){
            //background
            var textBg= new PictureMarkerSymbol("img/textBg.png",200,50);
            textBg.setOffset(0,25);
            map.graphics.add(new esri.Graphic(showPt,textBg));
            //label
            var font  = new Font("12pt",Font.WEIGHT_BOLD,"Courier");
            var text = new TextSymbol(name,font);
            text.setFont(font);
            text.setColor(new dojo.Color([0,0,0,100]));
            text.setOffset(0,24);
            var labelGraphic = new esri.Graphic(showPt,text);
            map.graphics.add(labelGraphic);
            isMeasureFlag=false;
        }
        //测量清除
        function measureMentClose(){
            var handle= map.graphics.on("click",measureMentClose);
            handle.remove();
            map.graphics.clear();
            showPt=null;
        };
        //toc
        function showTocTree(){
            return treeData;
        };

        //市级-街办-社区-网格-专题过滤
        function filterTheme(bm,name)
        {
            var sql = " WGBM LIKE '" + bm + "%'",
                layer = getLayerByName(name);
            var layerDefinitions = layer.layerDefinitions == null ? [] : layer.layerDefinitions,//过滤条件
                visibleLayers = layer.visibleLayers == null ? [] : layer.visibleLayers;//可见图层
            for(var i=0;i<layer.layerInfos.length;i++)
            {
                var arrTemp=layer.layerInfos[i];
                if(arrTemp.subLayerIds==null)
                {
                    layerDefinitions[arrTemp.id] = sql;
                    var tmpFlag=false;
                    for (var h = 0; h < visibleLayers.length; h++) {
                        if (visibleLayers[h] == arrTemp.id) {
                            tmpFlag=true;
                            break;
                        }
                    }
                    if(!tmpFlag)
                        visibleLayers.push(arrTemp.id);
                }
            }
            layer.setVisibleLayers(visibleLayers);
            layer.setLayerDefinitions(layerDefinitions);//开始过滤
            layer.refresh();
            layer.setVisibility(true);
        };
        //显示或关闭图层
        function showLayerVisible(name,id,flag){
            var layer = getLayerByName(name);
             switch(layer.layerInfos.length)
             {
                 case 1:
                     layer.setVisibility(flag);
                     break;
                 default:
                     var  visibleLayers = layer.visibleLayers == null ? [] : layer.visibleLayers;
                     if (flag) {
                         var tmpFlag=false;
                         for (var h = 0; h < visibleLayers.length; h++) {
                             if (visibleLayers[h] == id) {
                                 tmpFlag=true;
                                 break;
                             }
                         }
                         if(!tmpFlag)
                             visibleLayers.push(id);
                     } else {
                         for (var j = 0; j < visibleLayers.length; j++) {
                             if (visibleLayers[j] == id) {
                                 visibleLayers.splice(j, 1);
                                 break;
                             }
                         }
                     }
                     layer.setVisibleLayers(visibleLayers);
                     layer.refresh();
                     layer.setVisibility(flag);
                     break;
             }
        };
        //临时面图层
        function initAreaLayer(bm)
        {
            layerClear();
            areaLayer.clear();
            var layer=getLayerByName("网格");
            getExten(getLayerByName("社区").url, bm);
            var eQuery = new EQuery();
            eQuery.where = " BM LIKE '"+bm+"%' ";
            eQuery.outFields = ["*"];
            eQuery.returnGeometry = true;
            var queryTask = new QueryTask(layer.url+"/0");
            queryTask.execute(eQuery, function (featureSet) {
                for (var i = 0; i < featureSet.features.length; i++) {
                    areaLayer.add(new Graphic({
                        "geometry": featureSet.features[i].geometry,
                        "symbol": {
                            "color": [1,Math.ceil(Math.random()*255),Math.ceil(Math.random()*255),Math.ceil(Math.random()*255)], "outline": {
                                "color": [100, 255, 255, 255],
                                "width": 1, "type": "esriSLS", "style": "esriSLSSolid"
                            },
                            "type": "esriSFS", "style": "esriSFSSolid"
                        },
                        "attributes":featureSet.features[i].attributes
                    }));
                    //label
                    var tmpGraph=featureSet.features[i];
                    var font  = new Font("10pt",Font.WEIGHT_BOLD,"Courier");
                    var text = new TextSymbol(tmpGraph.attributes.NAME,font);
                    text.setFont(font);
                    text.setColor(new dojo.Color([0,0,0,100]));
                    areaLayer.add(new Graphic(tmpGraph.geometry.getCentroid(),text));
                }
            }, function (error) {
                console.log(error);
            });
        };
        //轨迹
        function initPathEvent(option){
            if(option.data!= undefined ){
                if(option.data.length>0)
                {
                    option.map=map;
                    option.domId="pathBar";
                    var tmpPathLineLayer=new pathLineLayer(option);
                    map.addLayer(tmpPathLineLayer);
                    pathBar.init(option);

                }else
                {
                    $('#promptText').html("该对象在选择日期时间段内没有历史轨迹！");
                    $('#promptInfo').fadeIn('slow').delay(2500).fadeOut('slow');
                }
            }
            else
            {
                $('#promptText').html("该对象在选择日期时间段内没有历史轨迹！");
                $('#promptInfo').fadeIn('slow').delay(2500).fadeOut('slow');
            }

        };
        function closePath(){
            pathBar.closePanel();
        };

        //对外开放接口
        return {
            initMap: initMap,//地图初始化
            initAreaLayers: initAreaLayers,//关闭所有图层
            showPointByLatLon: showPointByLatLon,//地图定位-经纬
            showPointByXY: showPointByXY,//地图定位-54坐标
            showPointsByXY: showPointsByXY,//多个点地图定位-54坐标 Array[{x:,y:,img:''},{x:,y:,img:''}]
            showArea: showArea,//区域图层联动
            showLayers: showLayers,//图层显示联动
            reSizeMap: reSizeMap,//调整地图大小
            bm: BM,//用户的控制权限
            initHome: initHome,//初始化区域
            getMapXY:getMapXY,//地图取点
            showTocTree:showTocTree,//初始化toc
            initAreaLayer:initAreaLayer,//临时面图层:参数 bm
            initPathEvent:initPathEvent,//轨迹回放 option:data(坐标点数组); name(对象名称);domId(承载容器);symbolPic(播放对象图标)
            closePath:closePath
        };

    });
