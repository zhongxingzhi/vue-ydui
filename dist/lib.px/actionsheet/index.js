/*! vue-ydui v0.3.5 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ActionSheet=void 0;var i=n(54),r=o(i);t.ActionSheet=r.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},2:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=u[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],t))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(c(o.parts[r],t));u[o.id]={id:o.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],s=i[1],a=i[2],c=i[3],l={css:s,media:a,sourceMap:c};n[r]?n[r].parts.push(l):t.push(n[r]={id:r,parts:[l]})}return t}function r(e,t){var n=h(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function c(e,t){var n,o,i;if(t.singleton){var r=v++;n=m||(m=a(t)),o=l.bind(null,n,r,!1),i=l.bind(null,n,r,!0)}else n=a(t),o=f.bind(null,n),i=function(){s(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function l(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function f(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return o(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],c=u[a.id];c.refs--,r.push(c)}if(e){var l=i(e);o(l,t)}for(var s=0;s<r.length;s++){var c=r[s];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete u[c.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),o=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},i=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},r=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,i=t.getBoundingClientRect().top-o,r=i+t.offsetHeight;return i>=0&&i<n||r>0&&r<=n},s=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},a=function(e,t){s(e,t)||(e.className=""==e.className?t:e.className+" "+t)},c=function(e,t){if(s(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}};t.pageScroll=n,t.isColor=o,t.getScrollview=i,t.checkInview=r,t.addClass=a,t.removeClass=c},21:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,'.mask-actionsheet{background-color:rgba(0,0,0,.4);position:fixed;z-index:500;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-actionsheet{text-align:center;position:fixed;bottom:0;left:0;width:100%;z-index:1000;background-color:#efeff4;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.actionsheet-item{display:block;position:relative;font-size:14px;color:#555;height:50px;line-height:50px;background-color:#fff}.actionsheet-item:after{content:"";position:absolute;z-index:2;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.actionsheet-action{display:block;margin-top:7px;font-size:14px;color:#555;height:50px;line-height:50px;background-color:#fff}.actionsheet-active{-webkit-transform:translate(0);transform:translate(0)}',""])},42:function(e,t,n){var o=n(21);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},54:function(e,t,n){var o,i;n(42),o=n(139);var r=n(115);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=o},115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mask-actionsheet",on:{click:function(t){t.stopPropagation(),e.close(t)}}}),e._v(" "),n("div",{staticClass:"m-actionsheet",class:e.show?"actionsheet-active":""},[e._l(e.items,function(t){return n("a",{staticClass:"actionsheet-item",attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),e.itemClick(t)}}},[e._v(e._s(t.label))])}),e._v(" "),e.cancel?n("a",{staticClass:"actionsheet-action",attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.close(t)}}},[e._v(e._s(e.cancel))]):e._e()],2)])},staticRenderFns:[]}},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3);t.default={name:"yd-actionsheet",data:function(){return{show:!1}},props:{value:{type:Boolean,default:!1},items:{type:Array,require:!0},cancel:String},watch:{value:function(e){e&&this.isIOS&&(0,o.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.show=e}},methods:{itemClick:function(e){e&&("function"==typeof e.method&&e.method(),!e.stay&&this.close())},close:function(){this.isIOS&&(0,o.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.$emit("input",!1)}},destroyed:function(){this.close()},mounted:function(){this.scrollView=(0,o.getScrollview)(this.$el),this.isIOS=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}}}})});