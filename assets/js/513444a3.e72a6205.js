"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[246044],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=s(a),y=r,d=g["".concat(l,".").concat(y)]||g[y]||u[y]||i;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},179017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const i={title:"Temporary Partition",language:"en"},o=void 0,p={unversionedId:"data-operate/delete/table-temp-partition",id:"version-2.1/data-operate/delete/table-temp-partition",title:"Temporary Partition",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/data-operate/delete/table-temp-partition.md",sourceDirName:"data-operate/delete",slug:"/data-operate/delete/table-temp-partition",permalink:"/docs/2.1/data-operate/delete/table-temp-partition",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Temporary Partition",language:"en"},sidebar:"docs",previous:{title:"Replacing Atomic Table",permalink:"/docs/2.1/data-operate/delete/atomicity-replace"},next:{title:"Export Overview",permalink:"/docs/2.1/data-operate/export/export-overview"}},l={},s=[{value:"Add Temporary Partition",id:"add-temporary-partition",level:2},{value:"Delete Temporary Partition",id:"delete-temporary-partition",level:3},{value:"Replace Partition",id:"replace-partition",level:3},{value:"Importing Temporary Partitions",id:"importing-temporary-partitions",level:2},{value:"Query Temporary Partitions",id:"query-temporary-partitions",level:2},{value:"Relationship to Other Operations",id:"relationship-to-other-operations",level:2},{value:"DROP",id:"drop",level:3},{value:"TRUNCATE",id:"truncate",level:3},{value:"ALTER",id:"alter",level:3}],m={toc:s},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris supports adding temporary partitions to partitioned tables. Temporary partitions differ from formal partitions in that they are not queried by formal queries, but only by special query statements."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The partition columns of the temporary partition are the same as the formal partition and cannot be modified.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The partition ranges of all temporary partitions of a table cannot overlap, but the ranges of temporary partitions and formal partitions can overlap.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The partition name of the temporary partition cannot be the same as the formal partitions and other temporary partitions."))),(0,r.yg)("p",null,"Temporary Partitions are mainly used in the following scenarios:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Atomic overwrite write operations")),(0,r.yg)("p",null,"In some cases, users want to rewrite the data of a certain partition, but if they do it by deleting and then importing, there will be a period of time in the middle when they cannot view the data. In this case, the user can create a corresponding Temporary Partition first, and after importing the new data into the Temporary Partition, replace the original partition atomically through the Replace operation to achieve the purpose. For the atomic overwrite write operation of non-partitioned table, please refer to ",(0,r.yg)("a",{parentName:"p",href:"../../data-operate/delete/atomicity-replace"},"the documentation of Atomicity Replace"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Modifying the number of buckets")),(0,r.yg)("p",null,"In some cases, users use an inappropriate bucket number when creating partitions. Then the user can first create a Temporary Partition corresponding to the partition range and specify the new bucket number. Then import the data of the formal partition into the Temporary Partition through the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," command, and replace the original partition atomically through the Replace operation to achieve the purpose."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Merge or split partition")),(0,r.yg)("p",null,"In some cases, users want to modify the scope of partitions, such as merging two partitions, or splitting a large partition into several small partitions. You can first create a Temporary Partition corresponding to the scope of the merged or partitioned partition, and then import the data of the official partition into the Temporary Partition through the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," command, and then replace the original partition atomically through the Replacement operation, in order to achieve the purpose."),(0,r.yg)("h2",{id:"add-temporary-partition"},"Add Temporary Partition"),(0,r.yg)("p",null,"You can add temporary partitions to a table with the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER TABLE ADD TEMPORARY PARTITION")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01");\n\nALTER TABLE tbl2 ADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n\nALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai");\n\nALTER TABLE tbl4 ADD TEMPORARY PARTITION tp1 VALUES IN ((1, "Beijing"), (1, "Shanghai"));\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n')),(0,r.yg)("p",null,"See ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," for more help and examples."),(0,r.yg)("p",null,"Some instructions for adding operations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Adding a temporary partition is similar to adding a formal partition. The partition range of the temporary partition is independent of the formal partition.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Temporary partition can independently specify some attributes. Includes information such as the number of buckets, the number of replicas, or the storage medium."))),(0,r.yg)("h3",{id:"delete-temporary-partition"},"Delete Temporary Partition"),(0,r.yg)("p",null,"A table's temporary partition can be dropped with the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER TABLE DROP TEMPORARY PARTITION")," statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"ALTER TABLE tbl1 DROP TEMPORARY PARTITION tp1;\n")),(0,r.yg)("p",null,"See ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," for more help and examples."),(0,r.yg)("p",null,"Some instructions for the DELETE:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Deleting the temporary partition will not affect the data of the formal partition.")),(0,r.yg)("h3",{id:"replace-partition"},"Replace Partition"),(0,r.yg)("p",null,"You can replace formal partitions of a table with temporary partitions with the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER TABLE REPLACE PARTITION")," statement."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2, tp3);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2)\nPROPERTIES (\n    "strict_range" = "false",\n    "use_temp_partition_name" = "true"\n);\n')),(0,r.yg)("p",null,"See ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE;")," for more help and examples."),(0,r.yg)("p",null,"The replace operation has two special optional parameters:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. ",(0,r.yg)("inlineCode",{parentName:"strong"},"strict_range"))),(0,r.yg)("p",null,"The default is true. "),(0,r.yg)("p",null,"For Range partition, When this parameter is true, the range union of all formal partitions to be replaced needs to be the same as the range union of the temporary partitions to be replaced. When set to false, you only need to ensure that the range between the new formal partitions does not overlap after replacement. "),(0,r.yg)("p",null,"For List partition, this parameter is always true, and the enumeration values of all full partitions to be replaced must be identical to the enumeration values of the temporary partitions to be replaced."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Range of partitions p1, p2, p3 to be replaced (=> union):\n(10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n\n--Replace the range of partitions tp1, tp2 (=> union):\n(10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n\n--The union of ranges is the same, so you can use tp1 and tp2 to replace p1, p2, p3.\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 2")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--Range of partition p1 to be replaced (=> union):\n[10, 50) => [10, 50)\n\n--Replace the range of partitions tp1, tp2 (=> union):\n[10, 30), [40, 50) => [10, 30), [40, 50)\n\n--The union of ranges is not the same. If strict_range is true, you cannot use tp1 and tp2 to replace p1. If false, and the two partition ranges [10, 30), [40, 50) and the other formal partitions do not overlap, they can be replaced.\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 3")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--Enumerated values of partitions p1, p2 to be replaced (=> union).\n(1, 2, 3), (4, 5, 6) => (1, 2, 3, 4, 5, 6)\n--Replace the enumerated values of partitions tp1, tp2, tp3 (=> union).\n(1, 2, 3), (4), (5, 6) => (1, 2, 3, 4, 5, 6)\n--The enumeration values are the same, you can use tp1, tp2, tp3 to replace p1, p2\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 4")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'--Enumerated values of partitions p1, p2, p3 to be replaced (=> union).\n(("1","beijing"), ("1", "shanghai")), (("2","beijing"), ("2", "shanghai")), (("3","beijing"), ("3", "shanghai")) => (("1","beijing"), ("1", "shanghai"), ("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai"))\n\n--Replace the enumerated values of partitions tp1, tp2 (=> union).\n(("1","beijing"), ("1", "shanghai")), (("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai")) => (("1","beijing"), ("1", "shanghai"), ("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai"))\n\n--The enumeration values are the same, you can use tp1, tp2 to replace p1, p2, p3\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. ",(0,r.yg)("inlineCode",{parentName:"strong"},"use_temp_partition_name"))),(0,r.yg)("p",null,"The default is false."),(0,r.yg)("p",null,"When this parameter is false, and the number of partitions to be replaced is the same as the number of replacement partitions, the name of the formal partition after the replacement remains unchanged. "),(0,r.yg)("p",null,"If true, after replacement, the name of the formal partition is the name of the replacement partition. Here are some examples:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"use_temp_partition_name")," is ",(0,r.yg)("strong",{parentName:"p"},"false")," by default. After replacement, the partition name is still p1, but the related data and attributes are replaced with tp1."),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"use_temp_partition_name")," is ",(0,r.yg)("strong",{parentName:"p"},"true")," by default, the name of the partition is tp1 after replacement. The p1 partition no longer exists."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 2")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"ALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"use_temp_partition_name")," is ",(0,r.yg)("strong",{parentName:"p"},"false")," by default, but this parameter is invalid because the number of partitions to be replaced and the number of replacement partitions are different. After the replacement, the partition name is tp1, and p1 and p2 no longer exist."),(0,r.yg)("admonition",{title:"Tip ",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Some instructions for the replacement operation:")),(0,r.yg)("p",{parentName:"admonition"},"After the partition is replaced successfully, the replaced partition will be deleted and cannot be recovered.")),(0,r.yg)("h2",{id:"importing-temporary-partitions"},"Importing Temporary Partitions"),(0,r.yg)("p",null,"Depending on the import method, the syntax for specifying the import of Temporary Partitions is slightly different. Here is a brief explanation with an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO tbl TEMPORARY PARTITION(tp1, tp2, ...) SELECT ....\ncurl --location-trusted -u root: -H "label:123" -H "temporary_partitions: tp1, tp2, ..." -T testData http://host:port/api/testDb/testTbl/_stream_load    \nLOAD LABEL example_db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE my_table\nTEMPORARY PARTITION (tp1, tp2, ...)\n...\n)\nWITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\nCREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nTEMPORARY PARTITIONS(tp1, tp2, ...),\nWHERE k1 > 100\nPROPERTIES\n(...)\nFROM KAFKA\n(...);\n')),(0,r.yg)("h2",{id:"query-temporary-partitions"},"Query Temporary Partitions"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ... FROM\ntbl1 TEMPORARY PARTITION(tp1, tp2, ...)\nJOIN\ntbl2 TEMPORARY PARTITION(tp1, tp2, ...)\nON ...\nWHERE ...;\n")),(0,r.yg)("h2",{id:"relationship-to-other-operations"},"Relationship to Other Operations"),(0,r.yg)("h3",{id:"drop"},"DROP"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After using the ",(0,r.yg)("inlineCode",{parentName:"p"},"DROP")," operation to directly drop the database or table, you can recover the database or table (within a limited time) through the ",(0,r.yg)("inlineCode",{parentName:"p"},"RECOVER")," command, but the temporary partition will not be recovered.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After the formal partition is dropped using the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER")," command, the partition can be recovered by the ",(0,r.yg)("inlineCode",{parentName:"p"},"RECOVER")," command (within a limited time). Operating a formal partition is not related to a temporary partition.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After the temporary partition is dropped using the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER")," command, the temporary partition cannot be recovered through the ",(0,r.yg)("inlineCode",{parentName:"p"},"RECOVER")," command."))),(0,r.yg)("h3",{id:"truncate"},"TRUNCATE"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"TRUNCATE")," command to empty the table. The temporary partition of the table will be deleted and cannot be recovered.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When using ",(0,r.yg)("inlineCode",{parentName:"p"},"TRUNCATE")," command to empty the formal partition, it will not affect the temporary partition.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You cannot use the ",(0,r.yg)("inlineCode",{parentName:"p"},"TRUNCATE")," command to empty the temporary partition."))),(0,r.yg)("h3",{id:"alter"},"ALTER"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When the table has a temporary partition, you cannot use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER")," command to perform Schema Change, Rollup, etc. on the table.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You cannot add temporary partitions to a table while the table is undergoing a alter operation."))))}u.isMDXComponent=!0}}]);