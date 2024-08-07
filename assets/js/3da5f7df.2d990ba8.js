"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[395611],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(o,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},358003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SWITCH",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Utility-Statements/SWITCH",id:"version-2.1/sql-manual/sql-statements/Utility-Statements/SWITCH",title:"SWITCH",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Utility-Statements/SWITCH.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/SWITCH",permalink:"/docs/2.1/sql-manual/sql-statements/Utility-Statements/SWITCH",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SWITCH",language:"en"},sidebar:"docs",previous:{title:"DESCRIBE",permalink:"/docs/2.1/sql-manual/sql-statements/Utility-Statements/DESCRIBE"},next:{title:"REFRESH",permalink:"/docs/2.1/sql-manual/sql-statements/Utility-Statements/REFRESH"}},o={},c=[{value:"SWITCH",id:"switch",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"switch"},"SWITCH"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SWITCH"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to switch catalog."),(0,a.yg)("p",null,"Syntax:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SWITCH catalog_name\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Switch to hive"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SWITCH hive;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"SWITCH, CATALOG"),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);