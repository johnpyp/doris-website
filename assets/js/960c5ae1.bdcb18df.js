"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[613965],{15680:(e,n,a)=>{a.d(n,{xA:()=>i,yg:()=>u});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function m(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),o=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},i=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),c=o(a),y=r,u=c["".concat(p,".").concat(y)]||c[y]||d[y]||l;return a?t.createElement(u,s(s({ref:n},i),{},{components:a})):t.createElement(u,s({ref:n},i))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=y;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m[c]="string"==typeof e?e:r,s[1]=m;for(var o=2;o<l;o++)s[o]=a[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},72880:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var t=a(58168),r=(a(296540),a(15680));const l={title:"MAP",language:"en"},s=void 0,m={unversionedId:"sql-manual/sql-reference/Data-Types/MAP",id:"version-2.0/sql-manual/sql-reference/Data-Types/MAP",title:"MAP",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Types/MAP.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/MAP",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Types/MAP",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MAP",language:"en"},sidebar:"docs",previous:{title:"ARRAY",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Types/ARRAY"},next:{title:"STRUCT",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Types/STRUCT"}},p={},o=[{value:"MAP",id:"map",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:o},c="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"map"},"MAP"),(0,r.yg)("h3",{id:"name"},"name"),(0,r.yg)("p",null,"MAP"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"MAP<K, V>")),(0,r.yg)("p",null,"A Map of K, V items, it cannot be used as a key column. Now MAP can only used in Duplicate and Unique Model Tables."),(0,r.yg)("p",null,"Need to manually enable the support, it is disabled by default."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'admin set frontend config("enable_map_type" = "true");\n')),(0,r.yg)("p",null,"K,V could be any of:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"Create table example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},' CREATE TABLE IF NOT EXISTS test.simple_map (\n              `id` INT(11) NULL COMMENT "",\n              `m` Map<STRING, INT> NULL COMMENT ""\n            ) ENGINE=OLAP\n            DUPLICATE KEY(`id`)\n            DISTRIBUTED BY HASH(`id`) BUCKETS 1\n            PROPERTIES (\n            "replication_allocation" = "tag.location.default: 1",\n            "storage_format" = "V2"\n            );\n')),(0,r.yg)("p",null,"Insert data example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> INSERT INTO simple_map VALUES(1, {'a': 100, 'b': 200});\n")),(0,r.yg)("p",null,"stream_load examples\uff1a\nSee ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"STREAM TABLE")," for syntax details."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# load the map data from json file\ncurl --location-trusted -uroot: -T events.json -H "format: json" -H "read_json_by_line: true" http://fe_host:8030/api/test/simple_map/_stream_load\n# \u8fd4\u56de\u7ed3\u679c\n{\n    "TxnId": 106134,\n    "Label": "5666e573-9a97-4dfc-ae61-2d6b61fdffd2",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 10293125,\n    "NumberLoadedRows": 10293125,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 2297411459,\n    "LoadTimeMs": 66870,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 80,\n    "ReadDataTimeMs": 6415,\n    "WriteDataTimeMs": 10550,\n    "CommitAndPublishTimeMs": 38\n}\n')),(0,r.yg)("p",null,"Select all data example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM simple_map;\n+------+-----------------------------+\n| id   | m                           |\n+------+-----------------------------+\n|    1 | {'a':100, 'b':200}          |\n|    2 | {'b':100, 'c':200, 'd':300} |\n|    3 | {'a':10, 'd':200}           |\n+------+-----------------------------+\n")),(0,r.yg)("p",null,"Select map column example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT m FROM simple_map;\n+-----------------------------+\n| m                           |\n+-----------------------------+\n| {'a':100, 'b':200}          |\n| {'b':100, 'c':200, 'd':300} |\n| {'a':10, 'd':200}           |\n+-----------------------------+\n")),(0,r.yg)("p",null,"Select map value according given key example: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT m['a'] FROM simple_map;\n+-----------------------------+\n| %element_extract%(`m`, 'a') |\n+-----------------------------+\n|                         100 |\n|                        NULL |\n|                          10 |\n+-----------------------------+\n")),(0,r.yg)("p",null,"map functions examples: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# map construct\n\nmysql> SELECT map('k11', 1000, 'k22', 2000)['k11'];\n+---------------------------------------------------------+\n| %element_extract%(map('k11', 1000, 'k22', 2000), 'k11') |\n+---------------------------------------------------------+\n|                                                    1000 |\n+---------------------------------------------------------+\n\nmysql> SELECT map('k11', 1000, 'k22', 2000)['nokey'];\n+-----------------------------------------------------------+\n| %element_extract%(map('k11', 1000, 'k22', 2000), 'nokey') |\n+-----------------------------------------------------------+\n|                                                      NULL |\n+-----------------------------------------------------------+\n1 row in set (0.06 sec)\n\n# map size\n\nmysql> SELECT map_size(map('k11', 1000, 'k22', 2000));\n+-----------------------------------------+\n| map_size(map('k11', 1000, 'k22', 2000)) |\n+-----------------------------------------+\n|                                       2 |\n+-----------------------------------------+\n\nmysql> SELECT id, m, map_size(m) FROM simple_map ORDER BY id;\n+------+-----------------------------+---------------+\n| id   | m                           | map_size(`m`) |\n+------+-----------------------------+---------------+\n|    1 | {\"a\":100, \"b\":200}          |             2 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |             3 |\n|    2 | {\"a\":10, \"d\":200}           |             2 |\n+------+-----------------------------+---------------+\n3 rows in set (0.04 sec)\n\n# map_contains_key\n\nmysql> SELECT map_contains_key(map('k11', 1000, 'k22', 2000), 'k11');\n+--------------------------------------------------------+\n| map_contains_key(map('k11', 1000, 'k22', 2000), 'k11') |\n+--------------------------------------------------------+\n|                                                      1 |\n+--------------------------------------------------------+\n1 row in set (0.08 sec)\n\nmysql> SELECT id, m, map_contains_key(m, 'k1') FROM simple_map ORDER BY id;\n+------+-----------------------------+-----------------------------+\n| id   | m                           | map_contains_key(`m`, 'k1') |\n+------+-----------------------------+-----------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                           0 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                           0 |\n|    2 | {\"a\":10, \"d\":200}           |                           0 |\n+------+-----------------------------+-----------------------------+\n3 rows in set (0.10 sec)\n\nmysql> SELECT id, m, map_contains_key(m, 'a') FROM simple_map ORDER BY id;\n+------+-----------------------------+----------------------------+\n| id   | m                           | map_contains_key(`m`, 'a') |\n+------+-----------------------------+----------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                          1 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                          0 |\n|    2 | {\"a\":10, \"d\":200}           |                          1 |\n+------+-----------------------------+----------------------------+\n3 rows in set (0.17 sec)\n\n# map_contains_value\n\nmysql> SELECT map_contains_value(map('k11', 1000, 'k22', 2000), NULL);\n+---------------------------------------------------------+\n| map_contains_value(map('k11', 1000, 'k22', 2000), NULL) |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT id, m, map_contains_value(m, '100') FROM simple_map ORDER BY id;\n+------+-----------------------------+------------------------------+\n| id   | m                           | map_contains_value(`m`, 100) |\n+------+-----------------------------+------------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                            1 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                            1 |\n|    2 | {\"a\":10, \"d\":200}           |                            0 |\n+------+-----------------------------+------------------------------+\n3 rows in set (0.11 sec)\n\n# map_keys\n\nmysql> SELECT map_keys(map('k11', 1000, 'k22', 2000));\n+-----------------------------------------+\n| map_keys(map('k11', 1000, 'k22', 2000)) |\n+-----------------------------------------+\n| [\"k11\", \"k22\"]                          |\n+-----------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT id, map_keys(m) FROM simple_map ORDER BY id;\n+------+-----------------+\n| id   | map_keys(`m`)   |\n+------+-----------------+\n|    1 | [\"a\", \"b\"]      |\n|    2 | [\"b\", \"c\", \"d\"] |\n|    2 | [\"a\", \"d\"]      |\n+------+-----------------+\n3 rows in set (0.19 sec)\n\n# map_values\n\nmysql> SELECT map_values(map('k11', 1000, 'k22', 2000));\n+-------------------------------------------+\n| map_values(map('k11', 1000, 'k22', 2000)) |\n+-------------------------------------------+\n| [1000, 2000]                              |\n+-------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT id, map_values(m) FROM simple_map ORDER BY id;\n+------+-----------------+\n| id   | map_values(`m`) |\n+------+-----------------+\n|    1 | [100, 200]      |\n|    2 | [100, 200, 300] |\n|    2 | [10, 200]       |\n+------+-----------------+\n3 rows in set (0.18 sec)\n\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MAP\n")))}d.isMDXComponent=!0}}]);