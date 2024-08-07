"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[925764],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,y=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(y,s(s({ref:t},p),{},{components:n})):a.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},499885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ADMIN-CLEAN-TRASH",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CLEAN-TRASH",id:"version-2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CLEAN-TRASH",title:"ADMIN-CLEAN-TRASH",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CLEAN-TRASH.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CLEAN-TRASH",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CLEAN-TRASH",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ADMIN-CLEAN-TRASH",language:"en"},sidebar:"docs",previous:{title:"SHOW TABLET STORAGE FORMAT",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-STORAGE-FORMAT"},next:{title:"RECOVER",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/RECOVER"}},o={},c=[{value:"ADMIN-CLEAN-TRASH",id:"admin-clean-trash",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-clean-trash"},"ADMIN-CLEAN-TRASH"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN CLEAN TRASH"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to clean up garbage data in the backend"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN CLEAN TRASH [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Use BackendHost:BackendHeartBeatPort to indicate the backend that needs to be cleaned up, and clean up all backends without adding the on limit.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clean up the junk data of all be nodes."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ADMIN CLEAN TRASH;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clean up the junk data of '192.168.0.1:9050' and '192.168.0.2:9050'."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'ADMIN CLEAN TRASH ON ("192.168.0.1:9050","192.168.0.2:9050");\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"))}d.isMDXComponent=!0}}]);