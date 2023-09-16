"use strict";(self.webpackChunklaguna_docs=self.webpackChunklaguna_docs||[]).push([[2718],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,b=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return t?r.createElement(b,a(a({ref:n},p),{},{components:t})):r.createElement(b,a({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},66015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const i={},a="Configuration",c={unversionedId:"contributing/backend/configuration",id:"contributing/backend/configuration",title:"Configuration",description:"Most of the configuration can be done in Laguna.toml file.",source:"@site/docs/contributing/backend/04-configuration.md",sourceDirName:"contributing/backend",slug:"/contributing/backend/configuration",permalink:"/laguna-docs/sl/docs/contributing/backend/configuration",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"apiDocsSidebar",previous:{title:"Testing",permalink:"/laguna-docs/sl/docs/contributing/backend/testing"},next:{title:"Internal documentation",permalink:"/laguna-docs/sl/docs/contributing/backend/documentation"}},l={},u=[],p={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Most of the configuration can be done in ",(0,o.kt)("inlineCode",{parentName:"p"},"Laguna.toml")," file."),(0,o.kt)("p",null,"You can override config with environment variables (in order of precedence, highest first):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," environment variable overrides ",(0,o.kt)("inlineCode",{parentName:"li"},"application.database"),"."),(0,o.kt)("li",{parentName:"ol"},"For example ",(0,o.kt)("inlineCode",{parentName:"li"},"application.database.name")," can be overriden by ",(0,o.kt)("inlineCode",{parentName:"li"},"APPLICATION_DATABASE_NAME")," environment variable.")),(0,o.kt)("p",null,"For more info and to extend config with custom fields see ",(0,o.kt)("inlineCode",{parentName:"p"},"crates/laguna-backend-config")," crate."))}d.isMDXComponent=!0}}]);