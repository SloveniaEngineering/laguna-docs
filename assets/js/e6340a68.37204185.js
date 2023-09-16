"use strict";(self.webpackChunklaguna_docs=self.webpackChunklaguna_docs||[]).push([[7388],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>y});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=l.createContext({}),s=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(n),k=i,y=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return n?l.createElement(y,a(a({ref:e},d),{},{components:n})):l.createElement(y,a({ref:e},d))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:i,a[1]=o;for(var s=2;s<r;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},508:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=n(87462),i=(n(67294),n(3905));const r={},a="user_get",o={type:"api",id:"user-get",unversionedId:"user-get",title:"user_get",description:"",slug:"/user-get",frontMatter:{},api:{tags:["user"],operationId:"user_get",parameters:[{name:"id",in:"path",description:"User's id.",required:!0,schema:{type:"string",format:"uuid"}}],responses:{200:{description:"Returns user.",content:{"application/vnd.sloveniaengineering.laguna.0.1.0+json":{schema:{type:"object",required:["id","username","first_login","role","behaviour","is_enabled","is_donator","has_verified_email","is_profile_private"],properties:{avatar_url:{type:"string",nullable:!0},behaviour:{type:"string",enum:["Lurker","Downloader","Freeleecher","Leech","Seed","Choked","Uploader","Stopped"]},first_login:{type:"string",format:"date-time"},has_verified_email:{type:"boolean"},id:{type:"string",format:"uuid",description:"The user's id"},is_donator:{type:"boolean"},is_enabled:{type:"boolean"},is_profile_private:{type:"boolean"},last_login:{type:"string",format:"date-time",nullable:!0},role:{type:"string",enum:["Normie","Verified","Mod","Admin"]},username:{type:"string"}}}}}},400:{description:"User not found.",content:{"application/vnd.sloveniaengineering.laguna.0.1.0+json":{schema:{type:"string"}}}},401:{description:"Not logged in, hence unauthorized.",content:{"application/vnd.sloveniaengineering.laguna.0.1.0+json":{schema:{type:"string"}}}}},description:"user_get",method:"get",path:"/api/user/{id}",info:{title:"Laguna API",description:"API documentation",license:{name:"Apache-2.0"},version:"0.1.0"},postman:{name:"user get",description:{type:"text/plain"},url:{path:["api","user",":id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) User's id.",type:"text/plain"},type:"any",value:"<uuid>",key:"id"}]},method:"GET"}},source:"@site/api/schema.json",sourceDirName:".",permalink:"/laguna-docs/api/user-get",previous:{title:"user_patch_me",permalink:"/laguna-docs/api/user-patch-me"},next:{title:"user_me_delete",permalink:"/laguna-docs/api/user-me-delete"}},p=[],s={toc:p},d="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user_get"},"user_get"),(0,i.kt)("p",null,"user_get"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"User's id.")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Returns user."))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"avatar_url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"behaviour"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"Lurker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Downloader"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Freeleecher"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Leech"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Seed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Choked"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Uploader"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Stopped"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"first_login"),(0,i.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"has_verified_email"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"The user's id")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"is_donator"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"is_enabled"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"is_profile_private"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"last_login"),(0,i.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"role"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"Normie"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Verified"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mod"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"username"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"400")),(0,i.kt)("div",null,(0,i.kt)("p",null,"User not found."))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"401")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Not logged in, hence unauthorized."))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);