"use strict";(self.webpackChunklaguna_docs=self.webpackChunklaguna_docs||[]).push([[5624],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=c(n),y=a,g=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(g,l(l({ref:e},s),{},{components:n})):r.createElement(g,l({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},367:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="rating_create",o={type:"api",id:"rating-create",unversionedId:"rating-create",title:"rating_create",description:"",slug:"/rating-create",frontMatter:{},api:{tags:["rating"],operationId:"rating_create",requestBody:{content:{"application/json":{schema:{type:"object",required:["rating","info_hash"],properties:{info_hash:{type:"string",format:"binary"},rating:{type:"integer",format:"int32"}}}}},required:!0},responses:{200:{description:"Rating created."},400:{description:"Rating already exists."},401:{description:"Not logged in, hence unauthorized."}},description:"rating_create",method:"post",path:"/api/torrent/rating",parameters:[],jsonRequestBodyExample:{info_hash:"string",rating:0},info:{title:"Laguna API",description:"API documentation",license:{name:"Apache-2.0"},version:"0.1.0"},postman:{name:"rating create",description:{type:"text/plain"},url:{path:["api","torrent","rating"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "rating": "<integer>",\n    "info_hash": "<binary>"\n}'}}},source:"@site/api/schema.json",sourceDirName:".",permalink:"/laguna-docs/sl/api/rating-create",previous:{title:"torrent_put",permalink:"/laguna-docs/sl/api/torrent-put"},next:{title:"rating_torrent_average",permalink:"/laguna-docs/sl/api/rating-torrent-average"}},p=[],c={toc:p},s="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rating_create"},"rating_create"),(0,a.kt)("p",null,"rating_create"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"info_hash"),(0,a.kt)("span",{style:{opacity:"0.6"}}," binary"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"rating"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int32"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Rating created."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"400")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Rating already exists."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"401")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Not logged in, hence unauthorized."))),(0,a.kt)("div",null))))))}u.isMDXComponent=!0}}]);