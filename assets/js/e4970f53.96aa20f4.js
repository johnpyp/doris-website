"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[453006],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,y=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},980715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(58168),a=(n(296540),n(15680));const i={title:"Sort Key and Prefix Index",language:"en"},l=void 0,o={unversionedId:"table-design/index/prefix-index",id:"version-3.0/table-design/index/prefix-index",title:"Sort Key and Prefix Index",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/table-design/index/prefix-index.md",sourceDirName:"table-design/index",slug:"/table-design/index/prefix-index",permalink:"/docs/table-design/index/prefix-index",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Sort Key and Prefix Index",language:"en"},sidebar:"docs",previous:{title:"Index Overview",permalink:"/docs/table-design/index/index-overview"},next:{title:"Inverted Index",permalink:"/docs/table-design/index/inverted-index"}},s={},d=[{value:"Index Principles",id:"index-principles",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example Usage",id:"example-usage",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"index-principles"},"Index Principles"),(0,a.yg)("p",null,"Doris stores data in a structure similar to SSTable (Sorted String Table). This structure is an ordered data structure that can be sorted and stored according to one or more specified columns. In such a data structure, looking up conditions on all or part of the sorted columns is highly efficient."),(0,a.yg)("p",null,"In the Aggregate, Unique, and Duplicate data models, the underlying data storage is sorted according to the columns specified in the CREATE TABLE statement under AGGREGATE KEY, UNIQUE KEY, and DUPLICATE KEY respectively. These keys are referred to as sort keys. With sort keys, Doris can quickly locate the required data without scanning the entire table by specifying conditions on the sorted columns during a query, thereby reducing search complexity and speeding up the query."),(0,a.yg)("p",null,"Based on the sort keys, Doris introduces a prefix index. The prefix index is a sparse index. The data in the table forms a logical data block (Data Block) according to the corresponding number of rows. Each logical data block stores an index entry in the prefix index table, where the length of the index entry does not exceed 36 bytes. The entry content is the prefix composed of the sorted columns of the first row in the data block. When looking up the prefix index table, it helps determine the starting row number of the logical data block where the row data is located. Because the prefix index is relatively small, it can be fully cached in memory, allowing for quick data block location and significantly improving query efficiency."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The first 36 bytes of a row in a data block are used as the prefix index for that row. When encountering a VARCHAR type, the prefix index is directly truncated. If the first column is VARCHAR, even if it does not reach 36 bytes, it will be directly truncated, and the subsequent columns will not be included in the prefix index.")),(0,a.yg)("h2",{id:"use-cases"},"Use Cases"),(0,a.yg)("p",null,"Prefix indexes can speed up equality queries and range queries."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Since the KEY definition of a table is unique, a table can only have one type of prefix index. For queries using other columns that cannot hit the prefix index as conditions, the efficiency might not meet the requirements. There are two solutions:"),(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},"Create an inverted index on the columns that require accelerated queries, as a table can have many inverted indexes."),(0,a.yg)("li",{parentName:"ol"},"For DUPLICATE tables, multi-prefix indexes can be indirectly achieved by creating corresponding strongly consistent materialized views with adjusted column orders. For more details, refer to query acceleration/materialized views."))),(0,a.yg)("h2",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"There is no specific syntax for defining a prefix index. When creating a table, the first 36 bytes of the table's KEY are automatically taken as the prefix index."),(0,a.yg)("h2",{id:"example-usage"},"Example Usage"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Suppose the sorted columns of a table are as follows, then the prefix index would be: user_id (8 Bytes) + age (4 Bytes) + message (prefix 20 Bytes).")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"user_id"),(0,a.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"age"),(0,a.yg)("td",{parentName:"tr",align:null},"INT")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"message"),(0,a.yg)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,a.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,a.yg)("td",{parentName:"tr",align:null},"DATETIME")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Suppose the sorted columns of a table are as follows, then the prefix index would be user_name (20 Bytes). Even if it does not reach 36 bytes, it is directly truncated due to encountering VARCHAR, and subsequent columns are not included.")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"user_name"),(0,a.yg)("td",{parentName:"tr",align:null},"VARCHAR(20)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"age"),(0,a.yg)("td",{parentName:"tr",align:null},"INT")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"message"),(0,a.yg)("td",{parentName:"tr",align:null},"VARCHAR(100)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max_dwell_time"),(0,a.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"min_dwell_time"),(0,a.yg)("td",{parentName:"tr",align:null},"DATETIME")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When our query condition is the prefix of the prefix index, it can significantly speed up the query. For example, in the first example, executing the following query:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE user_id = 1829239 AND age = 20;\n")),(0,a.yg)("p",null,"This query will be much more efficient than the following query:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table WHERE age = 20;\n")),(0,a.yg)("p",null,"Therefore, choosing the correct column order when creating a table can greatly improve query efficiency."))}p.isMDXComponent=!0}}]);