define(['dojo/_base/declare',
        'esri/layers/GraphicsLayer',
        'esri/graphic',
        './TransCoordinate',
        'esri/SpatialReference',
        'esri/geometry/Extent'],
    function (declare, GraphicsLayer, Graphic,TransCoordinate,SpatialReference,Extent) {
        return declare("pathLineLayer",GraphicsLayer, {
            constructor: function(options) {
                /*
                 *data:轨迹点
                 */
                this.data=options.data||[];
                this.id="历史轨迹";
                this.map=options.map||this.getMap();
                if(options.data.length>0)
                {
                    this.showSymbol(options.data);
                }
            },
            showSymbol: function (list) {
                this.clear();
                var path=[],xmin=0,ymin=0,xmax= 0,ymax=0;
                for (var i = 0; i < list.length; i++) {
                    var pt =TransCoordinate.fromWGS84(list[i].lat,list[i].lng);
                    path.push([pt.x,pt.y]);
                    if(pt.x>xmax)
                    {
                        xmax=pt.x;
                    }
                    if(pt.x<xmin||xmin==0)
                    {
                        xmin=pt.x;
                    }
                    if(pt.y>ymax)
                    {
                        ymax=pt.y;
                    }
                    if(pt.y<ymin||ymin==0)
                    {
                        ymin=pt.y;
                    }
                }
                var line={geometry:{"paths":[path],
                    "spatialReference":{"wkid":2434}},
                    "symbol":{"color":[0,24,113,232],"width":1,"type":"esriSLS","style":"esriSLSSolid"}};
                this.add(new Graphic(line));
                console.log(xmin+","+ymin+","+xmax+","+ymax);
                //地图缩放
                this.map.setExtent(new Extent(xmin-10000, ymin-10000, xmax+10000, ymax+10000, new SpatialReference({wkid: 2434})));

            }
        });
    });