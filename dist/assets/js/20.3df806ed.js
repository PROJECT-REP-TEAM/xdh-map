(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1101:function(t,o,n){"use strict";n.r(o);n(145);var i=n(144),e=n(143),a=function(t,o){return(o-t)*Math.random()+t},r={components:{XdhMap:i.c,XdhMapIcon:i.o,XdhMapText:i.C},data:function(){return{map:null,view:null,zoom:7,target:[113,23],total:80,textArray:[],groupList:[]}},methods:{mapReady:function(t,o){this.map=t,this.view=this.map.getView();var n=Object(e.getScale)(t,o);this.groupList=Object(e.pointClot)(this.textArray,150*n,"position")},mainPointClick:function(t){var o=this;this.groupList.forEach(function(t){t.detailShow=!1}),this.$nextTick(function(){t.detailShow=!0,1===t.points.length?o.$refs.map.moveTo(t.points[0].position):o.$refs.map.zoomAt(t.area,{maxZoom:10})})},createTexts:function(){for(var t=[],o=0;o<this.total;o++)t.push({position:[a(107,119),a(20.8,25.2)],text:"".concat(o),font:"12px",background:"#fff",strokeColor:"red",padding:[5,5,5,5],color:"blue"});return t}},created:function(){this.textArray=this.createTexts()}},c=(n(767),n(16)),s=Object(c.a)(r,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticStyle:{height:"400px"}},[n("xdh-map",{ref:"map",attrs:{type:"Baidu",zoom:t.zoom,center:t.target},on:{ready:t.mapReady}},[t._l(t.groupList,function(o,i){return[n("xdh-map-icon",{key:"main_"+i,staticClass:"main-point",attrs:{visible:!o.detailShow,icon:"iconfont icon-locus",position:o.center},on:{click:function(n){return t.mainPointClick(o)}}}),t._v(" "),o.detailShow?t._l(o.points,function(o,e){return n("xdh-map-text",t._b({key:"text_"+i+"_"+e},"xdh-map-text",o,!1))}):t._e()]})],2)],1)},[],!1,null,"2678a4ae",null);o.default=s.exports},460:function(t,o,n){},767:function(t,o,n){"use strict";var i=n(460);n.n(i).a}}]);