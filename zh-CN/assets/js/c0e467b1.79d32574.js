"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[724579],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=o(t),c=r,m=y["".concat(s,".").concat(c)]||y[c]||g[c]||l;return t?a.createElement(m,p(p({ref:n},u),{},{components:t})):a.createElement(m,p({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[y]="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},317658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=t(58168),r=(t(296540),t(15680));const l={title:"\u5206\u6790 S3/HDFS \u4e0a\u7684\u6587\u4ef6",language:"zh-CN"},p=void 0,i={unversionedId:"lakehouse/file",id:"version-2.1/lakehouse/file",title:"\u5206\u6790 S3/HDFS \u4e0a\u7684\u6587\u4ef6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/file.md",sourceDirName:"lakehouse",slug:"/lakehouse/file",permalink:"/zh-CN/docs/2.1/lakehouse/file",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5206\u6790 S3/HDFS \u4e0a\u7684\u6587\u4ef6",language:"zh-CN"},sidebar:"docs",previous:{title:"\u963f\u91cc\u4e91 Max Compute",permalink:"/zh-CN/docs/2.1/lakehouse/database/max-compute"},next:{title:"\u6587\u4ef6\u7f13\u5b58",permalink:"/zh-CN/docs/2.1/lakehouse/filecache"}},s={},o=[{value:"\u81ea\u52a8\u63a8\u65ad\u6587\u4ef6\u5217\u7c7b\u578b",id:"\u81ea\u52a8\u63a8\u65ad\u6587\u4ef6\u5217\u7c7b\u578b",level:2},{value:"\u67e5\u8be2\u5206\u6790",id:"\u67e5\u8be2\u5206\u6790",level:2},{value:"\u6570\u636e\u5bfc\u5165",id:"\u6570\u636e\u5bfc\u5165",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:o},y="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u901a\u8fc7 Table Value Function \u529f\u80fd\uff0cDoris \u53ef\u4ee5\u76f4\u63a5\u5c06\u5bf9\u8c61\u5b58\u50a8\u6216 HDFS \u4e0a\u7684\u6587\u4ef6\u4f5c\u4e3a Table \u8fdb\u884c\u67e5\u8be2\u5206\u6790\u3002\u5e76\u4e14\u652f\u6301\u81ea\u52a8\u7684\u5217\u7c7b\u578b\u63a8\u65ad\u3002"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u65b9\u5f0f")),(0,r.yg)("p",{parentName:"admonition"},"\u66f4\u591a\u4f7f\u7528\u65b9\u5f0f\u53ef\u53c2\u9605 Table Value Function \u6587\u6863\uff1a"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/s3"},"S3"),"\uff1a\u652f\u6301 S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u4e0a\u7684\u6587\u4ef6\u5206\u6790\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/hdfs"},"HDFS"),"\uff1a\u652f\u6301 HDFS \u4e0a\u7684\u6587\u4ef6\u5206\u6790\u3002")))),(0,r.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7 S3 Table Value Function \u4e3e\u4f8b\u8bf4\u660e\u5982\u4f55\u8fdb\u884c\u6587\u4ef6\u5206\u6790\u3002"),(0,r.yg)("h2",{id:"\u81ea\u52a8\u63a8\u65ad\u6587\u4ef6\u5217\u7c7b\u578b"},"\u81ea\u52a8\u63a8\u65ad\u6587\u4ef6\u5217\u7c7b\u578b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'> DESC FUNCTION s3 (\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true"\n);\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n')),(0,r.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a S3 Table Value Function\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true")\n')),(0,r.yg)("p",null,"\u5176\u4e2d\u6307\u5b9a\u4e86\u6587\u4ef6\u7684\u8def\u5f84\u3001\u8fde\u63a5\u4fe1\u606f\u3001\u8ba4\u8bc1\u4fe1\u606f\u7b49\u3002"),(0,r.yg)("p",null,"\u4e4b\u540e\uff0c\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"DESC FUNCTION")," \u8bed\u6cd5\u53ef\u4ee5\u67e5\u770b\u8fd9\u4e2a\u6587\u4ef6\u7684 Schema\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5bf9\u4e8e Parquet \u6587\u4ef6\uff0cDoris \u4f1a\u6839\u636e\u6587\u4ef6\u5185\u7684\u5143\u4fe1\u606f\u81ea\u52a8\u63a8\u65ad\u5217\u7c7b\u578b\u3002"),(0,r.yg)("p",null,"\u76ee\u524d\u652f\u6301\u5bf9 Parquet\u3001ORC\u3001CSV\u3001JSON \u683c\u5f0f\u8fdb\u884c\u5206\u6790\u548c\u5217\u7c7b\u578b\u63a8\u65ad\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"CSV Schema")),(0,r.yg)("p",null,"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9 CSV \u683c\u5f0f\u6587\u4ef6\uff0c\u6240\u6709\u5217\u7c7b\u578b\u5747\u4e3a String\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"csv_schema")," \u5c5e\u6027\u5355\u72ec\u6307\u5b9a\u5217\u540d\u548c\u5217\u7c7b\u578b\u3002Doris \u4f1a\u4f7f\u7528\u6307\u5b9a\u7684\u5217\u7c7b\u578b\u8fdb\u884c\u6587\u4ef6\u8bfb\u53d6\u3002\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"name1:type1;name2:type2;...")),(0,r.yg)("p",null,"\u5bf9\u4e8e\u683c\u5f0f\u4e0d\u5339\u914d\u7684\u5217\uff08\u6bd4\u5982\u6587\u4ef6\u4e2d\u4e3a\u5b57\u7b26\u4e32\uff0c\u7528\u6237\u5b9a\u4e49\u4e3a int\uff09\uff0c\u6216\u7f3a\u5931\u5217\uff08\u6bd4\u5982\u6587\u4ef6\u4e2d\u6709 4 \u5217\uff0c\u7528\u6237\u5b9a\u4e49\u4e86 5 \u5217\uff09\uff0c\u5219\u8fd9\u4e9b\u5217\u5c06\u8fd4\u56de null\u3002"),(0,r.yg)("p",null,"\u5f53\u524d\u652f\u6301\u7684\u5217\u7c7b\u578b\u4e3a\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6620\u5c04\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeint"),(0,r.yg)("td",{parentName:"tr",align:null},"largeint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"decimalv3(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"datev2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"varchar"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")))),(0,r.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'s3 (\n    "URI" = "https://bucket1/inventory.dat",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "column_separator" = "|",\n    "csv_schema" = "k1:int;k2:int;k3:int;k4:decimal(38,10)",\n    "use_path_style"="true"\n)\n')),(0,r.yg)("h2",{id:"\u67e5\u8be2\u5206\u6790"},"\u67e5\u8be2\u5206\u6790"),(0,r.yg)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7684 SQL \u8bed\u53e5\u5bf9\u8fd9\u4e2a\u6587\u4ef6\u8fdb\u884c\u5206\u6790"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true")\nLIMIT 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,r.yg)("p",null,"Table Value Function \u53ef\u4ee5\u51fa\u73b0\u5728 SQL \u4e2d\uff0cTable \u80fd\u51fa\u73b0\u7684\u4efb\u610f\u4f4d\u7f6e\u3002\u5982 CTE \u7684 WITH \u5b50\u53e5\u4e2d\uff0cFROM \u5b50\u53e5\u4e2d\u3002"),(0,r.yg)("p",null,"\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u628a\u6587\u4ef6\u5f53\u505a\u4e00\u5f20\u666e\u901a\u7684\u8868\u8fdb\u884c\u4efb\u610f\u5206\u6790\u3002"),(0,r.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u7528\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE VIEW")," \u8bed\u53e5\u4e3a Table Value Function \u521b\u5efa\u4e00\u4e2a\u903b\u8f91\u89c6\u56fe\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u60f3\u5176\u4ed6\u89c6\u56fe\u4e00\u6837\uff0c\u5bf9\u8fd9\u4e2a Table Value Function \u8fdb\u884c\u8bbf\u95ee\u3001\u6743\u9650\u7ba1\u7406\u7b49\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u8ba9\u5176\u4ed6\u7528\u6237\u8bbf\u95ee\u8fd9\u4e2a Table Value Function\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW v1 AS \nSELECT * FROM s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true");\n\nDESC v1;\n\nSELECT * FROM v1;\n\nGRANT SELECT_PRIV ON db1.v1 TO user1;\n')),(0,r.yg)("h2",{id:"\u6570\u636e\u5bfc\u5165"},"\u6570\u636e\u5bfc\u5165"),(0,r.yg)("p",null,"\u914d\u5408 ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT")," \u8bed\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u65b9\u4fbf\u5c06\u6587\u4ef6\u5bfc\u5165\u5230 Doris \u8868\u4e2d\u8fdb\u884c\u66f4\u5feb\u901f\u7684\u5206\u6790\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'// 1. \u521b\u5efadoris\u5185\u90e8\u8868\nCREATE TABLE IF NOT EXISTS test_table\n(\n    id int,\n    name varchar(50),\n    age int\n)\nDISTRIBUTED BY HASH(id) BUCKETS 4\nPROPERTIES("replication_num" = "1");\n\n// 2. \u4f7f\u7528 S3 Table Value Function \u63d2\u5165\u6570\u636e\nINSERT INTO test_table (id,name,age)\nSELECT cast(id as INT) as id, name, cast (age as INT) as age\nFROM s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style" = "true");\n')),(0,r.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"p"},"S3 / hdfs")," tvf \u6307\u5b9a\u7684 uri \u5339\u914d\u4e0d\u5230\u6587\u4ef6\uff0c\u6216\u8005\u5339\u914d\u5230\u7684\u6240\u6709\u6587\u4ef6\u90fd\u662f\u7a7a\u6587\u4ef6\uff0c\u90a3\u4e48 ",(0,r.yg)("inlineCode",{parentName:"p"},"S3 / hdfs")," tvf \u5c06\u4f1a\u8fd4\u56de\u7a7a\u7ed3\u679c\u96c6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"DESC FUNCTION"),"\u67e5\u770b\u8fd9\u4e2a\u6587\u4ef6\u7684 Schema\uff0c\u4f1a\u5f97\u5230\u4e00\u5217\u865a\u5047\u7684\u5217",(0,r.yg)("inlineCode",{parentName:"p"},"__dummy_col"),"\uff0c\u53ef\u5ffd\u7565\u8fd9\u4e00\u5217\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u6307\u5b9a tvf \u7684 format \u4e3a csv\uff0c\u6240\u8bfb\u6587\u4ef6\u4e0d\u4e3a\u7a7a\u6587\u4ef6\u4f46\u6587\u4ef6\u7b2c\u4e00\u884c\u4e3a\u7a7a\uff0c\u5219\u4f1a\u63d0\u793a\u9519\u8bef",(0,r.yg)("inlineCode",{parentName:"p"},"The first line is empty, can not parse column numbers"),", \u8fd9\u56e0\u4e3a\u65e0\u6cd5\u901a\u8fc7\u8be5\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u89e3\u6790\u51fa schema\u3002"))))}g.isMDXComponent=!0}}]);