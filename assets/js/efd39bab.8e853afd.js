"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98869],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(y,p(p({ref:t},c),{},{components:a})):n.createElement(y,p({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},641228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const i={title:"Show Table Data Action",language:"en"},p=void 0,l={unversionedId:"admin-manual/fe/show-table-data-action",id:"version-2.1/admin-manual/fe/show-table-data-action",title:"Show Table Data Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/fe/show-table-data-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/show-table-data-action",permalink:"/docs/2.1/admin-manual/fe/show-table-data-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Show Table Data Action",language:"en"},sidebar:"docs",previous:{title:"Show Runtime Info Action",permalink:"/docs/2.1/admin-manual/fe/show-runtime-info-action"},next:{title:"Statement Execution Action",permalink:"/docs/2.1/admin-manual/fe/statement-execution-action"}},o={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"show-table-data-action"},"Show Table Data Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/show_table_data")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to get the data size of all tables in all databases under all internal catalog, or the data size of the specified database or table. Unit byte."),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"NULL"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"db")),(0,r.yg)("p",{parentName:"li"},"  Optional. If specified, get the data size of the tables under the specified database.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"table")),(0,r.yg)("p",{parentName:"li"},"  Optional. If specified, get the data size of the specified table.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"single_replica")),(0,r.yg)("p",{parentName:"li"},"  Optional. If specified, get the data size of the single replica of the table."))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"NULL"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The data size of all tables in the specified database."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244,\n            "revenue0":0,\n            "customer":1906421482\n        }\n    },\n    "count":0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The data size of the specified table of the specified db."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244\n        }\n    },\n    "count":0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The data size of the single replica of the specified table of the specified db."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":3008182748\n        }\n    },\n    "count":0\n}\n')))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The data size of all tables in the specified database."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244,\n            "revenue0":0,\n            "customer":1906421482\n        }\n    },\n    "count":0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The data size of the specified table of the specified db."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch&table=partsupp\n    \nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244\n        }\n    },\n    "count":0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The data size of the single replica of the specified table of the specified db."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch&table=partsupp&single_replica=true\n    \nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":3008182748\n        }\n    },\n    "count":0\n}\n')))))}u.isMDXComponent=!0}}]);