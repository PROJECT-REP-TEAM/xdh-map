(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1095:function(t,e,o){"use strict";o.r(e);var s=o(146),i={components:{XdhMap:s.c,XdhMapDialog:s.e,XdhMapPlacement:s.v,XdhMapWarp:s.G},data:function(){return{test:!0,map:null,view:null,fill:null,target:[113.38542938232422,23.040218353271484],posStyle1:"",posStyle2:"",posStyle3:"",posStyle4:"bottom: 20px; left: 25%; width:50%; height: 180px",from1:[0,0],from2:[0,0],from3:[0,0],from4:[0,0],closed1:!1,closed2:!0,closed3:!0,closed4:!1,container:null,from:[0,0]}},methods:{mapReady:function(t){this.map=t},initDialogsPlace:function(){var t=this.container.offsetWidth,e=t-this.$refs.btnWarp.offsetLeft+10,o=[this.$refs.btnWarp.offsetTop-55,this.$refs.btnWarp.offsetTop-15,this.$refs.btnWarp.offsetTop+25],s=o.map(function(t){return"right: ".concat(e,"px; top:").concat(t,"px; width: 300px; height: 300px;")});this.posStyle1=s[0],this.posStyle2=s[1],this.posStyle3=s[2],this.posStyle4="bottom: 20px; left: 25%; width:".concat(t/2,"px; height: 180px"),this.from1=[this.$refs.btnWarp.offsetLeft,o[0]],this.from2=[this.$refs.btnWarp.offsetLeft,o[1]],this.from3=[this.$refs.btnWarp.offsetLeft,o[2]],this.from4=[t,this.container.offsetHeight]}},mounted:function(){this.container=this.$refs.warp.$el,this.initDialogsPlace(),this.rezieProxy=this.initDialogsPlace.bind(this),window.addEventListener("resize",this.rezieProxy,!1)},beforeDestroy:function(){window.removeEventListener("onResize",this.rezieProxy,!1)}},a=(o(769),o(16)),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"800px"}},[o("xdh-map-warp",{ref:"warp",attrs:{"dialog-layer":3}},[o("xdh-map",{ref:"map",attrs:{slot:"map",type:"Baidu",zoom:12,center:t.target},on:{ready:t.mapReady},slot:"map"},[o("xdh-map-placement",{attrs:{placement:"right-bottom",margin:[10,10],theme:"light"}},[o("button",{on:{click:function(e){t.closed4=!t.closed4}}},[t._v("打开窗口4")])])],1),t._v(" "),o("div",{ref:"btnWarp",staticClass:"side-menu"},[o("button",{on:{click:function(e){t.closed1=!t.closed1}}},[t._v("打开窗口1")]),t._v(" "),o("br"),t._v(" "),o("button",{on:{click:function(e){t.closed2=!t.closed2}}},[t._v("打开窗口2")]),t._v(" "),o("br"),t._v(" "),o("button",{on:{click:function(e){t.closed3=!t.closed3}}},[t._v("打开窗口3")])]),t._v(" "),o("xdh-map-dialog",{key:1,ref:"dialog1",attrs:{title:"弹窗1",closed:t.closed1,"pos-style":t.posStyle1,animate:!0,"hide-at":t.from1},on:{"update:closed":function(e){t.closed1=e}}},[o("div",{staticStyle:{padding:"5px"}},[o("p",[t._v(" 初始样式: "+t._s(t.posStyle1))]),t._v(" "),o("p",[t._v(" 隐藏于: "+t._s(t.from1))])])]),t._v(" "),o("xdh-map-dialog",{key:2,ref:"dialog2",attrs:{title:"弹窗2",closed:t.closed2,"pos-style":t.posStyle2,animate:!0,"hide-at":t.from2},on:{"update:closed":function(e){t.closed2=e}}},[o("div",{staticStyle:{padding:"5px"}},[o("p",[t._v(" 初始样式: "+t._s(t.posStyle2))]),t._v(" "),o("p",[t._v(" 隐藏于: "+t._s(t.from2))])])]),t._v(" "),o("xdh-map-dialog",{key:3,ref:"dialog3",attrs:{theme:"dark",title:"弹窗3",closed:t.closed3,"pos-style":t.posStyle3,animate:!0,"hide-at":t.from3},on:{"update:closed":function(e){t.closed3=e}}},[o("div",{staticStyle:{padding:"5px"}},[o("p",[t._v(" 初始样式: "+t._s(t.posStyle3))]),t._v(" "),o("p",[t._v(" 隐藏于: "+t._s(t.from3))])])]),t._v(" "),o("xdh-map-dialog",{key:4,ref:"dialog4",attrs:{closed:t.closed4,"pos-style":t.posStyle4,animate:!0,header:!1,"show-close":!1,"hide-at":t.from4},on:{"update:closed":function(e){t.closed4=e}}},[o("div",{staticStyle:{padding:"10px"}},[o("div",[t._v("窗口4")]),t._v(" "),o("div",[t._v(" 这是一个固定位置的dialog")]),t._v(" "),o("div",[t._v(" 初始样式: "+t._s(t.posStyle4))]),t._v(" "),o("div",[t._v(" 隐藏于: "+t._s(t.from4))])])])],1)],1)},[],!1,null,"6522dfad",null);e.default=n.exports},456:function(t,e,o){},769:function(t,e,o){"use strict";var s=o(456);o.n(s).a}}]);