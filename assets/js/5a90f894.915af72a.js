"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[412731],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>c});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),g=o,c=d["".concat(l,".").concat(g)]||d[g]||h[g]||r;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},57452:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(58168),o=(a(296540),a(15680));const r={title:"Monitoring and alarming",language:"en"},i=void 0,s={unversionedId:"admin-manual/maint-monitor/monitor-alert",id:"version-2.1/admin-manual/maint-monitor/monitor-alert",title:"Monitoring and alarming",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/maint-monitor/monitor-alert.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/monitor-alert",permalink:"/docs/2.1/admin-manual/maint-monitor/monitor-alert",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Monitoring and alarming",language:"en"},sidebar:"docs",previous:{title:"Tablet metadata management tool",permalink:"/docs/2.1/admin-manual/maint-monitor/tablet-meta-tool"},next:{title:"Tablet Local Debug",permalink:"/docs/2.1/admin-manual/maint-monitor/tablet-local-debug"}},l={},m=[{value:"Components",id:"components",level:2},{value:"Monitoring data",id:"monitoring-data",level:2},{value:"Monitoring Architecture",id:"monitoring-architecture",level:2},{value:"Start building",id:"start-building",level:2},{value:"Grafana",id:"grafana",level:3},{value:"Dashboard",id:"dashboard",level:2},{value:"Dashboard Update",id:"dashboard-update",level:2}],p={toc:m},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"monitoring-and-alarming"},"Monitoring and alarming"),(0,o.yg)("p",null,"This document mainly introduces Doris's monitoring items and how to collect and display them. And how to configure alarm (TODO)"),(0,o.yg)("p",null,"Dashboard template click download"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Doris Version"),(0,o.yg)("th",{parentName:"tr",align:null},"Dashboard Version"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"1.2.x"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://grafana.com/api/dashboards/9734/revisions/5/download"},"revision 5"))))),(0,o.yg)("p",null,"Dashboard templates are updated from time to time. The way to update the template is shown in the last section."),(0,o.yg)("p",null,"Welcome to provide better dashboard."),(0,o.yg)("h2",{id:"components"},"Components"),(0,o.yg)("p",null,"Doris uses ",(0,o.yg)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," and ",(0,o.yg)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," to collect and display input monitoring items."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(997410).A,width:"1829",height:"982"})),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Prometheus"),(0,o.yg)("p",{parentName:"li"},"Prometheus is an open source system monitoring and alarm suite. It can collect monitored items by Pull or Push and store them in its own time series database. And through the rich multi-dimensional data query language, to meet the different data display needs of users.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Grafana"),(0,o.yg)("p",{parentName:"li"},"Grafana is an open source data analysis and display platform. Support multiple mainstream temporal database sources including Prometheus. Through the corresponding database query statements, the display data is obtained from the data source. With flexible and configurable dashboard, these data can be quickly presented to users in the form of graphs."))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: This document only provides a way to collect and display Doris monitoring data using Prometheus and Grafana. In principle, these components are not developed or maintained. For more details on these components, please step through the corresponding official documents.")),(0,o.yg)("h2",{id:"monitoring-data"},"Monitoring data"),(0,o.yg)("p",null,"Doris's monitoring data is exposed through the HTTP interface of Frontend and Backend. Monitoring data is presented in the form of key-value text. Each Key may also be distinguished by different Labels. When the user has built Doris, the monitoring data of the node can be accessed in the browser through the following interfaces:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Frontend: ",(0,o.yg)("inlineCode",{parentName:"li"},"fe_host:fe_http_port/metrics")),(0,o.yg)("li",{parentName:"ul"},"Backend: ",(0,o.yg)("inlineCode",{parentName:"li"},"be_host:be_web_server_port/metrics")),(0,o.yg)("li",{parentName:"ul"},"Broker: Not available for now")),(0,o.yg)("p",null,"Users will see the following monitoring item results (for example, FE partial monitoring items):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 8476557312\njvm_heap_size_bytes{type="committed"} 1007550464\njvm_heap_size_bytes{type="used"} 156375280\n# HELP  jvm_non_heap_size_bytes jvm non heap stat\n# TYPE  jvm_non_heap_size_bytes gauge\njvm_non_heap_size_bytes{type="committed"} 194379776\njvm_non_heap_size_bytes{type="used"} 188201864\n# HELP  jvm_young_size_bytes jvm young mem pool stat\n# TYPE  jvm_young_size_bytes gauge\njvm_young_size_bytes{type="used"} 40652376\njvm_young_size_bytes{type="peak_used"} 277938176\njvm_young_size_bytes{type="max"} 907345920\n# HELP  jvm_old_size_bytes jvm old mem pool stat\n# TYPE  jvm_old_size_bytes gauge\njvm_old_size_bytes{type="used"} 114633448\njvm_old_size_bytes{type="peak_used"} 114633448\njvm_old_size_bytes{type="max"} 7455834112\n# HELP  jvm_gc jvm gc stat\n# TYPE  jvm_gc gauge\n<GarbageCollector>{type="count"} 247\n<GarbageCollector>{type="time"} 860\n# HELP  jvm_thread jvm thread stat\n# TYPE  jvm_thread gauge\njvm_thread{type="count"} 162\njvm_thread{type="peak_count"} 205\njvm_thread{type="new_count"} 0\njvm_thread{type="runnable_count"} 48\njvm_thread{type="blocked_count"} 1\njvm_thread{type="waiting_count"} 41\njvm_thread{type="timed_waiting_count"} 72\njvm_thread{type="terminated_count"} 0\n...\n')),(0,o.yg)("p",null,"This is a monitoring data presented in ",(0,o.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/"},"Prometheus Format"),". We take one of these monitoring items as an example to illustrate:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'# HELP  jvm_heap_size_bytes jvm heap stat\n# TYPE  jvm_heap_size_bytes gauge\njvm_heap_size_bytes{type="max"} 8476557312\njvm_heap_size_bytes{type="committed"} 1007550464\njvm_heap_size_bytes{type="used"} 156375280\n')),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Behavior commentary line at the beginning of "#". HELP is the description of the monitored item; TYPE represents the data type of the monitored item, and Gauge is the scalar data in the example. There are also Counter, Histogram and other data types. Specifically, you can see ',(0,o.yg)("a",{parentName:"li",href:"https://prometheus.io/docs/practices/instrumentation/#counter-vs.-gauge,-summary-vs.-histogram"},"Prometheus Official Document"),"."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"jvm_heap_size_bytes")," is the name of the monitored item (Key); ",(0,o.yg)("inlineCode",{parentName:"li"},'type= "max"')," is a label named ",(0,o.yg)("inlineCode",{parentName:"li"},"type"),", with a value of ",(0,o.yg)("inlineCode",{parentName:"li"},"max"),". A monitoring item can have multiple Labels."),(0,o.yg)("li",{parentName:"ol"},"The final number, such as ",(0,o.yg)("inlineCode",{parentName:"li"},"8476557312"),", is the monitored value.")),(0,o.yg)("h2",{id:"monitoring-architecture"},"Monitoring Architecture"),(0,o.yg)("p",null,"The entire monitoring architecture is shown in the following figure:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(36689).A,width:"410",height:"373"})),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The yellow part is Prometheus related components. Prometheus Server is the main process of Prometheus. At present, Prometheus accesses the monitoring interface of Doris node by Pull, and then stores the time series data in the time series database TSDB (TSDB is included in the Prometheus process, and need not be deployed separately). Prometheus also supports building ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/prometheus/pushgateway"},"Push Gateway")," to allow monitored data to be pushed to Push Gateway by Push by monitoring system, and then data from Push Gateway by Prometheus Server through Pull."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/prometheus/alertmanager"},"Alert Manager")," is a Prometheus alarm component, which needs to be deployed separately (no solution is provided yet, but can be built by referring to official documents). Through Alert Manager, users can configure alarm strategy, receive mail, short messages and other alarms."),(0,o.yg)("li",{parentName:"ol"},"The green part is Grafana related components. Grafana Server is the main process of Grafana. After startup, users can configure Grafana through Web pages, including data source settings, user settings, Dashboard drawing, etc. This is also where end users view monitoring data.")),(0,o.yg)("h2",{id:"start-building"},"Start building"),(0,o.yg)("p",null,"Please start building the monitoring system after you have completed the deployment of Doris."),(0,o.yg)("p",null,"Prometheus"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download the latest version of Prometheus on the ",(0,o.yg)("a",{parentName:"p",href:"https://prometheus.io/download/"},"Prometheus Website"),". Here we take version 2.43.0-linux-amd64 as an example.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Unzip the downloaded tar file on the machine that is ready to run the monitoring service.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open the configuration file prometheus.yml. Here we provide an example configuration and explain it (the configuration file is in YML format, pay attention to uniform indentation and spaces):"),(0,o.yg)("p",{parentName:"li"},"Here we use the simplest way of static files to monitor configuration. Prometheus supports a variety of ",(0,o.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/"},"service discovery"),", which can dynamically sense the addition and deletion of nodes."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"# my global config\nglobal:\n  scrape_interval:     15s # Global acquisition interval, default 1 m, set to 15s\n  evaluation_interval: 15s # Global rule trigger interval, default 1 m, set 15s here\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      # - alertmanager:9093\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'DORIS_CLUSTER' # Each Doris cluster, we call it a job. Job can be given a name here as the name of Doris cluster in the monitoring system.\n    metrics_path: '/metrics' # Here you specify the restful API to get the monitors. With host: port in the following targets, Prometheus will eventually collect monitoring items through host: port/metrics_path.\n    static_configs: # Here we begin to configure the target addresses of FE and BE, respectively. All FE and BE are written into their respective groups.\n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe # Here configure the group of fe, which contains three Frontends\n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be # Here configure the group of be, which contains three Backends\n\n  - job_name: 'DORIS_CLUSTER_2' # We can monitor multiple Doris clusters in a Prometheus, where we begin the configuration of another Doris cluster. Configuration is the same as above, the following is outlined.\n    metrics_path: '/metrics'\n    static_configs: \n      - targets: ['fe_host1:8030', 'fe_host2:8030', 'fe_host3:8030']\n        labels:\n          group: fe \n\n      - targets: ['be_host1:8040', 'be_host2:8040', 'be_host3:8040']\n        labels:\n          group: be \n              \n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"start Prometheus"),(0,o.yg)("p",{parentName:"li"},"Start Prometheus with the following command:"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},'nohup ./prometheus --web.listen-address="0.0.0.0:8181" &')),(0,o.yg)("p",{parentName:"li"},"This command will run Prometheus in the background and specify its Web port as 8181. After startup, data is collected and stored in the data directory.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"stop Promethues"),(0,o.yg)("p",{parentName:"li"},"At present, there is no formal way to stop the process, kill - 9 directly. Of course, Prometheus can also be set as a service to start and stop in a service way.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"access Prometheus"),(0,o.yg)("p",{parentName:"li"},"Prometheus can be easily accessed through web pages. The page of Prometheus can be accessed by opening port 8181 through browser. Click on the navigation bar, ",(0,o.yg)("inlineCode",{parentName:"p"},"Status")," -> ",(0,o.yg)("inlineCode",{parentName:"p"},"Targets"),", and you can see all the monitoring host nodes of the grouped Jobs. Normally, all nodes should be ",(0,o.yg)("inlineCode",{parentName:"p"},"UP"),", indicating that data acquisition is normal. Click on an ",(0,o.yg)("inlineCode",{parentName:"p"},"Endpoint")," to see the current monitoring value. If the node state is not UP, you can first access Doris's metrics interface (see previous article) to check whether it is accessible, or query Prometheus related documents to try to resolve.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"So far, a simple Prometheus has been built and configured. For more advanced usage, see ",(0,o.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"Official Documents")))),(0,o.yg)("h3",{id:"grafana"},"Grafana"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download the latest version of Grafana on ",(0,o.yg)("a",{parentName:"p",href:"https://grafana.com/grafana/download"},"Grafana's official website"),". Here we take version 8.5.22.linux-amd64 as an example.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Unzip the downloaded tar file on the machine that is ready to run the monitoring service.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open the configuration file conf/defaults.ini. Here we only list the configuration items that need to be changed, and the other configurations can be used by default."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"# Path to where grafana can store temp files, sessions, and the sqlite3 db (if that is used)\ndata = data\n\n# Directory where grafana can store logs\nlogs = data/log\n\n# Protocol (http, https, socket)\nprotocal = http\n\n# The ip address to bind to, empty will bind to all interfaces\nhttp_addr =\n\n# The http port to use\nhttp_port = 8182\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"start Grafana"),(0,o.yg)("p",{parentName:"li"},"Start Grafana with the following command"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"nohup ./bin/grafana-server &")),(0,o.yg)("p",{parentName:"li"},"This command runs Grafana in the background, and the access port is 8182 configured above.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"stop Grafana"),(0,o.yg)("p",{parentName:"li"},"At present, there is no formal way to stop the process, kill - 9 directly. Of course, you can also set Grafana as a service to start and stop as a service.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"access Grafana"),(0,o.yg)("p",{parentName:"li"},"Through the browser, open port 8182, you can start accessing the Grafana page. The default username password is admin.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure Grafana"),(0,o.yg)("p",{parentName:"li"},"For the first landing, you need to set up the data source according to the prompt. Our data source here is Prometheus, which was configured in the previous step."),(0,o.yg)("p",{parentName:"li"},"The Setting page of the data source configuration is described as follows:"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"Name: Name of the data source, customized, such as doris_monitor_data_source"),(0,o.yg)("li",{parentName:"ol"},"Type: Select Prometheus"),(0,o.yg)("li",{parentName:"ol"},"URL: Fill in the web address of Prometheus, such as http://host:8181"),(0,o.yg)("li",{parentName:"ol"},"Access: Here we choose the Server mode, which is to access Prometheus through the server where the Grafana process is located."),(0,o.yg)("li",{parentName:"ol"},"The other options are available by default."),(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("inlineCode",{parentName:"li"},"Save & Test")," at the bottom. If ",(0,o.yg)("inlineCode",{parentName:"li"},"Data source is working"),", it means that the data source is available."),(0,o.yg)("li",{parentName:"ol"},"After confirming that the data source is available, click on the + number in the left navigation bar and start adding Dashboard. Here we have prepared Doris's dashboard template (at the beginning of this document). When the download is complete, click ",(0,o.yg)("inlineCode",{parentName:"li"},"New dashboard")," -> ",(0,o.yg)("inlineCode",{parentName:"li"},"Import dashboard")," -> ",(0,o.yg)("inlineCode",{parentName:"li"},"Upload.json File")," above to import the downloaded JSON file."),(0,o.yg)("li",{parentName:"ol"},"After importing, you can name Dashboard by default ",(0,o.yg)("inlineCode",{parentName:"li"},"Doris Overview"),". At the same time, you need to select the data source, where you select the ",(0,o.yg)("inlineCode",{parentName:"li"},"doris_monitor_data_source")," you created earlier."),(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("inlineCode",{parentName:"li"},"Import")," to complete the import. Later, you can see Doris's dashboard display."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"So far, a simple Grafana has been built and configured. For more advanced usage, see ",(0,o.yg)("a",{parentName:"p",href:"http://docs.grafana.org/"},"Official Documents")))),(0,o.yg)("h2",{id:"dashboard"},"Dashboard"),(0,o.yg)("p",null,"Here we briefly introduce Doris Dashboard. The content of Dashboard may change with the upgrade of version. This document is not guaranteed to be the latest Dashboard description."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Top Bar"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{src:a(762704).A,width:"1829",height:"117"})),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"The upper left corner is the name of Dashboard."),(0,o.yg)("li",{parentName:"ul"},"The upper right corner shows the current monitoring time range. You can choose different time ranges by dropping down. You can also specify a regular refresh page interval."),(0,o.yg)("li",{parentName:"ul"},"Cluster name: Each job name in the Prometheus configuration file represents a Doris cluster. Select a different cluster, and the chart below shows the monitoring information for the corresponding cluster."),(0,o.yg)("li",{parentName:"ul"},"fe_master: The Master Frontend node corresponding to the cluster."),(0,o.yg)("li",{parentName:"ul"},"fe_instance: All Frontend nodes corresponding to the cluster. Select a different Frontend, and the chart below shows the monitoring information for the Frontend."),(0,o.yg)("li",{parentName:"ul"},"be_instance: All Backend nodes corresponding to the cluster. Select a different Backend, and the chart below shows the monitoring information for the Backend."),(0,o.yg)("li",{parentName:"ul"},"Interval: Some charts show rate-related monitoring items, where you can choose how much interval to sample and calculate the rate (Note: 15s interval may cause some charts to be unable to display)."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Row."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{src:a(931735).A,width:"280",height:"82"})),(0,o.yg)("p",{parentName:"li"},"In Grafana, the concept of Row is a set of graphs. As shown in the figure above, Overview and Cluster Overview are two different Rows. Row can be folded by clicking Row. Currently Dashboard has the following Rows (in continuous updates):"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"Overview: A summary display of all Doris clusters."),(0,o.yg)("li",{parentName:"ol"},"Cluster Overview: A summary display of selected clusters."),(0,o.yg)("li",{parentName:"ol"},"Query Statistic: Query-related monitoring of selected clusters."),(0,o.yg)("li",{parentName:"ol"},"FE JVM: Select Frontend's JVM monitoring."),(0,o.yg)("li",{parentName:"ol"},"BE: A summary display of the backends of the selected cluster."),(0,o.yg)("li",{parentName:"ol"},"BE Task: Display of Backends Task Information for Selected Clusters."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Charts"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{src:a(861009).A,width:"606",height:"280"})),(0,o.yg)("p",{parentName:"li"},"A typical icon is divided into the following parts:"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"Hover the I icon in the upper left corner of the mouse to see the description of the chart."),(0,o.yg)("li",{parentName:"ol"},"Click on the illustration below to view a monitoring item separately. Click again to display all."),(0,o.yg)("li",{parentName:"ol"},"Dragging in the chart can select the time range."),(0,o.yg)("li",{parentName:"ol"},"The selected cluster name is displayed in [] of the title."),(0,o.yg)("li",{parentName:"ol"},"Some values correspond to the Y-axis on the left and some to the right, which can be distinguished by the ",(0,o.yg)("inlineCode",{parentName:"li"},"-right")," at the end of the legend."),(0,o.yg)("li",{parentName:"ol"},"Click on the name of the chart -> ",(0,o.yg)("inlineCode",{parentName:"li"},"Edit")," to edit the chart.")))),(0,o.yg)("h2",{id:"dashboard-update"},"Dashboard Update"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click on ",(0,o.yg)("inlineCode",{parentName:"li"},"+")," in the left column of Grafana and ",(0,o.yg)("inlineCode",{parentName:"li"},"Dashboard"),"."),(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("inlineCode",{parentName:"li"},"New dashboard")," in the upper left corner, and ",(0,o.yg)("inlineCode",{parentName:"li"},"Import dashboard")," appears on the right."),(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("inlineCode",{parentName:"li"},"Upload .json File")," to select the latest template file."),(0,o.yg)("li",{parentName:"ol"},"Selecting Data Sources"),(0,o.yg)("li",{parentName:"ol"},"Click on ",(0,o.yg)("inlineCode",{parentName:"li"},"Import (Overwrite)")," to complete the template update.")))}h.isMDXComponent=!0},762704:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dashboard_navibar-c771e898791f510a5cb89bc3ef23bc33.png"},997410:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dashboard_overview-45d556af325e2561e171c7dfdcd12f37.png"},861009:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dashboard_panel-d86986f1ab0e9ce35b25ce0bac21b432.png"},931735:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dashboard_row-f66fca759880441573e4dd3ea53c316b.png"},36689:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/monitor_arch-1c53c13bb72ba1970574ca0428791ad0.png"}}]);