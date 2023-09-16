"use strict";(self.webpackChunklaguna_docs=self.webpackChunklaguna_docs||[]).push([[2422],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>y});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.createContext({}),s=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(n),k=a,y=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return n?l.createElement(y,o(o({ref:e},d),{},{components:n})):l.createElement(y,o({ref:e},d))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4678:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=n(87462),a=(n(67294),n(3905));const r={},o="torrent_put",i={type:"api",id:"torrent-put",unversionedId:"torrent-put",title:"torrent_put",description:"",slug:"/torrent-put",frontMatter:{},api:{tags:["torrent"],operationId:"torrent_put",requestBody:{content:{"multipart/form-data":{schema:{type:"object",required:["torrent"],properties:{torrent:{$ref:"#/components/schemas/ActixFile"}}}}},required:!0},responses:{200:{description:"Returns created torrent.",content:{"application/vnd.sloveniaengineering.laguna.0.1.0+json":{schema:{type:"object",required:["info_hash","raw","length","file_name","is_freeleech","leech_count","seed_count","completed_count","speedlevel","creation_date","uploaded_at","uploaded_by"],properties:{announce_url:{type:"string",nullable:!0},completed_count:{type:"integer",format:"int32"},created_by:{type:"string",nullable:!0},creation_date:{type:"string",format:"date-time"},file_name:{type:"string"},genre:{nullable:!0,type:"string",enum:["Action","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","FilmNoir","GameShow","History","Horror","Musical","Mystery","News","RealityTV","Romance","SciFi","Short","Sport","TalkShow","Thriller","War","Western"]},info_hash:{type:"string",format:"binary"},is_freeleech:{type:"boolean"},leech_count:{type:"integer",format:"int32"},length:{type:"integer",format:"int64"},modded_at:{type:"string",format:"date-time",nullable:!0},modded_by:{type:"string",format:"uuid",nullable:!0},nfo:{type:"string",nullable:!0},raw:{type:"string",format:"binary"},seed_count:{type:"integer",format:"int32"},speedlevel:{type:"string",enum:["Lowspeed","Mediumspeed","Highspeed"]},uploaded_at:{type:"string",format:"date-time"},uploaded_by:{type:"string",format:"uuid"}}}}}},400:{description:"Torrent not found.",content:{"application/vnd.sloveniaengineering.laguna.0.1.0+json":{schema:{type:"string"}}}},401:{description:"Not logged in, hence unauthorized.",content:{"application/vnd.sloveniaengineering.laguna.0.1.0+json":{schema:{type:"string"}}}}},description:"torrent_put",method:"put",path:"/api/torrent",parameters:[],info:{title:"Laguna API",description:"API documentation",license:{name:"Apache-2.0"},version:"0.1.0"},postman:{name:"torrent put",description:{type:"text/plain"},url:{path:["api","torrent"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"multipart/form-data"}],method:"PUT",body:{mode:"formdata",formdata:[{description:{content:"",type:"text/plain"},key:"torrent",value:'{"value":"reference #/components/schemas/ActixFile not found in the OpenAPI spec"}',type:"text"}]}}},source:"@site/api/schema.json",sourceDirName:".",permalink:"/laguna-docs/sl/api/torrent-put",previous:{title:"healthcheck",permalink:"/laguna-docs/sl/api/healthcheck"},next:{title:"rating_create",permalink:"/laguna-docs/sl/api/rating-create"}},p=[],s={toc:p},d="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"torrent_put"},"torrent_put"),(0,a.kt)("p",null,"torrent_put"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"torrent"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Returns created torrent."))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"announce_url"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"completed_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int32"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"created_by"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"creation_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"file_name"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"genre"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Action"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Adventure"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Animation"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Biography"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Comedy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Crime"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Documentary"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Drama"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Family"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Fantasy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FilmNoir"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GameShow"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"History"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Horror"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Musical"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Mystery"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"News"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RealityTV"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Romance"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SciFi"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Short"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Sport"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TalkShow"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Thriller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"War"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Western"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"info_hash"),(0,a.kt)("span",{style:{opacity:"0.6"}}," binary"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"is_freeleech"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"leech_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int32"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"length"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"modded_at"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"modded_by"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"nfo"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"raw"),(0,a.kt)("span",{style:{opacity:"0.6"}}," binary"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"seed_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int32"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"speedlevel"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,a.kt)("inlineCode",{parentName:"p"},"Lowspeed"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Mediumspeed"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Highspeed"),"]")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"uploaded_at"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"uploaded_by"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"400")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Torrent not found."))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"401")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Not logged in, hence unauthorized."))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);