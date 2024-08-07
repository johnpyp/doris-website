"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[225508],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>b});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},512394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const i={title:"SHOW TABLET DIAGNOSIS",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",title:"SHOW TABLET DIAGNOSIS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW TABLET DIAGNOSIS",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-CHECK-TABLET",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CHECK-TABLET"},next:{title:"ADMIN-COPY-TABLET",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-COPY-TABLET"}},o={},c=[{value:"SHOW TABLET DIAGNOSIS",id:"show-tablet-diagnosis",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-tablet-diagnosis"},"SHOW TABLET DIAGNOSIS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bca\u65ad\u6307\u5b9a tablet\u3002\u7ed3\u679c\u4e2d\u5c06\u663e\u793a\u8fd9\u4e2a tablet \u7684\u4fe1\u606f\u548c\u4e00\u4e9b\u6f5c\u5728\u7684\u95ee\u9898\u3002\n\n\u8bed\u6cd5\uff1a\n\n    SHOW TABLET DIAGNOSIS tablet_id\n\n\u8bf4\u660e\uff1a\n\n    \u7ed3\u679c\u4e2d\u7684\u5404\u884c\u4fe1\u606f\u5982\u4e0b\uff1a\n    1. TabletExist:                         Tablet\u662f\u5426\u5b58\u5728\n    2. TabletId:                            Tablet ID\n    3. Database:                            Tablet \u6240\u5c5e DB \u548c\u5176 ID\n    4. Table:                               Tablet \u6240\u5c5e Table \u548c\u5176 ID\n    5. Partition:                           Tablet \u6240\u5c5e Partition \u548c\u5176 ID\n    6. MaterializedIndex:                   Tablet \u6240\u5c5e\u7269\u5316\u89c6\u56fe\u548c\u5176 ID\n    7. Replicas(ReplicaId -> BackendId):    Tablet \u5404\u526f\u672c\u548c\u5176\u6240\u5728 BE\u3002\n    8. ReplicasNum:                         \u526f\u672c\u6570\u91cf\u662f\u5426\u6b63\u786e\u3002\n    9. ReplicaBackendStatus:                \u526f\u672c\u6240\u5728 BE \u8282\u70b9\u662f\u5426\u6b63\u5e38\u3002\n    10.ReplicaVersionStatus:                \u526f\u672c\u7684\u7248\u672c\u53f7\u662f\u5426\u6b63\u5e38\u3002\n    11.ReplicaStatus:                       \u526f\u672c\u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\n    12.ReplicaCompactionStatus:             \u526f\u672c Compaction \u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"1. \u67e5\u770b Tablet 10001 \u7684\u8bca\u65ad\u7ed3\u679c\n\n    SHOW TABLET DIAGNOSIS 10001;\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, DIAGNOSIS, TABLET\n")))}m.isMDXComponent=!0}}]);