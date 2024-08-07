"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[627599],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),g=o,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},987341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(58168),o=(a(296540),a(15680));const r={title:"Quick Start",language:"en"},i=void 0,s={unversionedId:"gettingStarted/quick-start",id:"version-1.2/gettingStarted/quick-start",title:"Quick Start",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/gettingStarted/quick-start.md",sourceDirName:"gettingStarted",slug:"/gettingStarted/quick-start",permalink:"/docs/1.2/gettingStarted/quick-start",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Quick Start",language:"en"},sidebar:"get-starting",previous:{title:"What's Apache Doris",permalink:"/docs/1.2/gettingStarted/what-is-apache-doris"},next:{title:"Building lakehouse using Doris and Hudi",permalink:"/docs/1.2/gettingStarted/tutorials/doris-hudi"}},l={},d=[{value:"Environment requirements",id:"environment-requirements",level:2},{value:"Download binary package",id:"download-binary-package",level:2},{value:"Install Apache Doris",id:"install-apache-doris",level:2},{value:"Configure FE",id:"configure-fe",level:3},{value:"Start FE",id:"start-fe",level:3},{value:"Configure BE",id:"configure-be",level:3},{value:"Start BE",id:"start-be",level:3},{value:"Connect to Doris FE",id:"connect-to-doris-fe",level:3},{value:"Add BE nodes to cluster",id:"add-be-nodes-to-cluster",level:3},{value:"Modify passwords for root and admin",id:"modify-passwords-for-root-and-admin",level:3},{value:"Create database and table",id:"create-database-and-table",level:2},{value:"Connect to Apache Doris",id:"connect-to-apache-doris",level:3},{value:"Create database and table",id:"create-database-and-table-1",level:3},{value:"Ingest data",id:"ingest-data",level:3},{value:"Query data",id:"query-data",level:3},{value:"Stop Apache Doris",id:"stop-apache-doris",level:2},{value:"Stop FE",id:"stop-fe",level:3},{value:"Stop BE",id:"stop-be",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"quick-start"},"Quick Start"),(0,o.yg)("p",null,"This guide is about how to download the latest stable version of Apache Doris, install it on a single node, and get it running, including steps for creating a database, data tables, importing data, and performing queries."),(0,o.yg)("h2",{id:"environment-requirements"},"Environment requirements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'A mainstream Linux x86-64 environment. CentOS 7.1 or Ubuntu 16.04 or later versions are recommended. See the "Install and Deploy" section of the doc for guides on more environments.'),(0,o.yg)("li",{parentName:"ul"},"Install Java 8 runtime environment. (If you are not an Oracle JDK commercial license user, we suggest using the free Oracle JDK 8u202. ",(0,o.yg)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html#license-lightbox"},"Download now"),".)"),(0,o.yg)("li",{parentName:"ul"},"It is recommended to create a new user for Apache Doris on Linux (avoid using the root user to prevent accidental operations on the operating system).")),(0,o.yg)("h2",{id:"download-binary-package"},"Download binary package"),(0,o.yg)("p",null,"Download the Apache Doris installation package from doris.apache.org and proceed with the following steps."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"# Download the binary installation package of Apache Doris\nserver1:~ doris$ wget https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-2.0.3-bin-x64.tar.gz\n\n# Extract the installation package\nserver1:~ doris$ tar zxf apache-doris-2.0.3-bin-x64.tar.gz\n\n# Rename the directory to apache-doris for simplicity\nserver1:~ doris$ mv apache-doris-2.0.3-bin-x64 apache-doris\n")),(0,o.yg)("h2",{id:"install-apache-doris"},"Install Apache Doris"),(0,o.yg)("h3",{id:"configure-fe"},"Configure FE"),(0,o.yg)("p",null,"Go to the ",(0,o.yg)("inlineCode",{parentName:"p"},"apache-doris/fe/fe.conf")," file for FE configuration. Below are some key configurations to pay attention to. Add JAVA_HOME manually and point it to your JDK8 runtime environment. For other configurations, you can go with the default values for a quick single-machine experience."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"# Add JAVA_HOME and point it to your JDK8 runtime environment. Suppose your JDK8 is at /home/doris/jdk8, set it as follows:\nJAVA_HOME=/home/doris/jdk8\n\n# The CIDR network segment of FE listening IP is empty by default. When started, Apache Doris will automatically select an available network segment. If you need to specify a segment, you can set priority_networks=92.168.0.0/24, for example.\n# priority_networks =\n\n# By default, FE metadata is stored in the doris-meta directory under DORIS_HOME. It is created already. You can change it to your specified path.\n# meta_dir = ${DORIS_HOME}/doris-meta\n")),(0,o.yg)("h3",{id:"start-fe"},"Start FE"),(0,o.yg)("p",null,"Run the following command under apache-doris/fe to start FE."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"# Start FE in the background to ensure that the process continues running even after exiting the terminal.\nserver1:apache-doris/fe doris$ ./bin/start_fe.sh --daemon\n")),(0,o.yg)("h3",{id:"configure-be"},"Configure BE"),(0,o.yg)("p",null,"Go to the ",(0,o.yg)("inlineCode",{parentName:"p"},"apache-doris/be/conf/be.conf")," file for BE configuration. Below are some key configurations to pay attention to. Add JAVA_HOME manually and point it to your JDK8 runtime environment. For other configurations, you can go with the default values for a quick single-machine experience."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Shell"},"# Add JAVA_HOME and point it to your JDK8 runtime environment. Suppose your JDK8 is at /home/doris/jdk8, set it as follows:\nJAVA_HOME=/home/doris/jdk8\n\n# The CIDR network segment of BE listening IP is empty by default. When started, Doris will automatically select an available network segment. If you need to specify a segment, you can set priority_networks=192.168.0.0/24, for example.\n# priority_networks =\n\n# By default, BE data is stored in the storage directory under DORIS_HOME. It is created already. You can change it to your specified path.\n# storage_root_path = ${DORIS_HOME}/storage\n")),(0,o.yg)("h3",{id:"start-be"},"Start BE"),(0,o.yg)("p",null,"Run the following command under apache-doris/be to start BE."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"# Start BE in the background to ensure that the process continues running even after exiting the terminal.\nserver1:apache-doris/be doris$ ./bin/start_be.sh --daemon\n")),(0,o.yg)("h3",{id:"connect-to-doris-fe"},"Connect to Doris FE"),(0,o.yg)("p",null,"Download the ",(0,o.yg)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/mysql/"},"portable MySQL client")," to connect to Doris FE."),(0,o.yg)("p",null,"Unpack the client, find the ",(0,o.yg)("inlineCode",{parentName:"p"},"mysql")," command-line tool in the ",(0,o.yg)("inlineCode",{parentName:"p"},"bin/")," directory. Then execute the following command to connect to Apache Doris."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"mysql -uroot -P9030 -h127.0.0.1\n")),(0,o.yg)("p",null,"Note:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The root user here is the built-in super admin user of Apache Doris. See ",(0,o.yg)("a",{parentName:"li",href:"../admin-manual/auth/authentication-and-authorization.md"},"Authentication and Authorization")," for more information."),(0,o.yg)("li",{parentName:"ul"},"-P: This specifies the query port that is connected to. The default port is 9030. It corresponds to the ",(0,o.yg)("inlineCode",{parentName:"li"},"query_port"),"setting in fe.conf."),(0,o.yg)("li",{parentName:"ul"},"-h: This specifies the IP address of the FE that is connected to. If your client and FE are installed on the same node, you can use 127.0.0.1.")),(0,o.yg)("h3",{id:"add-be-nodes-to-cluster"},"Add BE nodes to cluster"),(0,o.yg)("p",null,"An example SQL to execute in the MySQL client to add BE nodes to the cluster:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},' ALTER SYSTEM ADD BACKEND "be_host_ip:heartbeat_service_port";\n')),(0,o.yg)("p",null,"Note:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"be_host_ip: the IP address of the BE node to be added"),(0,o.yg)("li",{parentName:"ol"},"heartbeat_service_port: the heartbeat reporting port of the BE node to be added, which can be found in ",(0,o.yg)("inlineCode",{parentName:"li"},"be.conf"),"under ",(0,o.yg)("inlineCode",{parentName:"li"},"heartbeat_service_port"),", set as ",(0,o.yg)("inlineCode",{parentName:"li"},"9050")," by default"),(0,o.yg)("li",{parentName:"ol"},'You can use the "show backends" statement to view the newly added BE nodes.')),(0,o.yg)("h3",{id:"modify-passwords-for-root-and-admin"},"Modify passwords for root and admin"),(0,o.yg)("p",null,"Example SQLs to execute in the MySQL client to set new passwords for root and admin users:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql> SET PASSWORD FOR 'root' = PASSWORD('doris-root-password');                                                                                                                                                                                   \nQuery OK, 0 rows affected (0.01 sec)                                                                                                                                                                                                       \n                                                                                                                                                                                                                                           \nmysql> SET PASSWORD FOR 'admin' = PASSWORD('doris-admin-password');                                                                                                                                                                                 \nQuery OK, 0 rows affected (0.00 sec)        \n")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Difference between root and admin users"),(0,o.yg)("p",{parentName:"admonition"},"The root and admin users are two default accounts that are automatically created after Doris installation. The root user has superuser privileges for the entire cluster and can perform various management operations, such as adding or removing nodes. The admin user does not have administrative privileges but is a superuser within the cluster, possessing all permissions except those related to cluster management. It is recommended to use the root privileges only when necessary for cluster administration and maintenance.")),(0,o.yg)("h2",{id:"create-database-and-table"},"Create database and table"),(0,o.yg)("h3",{id:"connect-to-apache-doris"},"Connect to Apache Doris"),(0,o.yg)("p",null,"Use admin account to connect to Apache Doris FE."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"mysql -uadmin -P9030 -h127.0.0.1\n")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If the MySQL client connecting to 127.0.0.1 is on the same machine as FE, no password will be required.")),(0,o.yg)("h3",{id:"create-database-and-table-1"},"Create database and table"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},'create database demo;\n\nuse demo; \ncreate table mytable\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.05",    \n    k3 CHAR(10) COMMENT "string column",    \n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n) \nCOMMENT "my first table"\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\'replication_num\' = \'1\');\n')),(0,o.yg)("h3",{id:"ingest-data"},"Ingest data"),(0,o.yg)("p",null,'Save the following example data to the local "data.csv" file:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Plaintext"},"1,0.14,a1,20\n2,1.04,b2,21\n3,3.14,c3,22\n4,4.35,d4,23\n")),(0,o.yg)("p",null,'Load the data from "data.csv" into the newly created table using the Stream Load method.'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},'curl  --location-trusted -u admin:admin_password -T data.csv -H "column_separator:," http://127.0.0.1:8030/api/demo/mytable/_stream_load\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"-T data.csv: data file name"),(0,o.yg)("li",{parentName:"ul"},"-u admin:admin_password: admin account and password"),(0,o.yg)("li",{parentName:"ul"},"127.0.0.1:8030: IP and http_port of FE")),(0,o.yg)("p",null,"Once it is executed successfully, a message like the following will be returned: "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},'{                                                     \n    "TxnId": 30,                                  \n    "Label": "a56d2861-303a-4b50-9907-238fea904363",        \n    "Comment": "",                                       \n    "TwoPhaseCommit": "false",                           \n    "Status": "Success",                                 \n    "Message": "OK",                                    \n    "NumberTotalRows": 4,                                \n    "NumberLoadedRows": 4,                               \n    "NumberFilteredRows": 0,                             \n    "NumberUnselectedRows": 0,                          \n    "LoadBytes": 52,                                     \n    "LoadTimeMs": 206,                                    \n    "BeginTxnTimeMs": 13,                                \n    "StreamLoadPutTimeMs": 141,                           \n    "ReadDataTimeMs": 0,                                 \n    "WriteDataTimeMs": 7,                                \n    "CommitAndPublishTimeMs": 42                         \n} \n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"NumberLoadedRows"),": the number of rows that have been loaded"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"NumberTotalRows"),": the total number of rows to be loaded"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Status"),': "Success" means data has been loaded successfully.')),(0,o.yg)("h3",{id:"query-data"},"Query data"),(0,o.yg)("p",null,"Execute the following SQL in the MySQL client to query the loaded data:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql> select * from mytable;                                                                                                                                                                                                              \n+------+------+------+------+                                                                                                                                                                                                              \n| k1   | k2   | k3   | k4   |                                                                                                                                                                                                              \n+------+------+------+------+                                                                                                                                                                                                              \n|    1 | 0.14 | a1   |   20 |                                                                                                                                                                                                              \n|    2 | 1.04 | b2   |   21 |                                                                                                                                                                                                              \n|    3 | 3.14 | c3   |   22 |                                                                                                                                                                                                              \n|    4 | 4.35 | d4   |   23 |                                                                                                                                                                                                              \n+------+------+------+------+                                                                                                                                                                                                              \n4 rows in set (0.01 sec)       \n")),(0,o.yg)("h2",{id:"stop-apache-doris"},"Stop Apache Doris"),(0,o.yg)("h3",{id:"stop-fe"},"Stop FE"),(0,o.yg)("p",null,"Execute the following command under apache-doris/fe to stop FE."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"server1:apache-doris/fe doris$ ./bin/stop_fe.sh\n")),(0,o.yg)("h3",{id:"stop-be"},"Stop BE"),(0,o.yg)("p",null,"Execute the following command under apache-doris/be to stop BE."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Bash"},"server1:apache-doris/be doris$ ./bin/stop_be.sh\n")))}p.isMDXComponent=!0}}]);