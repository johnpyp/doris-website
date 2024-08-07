"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[639253],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>S});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,S=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(S,s(s({ref:t},p),{},{components:n})):r.createElement(S,s({ref:t},p))}));function S(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},855863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"SHOW DATA SKEW",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-DATA-SKEW",id:"version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-DATA-SKEW",title:"SHOW DATA SKEW",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-DATA-SKEW.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-DATA-SKEW",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-DATA-SKEW",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW DATA SKEW",language:"en"},sidebar:"docs",previous:{title:"SHOW-DATABASES",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-DATABASES"},next:{title:"SHOW-DATABASE-ID",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-DATABASE-ID"}},i={},c=[{value:"SHOW-DATA-SKEW",id:"show-data-skew",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-data-skew"},"SHOW-DATA-SKEW"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW DATA SKEW"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"This statement is used to view the data skew of a table or a partition.\n\ngrammar:\n\n    SHOW DATA SKEW FROM [db_name.]tbl_name [PARTITION (p1)];\n\nDescription:\n\n    1. Only one partition must be specified. For non-partitioned tables, the partition name is the same as the table name.\n    2. The result will show row count and data volume of each bucket under the specified partition, and the proportion of the data volume of each bucket in the total data volume.\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1. View the data skew of the table\n\n    SHOW DATA SKEW FROM db1.test PARTITION(p1);\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, DATA, SKEW\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);