"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[970176],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>g});var a=o(296540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return o?a.createElement(g,s(s({ref:t},p),{},{components:o})):a.createElement(g,s({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},935076:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=o(58168),r=(o(296540),o(15680));const n={title:"Overview",language:"en"},s=void 0,i={unversionedId:"compute-storage-decoupled/overview",id:"version-3.0/compute-storage-decoupled/overview",title:"Overview",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/compute-storage-decoupled/overview.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/overview",permalink:"/docs/compute-storage-decoupled/overview",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Overview",language:"en"},sidebar:"docs",previous:{title:"SQL Dialect Convertor",permalink:"/docs/lakehouse/sql-dialect"},next:{title:"Before Deployment",permalink:"/docs/compute-storage-decoupled/before-deployment"}},l={},c=[{value:"<strong>Compute-storage coupled VS decoupled</strong>",id:"compute-storage-coupled-vs-decoupled",level:2},{value:"<strong>Compute-storage coupled</strong>",id:"compute-storage-coupled",level:3},{value:"<strong>Compute-storage decoupled</strong>",id:"compute-storage-decoupled",level:3},{value:"How to choose",id:"how-to-choose",level:2},{value:"Advantages of compute-storage coupled mode",id:"advantages-of-compute-storage-coupled-mode",level:3},{value:"Applicable scenarios of compute-storage coupled mode",id:"applicable-scenarios-of-compute-storage-coupled-mode",level:3},{value:"Advantages of compute-storage decoupled mode",id:"advantages-of-compute-storage-decoupled-mode",level:3},{value:"Applicable scenarios of compute-storage decoupled mode",id:"applicable-scenarios-of-compute-storage-decoupled-mode",level:3},{value:"Workload isolation across compute clusters",id:"workload-isolation-across-compute-clusters",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This article introduces the differences, advantages, and applicable scenarios of the compute-storage coupled mode and compute-storage decoupled mode of Doris, providing a reference for users' selection. "),(0,r.yg)("p",null,"The following sections will describe in detail how to deploy and use Apache Doris in the compute-storage decoupled mode. For information on deployment in compute-storage coupled mode, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/install/cluster-deployment/standard-deployment"},"Cluster Deployment")," section."),(0,r.yg)("h2",{id:"compute-storage-coupled-vs-decoupled"},(0,r.yg)("strong",{parentName:"h2"},"Compute-storage coupled VS decoupled")),(0,r.yg)("p",null,"The overall architecture of Doris consists of two types of processes: Frontend (FE) and Backend (BE). The FE is primarily responsible for user request access, query parsing and planning, metadata management, and node management. The BE is responsible for data storage and query plan execution. (",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/get-starting/what-is-apache-doris/"},"More information"),")"),(0,r.yg)("h3",{id:"compute-storage-coupled"},(0,r.yg)("strong",{parentName:"h3"},"Compute-storage coupled")),(0,r.yg)("p",null,"In the compute-storage coupled mode, the BE nodes perform both data storage and computation, and multiple BE nodes forms a massively parallel processing (MPP) distributed computing architecture."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"compute-storage-coupled",src:o(567930).A,width:"1280",height:"787"})),(0,r.yg)("h3",{id:"compute-storage-decoupled"},(0,r.yg)("strong",{parentName:"h3"},"Compute-storage decoupled")),(0,r.yg)("p",null,"The BE nodes no longer store the primary data. Instead, the shared storage layer serves as the unified primary data storage. Additionally, to overcome the performance loss caused by the limitations of the underlying object storage system and the overhead of network transmission, Doris introduces a high-speed cache on the local compute nodes."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"compute-storage-decoupled",src:o(556225).A,width:"1831",height:"1126"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Meta data layer:")),(0,r.yg)("p",null,"The FE stores metadata, job information, permissions, and other MySQL protocol-dependent data."),(0,r.yg)("p",null,"Meta Service is the Doris metadata service in the compute-storage decoupling mode. It is responsible for data import transaction processing, tablet meta, rowset meta, and cluster resource management. It is a stateless service that can scale horizontally."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Computation layer:")," "),(0,r.yg)("p",null,"In the compute-storage decoupled mode, the BE nodes are stateless. They cache a portion of the tablet metadata and data to improve query performance."),(0,r.yg)("p",null,"A compute cluster is a collection of stateless BE nodes serving as the computing resources. Multiple compute clusters share a single set of data, and the compute clusters can be elastically scaled by adding or removing nodes as needed."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},'The concept of compute cluster in the compute-storage decoupled mode is distinct from the "cluster" discussed in the ',"[Cluster Deployment]"," and ","[Create Cluster]"," sections."),(0,r.yg)("p",{parentName:"admonition"},'In the context of the compute-storage decoupled mode, the "Compute Cluster" specifically refers to the collection of stateless BE nodes that serve as the computing resources, rather than the complete distributed system consisting of multiple Apache Doris nodes as described in the ',"[Cluster Deployment]"," and ","[Create Cluster]"," sections.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Shared storage layer:")),(0,r.yg)("p",null,"The shared storage layer stores the data files, including segment files and the inverted index files."),(0,r.yg)("h2",{id:"how-to-choose"},"How to choose"),(0,r.yg)("h3",{id:"advantages-of-compute-storage-coupled-mode"},"Advantages of compute-storage coupled mode"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Simple deployment"),": Apache Doris does not depend on external shared file systems or object storage. It only requires the deployment of the FE and BE processes on physical servers to set up the cluster. The cluster can be scaled from a single node to hundreds of nodes. Such architecture also enhances system stability."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"High performance"),": When executing computations, the compute nodes in Apache Doris can directly access the local storage. This means it can fully utilize the machine I/O, and achieve higher query performance by reducing unnecessary network overhead.")),(0,r.yg)("h3",{id:"applicable-scenarios-of-compute-storage-coupled-mode"},"Applicable scenarios of compute-storage coupled mode"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For simple usage or a quick trial of Doris, or for use in development and testing environments;"),(0,r.yg)("li",{parentName:"ul"},"When there is a lack of reliable shared storage options (HDFS, Ceph, or object storage, etc.);"),(0,r.yg)("li",{parentName:"ul"},"When different business teams in the company maintain Apache Doris independently, without dedicated DBA staff to manage the Doris cluster;"),(0,r.yg)("li",{parentName:"ul"},"When there is no requirement for high elastic scalability, no need for Kubernetes containerization, and no need to run on public or private clouds.")),(0,r.yg)("h3",{id:"advantages-of-compute-storage-decoupled-mode"},"Advantages of compute-storage decoupled mode"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Elastic computing resources"),": Apache Doris allows using different scales of computing resources at different time points to serve different business requests. In simple terms, it supports on-demand computing resources to save costs."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"(Complete) isolation of workloads"),": Different business teams can have their computing resources isolated on top of shared data, providing both stability and high efficiency."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Low storage costs"),": Decoupling computation and storage allows the use of object storage, HDFS, and other low-cost storage solutions.")),(0,r.yg)("h3",{id:"applicable-scenarios-of-compute-storage-decoupled-mode"},"Applicable scenarios of compute-storage decoupled mode"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When you have already adopted public cloud services;"),(0,r.yg)("li",{parentName:"ul"},"When you have reliable shared storage systems, such as HDFS, Ceph, and object storage;"),(0,r.yg)("li",{parentName:"ul"},"When you require high elastic scalability, Kubernetes containerization, or to run on a private cloud;"),(0,r.yg)("li",{parentName:"ul"},"When you have a dedicated team responsible for maintaining the company's entire data warehouse platform.")),(0,r.yg)("h2",{id:"workload-isolation-across-compute-clusters"},"Workload isolation across compute clusters"),(0,r.yg)("p",null,"As mentioned earlier, a compute cluster is formed by one or more stateless BE nodes. By using the compute cluster specification statement (",(0,r.yg)("inlineCode",{parentName:"p"},"use @<cluster_name>"),"), you can direct specific workloads to specific compute clusters, thus realizing physical isolation of data import and query workloads."),(0,r.yg)("p",null,"Assuming there are 2 compute clusters: C1 and C2."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Read isolation"),": Before initiating two large queries, you can leverage ",(0,r.yg)("inlineCode",{parentName:"p"},"use @c1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"use @c2")," respectively to make the two queries run on different compute nodes. In this way, the two queries will not interfere with each other due to competition for CPU and memory resources when accessing the same dataset."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Read-write isolation"),": Data imports can consume resources, especially with large data volumes and high import frequency. To avoid resource contention between queries and imports, you can specify query requests to run on C1 and import requests to run on C2 using ",(0,r.yg)("inlineCode",{parentName:"p"},"use @c1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"use @c2"),". Meanwhile, the ",(0,r.yg)("inlineCode",{parentName:"p"},"c1")," compute cluster can access the newly imported data in the ",(0,r.yg)("inlineCode",{parentName:"p"},"c2")," compute cluster."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Write-write isolation"),": Data import tasks can also be isolated from each other. In some cases, the system handles both high-frequency small imports and large-scale batch imports. The batch imports often take longer and have higher retry costs, while the high-frequency small imports are the opposite. To avoid small imports interfering with batch imports, you can direct the small imports to run on ",(0,r.yg)("inlineCode",{parentName:"p"},"c1")," and the batch imports to run on ",(0,r.yg)("inlineCode",{parentName:"p"},"c2")," via ",(0,r.yg)("inlineCode",{parentName:"p"},"use @c1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"use @c2"),"."))}u.isMDXComponent=!0},567930:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/compute-storage-coupled-2c6444e9b197af5b7a513f90a8438cc0.png"},556225:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/compute-storage-decoupled-cedee5c6b9e68fd174f61973723ca655.png"}}]);