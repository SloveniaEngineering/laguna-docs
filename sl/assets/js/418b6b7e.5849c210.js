"use strict";(self.webpackChunklaguna_docs=self.webpackChunklaguna_docs||[]).push([[808],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),c=p(n),y=i,k=c["".concat(s,".").concat(y)]||c[y]||u[y]||a;return n?l.createElement(k,o(o({ref:e},d),{},{components:n})):l.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=y;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[c]="string"==typeof t?t:i,o[1]=r;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8225:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const a={},o="Get user by id",r={type:"api",id:"get-user-by-id",unversionedId:"get-user-by-id",title:"Get user by id",description:"",slug:"/get-user-by-id",frontMatter:{},api:{tags:["User"],description:"Get user by id",parameters:[{in:"path",name:"id",schema:{type:"string",format:"uuid"},required:!0,description:"User id"}],responses:{200:{description:"User found",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string",format:"uuid"},username:{type:"string"},first_login:{type:"string",format:"datetime"},last_login:{type:"string",format:"datetime"},avatar_url:{type:"string",format:"url"},role:{type:"string",enum:["Normie","Verified","Mod","Admin"]},behaviour:{type:"string",enum:["Lurker","Downloader","Freeleecher","Leech","Seed","Choked","Uploader"]},is_active:{type:"boolean"},has_verified_email:{type:"boolean"},is_history_private:{type:"boolean"},is_profile_private:{type:"boolean"},required:["id","username","first_login","last_login","avatar_url","role","behaviour","has_verified_email","is_history_private","is_profile_private"]}}}}},400:{description:"User not found",content:{"text/plain":{schema:{type:"string",example:"Zahtevan uporabnik ne obstaja."}}}},401:{description:"Unauthorized"}},method:"get",path:"/api/user/{id}",servers:[{url:"http://127.0.0.1:6969"}],security:[{jwtAccessToken:[],jwtRefreshToken:[]}],securitySchemes:{jwtAccessToken:{type:"apiKey",in:"header",name:"X-Access-Token"},jwtRefreshToken:{type:"apiKey",in:"header",name:"X-Refresh-Token"}},info:{version:"1.0.0-alpha",title:"Laguna API",description:"API to interact with [laguna-backend](https://github.com/SloveniaEngineering/laguna-backend) and all services connected to it."},postman:{name:"Get user by id",description:{content:"Get user by id",type:"text/plain"},url:{path:["api","user",":id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) User id",type:"text/plain"},type:"any",value:"<uuid>",key:"id"}]},method:"GET"}},source:"@site/api/schema.yaml",sourceDirName:".",permalink:"/laguna-docs/sl/api/get-user-by-id",previous:{title:"Delete my account",permalink:"/laguna-docs/sl/api/delete-my-account"},next:{title:"Update user by id",permalink:"/laguna-docs/sl/api/update-user-by-id"}},s=[],p={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-user-by-id"},"Get user by id"),(0,i.kt)("p",null,"Get user by id"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"User id")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"User found"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"username"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"first_login"),(0,i.kt)("span",{style:{opacity:"0.6"}}," datetime"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"last_login"),(0,i.kt)("span",{style:{opacity:"0.6"}}," datetime"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"avatar_url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," url"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"role"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"Normie"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Verified"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mod"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"behaviour"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"Lurker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Downloader"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Freeleecher"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Leech"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Seed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Choked"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Uploader"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"is_active"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"has_verified_email"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"is_history_private"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"is_profile_private"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"required"),(0,i.kt)("span",{style:{opacity:"0.6"}}," "),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"400")),(0,i.kt)("div",null,(0,i.kt)("p",null,"User not found"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"401")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized"))),(0,i.kt)("div",null))))))}c.isMDXComponent=!0}}]);