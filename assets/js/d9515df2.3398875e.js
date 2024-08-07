"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[986095],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||y[d]||l;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},237851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"VARCHAR",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-types/Data-Types/VARCHAR",id:"sql-manual/sql-types/Data-Types/VARCHAR",title:"VARCHAR",description:"\x3c!--",source:"@site/docs/sql-manual/sql-types/Data-Types/VARCHAR.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/VARCHAR",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/VARCHAR",draft:!1,tags:[],version:"current",frontMatter:{title:"VARCHAR",language:"en"},sidebar:"docs",previous:{title:"CHAR",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/CHAR"},next:{title:"STRING",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/STRING"}},i={},c=[{value:"VARCHAR",id:"varchar",level:2},{value:"Description",id:"description",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"varchar"},"VARCHAR"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"VARCHAR(M)\nA variable length string, M represents the byte length of a variable length string. The range of M is 1-65533."),(0,a.yg)("p",null,"Note: Variable length strings are stored in UTF-8 encoding, so usually English characters occupies 1 byte, and Chinese characters occupies 3 bytes."),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"VARCHAR"))}y.isMDXComponent=!0}}]);