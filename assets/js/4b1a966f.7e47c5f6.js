"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[467318],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,m=u["".concat(i,".").concat(y)]||u[y]||d[y]||l;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},514973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(296540),t(15680));const l={title:"STRUCT",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Types/STRUCT",id:"version-2.0/sql-manual/sql-reference/Data-Types/STRUCT",title:"STRUCT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Types/STRUCT.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/STRUCT",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Types/STRUCT",draft:!1,tags:[],version:"2.0",frontMatter:{title:"STRUCT",language:"en"},sidebar:"docs",previous:{title:"MAP",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Types/MAP"},next:{title:"JSON",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Types/JSON"}},i={},p=[{value:"STRUCT",id:"struct",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"struct"},"STRUCT"),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("p",null,"STRUCT"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"STRUCT<field_name:field_type [COMMENT 'comment_string'], ... >")),(0,a.yg)("p",null,"Represents value with structure described by multiple fields, which can be viewed as a collection of multiple columns."),(0,a.yg)("p",null,"Need to manually enable the support, it is disabled by default."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'admin set frontend config("enable_struct_type" = "true");\n')),(0,a.yg)("p",null,"It cannot be used as a Key column. Now STRUCT can only used in Duplicate Model Tables."),(0,a.yg)("p",null,"The names and number of Fields in a Struct is fixed and always Nullable, and a Field typically consists of the following parts."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"field_name: Identifier naming the field, non repeatable."),(0,a.yg)("li",{parentName:"ul"},"field_type: A data type."),(0,a.yg)("li",{parentName:"ul"},"COMMENT: An optional string describing the field. (currently not supported)")),(0,a.yg)("p",null,"The currently supported types are:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,a.yg)("p",null,"We have a todo list for future version:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TODO:\u652f\u6301\u5d4c\u5957 STRUCT \u6216\u5176\u4ed6\u7684\u590d\u6742\u7c7b\u578b\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"Create table example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> CREATE TABLE `struct_test` (\n  `id` int(11) NULL,\n  `s_info` STRUCT<s_id:int(11), s_name:string, s_address:string> NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false"\n);\n')),(0,a.yg)("p",null,"Insert data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"INSERT INTO `struct_test` VALUES (1, {1, 'sn1', 'sa1'});\nINSERT INTO `struct_test` VALUES (2, struct(2, 'sn2', 'sa2'));\nINSERT INTO `struct_test` VALUES (3, named_struct('s_id', 3, 's_name', 'sn3', 's_address', 'sa3'));\n")),(0,a.yg)("p",null,"Stream load:"),(0,a.yg)("p",null,"test.csv\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1|{"s_id":1, "s_name":"sn1", "s_address":"sa1"}\n2|{s_id:2, s_name:sn2, s_address:sa2}\n3|{"s_address":"sa3", "s_name":"sn3", "s_id":3}\n')),(0,a.yg)("p",null,"exmaple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl --location-trusted -u root -T test.csv  -H "label:test_label" http://host:port/api/test/struct_test/_stream_load\n')),(0,a.yg)("p",null,"Select data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select * from struct_test;\n+------+-------------------+\n| id   | s_info            |\n+------+-------------------+\n|    1 | {1, 'sn1', 'sa1'} |\n|    2 | {2, 'sn2', 'sa2'} |\n|    3 | {3, 'sn3', 'sa3'} |\n+------+-------------------+\n3 rows in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STRUCT\n")))}d.isMDXComponent=!0}}]);