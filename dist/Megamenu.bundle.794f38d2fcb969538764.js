!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define("Megamenu",["React"],n):"object"==typeof exports?exports.Megamenu=n(require("react")):e.Megamenu=n(e.React)}(this,(e=>(()=>{"use strict";var n={335:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,'\n\n/* Slideshow container */\n.slideshow-container {\n  position: relative;\n  background: #242424;\n}\n\n/* Slides */\n.mySlides {\n  display: none;\n  padding: 15px;\n  text-align: center;\n  animation: slideRightToLeft 1s ease-in-out;\n}\n@keyframes slideRightToLeft {\n    0% {\n      transform: translateX(100%);\n    }\n    100% {\n      transform: translateX(0%);\n    }\n  }\n\n/* Next & previous buttons */\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -30px;\n  padding: 16px;\n  color: #888;\n  font-weight: bold;\n  font-size: 20px;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n}\n\n/* Position the "next button" to the right */\n.next {\n  position: absolute;\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover, .next:hover {\n  background-color: rgba(0,0,0,0.8);\n  color: white;\n}\n\n/* The dot/bullet/indicator container */\n.dot-container {\n    text-align: center;\n    padding: 20px;\n    background: #ddd;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n/* Add a background color to the active dot/circle */\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n/* Add an italic font style to all quotes */\nq {font-style: italic;}\n\n/* Add a blue color to the author */\n.author {color: cornflowerblue;}\n\n.mySlides q{\n    color: #ffffff;\n    font-family: Ubuntu, sans-serif;\n}',""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=r(p,o);o.byIndex=s,n.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},156:n=>{n.exports=e}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var r={};return(()=>{o.r(r),o.d(r,{default:()=>x});var e=o(156),n=o.n(e),t=o(72),a=o.n(t),i=o(825),s=o.n(i),c=o(659),l=o.n(c),u=o(56),d=o.n(u),f=o(540),p=o.n(f),m=o(113),v=o.n(m),h=o(335),b={};b.styleTagTransform=v(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=p(),a()(h.A,b),h.A&&h.A.locals&&h.A.locals;var y="D:\\BIGCOMMERCE FEATURES\\Mega menu component\\mega-menu\\src\\Megamenu.js";const g=()=>{const[t,o]=(0,e.useState)("1");(0,e.useEffect)((()=>{const e=setInterval((()=>{r(1)}),4e3);return()=>clearInterval(e)}),[t]);const r=e=>{a(t+e)},a=e=>{let n=e;const t=document.getElementsByClassName("mySlides");e>t.length&&(n=1),e<1&&(n=t.length),o(n);for(let e=0;e<t.length;e++)t[e].style.display="none";t[n-1].style.display="block"};return n().createElement("div",{className:"slideshow-container",__self:void 0,__source:{fileName:y,lineNumber:35,columnNumber:7}},n().createElement("div",{className:"mySlides",__self:void 0,__source:{fileName:y,lineNumber:36,columnNumber:9}},n().createElement("q",{style:{color:"red"},__self:void 0,__source:{fileName:y,lineNumber:37,columnNumber:11}},"I love you the more in that I believe you had liked me for my own sake and for nothing else")),n().createElement("div",{className:"mySlides",__self:void 0,__source:{fileName:y,lineNumber:39,columnNumber:9}},n().createElement("q",{style:{color:"red"},__self:void 0,__source:{fileName:y,lineNumber:40,columnNumber:11}},"But man is not made for defeat.")),n().createElement("div",{className:"mySlides",__self:void 0,__source:{fileName:y,lineNumber:42,columnNumber:9}},n().createElement("q",{style:{color:"red"},__self:void 0,__source:{fileName:y,lineNumber:43,columnNumber:11}}," I have not failed. I've just found 10,000 ways that won't work.")))};window.Megamenu=g;const x=g})(),r})()));