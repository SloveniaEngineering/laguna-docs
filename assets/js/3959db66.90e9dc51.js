"use strict";(self.webpackChunklaguna_docs=self.webpackChunklaguna_docs||[]).push([[750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||h[d]||l;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21768:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},c="healthcheck",o={type:"api",id:"healthcheck",unversionedId:"healthcheck",title:"healthcheck",description:"",slug:"/healthcheck",frontMatter:{},api:{tags:["meta"],operationId:"healthcheck",responses:{200:{description:"Returns healthcheck."}},description:"healthcheck",method:"get",path:"/api/misc/healthcheck",parameters:[],info:{title:"Laguna API",description:"API documentation",license:{name:"Apache-2.0"},version:"0.1.0"},postman:{name:"healthcheck",description:{type:"text/plain"},url:{path:["api","misc","healthcheck"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/api/schema.json",sourceDirName:".",permalink:"/laguna-docs/api/healthcheck",previous:{title:"get_app_info",permalink:"/laguna-docs/api/get-app-info"},next:{title:"torrent_put",permalink:"/laguna-docs/api/torrent-put"}},i=[],p={toc:i},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"healthcheck"},"healthcheck"),(0,a.kt)("p",null,"healthcheck"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Returns healthcheck."))),(0,a.kt)("div",null))))))}s.isMDXComponent=!0}}]);