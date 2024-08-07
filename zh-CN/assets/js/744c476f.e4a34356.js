"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[669850],{15680:(e,n,t)=>{t.d(n,{xA:()=>N,yg:()=>f});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},N=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,N=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,f=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return t?a.createElement(f,s(s({ref:n},N),{},{components:t})):a.createElement(f,s({ref:n},N))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},126180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(296540),t(15680));const o={title:"BACKENDS",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/table-functions/backends",id:"sql-manual/sql-functions/table-functions/backends",title:"BACKENDS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/backends.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/backends",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/backends",draft:!1,tags:[],version:"current",frontMatter:{title:"BACKENDS",language:"zh-CN"},sidebar:"docs",previous:{title:"ICEBERG_META",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/iceberg-meta"},next:{title:"FRONTENDS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/frontends"}},i={},c=[{value:"<code>backends</code>",id:"backends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],N={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"backends"},(0,r.yg)("inlineCode",{parentName:"h2"},"backends")),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"backends"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210 backends \u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d doris \u96c6\u7fa4\u4e2d\u7684 BE \u8282\u70b9\u4fe1\u606f\u3002"),(0,r.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8e from \u5b50\u53e5\u4e2d\u3002"),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"backends()")),(0,r.yg)("p",null,"backends() \u8868\u7ed3\u6784\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> desc function backends();\n+-------------------------+---------+------+-------+---------+-------+\n| Field                   | Type    | Null | Key   | Default | Extra |\n+-------------------------+---------+------+-------+---------+-------+\n| BackendId               | BIGINT  | No   | false | NULL    | NONE  |\n| Host                    | TEXT    | No   | false | NULL    | NONE  |\n| HeartbeatPort           | INT     | No   | false | NULL    | NONE  |\n| BePort                  | INT     | No   | false | NULL    | NONE  |\n| HttpPort                | INT     | No   | false | NULL    | NONE  |\n| BrpcPort                | INT     | No   | false | NULL    | NONE  |\n| LastStartTime           | TEXT    | No   | false | NULL    | NONE  |\n| LastHeartbeat           | TEXT    | No   | false | NULL    | NONE  |\n| Alive                   | BOOLEAN | No   | false | NULL    | NONE  |\n| SystemDecommissioned    | BOOLEAN | No   | false | NULL    | NONE  |\n| TabletNum               | BIGINT  | No   | false | NULL    | NONE  |\n| DataUsedCapacity        | BIGINT  | No   | false | NULL    | NONE  |\n| AvailCapacity           | BIGINT  | No   | false | NULL    | NONE  |\n| TotalCapacity           | BIGINT  | No   | false | NULL    | NONE  |\n| UsedPct                 | DOUBLE  | No   | false | NULL    | NONE  |\n| MaxDiskUsedPct          | DOUBLE  | No   | false | NULL    | NONE  |\n| RemoteUsedCapacity      | BIGINT  | No   | false | NULL    | NONE  |\n| Tag                     | TEXT    | No   | false | NULL    | NONE  |\n| ErrMsg                  | TEXT    | No   | false | NULL    | NONE  |\n| Version                 | TEXT    | No   | false | NULL    | NONE  |\n| Status                  | TEXT    | No   | false | NULL    | NONE  |\n| HeartbeatFailureCounter | INT     | No   | false | NULL    | NONE  |\n| NodeRole                | TEXT    | No   | false | NULL    | NONE  |\n+-------------------------+---------+------+-------+---------+-------+\n23 rows in set (0.002 sec)\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"backends()")," tvf \u5c55\u793a\u51fa\u6765\u7684\u4fe1\u606f\u57fa\u672c\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"show backends")," \u8bed\u53e5\u5c55\u793a\u51fa\u7684\u4fe1\u606f\u4e00\u81f4\uff0c\u4f46\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"backends()")," tvf \u7684\u5404\u4e2a\u5b57\u6bb5\u7c7b\u578b\u66f4\u52a0\u660e\u786e\uff0c\u4e14\u53ef\u4ee5\u5229\u7528 tvf \u751f\u6210\u7684\u8868\u53bb\u505a\u8fc7\u6ee4\u3001join \u7b49\u64cd\u4f5c\u3002"),(0,r.yg)("p",null,"\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"p"},"backends()")," tvf \u4fe1\u606f\u5c55\u793a\u8fdb\u884c\u4e86\u9274\u6743\uff0c\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"show backends")," \u884c\u4e3a\u4fdd\u6301\u4e00\u81f4\uff0c\u8981\u6c42\u7528\u6237\u5177\u6709 ADMIN/OPERATOR \u6743\u9650\u3002"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'mysql> select * from backends()\\G\n*************************** 1. row ***************************\n              BackendId: 10002\n                   Host: 10.xx.xx.90\n          HeartbeatPort: 9053\n                 BePort: 9063\n               HttpPort: 8043\n               BrpcPort: 8069\n          LastStartTime: 2023-06-15 16:51:02\n          LastHeartbeat: 2023-06-15 17:09:58\n                  Alive: 1\n   SystemDecommissioned: 0\n              TabletNum: 21\n       DataUsedCapacity: 0\n          AvailCapacity: 5187141550081\n          TotalCapacity: 7750977622016\n                UsedPct: 33.077583202570978\n         MaxDiskUsedPct: 33.077583202583881\n     RemoteUsedCapacity: 0\n                    Tag: {"location" : "default"}\n                 ErrMsg: \n                Version: doris-0.0.0-trunk-4b18cde0c7\n                 Status: {"lastSuccessReportTabletsTime":"2023-06-15 17:09:02","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n1 row in set (0.038 sec)\n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"backends\n")))}u.isMDXComponent=!0}}]);