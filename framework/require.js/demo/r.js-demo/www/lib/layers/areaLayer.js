define(['dojo/_base/lang',
        'dojo/_base/array',
        "dojo/_base/declare",
        "esri/layers/GraphicsLayer",
        'dojo/topic',
        'esri/symbols/SimpleMarkerSymbol',
        'dojo/_base/Color',
        'esri/graphic',
        'esri/geometry/Point',
        './TransCoordinate',
        "esri/SpatialReference",
        "esri/tasks/QueryTask",
        "esri/tasks/query"],
    function (lang, array, declare,
              GraphicsLayer, topic, SimpleMarkerSymbol, Color,
              Graphic, Point, TransCoordinate,SpatialReference,QueryTask,Query) {
        return declare("pointsLayer",GraphicsLayer, {
            constructor: function(options) {
                this.data=options.data||[];
                this.colors=options.colors||[];//[246,28,66,80]
                this.lineColors = options.lineColors;
                this.map = this.getMap();
                this.infoContent = options.infoContent||"";
                this.title = options.title||"";
                this.contentHeight = options.contentHeight||0;
                this.contentWidth = options.contentWidth||0;
                var layerNode=this;
                if(options.data.length>0)
                {
                    this.initAreaLayer(options.url,options.sql,layerNode);
                }
                this.on("click", function (evt) {
                    this.map.setMapCursor("pointer");
                    var selected = evt.graphic,
                         pt = selected.geometry,
                         item = selected.attributes;
                    this.map.infoWindow.resize(layerNode.contentWidth,layerNode.contentHeight);
                    this.map.infoWindow.setTitle(layerNode.title);
                    this.map.infoWindow.setContent(layerNode.infoContent);
                    this.map.infoWindow.show(pt);
                });
                this.on("mouse-out", function (evt) {

                });
                this.on("dbl-click", function (evt) {
                });
            },
            initAreaLayer:function (url,sql,layerNode)
            {
                this.clear();
                var query = new Query();
                query.where= sql;
                query.outFields = ["*"];
                query.returnGeometry = true;
                var queryTask = new QueryTask(url);
                queryTask.execute(query,function(featureSet){
                    var list=featureSet.features;
                    if(list.length>0)
                    {
                        for(var i=0;i<list.length;i++)
                        {
                            var polygon = list[i].geometry;
                            var item=list[i].attributes;
                            var graph=new Graphic( {
                                "geometry":polygon,
                                "symbol":{"color":layerNode.colors[i],
                                    "outline":{"color":layerNode.lineColors,"width":1,"type":"esriSLS","style":"esriSLSSolid"},
                                    "type":"esriSFS",
                                    "style":"esriSFSSolid"},
                                attributes:item
                            });
                            layerNode.add(graph);
                        }
                    }
                });
            }
        });
    });