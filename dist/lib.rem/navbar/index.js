/*! vue-ydui v0.3.5 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.NavBarNextIcon=t.NavBarBackIcon=t.NavBar=void 0;var i=n(79),a=r(i),o=n(77),s=r(o),l=n(78),c=r(l);t.NavBar=a.default,t.NavBarBackIcon=s.default,t.NavBarNextIcon=c.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},2:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(l(r.parts[a],t))}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(l(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:o}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],a=i[0],o=i[1],s=i[2],l=i[3],c={css:o,media:s,sourceMap:l};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=b(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e,t){var n,r,i;if(t.singleton){var a=x++;n=v||(v=s(t)),r=c.bind(null,n,a,!1),i=c.bind(null,n,a,!0)}else n=s(t),r=f.bind(null,n),i=function(){o(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function c(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=u(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,x=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var a=[],o=0;o<n.length;o++){var s=n[o],l=d[s.id];l.refs--,a.push(l)}if(e){var c=i(e);r(c,t)}for(var o=0;o<a.length;o++){var l=a[o];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete d[l.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},24:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,'.m-navbar{height:.9rem;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:hsla(0,0%,100%,.98)}.m-navbar:after{content:"";position:absolute;z-index:2;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.m-navbar.navbar-fixed{position:fixed;top:0;left:0;width:100%;z-index:100}.navbar-item{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;padding:0 .2rem;font-size:.3rem;white-space:nowrap;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#5c5c5c}.navbar-item:first-child{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;margin-right:-25%}.navbar-item:last-child{-webkit-box-ordinal-group:4;-webkit-order:3;-ms-flex-order:3;order:3}.navbar-item:last-child,.navbar-item:last-child>a{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.navbar-item>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:.9rem;min-width:25%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.navbar-center-box{-webkit-box-ordinal-group:3;-webkit-order:2;-ms-flex-order:2;order:2;height:.9rem;width:50%;margin-left:25%}.navbar-center-box .navbar-center{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:inherit}.navbar-center-box .navbar-center .center-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.4rem;color:#5c5c5c}.navbar-center-box .navbar-center img{height:60%}.back-icon:before,.next-icon:before{display:inline-block;font-family:YDUI-INLAY;font-size:.36rem;color:#5c5c5c}.back-icon:before{content:"\\E607"}.next-icon:before{content:"\\E608"}',""])},45:function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},77:function(e,t,n){var r,i;r=n(162);var a=n(125);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},78:function(e,t,n){var r,i;r=n(163);var a=n(134);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},79:function(e,t,n){var r,i;n(45),r=n(164);var a=n(120);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},120:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"m-navbar",class:e.classes},[n("div",{staticClass:"navbar-item"},[e._t("left")],2),e._v(" "),n("div",{staticClass:"navbar-center-box"},[n("div",{staticClass:"navbar-center"},[e._t("center",[n("span",{staticClass:"center-title"},[e._v(e._s(e.title))])])],2)]),e._v(" "),n("div",{staticClass:"navbar-item"},[e._t("right")],2)])},staticRenderFns:[]}},125:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"back-icon"}),e._t("default")],2)},staticRenderFns:[]}},134:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._t("default"),n("i",{staticClass:"next-icon"})],2)},staticRenderFns:[]}},162:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-navbar-back-icon"}},163:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-navbar-next-icon"}},164:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-navbar",props:{title:String,fixed:Boolean},computed:{classes:function(){return this.fixed?"navbar-fixed":""}}}}})});