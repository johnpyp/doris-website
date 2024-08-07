"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32393],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},203818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"View",language:"en"},l=void 0,o={unversionedId:"query/view-materialized-view/create-view",id:"version-3.0/query/view-materialized-view/create-view",title:"View",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query/view-materialized-view/create-view.md",sourceDirName:"query/view-materialized-view",slug:"/query/view-materialized-view/create-view",permalink:"/docs/query/view-materialized-view/create-view",draft:!1,tags:[],version:"3.0",frontMatter:{title:"View",language:"en"},sidebar:"docs",previous:{title:"SQL Cache",permalink:"/docs/query/query-cache/sql-cache-manual"},next:{title:"Materialized View",permalink:"/docs/query/view-materialized-view/materialized-view"}},s={},c=[{value:"View",id:"view",level:2},{value:"Creating View",id:"creating-view",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"view"},"View"),(0,a.yg)("p",null,"Views (logical views) are stored queries that encapsulate one or multiple SELECT statements. Views dynamically access and compute database data when executed. Views are read-only and can reference any combination of tables and other views."),(0,a.yg)("p",null,"Views can be used for the following purposes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"To simplify access or provide secure access by hiding complex SELECT statements from users. For example, you can create a view that displays only the data users need from various tables while hiding sensitive data in those tables."),(0,a.yg)("li",{parentName:"ul"},"To encapsulate details of table structures that may change over time behind a consistent user interface.")),(0,a.yg)("p",null,"Unlike materialized views, logical views are not materialized, which means they do not store data on disk. Therefore, they have the following limitations:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When the underlying table data changes, Doris does not need to refresh the view data. However, accessing and computing data through views can incur some overhead."),(0,a.yg)("li",{parentName:"ul"},"Views do not support insert, delete, or update operations.")),(0,a.yg)("h2",{id:"creating-view"},"Creating View"),(0,a.yg)("p",null,"The syntax for creating a logical view is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n')),(0,a.yg)("p",null,"Explanation:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Views are logical and have no physical storage. All queries on views are equivalent to queries on the corresponding subquery of the view."),(0,a.yg)("li",{parentName:"ul"},"query_stmt is any supported SQL statement.")),(0,a.yg)("p",null,"Example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Creating a view named ",(0,a.yg)("inlineCode",{parentName:"li"},"example_view")," in the ",(0,a.yg)("inlineCode",{parentName:"li"},"example_db")," database:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Creating a view with comments:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n')))}d.isMDXComponent=!0}}]);