"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[159250],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},950741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(296540),t(15680));const i={title:"\u4f7f\u7528 Doris \u548c Paimon \u6784\u5efa Lakehouse",language:"zh-CN"},o=void 0,l={unversionedId:"gettingStarted/tutorials/doris-paimon",id:"gettingStarted/tutorials/doris-paimon",title:"\u4f7f\u7528 Doris \u548c Paimon \u6784\u5efa Lakehouse",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/gettingStarted/tutorials/doris-paimon.md",sourceDirName:"gettingStarted/tutorials",slug:"/gettingStarted/tutorials/doris-paimon",permalink:"/zh-CN/docs/dev/gettingStarted/tutorials/doris-paimon",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Doris \u548c Paimon \u6784\u5efa Lakehouse",language:"zh-CN"},sidebar:"get-starting",previous:{title:"\u4f7f\u7528 Doris \u548c Hudi \u6784\u5efa Lakehouse",permalink:"/zh-CN/docs/dev/gettingStarted/tutorials/doris-hudi"}},s={},c=[{value:"Apache Doris &amp; Paimon",id:"apache-doris--paimon",level:2},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2},{value:"01 \u73af\u5883\u51c6\u5907",id:"01-\u73af\u5883\u51c6\u5907",level:3},{value:"02 \u73af\u5883\u90e8\u7f72",id:"02-\u73af\u5883\u90e8\u7f72",level:3},{value:"03 \u6570\u636e\u51c6\u5907",id:"03-\u6570\u636e\u51c6\u5907",level:3},{value:"04 \u6570\u636e\u67e5\u8be2",id:"04-\u6570\u636e\u67e5\u8be2",level:3},{value:"05 \u8bfb\u53d6\u589e\u91cf\u6570\u636e",id:"05-\u8bfb\u53d6\u589e\u91cf\u6570\u636e",level:3},{value:"Benchmark",id:"benchmark",level:3},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...i}=e;return(0,r.yg)(u,(0,a.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4f5c\u4e3a\u4e00\u79cd\u5168\u65b0\u7684\u5f00\u653e\u5f0f\u7684\u6570\u636e\u7ba1\u7406\u67b6\u6784\uff0c\u6e56\u4ed3\u4e00\u4f53\uff08Data Lakehouse\uff09\u878d\u5408\u4e86\u6570\u636e\u4ed3\u5e93\u7684\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u6027\u4ee5\u53ca\u6570\u636e\u6e56\u7684\u4f4e\u6210\u672c\u3001\u7075\u6d3b\u6027\u7b49\u4f18\u52bf\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u52a0\u4fbf\u6377\u5730\u6ee1\u8db3\u5404\u79cd\u6570\u636e\u5904\u7406\u5206\u6790\u7684\u9700\u6c42\uff0c\u5728\u4f01\u4e1a\u7684\u5927\u6570\u636e\u4f53\u7cfb\u4e2d\u5df2\u7ecf\u5f97\u5230\u8d8a\u6765\u8d8a\u591a\u7684\u5e94\u7528\u3002"),(0,r.yg)("p",null,"\u5728\u8fc7\u53bb\u591a\u4e2a\u7248\u672c\u4e2d\uff0cApache Doris \u6301\u7eed\u52a0\u6df1\u4e0e\u6570\u636e\u6e56\u7684\u878d\u5408\uff0c\u5f53\u524d\u5df2\u6f14\u8fdb\u51fa\u4e00\u5957\u6210\u719f\u7684\u6e56\u4ed3\u4e00\u4f53\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u81ea 0.15 \u7248\u672c\u8d77\uff0cApache Doris \u5f15\u5165 Hive \u548c Iceberg \u5916\u90e8\u8868\uff0c\u5c1d\u8bd5\u5728 Apache Iceberg \u4e4b\u4e0a\u63a2\u7d22\u4e0e\u6570\u636e\u6e56\u7684\u80fd\u529b\u7ed3\u5408\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u81ea 1.2 \u7248\u672c\u8d77\uff0cApache Doris \u6b63\u5f0f\u5f15\u5165 Multi-Catalog \u529f\u80fd\uff0c\u5b9e\u73b0\u4e86\u591a\u79cd\u6570\u636e\u6e90\u7684\u81ea\u52a8\u5143\u6570\u636e\u6620\u5c04\u548c\u6570\u636e\u8bbf\u95ee\u3001\u5e76\u5bf9\u5916\u90e8\u6570\u636e\u8bfb\u53d6\u548c\u67e5\u8be2\u6267\u884c\u7b49\u65b9\u9762\u505a\u4e86\u8bf8\u591a\u6027\u80fd\u4f18\u5316\uff0c\u5b8c\u5168\u5177\u5907\u4e86\u6784\u5efa\u6781\u901f\u6613\u7528 Lakehouse \u67b6\u6784\u7684\u80fd\u529b\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5728 2.1 \u7248\u672c\u4e2d\uff0cApache Doris \u6e56\u4ed3\u4e00\u4f53\u67b6\u6784\u5f97\u5230\u5168\u9762\u52a0\u5f3a\uff0c\u4e0d\u4ec5\u589e\u5f3a\u4e86\u4e3b\u6d41\u6570\u636e\u6e56\u683c\u5f0f\uff08Hudi\u3001Iceberg\u3001Paimon \u7b49\uff09\u7684\u8bfb\u53d6\u548c\u5199\u5165\u80fd\u529b\uff0c\u8fd8\u5f15\u5165\u4e86\u591a SQL \u65b9\u8a00\u517c\u5bb9\u3001\u53ef\u4ece\u539f\u6709\u7cfb\u7edf\u65e0\u7f1d\u5207\u6362\u81f3 Apache Doris\u3002\u5728\u6570\u636e\u79d1\u5b66\u53ca\u5927\u89c4\u6a21\u6570\u636e\u8bfb\u53d6\u573a\u666f\u4e0a\uff0cDoris \u96c6\u6210\u4e86 Arrow Flight \u9ad8\u901f\u8bfb\u53d6\u63a5\u53e3\uff0c\u4f7f\u5f97\u6570\u636e\u4f20\u8f93\u6548\u7387\u5b9e\u73b0 100 \u500d\u7684\u63d0\u5347\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(851793).A,width:"2038",height:"1196"})),(0,r.yg)("h2",{id:"apache-doris--paimon"},"Apache Doris & Paimon"),(0,r.yg)("p",null,"Apache Paimon \u662f\u4e00\u79cd\u6570\u636e\u6e56\u683c\u5f0f\uff0c\u5e76\u521b\u65b0\u6027\u5730\u5c06\u6570\u636e\u6e56\u683c\u5f0f\u548c LSM \u7ed3\u6784\u7684\u4f18\u52bf\u76f8\u7ed3\u5408\uff0c\u6210\u529f\u5c06\u9ad8\u6548\u7684\u5b9e\u65f6\u6d41\u66f4\u65b0\u80fd\u529b\u5f15\u5165\u6570\u636e\u6e56\u67b6\u6784\u4e2d\uff0c\u8fd9\u4f7f\u5f97 Paimon \u80fd\u591f\u5b9e\u73b0\u6570\u636e\u7684\u9ad8\u6548\u7ba1\u7406\u548c\u5b9e\u65f6\u5206\u6790\uff0c\u4e3a\u6784\u5efa\u5b9e\u65f6\u6e56\u4ed3\u67b6\u6784\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u652f\u6491\u3002"),(0,r.yg)("p",null,"\u4e3a\u4e86\u5145\u5206\u53d1\u6325 Paimon \u7684\u80fd\u529b\uff0c\u63d0\u9ad8\u5bf9 Paimon \u6570\u636e\u7684\u67e5\u8be2\u6548\u7387\uff0cApache Doris \u5bf9 Paimon \u7684\u591a\u9879\u6700\u65b0\u7279\u6027\u63d0\u4f9b\u4e86\u539f\u751f\u652f\u6301\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301 Hive Metastore\u3001FileSystem \u7b49\u591a\u79cd\u7c7b\u578b\u7684 Paimon Catalog\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u539f\u751f\u652f\u6301 Paimon 0.6 \u7248\u672c\u53d1\u5e03\u7684 Primary Key Table Read Optimized \u529f\u80fd\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u539f\u751f\u652f\u6301 Paimon 0.8 \u7248\u672c\u53d1\u5e03\u7684 Primary Key Table Deletion Vector \u529f\u80fd\u3002")),(0,r.yg)("p",null,"\u57fa\u4e8e Apache Doris \u7684\u9ad8\u6027\u80fd\u67e5\u8be2\u5f15\u64ce\u548c Apache Paimon \u9ad8\u6548\u7684\u5b9e\u65f6\u6d41\u66f4\u65b0\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u5b9e\u73b0\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6570\u636e\u5b9e\u65f6\u5165\u6e56\uff1a\u501f\u52a9 Paimon \u7684 LSM-Tree \u6a21\u578b\uff0c\u6570\u636e\u5165\u6e56\u7684\u65f6\u6548\u6027\u53ef\u4ee5\u964d\u4f4e\u5230\u5206\u949f\u7ea7\uff1b\u540c\u65f6\uff0cPaimon \u652f\u6301\u5305\u62ec\u805a\u5408\u3001\u53bb\u91cd\u3001\u90e8\u5206\u5217\u66f4\u65b0\u5728\u5185\u7684\u591a\u79cd\u6570\u636e\u66f4\u65b0\u80fd\u529b\uff0c\u4f7f\u5f97\u6570\u636e\u6d41\u52a8\u66f4\u52a0\u7075\u6d3b\u9ad8\u6548\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u6570\u636e\u5904\u7406\u5206\u6790\uff1aPaimon \u6240\u63d0\u4f9b\u7684 Append Only Table\u3001Read Optimized\u3001Deletion Vector \u7b49\u6280\u672f\uff0c\u53ef\u4e0e Doris \u5f3a\u5927\u7684\u67e5\u8be2\u5f15\u64ce\u5bf9\u63a5\uff0c\u5b9e\u73b0\u6e56\u4e0a\u6570\u636e\u7684\u5feb\u901f\u67e5\u8be2\u53ca\u5206\u6790\u54cd\u5e94\u3002")),(0,r.yg)("p",null,"\u672a\u6765 Apache Doris \u5c06\u4f1a\u9010\u6b65\u652f\u6301\u5305\u62ec Time Travel\u3001\u589e\u91cf\u6570\u636e\u8bfb\u53d6\u5728\u5185\u7684 Apache Paimon \u66f4\u591a\u9ad8\u7ea7\u7279\u6027\uff0c\u5171\u540c\u6784\u5efa\u7edf\u4e00\u3001\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u7684\u6e56\u4ed3\u5e73\u53f0\u3002"),(0,r.yg)("p",null,"\u672c\u6587\u5c06\u4f1a\u518d Docker \u73af\u5883\u4e2d\uff0c\u4e3a\u8bfb\u8005\u8bb2\u89e3\u5982\u4f55\u5feb\u901f\u642d\u5efa Apache Doris + Apache Paimon \u6d4b\u8bd5 & \u6f14\u793a\u73af\u5883\uff0c\u5e76\u5c55\u793a\u5404\u529f\u80fd\u7684\u4f7f\u7528\u64cd\u4f5c\u3002"),(0,r.yg)("p",null,"\u5173\u4e8e\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/lakehouse/datalake-analytics/paimon"},"Paimon Catalog")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,r.yg)("p",null,"\u672c\u6587\u6d89\u53ca\u6240\u6709\u811a\u672c\u548c\u4ee3\u7801\u53ef\u4ee5\u4ece\u8be5\u5730\u5740\u83b7\u53d6\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon"},"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon")),(0,r.yg)("h3",{id:"01-\u73af\u5883\u51c6\u5907"},"01 \u73af\u5883\u51c6\u5907"),(0,r.yg)("p",null,"\u672c\u6587\u793a\u4f8b\u91c7\u7528 Docker Compose \u90e8\u7f72\uff0c\u7ec4\u4ef6\u53ca\u7248\u672c\u53f7\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Doris"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 2.1.5\uff0c\u53ef\u4fee\u6539")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Paimon"),(0,r.yg)("td",{parentName:"tr",align:null},"0.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Apache Flink"),(0,r.yg)("td",{parentName:"tr",align:null},"1.18")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MinIO"),(0,r.yg)("td",{parentName:"tr",align:null},"RELEASE.2024-04-29T09-56-05Z")))),(0,r.yg)("h3",{id:"02-\u73af\u5883\u90e8\u7f72"},"02 \u73af\u5883\u90e8\u7f72"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u6240\u6709\u7ec4\u4ef6"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"bash ./start_all.sh"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u811a\u672c\uff0c\u767b\u9646 Flink \u547d\u4ee4\u884c\u6216 Doris \u547d\u4ee4\u884c\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"-- login flink\nbash ./start_flink_client.sh\n\n-- login doris\nbash ./start_doris_client.sh\n")))),(0,r.yg)("h3",{id:"03-\u6570\u636e\u51c6\u5907"},"03 \u6570\u636e\u51c6\u5907"),(0,r.yg)("p",null,"\u9996\u5148\u767b\u9646 Flink \u547d\u4ee4\u884c\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u5f20\u9884\u6784\u5efa\u7684\u8868\u3002\u8868\u4e2d\u5df2\u7ecf\u5305\u542b\u4e00\u4e9b\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Flink SQL \u8fdb\u884c\u67e5\u770b\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Flink SQL> use paimon.db_paimon;\n[INFO] Execute statement succeed.\n\nFlink SQL> show tables;\n+------------+\n| table name |\n+------------+\n|   customer |\n+------------+\n1 row in set\n\nFlink SQL> show create table customer;\n+------------------------------------------------------------------------+\n|                                                                 result |\n+------------------------------------------------------------------------+\n| CREATE TABLE `paimon`.`db_paimon`.`customer` (\n  `c_custkey` INT NOT NULL,\n  `c_name` VARCHAR(25),\n  `c_address` VARCHAR(40),\n  `c_nationkey` INT NOT NULL,\n  `c_phone` CHAR(15),\n  `c_acctbal` DECIMAL(12, 2),\n  `c_mktsegment` CHAR(10),\n  `c_comment` VARCHAR(117),\n  CONSTRAINT `PK_c_custkey_c_nationkey` PRIMARY KEY (`c_custkey`, `c_nationkey`) NOT ENFORCED\n) PARTITIONED BY (`c_nationkey`)\nWITH (\n  'bucket' = '1',\n  'path' = 's3://warehouse/wh/db_paimon.db/customer',\n  'deletion-vectors.enabled' = 'true'\n)\n |\n+-------------------------------------------------------------------------+\n1 row in set\n\nFlink SQL> desc customer;\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n|         name |           type |  null |                         key | extras | watermark |\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n|    c_custkey |            INT | FALSE | PRI(c_custkey, c_nationkey) |        |           |\n|       c_name |    VARCHAR(25) |  TRUE |                             |        |           |\n|    c_address |    VARCHAR(40) |  TRUE |                             |        |           |\n|  c_nationkey |            INT | FALSE | PRI(c_custkey, c_nationkey) |        |           |\n|      c_phone |       CHAR(15) |  TRUE |                             |        |           |\n|    c_acctbal | DECIMAL(12, 2) |  TRUE |                             |        |           |\n| c_mktsegment |       CHAR(10) |  TRUE |                             |        |           |\n|    c_comment |   VARCHAR(117) |  TRUE |                             |        |           |\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n8 rows in set\n\nFlink SQL> select * from customer order by c_custkey limit 4;\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n| c_custkey |             c_name |                      c_address | c_nationkey |         c_phone | c_acctbal | c_mktsegment |                      c_comment |\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n|         1 | Customer#000000001 |              IVhzIApeRb ot,c,E |          15 | 25-989-741-2988 |    711.56 |     BUILDING | to the even, regular platel... |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak |          13 | 23-768-687-3665 |    121.65 |   AUTOMOBILE | l accounts. blithely ironic... |\n|         3 | Customer#000000003 |                   MG9kdTD2WBHm |           1 | 11-719-748-3364 |   7498.12 |   AUTOMOBILE |  deposits eat slyly ironic,... |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tl... |          15 | 25-430-914-2194 |   3471.53 |     BUILDING | cial ideas. final, furious ... |\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n4 rows in set\n")),(0,r.yg)("h3",{id:"04-\u6570\u636e\u67e5\u8be2"},"04 \u6570\u636e\u67e5\u8be2"),(0,r.yg)("p",null,"\u5982\u4e0b\u6240\u793a\uff0cDoris \u96c6\u7fa4\u4e2d\u5df2\u7ecf\u521b\u5efa\u4e86\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"paimon")," \u7684 Catalog\uff08\u53ef\u901a\u8fc7 SHOW CATALOGS \u67e5\u770b\uff09\u3002\u4ee5\u4e0b\u4e3a\u8be5 Catalog \u7684\u521b\u5efa\u8bed\u53e5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'-- \u5df2\u521b\u5efa\uff0c\u65e0\u9700\u6267\u884c\nCREATE CATALOG `paimon` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://warehouse/wh/",\n    "s3.endpoint"="http://minio:9000",\n    "s3.access_key"="admin",\n    "s3.secret_key"="password",\n    "s3.region"="us-east-1"\n);\n')),(0,r.yg)("p",null,"\u4f60\u53ef\u767b\u5f55\u5230 Doris \u4e2d\u67e5\u8be2 Paimon \u7684\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> use paimon.db_paimon;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> show tables;\n+---------------------+\n| Tables_in_db_paimon |\n+---------------------+\n| customer            |\n+---------------------+\n1 row in set (0.00 sec)\n\nmysql> select * from customer order by c_custkey limit 4;\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                             | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         1 | Customer#000000001 | IVhzIApeRb ot,c,E                     |          15 | 25-989-741-2988 |    711.56 | BUILDING     | to the even, regular platelets. regular, ironic epitaphs nag e                                         |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak        |          13 | 23-768-687-3665 |    121.65 | AUTOMOBILE   | l accounts. blithely ironic theodolites integrate boldly: caref                                        |\n|         3 | Customer#000000003 | MG9kdTD2WBHm                          |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J |          15 | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e                                                       |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n4 rows in set (1.89 sec)\n")),(0,r.yg)("h3",{id:"05-\u8bfb\u53d6\u589e\u91cf\u6570\u636e"},"05 \u8bfb\u53d6\u589e\u91cf\u6570\u636e"),(0,r.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Flink SQL \u66f4\u65b0 Paimon \u8868\u4e2d\u7684\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Flink SQL> update customer set c_address='c_address_update' where c_nationkey = 1;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: ff838b7b778a94396b332b0d93c8f7ac\n")),(0,r.yg)("p",null,"\u7b49 Flink SQL \u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u5728 Doris \u4e2d\u53ef\u76f4\u63a5\u67e5\u770b\u5230\u6700\u65b0\u7684\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select * from customer where c_nationkey=1 limit 2;\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address       | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         3 | Customer#000000003 | c_address_update |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|       513 | Customer#000000513 | c_address_update |           1 | 11-861-303-6887 |    955.37 | HOUSEHOLD    | press along the quickly regular instructions. regular requests against the carefully ironic s          |\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n2 rows in set (0.19 sec)\n")),(0,r.yg)("h3",{id:"benchmark"},"Benchmark"),(0,r.yg)("p",null,"\u6211\u4eec\u5728 Paimon\uff080.8\uff09\u7248\u672c\u7684 TPCDS 1000 \u6570\u636e\u96c6\u4e0a\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u6d4b\u8bd5\uff0c\u5206\u522b\u4f7f\u7528\u4e86 Apache Doris 2.1.5 \u7248\u672c\u548c Trino 422 \u7248\u672c\uff0c\u5747\u5f00\u542f Primary Key Table Read Optimized \u529f\u80fd\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(615523).A,width:"1280",height:"591"})),(0,r.yg)("p",null,"\u4ece\u6d4b\u8bd5\u7ed3\u679c\u53ef\u4ee5\u770b\u5230\uff0cDoris \u5728\u6807\u51c6\u9759\u6001\u6d4b\u8bd5\u96c6\u4e0a\u7684\u5e73\u5747\u67e5\u8be2\u6027\u80fd\u662f Trino \u7684 3~5 \u500d\u3002\u540e\u7eed\u6211\u4eec\u5c06\u9488\u5bf9 Deletion Vector \u8fdb\u884c\u4f18\u5316\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u771f\u5b9e\u4e1a\u52a1\u573a\u666f\u4e0b\u7684\u67e5\u8be2\u6548\u7387\u3002 "),(0,r.yg)("h2",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,r.yg)("p",null,"\u5bf9\u4e8e\u57fa\u7ebf\u6570\u636e\u6765\u8bf4\uff0cApache Paimon \u5728 0.6 \u7248\u672c\u4e2d\u5f15\u5165 Primary Key Table Read Optimized \u529f\u80fd\u540e\uff0c\u4f7f\u5f97\u67e5\u8be2\u5f15\u64ce\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5e95\u5c42\u7684 Parquet/ORC \u6587\u4ef6\uff0c\u5927\u5e45\u63d0\u5347\u4e86\u57fa\u7ebf\u6570\u636e\u7684\u8bfb\u53d6\u6548\u7387\u3002\u5bf9\u4e8e\u5c1a\u672a\u5408\u5e76\u7684\u589e\u91cf\u6570\u636e\uff08INSERT\u3001UPDATE \u6216 DELETE \u6240\u4ea7\u751f\u7684\u6570\u636e\u589e\u91cf\uff09\u6765\u8bf4\uff0c\u53ef\u4ee5\u901a\u8fc7 Merge-on-Read \u7684\u65b9\u5f0f\u8fdb\u884c\u8bfb\u53d6\u3002\u6b64\u5916\uff0cPaimon \u5728 0.8 \u7248\u672c\u4e2d\u8fd8\u5f15\u5165\u7684 Deletion Vector \u529f\u80fd\uff0c\u80fd\u591f\u8fdb\u4e00\u6b65\u63d0\u5347\u67e5\u8be2\u5f15\u64ce\u5bf9\u589e\u91cf\u6570\u636e\u7684\u8bfb\u53d6\u6548\u7387\u3002\nApache Doris \u652f\u6301\u901a\u8fc7\u539f\u751f\u7684 Reader \u8bfb\u53d6 Deletion Vector \u5e76\u8fdb\u884c Merge on Read\uff0c\u6211\u4eec\u901a\u8fc7 Doris \u7684 EXPLAIN \u8bed\u53e5\uff0c\u6765\u6f14\u793a\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\uff0c\u57fa\u7ebf\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u7684\u67e5\u8be2\u65b9\u5f0f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> explain verbose select * from customer where c_nationkey < 3;\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n| Explain String(Nereids Planner)                                                                                                                |\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n| ...............                                                                                                                                |\n|                                                                                                                                                |\n|   0:VPAIMON_SCAN_NODE(68)                                                                                                                      |\n|      table: customer                                                                                                                           |\n|      predicates: (c_nationkey[#3] < 3)                                                                                                         |\n|      inputSplitNum=4, totalFileSize=238324, scanRanges=4                                                                                       |\n|      partition=3/0                                                                                                                             |\n|      backends:                                                                                                                                 |\n|        10002                                                                                                                                   |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=1/bucket-0/data-15cee5b7-1bd7-42ca-9314-56d92c62c03b-0.orc start: 0 length: 66600 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=1/bucket-0/data-5d50255a-2215-4010-b976-d5dc656f3444-0.orc start: 0 length: 44501 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=2/bucket-0/data-e98fb7ef-ec2b-4ad5-a496-713cb9481d56-0.orc start: 0 length: 64059 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=0/bucket-0/data-431be05d-50fa-401f-9680-d646757d0f95-0.orc start: 0 length: 63164 |\n|      cardinality=18751, numNodes=1                                                                                                             |\n|      pushdown agg=NONE                                                                                                                         |\n|      paimonNativeReadSplits=4/4                                                                                                                |\n|      PaimonSplitStats:                                                                                                                         |\n|        SplitStat [type=NATIVE, rowCount=1542, rawFileConvertable=true, hasDeletionVector=true]                                                 |\n|        SplitStat [type=NATIVE, rowCount=750, rawFileConvertable=true, hasDeletionVector=false]                                                 |\n|        SplitStat [type=NATIVE, rowCount=750, rawFileConvertable=true, hasDeletionVector=false]                                                 |\n|      tuple ids: 0\n| ...............                                                                                                           |                                                                                                  |\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n67 rows in set (0.23 sec)\n")),(0,r.yg)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5bf9\u4e8e\u521a\u624d\u901a\u8fc7 Flink SQL \u66f4\u65b0\u7684\u8868\uff0c\u5305\u542b 4 \u4e2a\u5206\u7247\uff0c\u5e76\u4e14\u5168\u90e8\u5206\u7247\u90fd\u53ef\u4ee5\u901a\u8fc7 Native Reader \u8fdb\u884c\u8bbf\u95ee\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"paimonNativeReadSplits=4/4"),"\uff09\u3002\u5e76\u4e14\u7b2c\u4e00\u4e2a\u5206\u7247\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"hasDeletionVector"),"\u7684\u5c5e\u6027\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8868\u793a\u8be5\u5206\u7247\u6709\u5bf9\u5e94\u7684 Deletion Vector\uff0c\u8bfb\u53d6\u65f6\u4f1a\u6839\u636e Deletion Vector \u8fdb\u884c\u6570\u636e\u8fc7\u6ee4\u3002"))}m.isMDXComponent=!0},851793:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lakehouse-paimon-arch-06e8cd4085b6cfe498625d197012b0f5.jpeg"},615523:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/lakehouse-paimon-benchmark-e541bdf261a3a2061218e99665173249.PNG"}}]);