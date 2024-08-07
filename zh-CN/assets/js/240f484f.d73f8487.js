"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[415497],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,y=c["".concat(p,".").concat(d)]||c[d]||g[d]||o;return r?t.createElement(y,l(l({ref:n},u),{},{components:r})):t.createElement(y,l({ref:n},u))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},979609:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const o={title:"Log Action",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/fe/log-action",id:"admin-manual/fe/log-action",title:"Log Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/fe/log-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/log-action",permalink:"/zh-CN/docs/dev/admin-manual/fe/log-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Log Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Help Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/help-action"},next:{title:"Login Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/login-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],u={toc:s},c="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/log\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"GET \u7528\u4e8e\u83b7\u53d6 Doris \u6700\u65b0\u7684\u4e00\u90e8\u5206 WARNING \u65e5\u5fd7\uff0cPOST \u65b9\u6cd5\u7528\u4e8e\u52a8\u6001\u8bbe\u7f6e FE \u7684\u65e5\u5fd7\u7ea7\u522b\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"add_verbose")),(0,a.yg)("p",{parentName:"li"},"  POST \u65b9\u6cd5\u53ef\u9009\u53c2\u6570\u3002\u5f00\u542f\u6307\u5b9a Package \u7684 DEBUG \u7ea7\u522b\u65e5\u5fd7\u3002\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"del_verbose")),(0,a.yg)("p",{parentName:"li"},"  POST \u65b9\u6cd5\u53ef\u9009\u53c2\u6570\u3002\u5173\u95ed\u6307\u5b9a Package \u7684 DEBUG \u7ea7\u522b\u65e5\u5fd7\u3002"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'GET /rest/v1/log\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogContents": {\n            "logPath": "/home/disk1/cmy/git/doris/core-for-ui/output/fe/log/fe.warn.log",\n            "log": "<pre>2020-08-26 15:54:30,081 WARN (UNKNOWN 10.81.85.89_9213_1597652404352(-1)|1) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: UNKNOWN</br>2020-08-26 15:54:32,089 WARN (RepNode 10.81.85.89_9213_1597652404352(-1)|61) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: MASTER</br>2020-08-26 15:54:35,121 WARN (stateListener|73) [Catalog.replayJournal():2510] replay journal cost too much time: 2975 replayedJournalId: 232383</br>2020-08-26 15:54:48,117 WARN (leaderCheckpointer|75) [Catalog.replayJournal():2510] replay journal cost too much time: 2812 replayedJournalId: 232383</br></pre>",\n            "showingLast": "603 bytes of log"\n        },\n        "LogConfiguration": {\n            "VerboseNames": "org",\n            "AuditNames": "slow_query,query",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}  \n')),(0,a.yg)("p",null,"\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"data.LogContents.log")," \u8868\u793a\u6700\u65b0\u4e00\u90e8\u5206 ",(0,a.yg)("inlineCode",{parentName:"p"},"fe.warn.log")," \u4e2d\u7684\u65e5\u5fd7\u5185\u5bb9\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'POST /rest/v1/log?add_verbose=org\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org",\n            "AuditNames": "slow_query,query",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}\n')))}g.isMDXComponent=!0}}]);