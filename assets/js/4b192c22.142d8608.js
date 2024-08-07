"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[326426],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},602404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"STRING",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-types/Data-Types/STRING",id:"version-2.1/sql-manual/sql-types/Data-Types/STRING",title:"STRING",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-types/Data-Types/STRING.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/STRING",permalink:"/docs/2.1/sql-manual/sql-types/Data-Types/STRING",draft:!1,tags:[],version:"2.1",frontMatter:{title:"STRING",language:"en"},sidebar:"docs",previous:{title:"VARCHAR",permalink:"/docs/2.1/sql-manual/sql-types/Data-Types/VARCHAR"},next:{title:"IPV4",permalink:"/docs/2.1/sql-manual/sql-types/Data-Types/IPV4"}},i={},c=[{value:"STRING",id:"string",level:2},{value:"Description",id:"description",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"string"},"STRING"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"STRING (M)\nA variable length string. Default support is 1048576 bytes (1M), adjustable up to 2147483643 bytes (2G),and the length of the String type is also limited by the configuration string_type_length_soft_limit_bytes(a soft limit of string type length) of be. the String type can only be used in the value column, not in the key column and the partition and bucket columns"),(0,a.yg)("p",null,"Note: Variable length strings are stored in UTF-8 encoding, so usually English characters occupies 1 byte, and Chinese characters occupies 3 bytes."),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"STRING"))}y.isMDXComponent=!0}}]);