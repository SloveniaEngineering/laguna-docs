"use strict";(self.webpackChunklaguna_docs=self.webpackChunklaguna_docs||[]).push([[7705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},90026:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={},i="user_me_get",o={type:"api",id:"user-me-get",unversionedId:"user-me-get",title:"user_me_get",description:"",slug:"/user-me-get",frontMatter:{},api:{tags:["user"],operationId:"user_me_get",responses:{200:{description:"Returns current user.",content:{"application/json":{schema:{type:"object",required:["id","username","first_login","role","behaviour","is_enabled","is_donator","has_verified_email","is_profile_private"],properties:{avatar_url:{type:"string",nullable:!0},behaviour:{type:"string",enum:["Lurker","Downloader","Freeleecher","Leech","Seed","Choked","Uploader","Stopped"]},first_login:{type:"string",format:"date-time"},has_verified_email:{type:"boolean"},id:{type:"string",format:"uuid",description:"The user's id"},is_donator:{type:"boolean"},is_enabled:{type:"boolean"},is_profile_private:{type:"boolean"},last_login:{type:"string",format:"date-time",nullable:!0},role:{type:"string",enum:["Normie","Verified","Mod","Admin"]},username:{type:"string"}}}}}},401:{description:"Not logged in, hence unauthorized.",content:{"text/plain":{schema:{type:"string"}}}}},description:"user_me_get",method:"get",path:"/api/user/me",parameters:[],info:{title:"Laguna API",description:"API documentation",license:{name:"Apache-2.0"},version:"0.1.0"},postman:{name:"user me get",description:{type:"text/plain"},url:{path:["api","user","me"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/api/schema.json",sourceDirName:".",permalink:"/laguna-docs/sl/api/user-me-get",previous:{title:"register",permalink:"/laguna-docs/sl/api/register"},next:{title:"user_patch_me",permalink:"/laguna-docs/sl/api/user-patch-me"}},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"user_me_get"},"user_me_get"),(0,r.kt)("p",null,"user_me_get"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Returns current user."))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"avatar_url"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"behaviour"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"Lurker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Downloader"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Freeleecher"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Leech"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Choked"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Uploader"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Stopped"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"first_login"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"has_verified_email"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The user's id")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"is_donator"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"is_enabled"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"is_profile_private"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"last_login"),(0,r.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"role"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"Normie"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Verified"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin"),"]")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"username"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"401")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Not logged in, hence unauthorized."))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}d.isMDXComponent=!0}}]);