(()=>{var e,r,t={6736:(e,r,t)=>{"use strict";var a=t(5110),n=t.n(a),o=t(8764).Buffer;onmessage=async function(e){e.data.urlPng=await async function(e){const r=await fetch(e).then((async e=>{const r=o.from(await e.arrayBuffer());return n()({buffer:r,format:"PNG"})}));return URL.createObjectURL(new Blob([r],{type:"image/png"}))}(e.data.url),postMessage(e.data)}},950:()=>{},6601:()=>{},9214:()=>{},8623:()=>{},7748:()=>{},5568:()=>{},4485:()=>{},6619:()=>{},7108:()=>{},2361:()=>{},4616:()=>{}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,n.x=()=>{var e=n.O(void 0,[110],(()=>n(6736)));return n.O(e)},e=[],n.O=(r,t,a,o)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,a,o]=e[u],s=!0,f=0;f<t.length;f++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](t[f])))?t.splice(f--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var c=a();void 0!==c&&(r=c)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,a,o]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/tpl/jhin/js/heif-web-display/dist/",(()=>{var e={558:1};n.f.i=(r,t)=>{e[r]||importScripts(n.p+n.u(r))};var r=self.webpackChunk=self.webpackChunk||[],t=r.push.bind(r);r.push=r=>{var[a,o,i]=r;for(var s in o)n.o(o,s)&&(n.m[s]=o[s]);for(i&&i(n);a.length;)e[a.pop()]=1;t(r)}})(),r=n.x,n.x=()=>n.e(110).then(r),n.x()})();