(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229d4d"],{deb8:function(o,t,n){"use strict";n.r(t);var e=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",[n("select",{on:{change:o.changeMap}},[n("option",{attrs:{value:"Baidu"}},[o._v("Baidu")]),n("option",{attrs:{value:"Amap"}},[o._v("Amap")]),n("option",{attrs:{value:"OSM"}},[o._v("OSM")]),n("option",{attrs:{value:"TDT"}},[o._v("TDT")]),n("option",{attrs:{value:"Google"}},[o._v("Google")]),n("option",{attrs:{value:"SuperMap"}},[o._v("SuperMap")]),n("option",{attrs:{value:"Founder"}},[o._v("Founder")])]),n("button",{on:{click:o.zoomIn}},[o._v("zoomIn")]),n("button",{on:{click:o.zoomOut}},[o._v("zoomOut")]),o._v("\n  坐标： "),n("span",[o._v(o._s(o.coordinate))]),n("example",[n("xdh-map",{ref:"map",attrs:{type:"Baidu",zoom:10,"min-zoom":5,"max-zoom":18,"layer-config":o.layerConfig},on:{pointermove:o.handleMove}})],1)],1)},a=[],i={data:function(){return{coordinate:[],layerConfig:{}}},methods:{changeMap:function(o){this.$refs.map.changeType(o.target.value)},zoomIn:function(){this.$refs.map.zoomIn()},zoomOut:function(){this.$refs.map.zoomOut()},handleMove:function(o){this.coordinate=o.coordinate}}},u=i,r=n("2877"),p=Object(r["a"])(u,e,a,!1,null,"7dbdd0ee",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d229d4d.4c03c9a6.js.map