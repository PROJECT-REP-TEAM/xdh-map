(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1037:function(t,n,a){"use strict";a.r(n);var r=a(146),o=function(t,n){return t+Math.round((n-t)*Math.random())},e={components:{XdhMap:r.c,XdhMapScatter:r.A},data:function(){return{total:60,arr:[]}},created:function(){this.arr=function(t){for(var n=[],a=0;a<t;a++)n.push({position:[1-3*Math.random()+120,30+3*(1-Math.random())],inner:o(5,20),outer:o(10,30),color:"".concat(o(0,255),", ").concat(o(0,255),", ").concat(o(0,255))});return n}(this.total)}},c=a(16),s=Object(c.a)(e,function(){var t=this.$createElement,n=this._self._c||t;return n("xdh-map",{attrs:{center:[120,30],zoom:7}},[this.arr.length?n("xdh-map-scatter",{attrs:{data:this.arr}}):this._e()],1)},[],!1,null,null,null);n.default=s.exports}}]);