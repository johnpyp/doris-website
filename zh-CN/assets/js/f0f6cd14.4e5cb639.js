"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[567211],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>f});var t=n(296540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?t.createElement(f,a(a({ref:r},p),{},{components:n})):t.createElement(f,a({ref:r},p))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},864760:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=n(58168),i=(n(296540),n(15680));const o={title:"BE \u7248\u672c\u4fe1\u606f",language:"zh-CN"},a=void 0,s={unversionedId:"admin-manual/be/version-info",id:"version-3.0/admin-manual/be/version-info",title:"BE \u7248\u672c\u4fe1\u606f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/be/version-info.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/version-info",permalink:"/zh-CN/docs/admin-manual/be/version-info",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BE \u7248\u672c\u4fe1\u606f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u586b\u5145\u574f\u526f\u672c",permalink:"/zh-CN/docs/admin-manual/be/pad-rowset"},next:{title:"BE \u63a2\u6d3b",permalink:"/zh-CN/docs/admin-manual/be/health"}},l={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],p={toc:u},d="wrapper";function c(e){let{components:r,...n}=e;return(0,i.yg)(d,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GET /api/be_version_info")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6 be \u8282\u70b9\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,i.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,i.yg)("p",null,"\u65e0"),(0,i.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,i.yg)("p",null,"\u65e0"),(0,i.yg)("h2",{id:"request-body"},"Request body"),(0,i.yg)("p",null,"\u65e0"),(0,i.yg)("h2",{id:"response"},"Response"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'```json\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "beVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3"\n        }\n    },\n    "count":0\n}\n```\n')),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"```\ncurl http://127.0.0.1:8040/api/be_version_info\n\n```\n")))}c.isMDXComponent=!0}}]);