(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1037:function(o,n,t){"use strict";t.r(n);var i=t(148),c=t(146),e=[[106.31813049316406,29.674758911132812],[106.31126403808594,29.643173217773438],[106.28929138183594,29.612960815429688],[106.27830505371094,29.586868286132812],[106.29066467285156,29.548416137695312],[106.29478454589844,29.505844116210938],[106.29478454589844,29.478378295898438],[106.30302429199219,29.463272094726562],[106.34971618652344,29.482498168945312],[106.36756896972656,29.518203735351562],[106.40602111816406,29.515457153320312],[106.44172668457031,29.514083862304688],[106.44721984863281,29.477005004882812],[106.47880554199219,29.461898803710938],[106.51313781738281,29.452285766601562],[106.54197692871094,29.413833618164062],[106.58454895019531,29.389114379882812],[106.64497375488281,29.350662231445312],[106.68617248535156,29.368515014648438],[106.71775817871094,29.445419311523438],[106.71638488769531,29.493484497070312],[106.75895690917969,29.563522338867188],[106.79054260253906,29.632186889648438],[106.80152893066406,29.652786254882812],[106.75483703613281,29.710464477539062],[106.71089172363281,29.764022827148438],[106.65870666503906,29.765396118164062],[106.60926818847656,29.762649536132812],[106.57768249511719,29.762649536132812],[106.56394958496094,29.773635864257812],[106.53099060058594,29.773635864257812],[106.51039123535156,29.791488647460938],[106.46919250488281,29.770889282226562],[106.40739440917969,29.791488647460938],[106.38130187988281,29.784622192382812],[106.34147644042969,29.748916625976562],[106.31813049316406,29.674758911132812]],a={components:{XdhMap:c.c,XdhMapIcon:c.l,XdhMapPolygon:c.u},data:function(){return{hangzhou:[120.202789,30.248795],guangzhou:[113.24707,23.123474],shenzhen:[114.054565,22.552185],chongqing:e}},methods:{changeMap:function(o){this.$refs.map.changeType(o.target.value)},zoomIn:function(){this.$refs.map.zoomIn().then(function(o){console.log("ccc")})},zoomOut:function(){this.$refs.map.zoomOut().then(function(o){console.log("bbb",o)})},zoomTo:function(){this.$refs.map.zoomTo(12).then(function(o){console.log("aaa",o)})},zoomAtGSH:function(){var o=Object(i.b)([this.hangzhou,this.guangzhou,this.shenzhen]);this.$refs.map.zoomAt(o).then(function(){alert("完成")})},zoomAtCQ:function(){var o=this.$refs.chongQing.feature.getProperties().geometry;this.$refs.map.zoomAt(o).then(function(){alert("完成")})},handleMove:function(o){this.coordinate=o.coordinate}}},h=t(16),s=Object(h.a)(a,function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",[t("button",{on:{click:o.zoomIn}},[o._v("zoomIn")]),o._v(" "),t("button",{on:{click:o.zoomOut}},[o._v("zoomOut")]),o._v(" "),t("button",{on:{click:o.zoomTo}},[o._v("zoomTo12")]),o._v(" "),t("xdh-map",{ref:"map",attrs:{zoom:10,type:"Baidu","layer-config":{}}},[t("xdh-map-icon",{attrs:{icon:"iconfont icon-location",position:o.hangzhou}}),o._v(" "),t("xdh-map-icon",{attrs:{icon:"iconfont icon-location",position:o.guangzhou}}),o._v(" "),t("xdh-map-icon",{attrs:{icon:"iconfont icon-location",position:o.shenzhen}}),o._v(" "),t("xdh-map-polygon",{key:2,ref:"chongQing",attrs:{coordinates:o.chongqing,fill:"rgba(250,0,0,0.5)","stroke-color":"yellow","stroke-width":3}})],1),o._v(" "),t("button",{on:{click:o.zoomAtGSH}},[o._v("zoomAt广深杭")]),o._v(" "),t("button",{on:{click:o.zoomAtCQ}},[o._v("zoomAt大重庆")])],1)},[],!1,null,"43fed419",null);n.default=s.exports}}]);