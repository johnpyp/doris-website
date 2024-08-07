"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[953706],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},505845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"Kubernetes Deployment",language:"en"},i=void 0,o={unversionedId:"install/k8s-deploy",id:"version-1.2/install/k8s-deploy",title:"Kubernetes Deployment",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/install/k8s-deploy.md",sourceDirName:"install",slug:"/install/k8s-deploy",permalink:"/docs/1.2/install/k8s-deploy",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Kubernetes Deployment",language:"en"},sidebar:"docs",previous:{title:"Deploy Docker cluster",permalink:"/docs/1.2/install/construct-docker/run-docker-cluster"},next:{title:"General Compilation",permalink:"/docs/1.2/install/source-install/compilation-general"}},s={},p=[{value:"Environmental Preparation",id:"environmental-preparation",level:2},{value:"Starting a cluster",id:"starting-a-cluster",level:2},{value:"Expansion and contraction capacity",id:"expansion-and-contraction-capacity",level:2},{value:"test and verify",id:"test-and-verify",level:2},{value:"K8s simple operation command",id:"k8s-simple-operation-command",level:2},{value:"common problem",id:"common-problem",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"k8s-deployment-doris"},"K8s Deployment Doris"),(0,a.yg)("version",{since:"dev"}),(0,a.yg)("h2",{id:"environmental-preparation"},"Environmental Preparation"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Installation k8s"),(0,a.yg)("li",{parentName:"ul"},"Build or download a Doris image",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Building an image ",(0,a.yg)("a",{parentName:"li",href:"./construct-docker/construct-docker-image"},"Build Docker Image")),(0,a.yg)("li",{parentName:"ul"},"Download Image ",(0,a.yg)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/doris/tags"},"https://hub.docker.com/r/apache/doris/tags")))),(0,a.yg)("li",{parentName:"ul"},"Create or download the yml file for Doris on k8s",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_follower.yml"},"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_follower.yml")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_be.yml"},"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_be.yml")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_cn.yml"},"https://github.com/apache/doris/blob/master/docker/runtime/k8s/doris_cn.yml"))))),(0,a.yg)("h2",{id:"starting-a-cluster"},"Starting a cluster"),(0,a.yg)("p",null,"Start FE (role type is Follower):",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create -f doris_follower.yml")," "),(0,a.yg)("p",null,"Start BE:",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create -f doris_be.yml")," "),(0,a.yg)("p",null,"Start the BE (role type is Compute Node):",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl create -f doris_cn.yml")),(0,a.yg)("h2",{id:"expansion-and-contraction-capacity"},"Expansion and contraction capacity"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"FE",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Currently, scaling is not supported. It is recommended to initialize 1 or 3 nodes as needed"))),(0,a.yg)("li",{parentName:"ul"},"BE",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Command:",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl scale statefulset doris-be-cluster1 --replicas=4")))),(0,a.yg)("li",{parentName:"ul"},"BE (role type is Compute Node)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Command:",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl scale statefulset doris-cn-cluster1 --replicas=4"))))),(0,a.yg)("h2",{id:"test-and-verify"},"test and verify"),(0,a.yg)("p",null,"Connect to the FE using mysql-client and perform operations such as' show backends' and 'show frontends' to view the status of each node"),(0,a.yg)("h2",{id:"k8s-simple-operation-command"},"K8s simple operation command"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Executing the yml file for the first time ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl create -f xxx.yml")),(0,a.yg)("li",{parentName:"ul"},"Execute after modifying the yml file ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl apply -f xxx.yml")),(0,a.yg)("li",{parentName:"ul"},"Delete all resources defined by yml ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl delete -f xxx.yml")),(0,a.yg)("li",{parentName:"ul"},"View the pod list ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl get pods")),(0,a.yg)("li",{parentName:"ul"},"Entering the container ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl exec -it xxx\uff08podName\uff09 -- /bin/sh")),(0,a.yg)("li",{parentName:"ul"},"view log ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl logs xxx\uff08podName\uff09")),(0,a.yg)("li",{parentName:"ul"},"View IP and port information ",(0,a.yg)("inlineCode",{parentName:"li"},"kubectl get ep")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kubernetes.io"},"More knowledge of k8s"))),(0,a.yg)("h2",{id:"common-problem"},"common problem"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"How is data persistent?"),(0,a.yg)("p",{parentName:"li"},"Users need to mount PVC on their own to persist metadata information, data information, or log information")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"How to safely shrink the BE node?"),(0,a.yg)("p",{parentName:"li"},"BE:User manual execution is required before current resizing",(0,a.yg)("a",{parentName:"p",href:"../../docs/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},"ALTER-SYSTEM-DECOMMISSION-BACKEND")),(0,a.yg)("p",{parentName:"li"},"BE(The role type is Compute Node): Do not store data files and can directly shrink\uff0c",(0,a.yg)("a",{parentName:"p",href:"../../docs/advanced/compute_node"},"About Computing Nodes"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'FE startup error "failed to init statefulSetName"'),(0,a.yg)("p",{parentName:"li"},"doris",(0,a.yg)("em",{parentName:"p"}," The environment variables statefulSetName and serviceName for follower. yml must appear in pairs, such as CN configured")," SERVICE, CN must be configured_ STATEFULSET"))))}u.isMDXComponent=!0}}]);