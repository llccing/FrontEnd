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
        "esri/symbols/PictureMarkerSymbol"],
    function (lang, array, declare,
              GraphicsLayer, topic, SimpleMarkerSymbol, Color,
              Graphic, Point, TransCoordinate,SpatialReference,PictureMarkerSymbol) {
        return declare("pointsLayer",GraphicsLayer, {
            constructor: function(options) {
                this.data=options.data||[];
                this.images=options.images||[];
                this.map = this.getMap();
                this.infoContent = options.infoContent||"";
                this.title = options.title||"";
                this.contentHeight = options.contentHeight||0;
                this.contentWidth = options.contentWidth||0;
                var layerNode=this;
                if(options.data.length>0)
                {
                    this.showSymbol(options.data);
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
            showSymbol: function (list) {
                this.clear();
                var pt=new Point();
                for (var i = 0; i < list.length; i++) {
                    if(list[i].X>200)
                    {
                        pt =new Point(list[i].X,list[i].Y, new SpatialReference({wkid:2434}));
                    }else
                    {
                        var pt1 =TransCoordinate.fromWGS84(item.lat,item.lon);
                        pt=new Point(pt1.x,pt1.y, new SpatialReference({wkid: 2434}));
                    }
                    this.add(new Graphic(pt,new PictureMarkerSymbol(this.images[0],25,25),list[i]));
                }
            }
        });
    });