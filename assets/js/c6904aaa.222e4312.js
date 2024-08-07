"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[378028],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},299730:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(58168),n=(a(296540),a(15680));const o={title:"Arrow Flight SQL for 10X faster data transfer",description:"Apache Doris 2.1 supports Arrow Flight SQL protocol for reading data from Doris. It delivers tens-fold speedups compared to PyMySQL and Pandas.",date:"2024-04-16",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer.png"},s=void 0,i={permalink:"/blog/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer",source:"@site/blog/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer.md",title:"Arrow Flight SQL for 10X faster data transfer",description:"Apache Doris 2.1 supports Arrow Flight SQL protocol for reading data from Doris. It delivers tens-fold speedups compared to PyMySQL and Pandas.",date:"2024-04-16T00:00:00.000Z",formattedDate:"April 16, 2024",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Arrow Flight SQL for 10X faster data transfer",description:"Apache Doris 2.1 supports Arrow Flight SQL protocol for reading data from Doris. It delivers tens-fold speedups compared to PyMySQL and Pandas.",date:"2024-04-16",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer.png"},prevItem:{title:"Apache Doris version 2.0.9 has been released",permalink:"/blog/release-note-2.0.9"},nextItem:{title:"Apache Doris 2.1.2 just released",permalink:"/blog/release-note-2.1.2"}},l={authorsImageUrls:[void 0]},c=[{value:"High-speed data transfer based on Arrow Flight SQL",id:"high-speed-data-transfer-based-on-arrow-flight-sql",level:2},{value:"Performance test",id:"performance-test",level:2},{value:"Usage",id:"usage",level:2},{value:"01  Install library",id:"01--install-library",level:3},{value:"02  Connect to Doris",id:"02--connect-to-doris",level:3},{value:"03  Create table and retrieve metadata",id:"03--create-table-and-retrieve-metadata",level:3},{value:"04  Ingest data",id:"04--ingest-data",level:3},{value:"05  Execute queries",id:"05--execute-queries",level:3},{value:"06  Complete code",id:"06--complete-code",level:3},{value:"Examples of data transmission at scale",id:"examples-of-data-transmission-at-scale",level:2},{value:"01  Python",id:"01--python",level:3},{value:"02  JDBC",id:"02--jdbc",level:3},{value:"03  JAVA",id:"03--java",level:3},{value:"04  Spark",id:"04--spark",level:3},{value:"Hop on the trend train",id:"hop-on-the-trend-train",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(p,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"For years, JDBC and ODBC have been commonly adopted norms for database interaction. Now, as we gaze upon the vast expanse of the data realm, the rise of data science and data lake analytics brings bigger and bigger datasets. Correspondingly, we need faster and faster data reading and transmission, so we start to look for better answers than JDBC and ODBC. Thus, we include ",(0,n.yg)("strong",{parentName:"p"},"Arrow Flight SQL protocol")," into ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org"},"Apache Doris 2.1"),", which provides ",(0,n.yg)("strong",{parentName:"p"},"tens-fold speedups for data transfer"),". "),(0,n.yg)("admonition",{title:"Tip",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"A ",(0,n.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=zIqy24gI8DE"},"demo")," of loading data from Apache Doris to Python using Arrow Flight SQL.")),(0,n.yg)("h2",{id:"high-speed-data-transfer-based-on-arrow-flight-sql"},"High-speed data transfer based on Arrow Flight SQL"),(0,n.yg)("p",null,"As a column-oriented data warehouse, Apache Doris arranges its query results in the form of data Blocks in a columnar format. Before version 2.1, the Blocks must be serialized into bytes in row-oriented formats before they can be transferred to a target client via a MySQL client or JDBC/ODBC driver. Moreover, if the target client is a columnar database or a column-oriented data science component like Pandas, the data should then be de-serialized. The serialization-deserialization process is a speed bump for data transmission."),(0,n.yg)("p",null,"Apache Doris 2.1 has a data transmission channel built on ",(0,n.yg)("a",{parentName:"p",href:"https://arrow.apache.org/docs/format/FlightSql.html"},"Arrow Flight SQL"),". (",(0,n.yg)("a",{parentName:"p",href:"https://arrow.apache.org/"},"Apache Arrow")," is a software development platform designed for high data movement efficiency across systems and languages, and the Arrow format aims for high-performance, lossless data exchange.) It allows ",(0,n.yg)("strong",{parentName:"p"},"high-speed, large-scale data reading from Doris via SQL in various mainstream programming languages"),". For target clients that also support the Arrow format, the whole process will be free of serialization/deserialization, thus no performance loss. Another upside is, Arrow Flight can make full use of multi-node and multi-core architecture and implement parallel data transfer, which is another enabler of high data throughput."),(0,n.yg)("p",null,"For example, if a Python client reads data from Apache Doris, Doris will first convert the column-oriented Blocks to Arrow RecordBatch. Then in the Python client, Arrow RecordBatch will be converted to Pandas DataFrame. Both conversions are fast because the Doris Blocks, Arrow RecordBatch, and Pandas DataFrame are all column-oriented. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"img",src:a(957477).A,width:"1280",height:"647"})),(0,n.yg)("p",null,"In addition, Arrow Flight SQL provides a general JDBC driver to facilitate seamless communication between databases that supports the Arrow Flight SQL protocol. This unlocks the the potential of Doris to be connected to a wider ecosystem and to be used in more cases. "),(0,n.yg)("h2",{id:"performance-test"},"Performance test"),(0,n.yg)("p",null,'The "tens-fold speedups" conclusion is based on our benchmark tests. We tried reading data from Doris using PyMySQL, Pandas, and Arrow Flight SQL, and jotted down the durations, respectively. The test data is the ClickBench dataset.'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Performance test",src:a(735927).A,width:"1980",height:"1062"})),(0,n.yg)("p",null,"Results on various data types are as follows: "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Performance test results",src:a(381498).A,width:"1280",height:"481"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"As shown, Arrow Flight SQL outperforms PyMySQL and Pandas in all data types by a factor ranging from 20 to several hundreds"),". "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Arrow Flight SQL outperforms PyMySQL and Pandas",src:a(699075).A,width:"1280",height:"502"})),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("p",null,"With support for Arrow Flight SQL, Apache Doris can leverage the Python ADBC Driver for fast data reading. I will showcase a few frequently executed database operations using the Python ADBC Driver (version 3.9 or later), including DDL, DML, session variable setting, and ",(0,n.yg)("inlineCode",{parentName:"p"},"show")," statements."),(0,n.yg)("h3",{id:"01--install-library"},"01  Install library"),(0,n.yg)("p",null,"The relevant library is already published on PyPI. It can be installed simply as follows: "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"pip install adbc_driver_manager\npip install adbc_driver_flightsql\n")),(0,n.yg)("p",null,"Import the following module/library to interact with the installed library: "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Python"},"import adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n")),(0,n.yg)("h3",{id:"02--connect-to-doris"},"02  Connect to Doris"),(0,n.yg)("p",null,"Create a client for interacting with the Doris Arrow Flight SQL service. Prerequisites include: Doris frontend (FE) host, Arrow Flight port, and login username/password."),(0,n.yg)("p",null,"Configure parameters for Doris frontend (FE) and backend (BE):"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In ",(0,n.yg)("inlineCode",{parentName:"p"},"fe/conf/fe.conf"),", set ",(0,n.yg)("inlineCode",{parentName:"p"},"arrow_flight_sql_port ")," to an available port, such as 9090.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"In ",(0,n.yg)("inlineCode",{parentName:"p"},"be/conf/be.conf"),", set ",(0,n.yg)("inlineCode",{parentName:"p"},"arrow_flight_sql_port ")," to an available port, such as 9091."))),(0,n.yg)("p",null,'Suppose that the Arrow Flight SQL services for the Doris instance will run on ports 9090 and 9091 for FE and BE respectively, and the Doris username/password is "user" and "pass", the connection process would be:'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},'conn = flight_sql.connect(uri="grpc://127.0.0.1:9090", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "user",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "pass",\n        })\ncursor = conn.cursor()\n')),(0,n.yg)("p",null,"Once the connection is established, you can interact with Doris using SQL statements through the returned cursor object. This allows you to perform various operations such as table creation, metadata retrieval, data import, and query execution."),(0,n.yg)("h3",{id:"03--create-table-and-retrieve-metadata"},"03  Create table and retrieve metadata"),(0,n.yg)("p",null,"Pass the query to the ",(0,n.yg)("inlineCode",{parentName:"p"},"cursor.execute()")," function, which creates tables and retrieves metadata."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},'cursor.execute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("create database arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show databases;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("use arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show create table arrow_flight_sql_test;")\nprint(cursor.fetchallarrow().to_pandas())\n')),(0,n.yg)("p",null,"If the returned ",(0,n.yg)("inlineCode",{parentName:"p"},"StatusResult")," is 0, that means the query is executed successfully. (Such design is to ensure compatibility with JDBC.)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"  StatusResult\n0            0\n\n  StatusResult\n0            0\n\n                   Database\n0         __internal_schema\n1          arrow_flight_sql\n..                      ...\n507             udf_auth_db\n\n[508 rows x 1 columns]\n\n  StatusResult\n0            0\n\n  StatusResult\n0            0\n                   Table                                       Create Table\n0  arrow_flight_sql_test  CREATE TABLE `arrow_flight_sql_test` (\\n  `k0`...\n")),(0,n.yg)("h3",{id:"04--ingest-data"},"04  Ingest data"),(0,n.yg)("p",null,"Execute an INSERT INTO statement to load test data into the table created:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"cursor.execute(\"\"\"INSERT INTO arrow_flight_sql_test VALUES\n        ('0', 0.1, \"ID\", 0.0001, 9999999999, '2023-10-21'),\n        ('1', 0.20, \"ID_1\", 1.00000001, 0, '2023-10-21'),\n        ('2', 3.4, \"ID_1\", 3.1, 123456, '2023-10-22'),\n        ('3', 4, \"ID\", 4, 4, '2023-10-22'),\n        ('4', 122345.54321, \"ID\", 122345.54321, 5, '2023-10-22');\"\"\")\nprint(cursor.fetchallarrow().to_pandas())\n")),(0,n.yg)("p",null,"If you see the following returned result, the data ingestion is successful."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"  StatusResult\n0            0\n")),(0,n.yg)("p",null,"If the data size to ingest is huge, you can apply the Stream Load method using ",(0,n.yg)("a",{parentName:"p",href:"https://pypi.org/project/pydoris/"},"pydoris"),"."),(0,n.yg)("h3",{id:"05--execute-queries"},"05  Execute queries"),(0,n.yg)("p",null,"Perform queries on the above table, such as aggregation, sorting, and session variable setting."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},'cursor.execute("select * from arrow_flight_sql_test order by k0;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("set exec_mem_limit=2000;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show variables like \\"%exec_mem_limit%\\";")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\nprint(cursor.fetchallarrow().to_pandas())\n')),(0,n.yg)("p",null,"The results are as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},"   k0            k1    K2                k3          k4          k5\n0   0       0.10000    ID       0.000100000  9999999999  2023-10-21\n1   1       0.20000  ID_1       1.000000010           0  2023-10-21\n2   2       3.40000  ID_1       3.100000000      123456  2023-10-22\n3   3       4.00000    ID       4.000000000           4  2023-10-22\n4   4  122345.54321    ID  122345.543210000           5  2023-10-22\n\n[5 rows x 6 columns]\n\n  StatusResult\n0            0\n\n    Variable_name Value Default_Value Changed\n0  exec_mem_limit  2000    2147483648       1\n\n           k5  Nullable(Float64)_1  Int64_2 Nullable(Decimal(38, 9))_3\n0  2023-10-22         122352.94321        3            40784.214403333\n1  2023-10-21              0.30000        2                0.500050005\n\n[2 rows x 5 columns]\n")),(0,n.yg)("h3",{id:"06--complete-code"},"06  Complete code"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Python"},'# Doris Arrow Flight SQL Test\n\n# step 1, library is released on PyPI and can be easily installed.\n# pip install adbc_driver_manager\n# pip install adbc_driver_flightsql\nimport adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n\n# step 2, create a client that interacts with the Doris Arrow Flight SQL service.\n# Modify arrow_flight_sql_port in fe/conf/fe.conf to an available port, such as 9090.\n# Modify arrow_flight_sql_port in be/conf/be.conf to an available port, such as 9091.\nconn = flight_sql.connect(uri="grpc://127.0.0.1:9090", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "root",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "",\n        })\ncursor = conn.cursor()\n\n# interacting with Doris via SQL using Cursor\ndef execute(sql):\n    print("\\n### execute query: ###\\n " + sql)\n    cursor.execute(sql)\n    print("### result: ###")\n    print(cursor.fetchallarrow().to_pandas())\n\n# step3, execute DDL statements, create database/table, show stmt.\nexecute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nexecute("show databases;")\nexecute("create database arrow_flight_sql;")\nexecute("show databases;")\nexecute("use arrow_flight_sql;")\nexecute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nexecute("show create table arrow_flight_sql_test;")\n\n\n# step4, insert into\nexecute("""INSERT INTO arrow_flight_sql_test VALUES\n        (\'0\', 0.1, "ID", 0.0001, 9999999999, \'2023-10-21\'),\n        (\'1\', 0.20, "ID_1", 1.00000001, 0, \'2023-10-21\'),\n        (\'2\', 3.4, "ID_1", 3.1, 123456, \'2023-10-22\'),\n        (\'3\', 4, "ID", 4, 4, \'2023-10-22\'),\n        (\'4\', 122345.54321, "ID", 122345.54321, 5, \'2023-10-22\');""")\n\n\n# step5, execute queries, aggregation, sort, set session variable\nexecute("select * from arrow_flight_sql_test order by k0;")\nexecute("set exec_mem_limit=2000;")\nexecute("show variables like \\"%exec_mem_limit%\\";")\nexecute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\n\n# step6, close cursor \ncursor.close()\n')),(0,n.yg)("h2",{id:"examples-of-data-transmission-at-scale"},"Examples of data transmission at scale"),(0,n.yg)("h3",{id:"01--python"},"01  Python"),(0,n.yg)("p",null,"In Python, after connecting to Doris using the ADBC Driver, you can use various ADBC APIs to load the Clickbench dataset from Doris into Python. Here's how:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Python"},'#!/usr/bin/env python\n# -*- coding: utf-8 -*-\n\nimport adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\nimport pandas\nfrom datetime import datetime\n\nmy_uri = "grpc://0.0.0.0:`fe.conf_arrow_flight_sql_port`"\nmy_db_kwargs = {\n    adbc_driver_manager.DatabaseOptions.USERNAME.value: "root",\n    adbc_driver_manager.DatabaseOptions.PASSWORD.value: "",\n}\nsql = "select * from clickbench.hits limit 1000000;"\n\n# PEP 249 (DB-API 2.0) API wrapper for the ADBC Driver Manager.\ndef dbapi_adbc_execute_fetchallarrow():\n    conn = flight_sql.connect(uri=my_uri, db_kwargs=my_db_kwargs)\n    cursor = conn.cursor()\n    start_time = datetime.now()\n    cursor.execute(sql)\n    arrow_data = cursor.fetchallarrow()\n    dataframe = arrow_data.to_pandas()\n    print("\\n##################\\n dbapi_adbc_execute_fetchallarrow" + ", cost:" + str(datetime.now() - start_time) + ", bytes:" + str(arrow_data.nbytes) + ", len(arrow_data):" + str(len(arrow_data)))\n    print(dataframe.info(memory_usage=\'deep\'))\n    print(dataframe)\n\n# ADBC reads data into pandas dataframe, which is faster than fetchallarrow first and then to_pandas.\ndef dbapi_adbc_execute_fetch_df():\n    conn = flight_sql.connect(uri=my_uri, db_kwargs=my_db_kwargs)\n    cursor = conn.cursor()\n    start_time = datetime.now()\n    cursor.execute(sql)\n    dataframe = cursor.fetch_df()    \n    print("\\n##################\\n dbapi_adbc_execute_fetch_df" + ", cost:" + str(datetime.now() - start_time))\n    print(dataframe.info(memory_usage=\'deep\'))\n    print(dataframe)\n\n# Can read multiple partitions in parallel.\ndef dbapi_adbc_execute_partitions():\n    conn = flight_sql.connect(uri=my_uri, db_kwargs=my_db_kwargs)\n    cursor = conn.cursor()\n    start_time = datetime.now()\n    partitions, schema = cursor.adbc_execute_partitions(sql)\n    cursor.adbc_read_partition(partitions[0])\n    arrow_data = cursor.fetchallarrow()\n    dataframe = arrow_data.to_pandas()\n    print("\\n##################\\n dbapi_adbc_execute_partitions" + ", cost:" + str(datetime.now() - start_time) + ", len(partitions):" + str(len(partitions)))\n    print(dataframe.info(memory_usage=\'deep\'))\n    print(dataframe)\n\ndbapi_adbc_execute_fetchallarrow()\ndbapi_adbc_execute_fetch_df()\ndbapi_adbc_execute_partitions()\n')),(0,n.yg)("p",null,"Results are as follows (omitting the repeated outputs). ",(0,n.yg)("strong",{parentName:"p"},"It only takes 3s")," to load a Clickbench dataset containing 1 million rows and 105 columns. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Python"},"##################\n dbapi_adbc_execute_fetchallarrow, cost:0:00:03.548080, bytes:784372793, len(arrow_data):1000000\n<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 1000000 entries, 0 to 999999\nColumns: 105 entries, CounterID to CLID\ndtypes: int16(48), int32(19), int64(6), object(32)\nmemory usage: 2.4 GB\nNone\n        CounterID   EventDate               UserID            EventTime              WatchID  JavaEnable                                              Title  GoodEvent  ...  UTMCampaign  UTMContent  UTMTerm  FromTag  HasGCLID          RefererHash              URLHash  CLID\n0          245620  2013-07-09  2178958239546411410  2013-07-09 19:30:27  8302242799508478680           1  OWAProfessionov \u2014 \u041c\u043e\u0439 \u041a\u0440\u0443\u0433 (\u0421\u0412\u0410\u041e \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d          1  ...                                                    0 -7861356476484644683 -2933046165847566158     0\n999999       1095  2013-07-03  4224919145474070397  2013-07-03 14:36:17  6301487284302774604           0  @\u0434\u043d\u0435\u0432\u043d\u0438\u043a\u0438 Sinatra (\u041b\u0410\u0414\u0410, \u0446\u0435\u043d\u0430 \u0434\u043b\u044f \u0434\u0435\u0442\u0430\u043b\u043b\u0438 \u043a\u0442\u043e ...          1  ...                                                    0  -296158784638538920  1335027772388499430     0\n\n[1000000 rows x 105 columns]\n\n##################\n dbapi_adbc_execute_fetch_df, cost:0:00:03.611664\n##################\n dbapi_adbc_execute_partitions, cost:0:00:03.483436, len(partitions):1\n##################\n low_level_api_execute_query, cost:0:00:03.523598, stream.address:139992182177600, rows:-1, bytes:784322926, len(arrow_data):1000000\n##################\n low_level_api_execute_partitions, cost:0:00:03.738128streams.size:3, 1, -1\n")),(0,n.yg)("h3",{id:"02--jdbc"},"02  JDBC"),(0,n.yg)("p",null,"The open-source JDBC driver for the Arrow Flight SQL protocol provides compatibility with the standard JDBC API. It allows most BI tools to access Doris via JDBC and supports high-speed transfer of Apache Arrow data. "),(0,n.yg)("p",null,"Usage of this driver is similar to using that for the MySQL protocol. You just need to replace ",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc:mysql")," in the connection URL with ",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc:arrow-flight-sql"),". The returned result will be in the JDBC ResultSet data structure. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Java"},'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.ResultSet;\nimport java.sql.Statement;\n\nClass.forName("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver");\nString DB_URL = "jdbc:arrow-flight-sql://0.0.0.0:9090?useServerPrepStmts=false"\n        + "&cachePrepStmts=true&useSSL=false&useEncryption=false";\nString USER = "root";\nString PASS = "";\n\nConnection conn = DriverManager.getConnection(DB_URL, USER, PASS);\nStatement stmt = conn.createStatement();\nResultSet resultSet = stmt.executeQuery("show tables;");\nwhile (resultSet.next()) {\n    String col1 = resultSet.getString(1);\n    System.out.println(col1);\n}\n\nresultSet.close();\nstmt.close();\nconn.close();\n')),(0,n.yg)("h3",{id:"03--java"},"03  JAVA"),(0,n.yg)("p",null,"Similar to that with Python, you can directly create an ADBC client with JAVA to read data from Doris. Firstly, you need to obtain the FlightInfo. Then, you connect to each endpoint to pull the data."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Java"},'// method one\nAdbcStatement stmt = connection.createStatement()\nstmt.setSqlQuery("SELECT * FROM " + tableName)\n// executeQuery, two steps:\n// 1. Execute Query and get returned FlightInfo;\n// 2. Create FlightInfoReader to sequentially traverse each Endpoint;\nQueryResult queryResult = stmt.executeQuery()\n\n\n// method two\nAdbcStatement stmt = connection.createStatement()\nstmt.setSqlQuery("SELECT * FROM " + tableName)\n// Execute Query and parse each Endpoint in FlightInfo, and use the Location and Ticket to construct a PartitionDescriptor\npartitionResult = stmt.executePartitioned();\npartitionResult.getPartitionDescriptors()\n//Create ArrowReader for each PartitionDescriptor to read data\nArrowReader reader = connection2.readPartition(partitionResult.getPartitionDescriptors().get(0).getDescriptor()))\n')),(0,n.yg)("h3",{id:"04--spark"},"04  Spark"),(0,n.yg)("p",null,"For Spark users, apart from connecting to Flight SQL Server using JDBC and JAVA, you can apply the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/qwshen/spark-flight-connector"},"Spark-Flight-Connector"),", which enables Spark to act as a client for reading and writing data from/to a Flight SQL Server. This is made possible by the fast data conversion between the Arrow format and the Block in Apache Doris, which is ",(0,n.yg)("strong",{parentName:"p"},"10 times faster than the conversion between CSV and Block"),". Moreover, the Arrow data format provides more comprehensive and robust support for complex data types such as Map and Array."),(0,n.yg)("h2",{id:"hop-on-the-trend-train"},"Hop on the trend train"),(0,n.yg)("p",null,"A number of enterprise users of Doris has tried loading data from Doris to Python, Spark, and Flink using Arrow Flight SQL and enjoyed much faster data reading speed. In the future, we plan to include the support for Arrow Flight SQL in data writing, too. By then, most systems built with mainstream programming languages will be able to read and write data from/to Apache Doris by an ADBC client. That's high-speed data interaction which opens up numerous possibilities. On our to-do list, we also envision leveraging Arrow Flight to implement parallel data reading by multiple backends and facilitate federated queries across Doris and Spark. "),(0,n.yg)("p",null,"Download ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Apache Doris 2.1")," and get a taste of 100 times faster data transfer powered by Arrow Flight SQL. If you need assistance, come find us in the ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2kl08hzc0-SPJe4VWmL_qzrFd2u2XYQA"},"Apache Doris developer and user community"),"."))}u.isMDXComponent=!0},381498:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/doris-performance-test-2-8c60cb82710df9d37e6707593830da6c.png"},699075:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/doris-performance-test-3-b48f9e4bdec4a27877fcddbb33e6375a.png"},735927:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/doris-performance-test-a0ccb1f783b2f85210c63d8aa961f649.png"},957477:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/high-speed-data-transfer-based-on-doris-arrow-flight-sql-c51538bca23f1062d141adab8fe055cb.png"}}]);