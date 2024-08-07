"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[452984],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},560855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(58168),l=(t(296540),t(15680));const r={title:"DELETE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE",id:"version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE",title:"DELETE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"DELETE",language:"zh-CN"},sidebar:"docs",previous:{title:"SELECT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/SELECT"},next:{title:"UPDATE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE"}},p={},s=[{value:"DELETE",id:"delete",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"delete"},"DELETE"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"DELETE"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6309\u6761\u4ef6\u5220\u9664\u6307\u5b9a table\uff08base index\uff09 partition \u4e2d\u7684\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u8be5\u64cd\u4f5c\u4f1a\u540c\u65f6\u5220\u9664\u548c\u6b64 base index \u76f8\u5173\u7684 rollup index \u7684\u6570\u636e\u3002"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,"\u8bed\u6cd5\u4e00\uff1a\u8be5\u8bed\u6cd5\u53ea\u80fd\u6307\u5b9a\u8fc7\u6ee4\u8c13\u8bcd"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"DELETE FROM table_name [table_alias] [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\nWHERE\ncolumn_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n")),(0,l.yg)("p",null,"\u8bed\u6cd5\u4e8c\uff1a\u8be5\u8bed\u6cd5\u53ea\u80fd\u5728UNIQUE KEY\u6a21\u578b\u8868\u4e0a\u4f7f\u7528"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"[cte]\nDELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n")),(0,l.yg)("h4",{id:"required-parameters"},"Required Parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"table_name: \u6307\u5b9a\u9700\u8981\u5220\u9664\u6570\u636e\u7684\u8868"),(0,l.yg)("li",{parentName:"ul"},"column_name: \u5c5e\u4e8etable_name\u7684\u5217"),(0,l.yg)("li",{parentName:"ul"},"op: \u903b\u8f91\u6bd4\u8f83\u64cd\u4f5c\u7b26\uff0c\u53ef\u9009\u7c7b\u578b\u5305\u62ec\uff1a=, >, <, >=, <=, !=, in, not in"),(0,l.yg)("li",{parentName:"ul"},"value | value_list: \u505a\u903b\u8f91\u6bd4\u8f83\u7684\u503c\u6216\u503c\u5217\u8868"),(0,l.yg)("li",{parentName:"ul"},"WHERE condition: \u6307\u5b9a\u4e00\u4e2a\u7528\u4e8e\u9009\u62e9\u5220\u9664\u884c\u7684\u6761\u4ef6")),(0,l.yg)("h4",{id:"optional-parameters"},"Optional Parameters"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"cte: \u901a\u7528\u8868\u8fbe\u5f0f\u3002\u53ef\u4ee5\u662f 'WITH a AS SELECT * FROM tbl' \u5f62\u5f0f"),(0,l.yg)("li",{parentName:"ul"},"PARTITION partition_name | PARTITIONS (partition_name ","[, partition_name]","): \u6307\u5b9a\u6267\u884c\u5220\u9664\u6570\u636e\u7684\u5206\u533a\u540d\uff0c\u5982\u679c\u8868\u4e0d\u5b58\u5728\u6b64\u5206\u533a\uff0c\u5219\u62a5\u9519"),(0,l.yg)("li",{parentName:"ul"},"table_alias: \u8868\u7684\u522b\u540d"),(0,l.yg)("li",{parentName:"ul"},"USING additional_tables: \u5982\u679c\u9700\u8981\u5728WHERE\u8bed\u53e5\u4e2d\u4f7f\u7528\u5176\u4ed6\u7684\u8868\u6765\u5e2e\u52a9\u8bc6\u522b\u9700\u8981\u5220\u9664\u7684\u884c\uff0c\u5219\u53ef\u4ee5\u5728USING\u4e2d\u6307\u5b9a\u8fd9\u4e9b\u8868\u6216\u8005\u67e5\u8be2\u3002")),(0,l.yg)("h4",{id:"note"},"Note"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u805a\u5408\u7c7b\u7684\u8868\u6a21\u578b\uff08AGGREGATE\u3001UNIQUE\uff09\u53ea\u80fd\u6307\u5b9a key \u5217\u4e0a\u7684\u6761\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u5f53\u9009\u5b9a\u7684 key \u5217\u4e0d\u5b58\u5728\u4e8e\u67d0\u4e2a rollup \u4e2d\u65f6\uff0c\u65e0\u6cd5\u8fdb\u884c delete\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u8bed\u6cd5\u4e00\u4e2d\uff0c\u6761\u4ef6\u4e4b\u95f4\u53ea\u80fd\u662f\u201c\u4e0e\u201d\u7684\u5173\u7cfb\u3002\u82e5\u5e0c\u671b\u8fbe\u6210\u201c\u6216\u201d\u7684\u5173\u7cfb\uff0c\u9700\u8981\u5c06\u6761\u4ef6\u5206\u5199\u5728\u4e24\u4e2a DELETE \u8bed\u53e5\u4e2d\u3002"),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("version",{since:"1.2",type:"inline"}," \u8bed\u6cd5\u4e00\u4e2d\uff0c\u5982\u679c\u4e3a\u5206\u533a\u8868\uff0c\u9700\u8981\u6307\u5b9a\u5206\u533a\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0cdoris \u4f1a\u4ece\u6761\u4ef6\u4e2d\u63a8\u65ad\u51fa\u5206\u533a\u3002\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0cdoris \u65e0\u6cd5\u4ece\u6761\u4ef6\u4e2d\u63a8\u65ad\u51fa\u5206\u533a: 1) \u6761\u4ef6\u4e2d\u4e0d\u5305\u542b\u5206\u533a\u5217\uff1b2) \u5206\u533a\u5217\u7684 op \u4e3a not in\u3002\u5f53\u5206\u533a\u8868\u672a\u6307\u5b9a\u5206\u533a\uff0c\u6216\u8005\u65e0\u6cd5\u4ece\u6761\u4ef6\u4e2d\u63a8\u65ad\u5206\u533a\u7684\u65f6\u5019\uff0c\u9700\u8981\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf delete_without_partition \u4e3a true\uff0c\u6b64\u65f6 delete \u4f1a\u5e94\u7528\u5230\u6240\u6709\u5206\u533a\u3002")),(0,l.yg)("li",{parentName:"ol"},"\u8be5\u8bed\u53e5\u53ef\u80fd\u4f1a\u964d\u4f4e\u6267\u884c\u540e\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u67e5\u8be2\u6548\u7387\u3002\u5f71\u54cd\u7a0b\u5ea6\u53d6\u51b3\u4e8e\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5220\u9664\u6761\u4ef6\u7684\u6570\u91cf\u3002\u6307\u5b9a\u7684\u6761\u4ef6\u8d8a\u591a\uff0c\u5f71\u54cd\u8d8a\u5927\u3002")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5220\u9664 my_table partition p1 \u4e2d k1 \u5217\u503c\u4e3a 3 \u7684\u6570\u636e\u884c"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},'\u5220\u9664 my_table partition p1 \u4e2d k1 \u5217\u503c\u5927\u4e8e\u7b49\u4e8e 3 \u4e14 k2 \u5217\u503c\u4e3a "abc" \u7684\u6570\u636e\u884c'),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},'\u5220\u9664 my_table partition p1, p2 \u4e2d k1 \u5217\u503c\u5927\u4e8e\u7b49\u4e8e 3 \u4e14 k2 \u5217\u503c\u4e3a "abc" \u7684\u6570\u636e\u884c'),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 >= 3 AND k2 = "abc";\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"t2"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"t3"),"\u8868\u8fde\u63a5\u7684\u7ed3\u679c\uff0c\u5220\u9664",(0,l.yg)("inlineCode",{parentName:"p"},"t1"),"\u4e2d\u7684\u6570\u636e\uff0c\u5220\u9664\u7684\u8868\u53ea\u652f\u6301unique\u6a21\u578b"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efat1, t2, t3\u4e09\u5f20\u8868\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- \u63d2\u5165\u6570\u636e\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- \u5220\u9664 t1 \u4e2d\u7684\u6570\u636e\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n")),(0,l.yg)("p",{parentName:"li"},"\u9884\u671f\u7ed3\u679c\u4e3a\uff0c\u5220\u9664\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"t1"),"\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"id"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"1"),"\u7684\u5217"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4f7f\u7528 cte \u5173\u8054\u5220\u9664"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'create table orders(\n o_orderkey bigint,\n o_totalprice decimal(15, 2)\n) unique key(o_orderkey)\ndistributed by hash(o_orderkey) buckets 1\nproperties (\n"replication_num" = "1"\n);\n\ninsert into orders values\n(1, 34.1),\n(2, 432.8);\n\ncreate table lineitem(\nl_linenumber int,\no_orderkey bigint,\nl_discount  decimal(15, 2)\n) unique key(l_linenumber)\ndistributed by hash(l_linenumber) buckets 1\nproperties (\n"replication_num" = "1"\n);\n\ninsert into lineitem values\n(1, 1, 1.23),\n(2, 1, 3.21),\n(3, 2, 18.08),\n(4, 2, 23.48);\n\nwith discount_orders as (\nselect * from orders\nwhere o_totalprice > 100\n)\ndelete from lineitem\nusing discount_orders\nwhere lineitem.o_orderkey = discount_orders.o_orderkey;\n')))),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"DELETE\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);