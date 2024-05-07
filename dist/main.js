(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(601),r=n.n(o),s=n(314),c=n.n(s)()(r());c.push([e.id,":root {\n    --background-color: #f5f5f5;\n    --accent-background-color: #0a3c61;\n}\n\nbody {\n    background-color: var(--background-color);\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\ndiv {\n    padding: 20px;\n    text-align: center;\n    background-color: var(--accent-background-color);\n    color: var(--background-color);\n}",""]);const a=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&c[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var s={},c=[],a=0;a<e.length;a++){var i=e[a],l=o.base?i[0]+o.base:i[0],u=s[l]||0,d="".concat(l," ").concat(u);s[l]=u+1;var f=n(d),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var p=r(h,o);o.byIndex=a,t.splice(a,0,{identifier:d,updater:p,references:1})}c.push(d)}return c}function r(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<s.length;c++){var a=n(s[c]);t[a].references--}for(var i=o(e,r),l=0;l<s.length;l++){var u=n(s[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=i}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),s=n(659),c=n.n(s),a=n(56),i=n.n(a),l=n(540),u=n.n(l),d=n(113),f=n.n(d),h=n(365),p={};p.styleTagTransform=f(),p.setAttributes=i(),p.insert=c().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=u();t()(h.A,p);h.A&&h.A.locals&&h.A.locals;class g{constructor(e=5){this.buckets=Array(e),this.size=0}hash(e){let t=0;for(let n=0;n<e.length;n++)t=(31*t+e.charCodeAt(n))%this.buckets.length;return t}checkIndex(e){if(e<0||e>=this.buckets.length)throw new Error("Trying to access index out of bound")}resize(){const e=new Array(2*this.bucketArray.length);this.numElements=0;for(let e=0;e<this.bucketArray.length;e++){const t=this.bucketArray[e];if(t)for(let e=0;e<t.length;e++){const[n,o]=t[e];this.set(n,o)}}this.bucketArray=e}set(e,t){const n=this.hash(e);this.checkIndex(n);let o=this.buckets[n];void 0===o&&(o=[],this.buckets[n]=o);for(const n of o)if(n[0]===e)return void(n[1]=t);o.push([e,t]),this.size++}get(e){const t=this.hash(e);this.checkIndex(t);const n=this.buckets[t];if(void 0===n)return null;for(const t of n)if(t[0]===e)return t[1];return null}has(e){return null!==this.get(e)}remove(e){const t=this.hash(e);this.checkIndex(t);const n=this.buckets[t];if(void 0===n)return!1;for(let t=0;t<n.length;t++){if(n[t][0]===e)return n.splice(t,1),this.size--,!0}return!1}length(){return this.size}clear(){this.buckets=Array(this.buckets.length),this.size=0}keys(){const e=[];for(const t of this.buckets)if(void 0!==t)for(const n of t)e.push(n[0]);return e}values(){const e=[];for(const t of this.buckets)if(void 0!==t)for(const n of t)e.push(n[1]);return e}entries(){const e=[];for(const t of this.buckets)if(void 0!==t)for(const n of t)e.push(n);return e}}class v extends g{constructor(e=5){super(e)}set(e){super.set(e,!0)}get(e){return null!==super.get(e)}}const m=document.createElement("div"),b=document.createElement("h1");b.textContent="Testing HashMap and HashSet";const y=document.createElement("p");y.textContent="Open the console for the test results.",m.append(b,y),document.body.appendChild(m),function(){const e=new g;console.log("Testing HashMap"),console.log("----------------"),console.log("Setting key-value pairs..."),e.set("name","John Doe"),e.set("age",30),e.set("dob","01/01/1990"),console.log("Getting key-value pairs..."),console.log(e.get("name")),console.log(e.get("age")),console.log(e.get("dob")),console.log(e.has("dob")),console.log(e.has("email")),console.log("Removing key-value pair..."),e.remove("dob"),console.log(e.has("dob"));const t=new v;console.log("\nTesting HashSet"),console.log("----------------"),console.log("Adding elements..."),t.set("name"),t.set("age"),t.set("dob"),console.log("Checking elements..."),console.log(t.get("name")),console.log(t.get("age")),console.log(t.get("dob")),console.log(t.get("email")),console.log("Removing elements..."),t.remove("dob"),console.log(t.get("dob")),console.log("----------------"),console.log("End of tests")}()})()})();