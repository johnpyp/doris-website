"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[977901],{15680:(n,e,a)=>{a.d(e,{xA:()=>o,yg:()=>u});var t=a(296540);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function s(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function p(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},s=Object.keys(n);for(t=0;t<s.length;t++)a=s[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)a=s[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var m=t.createContext({}),i=function(n){var e=t.useContext(m),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},o=function(n){var e=i(n.components);return t.createElement(m.Provider,{value:e},n.children)},c="mdxType",y={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,s=n.originalType,m=n.parentName,o=p(n,["components","mdxType","originalType","parentName"]),c=i(a),d=r,u=c["".concat(m,".").concat(d)]||c[d]||y[d]||s;return a?t.createElement(u,l(l({ref:e},o),{},{components:a})):t.createElement(u,l({ref:e},o))}));function u(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=a.length,l=new Array(s);l[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=n,p[c]="string"==typeof n?n:r,l[1]=p;for(var i=2;i<s;i++)l[i]=a[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},155446:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var t=a(58168),r=(a(296540),a(15680));const s={title:"MAP",language:"zh-CN"},l=void 0,p={unversionedId:"sql-manual/sql-types/Data-Types/MAP",id:"version-3.0/sql-manual/sql-types/Data-Types/MAP",title:"MAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-types/Data-Types/MAP.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/MAP",permalink:"/zh-CN/docs/sql-manual/sql-types/Data-Types/MAP",draft:!1,tags:[],version:"3.0",frontMatter:{title:"MAP",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-types/Data-Types/ARRAY"},next:{title:"STRUCT",permalink:"/zh-CN/docs/sql-manual/sql-types/Data-Types/STRUCT"}},m={},i=[{value:"MAP",id:"map",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],o={toc:i},c="wrapper";function y(n){let{components:e,...a}=n;return(0,r.yg)(c,(0,t.A)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"map"},"MAP"),(0,r.yg)("h3",{id:"name"},"name"),(0,r.yg)("p",null,"MAP"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"MAP<K, V>")),(0,r.yg)("p",null,"\u7531K, V\u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684map\uff0c\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\u3002\u76ee\u524d\u652f\u6301\u5728Duplicate\uff0cUnique \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002"),(0,r.yg)("p",null,"K,V \u652f\u6301\u7684\u7c7b\u578b\u6709\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},' CREATE TABLE IF NOT EXISTS test.simple_map (\n              `id` INT(11) NULL COMMENT "",\n              `m` Map<STRING, INT> NULL COMMENT ""\n            ) ENGINE=OLAP\n            DUPLICATE KEY(`id`)\n            DISTRIBUTED BY HASH(`id`) BUCKETS 1\n            PROPERTIES (\n            "replication_allocation" = "tag.location.default: 1",\n            "storage_format" = "V2"\n            );\n')),(0,r.yg)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> INSERT INTO simple_map VALUES(1, {'a': 100, 'b': 200});\n")),(0,r.yg)("p",null,"stream_load\u793a\u4f8b\uff1a\n\u66f4\u591a\u8be6\u7ec6 stream_load \u7528\u6cd5\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"STREAM TABLE")," "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# load the map data from json file\ncurl --location-trusted -uroot: -T events.json -H "format: json" -H "read_json_by_line: true" http://fe_host:8030/api/test/simple_map/_stream_load\n# \u8fd4\u56de\u7ed3\u679c\n{\n    "TxnId": 106134,\n    "Label": "5666e573-9a97-4dfc-ae61-2d6b61fdffd2",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 10293125,\n    "NumberLoadedRows": 10293125,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 2297411459,\n    "LoadTimeMs": 66870,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 80,\n    "ReadDataTimeMs": 6415,\n    "WriteDataTimeMs": 10550,\n    "CommitAndPublishTimeMs": 38\n}\n')),(0,r.yg)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM simple_map;\n+------+-----------------------------+\n| id   | m                           |\n+------+-----------------------------+\n|    1 | {'a':100, 'b':200}          |\n|    2 | {'b':100, 'c':200, 'd':300} |\n|    3 | {'a':10, 'd':200}           |\n+------+-----------------------------+\n")),(0,r.yg)("p",null,"\u67e5\u8be2 map \u5217\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT m FROM simple_map;\n+-----------------------------+\n| m                           |\n+-----------------------------+\n| {'a':100, 'b':200}          |\n| {'b':100, 'c':200, 'd':300} |\n| {'a':10, 'd':200}           |\n+-----------------------------+\n")),(0,r.yg)("p",null,"map \u53d6\u503c\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT m['a'] FROM simple_map;\n+-----------------------------+\n| %element_extract%(`m`, 'a') |\n+-----------------------------+\n|                         100 |\n|                        NULL |\n|                          10 |\n+-----------------------------+\n")),(0,r.yg)("p",null,"map \u652f\u6301\u7684functions\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# map construct\n\nmysql> SELECT map('k11', 1000, 'k22', 2000)['k11'];\n+---------------------------------------------------------+\n| %element_extract%(map('k11', 1000, 'k22', 2000), 'k11') |\n+---------------------------------------------------------+\n|                                                    1000 |\n+---------------------------------------------------------+\n\nmysql> SELECT map('k11', 1000, 'k22', 2000)['nokey'];\n+-----------------------------------------------------------+\n| %element_extract%(map('k11', 1000, 'k22', 2000), 'nokey') |\n+-----------------------------------------------------------+\n|                                                      NULL |\n+-----------------------------------------------------------+\n1 row in set (0.06 sec)\n\n# map size\n\nmysql> SELECT map_size(map('k11', 1000, 'k22', 2000));\n+-----------------------------------------+\n| map_size(map('k11', 1000, 'k22', 2000)) |\n+-----------------------------------------+\n|                                       2 |\n+-----------------------------------------+\n\nmysql> SELECT id, m, map_size(m) FROM simple_map ORDER BY id;\n+------+-----------------------------+---------------+\n| id   | m                           | map_size(`m`) |\n+------+-----------------------------+---------------+\n|    1 | {\"a\":100, \"b\":200}          |             2 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |             3 |\n|    2 | {\"a\":10, \"d\":200}           |             2 |\n+------+-----------------------------+---------------+\n3 rows in set (0.04 sec)\n\n# map_contains_key\n\nmysql> SELECT map_contains_key(map('k11', 1000, 'k22', 2000), 'k11');\n+--------------------------------------------------------+\n| map_contains_key(map('k11', 1000, 'k22', 2000), 'k11') |\n+--------------------------------------------------------+\n|                                                      1 |\n+--------------------------------------------------------+\n1 row in set (0.08 sec)\n\nmysql> SELECT id, m, map_contains_key(m, 'k1') FROM simple_map ORDER BY id;\n+------+-----------------------------+-----------------------------+\n| id   | m                           | map_contains_key(`m`, 'k1') |\n+------+-----------------------------+-----------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                           0 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                           0 |\n|    2 | {\"a\":10, \"d\":200}           |                           0 |\n+------+-----------------------------+-----------------------------+\n3 rows in set (0.10 sec)\n\nmysql> SELECT id, m, map_contains_key(m, 'a') FROM simple_map ORDER BY id;\n+------+-----------------------------+----------------------------+\n| id   | m                           | map_contains_key(`m`, 'a') |\n+------+-----------------------------+----------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                          1 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                          0 |\n|    2 | {\"a\":10, \"d\":200}           |                          1 |\n+------+-----------------------------+----------------------------+\n3 rows in set (0.17 sec)\n\n# map_contains_value\n\nmysql> SELECT map_contains_value(map('k11', 1000, 'k22', 2000), NULL);\n+---------------------------------------------------------+\n| map_contains_value(map('k11', 1000, 'k22', 2000), NULL) |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT id, m, map_contains_value(m, '100') FROM simple_map ORDER BY id;\n+------+-----------------------------+------------------------------+\n| id   | m                           | map_contains_value(`m`, 100) |\n+------+-----------------------------+------------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                            1 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                            1 |\n|    2 | {\"a\":10, \"d\":200}           |                            0 |\n+------+-----------------------------+------------------------------+\n3 rows in set (0.11 sec)\n\n# map_keys\n\nmysql> SELECT map_keys(map('k11', 1000, 'k22', 2000));\n+-----------------------------------------+\n| map_keys(map('k11', 1000, 'k22', 2000)) |\n+-----------------------------------------+\n| [\"k11\", \"k22\"]                          |\n+-----------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT id, map_keys(m) FROM simple_map ORDER BY id;\n+------+-----------------+\n| id   | map_keys(`m`)   |\n+------+-----------------+\n|    1 | [\"a\", \"b\"]      |\n|    2 | [\"b\", \"c\", \"d\"] |\n|    2 | [\"a\", \"d\"]      |\n+------+-----------------+\n3 rows in set (0.19 sec)\n\n# map_values\n\nmysql> SELECT map_values(map('k11', 1000, 'k22', 2000));\n+-------------------------------------------+\n| map_values(map('k11', 1000, 'k22', 2000)) |\n+-------------------------------------------+\n| [1000, 2000]                              |\n+-------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT id, map_values(m) FROM simple_map ORDER BY id;\n+------+-----------------+\n| id   | map_values(`m`) |\n+------+-----------------+\n|    1 | [100, 200]      |\n|    2 | [100, 200, 300] |\n|    2 | [10, 200]       |\n+------+-----------------+\n3 rows in set (0.18 sec)\n\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MAP\n")))}y.isMDXComponent=!0}}]);