"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[268960],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=g(a),y=r,m=u["".concat(s,".").concat(y)]||u[y]||p[y]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},583137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const l={title:"Data Types",language:"en"},i=void 0,o={unversionedId:"table-design/data-type",id:"table-design/data-type",title:"Data Types",description:"\x3c!--",source:"@site/docs/table-design/data-type.md",sourceDirName:"table-design",slug:"/table-design/data-type",permalink:"/docs/dev/table-design/data-type",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Types",language:"en"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/dev/table-design/overview"},next:{title:"Index Overview",permalink:"/docs/dev/table-design/index/index-overview"}},s={},g=[],d={toc:g},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache Doris support standard SQL syntax, using MySQL Network Connection Protocol, highly compatible with MySQL syntax protocol. Therefore, in terms of data type support, Apache Doris aligns as closely as possible with MySQL-related data types"),(0,r.yg)("p",null,"The list of data types supported by Doris is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type name"),(0,r.yg)("th",{parentName:"tr",align:null},"Storeage (bytes)"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean data type hat stores only two types of values , 0 represents false, 1 represents true.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, signed range is from -128 to 127.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, signed range is from -32768, 32767.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, signed range from -2147483648 to 2147483647.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, signed range from -9223372036854775808 to 9223372036854775807.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer value, range ","[-2 ^ 127 + 1~ 2 ^ 127 - 1]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Single precision, a floating ponit number, range ","[-3.4 ",(0,r.yg)("em",{parentName:"td"}," 10 ^ 38~ 3.4 ")," 10 ^ 38]",".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Double precision, a floating ponit number, range ","[-1.79 ",(0,r.yg)("em",{parentName:"td"}," 10 ^ 308~ 1.79 ")," 10 ^ 308]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"4/8/16"),(0,r.yg)("td",{parentName:"tr",align:null},"An exact fixed-point number, defined by its precision (total number of digits) and scale (number of digits to the right of the decimal point).    Format:DECIMAL(M","[,D]","), M stands for precision, D stands scale.  The range for the significant digits M is ","[1, 38]",", while the range for the decimal digits D is ","[0, precision]",". The storage requirements for different precision values are as follows:  - When 0 < precision <= 9, it occupies 4 bytes. - When 9 < precision <= 18, it occupies 8 bytes. - When 16 < precision <=38, it occupies 16 bytes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE holds values for a calendar year, month and day, the  supported range is ","['0000-01-01', '9999-12-31']",".  Default print format: 'yyyy-MM-dd'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"A DATE and TIME combination  Format: DATETIME (","[P]",").   The optional parameter P represents time precision, with a value range of ","[0,6]",", supporting up to 6 decimal places (microseconds). When not set, it is 0.   The supported range is ['0000-01-01 00:00:00 ","[.000000]","', '9999-12-31 23:59:59 ","[.999999]","'].   Default print format: 'yyy-MM-dd HH: mm: ss. SSSSSS '.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null},"A FIXED length string, the parameter M specifies the column length in characters. The range of M is from 1 to 255.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"A VARIABLE length string , the parameter M specifies the maximum string length in characters. The range of M is from 1 to 65533.   The variable-length string is stored in UTF-8 encoding. English characters occupy 1 byte, and Chinese characters occupy 3 bytes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"A VARIABLE length string, default supports 1048576 bytes (1 MB), and a limit of maximum precision of 2147483643 bytes (2 GB).   Size can be configured string_type_length_soft_limit_bytes adjusted through BE.   String type can only be used in value column, not in key column and partition bucket column.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"Arrays composed of elements of type T cannot be used as key columns. Currently supported for use in tables with Duplicate and Unique models.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"Maps consisting of elements of type K and V, cannot be used as Key columns. These maps are currently supported in tables using the Duplicate and Unique models.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"A structure composed of multiple Fields can also be understood as a collection of multiple columns. It cannot be used as a Key. Currently, STRUCT can only be used in tables of Duplicate models. The name and number of Fields in a Struct are fixed and are always Nullable.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JSON"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"Binary JSON type, stored in binary JSON format, access internal JSON fields through JSON function.   Supported up to 1048576 bytes (1MB) by default, and can be adjusted to a maximum of 2147483643 bytes (2GB). This limit can be modified through the BE configuration parameter 'jsonb_type_length_soft_limit_bytes'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARIANT"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"The VARIANT data type is dynamically adaptable, specifically designed for semi-structured data like JSON. It can store any JSON object and automatically splits JSON fields into subcolumns for improved storage efficiency and query performance. The length limits and configuration methods are the same as for the STRING type. However, the VARIANT type can only be used in value columns and cannot be used in key columns or partition / bucket columns.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"HLL"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"HLL stands for HyperLogLog, is a fuzzy deduplication. It performs better than Count Distinct when dealing with large datasets.   The error rate of HLL is typically around 1%, and sometimes it can reach 2%. HLL cannot be used as a key column, and the aggregation type is HLL_UNION when creating a table.  Users do not need to specify the length or default value as it is internally controlled based on the aggregation level of the data.  HLL columns can only be queried or used through the companion functions such as hll_union_agg, hll_raw_agg, hll_cardinality, and hll_hash.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BITMAP"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"BITMAP type can be used in Aggregate tables, Unique tables or Duplicate tables.  - When used in a Unique table or a Duplicate table, BITMAP must be employed as non-key columns.  - When used in an Aggregate table, BITMAP must also serve as non-key columns, and the aggregation type must be set to BITMAP_UNION during table creation.  Users do not need to specify the length or default value as it is internally controlled based on the aggregation level of the data. BITMAP columns can only be queried or used through the companion functions such as bitmap_union_count, bitmap_union, bitmap_hash, and bitmap_hash64.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"QUANTILE_STATE"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"A type used to calculate approximate quantile values.  When loading, it performs pre-aggregation for the same keys with different values. When the number of values does not exceed 2048, it records all data in detail. When the number of values is greater than 2048, it employs the TDigest algorithm to aggregate (cluster) the data and store the centroid points after clustering.   QUANTILE_STATE cannot be used as a key column and should be paired with the aggregation type QUANTILE_UNION when creating a table. Users do not need to specify the length or default value as it is internally controlled based on the aggregation level of the data.   QUANTILE_STATE columns can only be queried or used through the companion functions such as QUANTILE_PERCENT, QUANTILE_UNION, and TO_QUANTILE_STATE.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AGG_STATE"),(0,r.yg)("td",{parentName:"tr",align:null},"Variable Length"),(0,r.yg)("td",{parentName:"tr",align:null},"Aggregate function can only be used with state/merge/union function combiners.   AGG_STATE cannot be used as a key column. When creating a table, the signature of the aggregate function needs to be declared alongside.   Users do not need to specify the length or default value. The actual data storage size depends on the function's implementation.")))),(0,r.yg)("p",null,"You can also view all the data types supported by Doris with the ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW DATA TYPES; "),"statement."))}p.isMDXComponent=!0}}]);