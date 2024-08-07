"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[206987],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>g});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,g=u["".concat(c,".").concat(y)]||u[y]||s[y]||l;return r?t.createElement(g,i(i({ref:n},d),{},{components:r})):t.createElement(g,i({ref:n},d))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},583913:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=r(58168),a=(r(296540),r(15680));const l={title:"\u7f16\u8bd1\u90e8\u7f72",language:"zh-CN"},i=void 0,o={unversionedId:"compute-storage-decoupled/compilation-and-deployment",id:"version-3.0/compute-storage-decoupled/compilation-and-deployment",title:"\u7f16\u8bd1\u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/compute-storage-decoupled/compilation-and-deployment.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/compilation-and-deployment",permalink:"/zh-CN/docs/compute-storage-decoupled/compilation-and-deployment",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u7f16\u8bd1\u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"\u90e8\u7f72\u524d\u51c6\u5907",permalink:"/zh-CN/docs/compute-storage-decoupled/before-deployment"},next:{title:"\u521b\u5efa\u96c6\u7fa4",permalink:"/zh-CN/docs/compute-storage-decoupled/creating-cluster"}},c={},p=[{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u7248\u672c\u4fe1\u606f",id:"\u7248\u672c\u4fe1\u606f",level:2},{value:"Meta Service \u548c Recycler \u90e8\u7f72",id:"meta-service-\u548c-recycler-\u90e8\u7f72",level:2},{value:"Meta Service \u914d\u7f6e",id:"meta-service-\u914d\u7f6e",level:3},{value:"Recycler \u914d\u7f6e",id:"recycler-\u914d\u7f6e",level:3},{value:"\u6a21\u5757\u542f\u505c",id:"\u6a21\u5757\u542f\u505c",level:3},{value:"\u542f\u505c Meta Service",id:"\u542f\u505c-meta-service",level:3},{value:"\u542f\u505c Recycler",id:"\u542f\u505c-recycler",level:3}],d={toc:p},u="wrapper";function s(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u5728\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\u8fdb\u884c Doris \u7f16\u8bd1\u4e0e\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f\u7684\u7f16\u8bd1\u76f8\u4f3c\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u65b0\u589e Meta Service \u6a21\u5757\u7684\u7f16\u8bd1\u548c\u90e8\u7f72\u3002"),(0,a.yg)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,a.yg)("p",null,"\u5b58\u7b97\u5206\u79bb\u548c\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f\u4e0b\u7684\u7f16\u8bd1\u65b9\u5f0f\u76f8\u4f3c\uff0c\u5747\u4f7f\u7528\u4ee3\u7801\u5e93\u81ea\u5e26\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sh")," \u811a\u672c\u7f16\u8bd1\uff0c\u65b0\u589e\u7684 Meta Service \u6a21\u5757\u4f7f\u7528\u53c2\u6570",(0,a.yg)("inlineCode",{parentName:"p"},"--cloud")," \u5373\u53ef\u7f16\u51fa\uff08\u4e8c\u8fdb\u5236\u540d\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_cloud"),"\uff09\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"sh build.sh --fe --be --cloud \n")),(0,a.yg)("p",null,"\u4e0d\u540c\u4e8e\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f\uff0c\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u7f16\u8bd1\u540e\uff0c\u53ef\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"output")," \u76ee\u5f55\u4e0b\u53d1\u73b0\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"ms")," \u76ee\u5f55\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"output\n\u251c\u2500\u2500 be\n\u251c\u2500\u2500 fe\n\u2514\u2500\u2500 ms\n    \u251c\u2500\u2500 bin\n    \u251c\u2500\u2500 conf\n    \u2514\u2500\u2500 lib\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"\u76ee\u5f55\u4f5c\u4e3a\u7f16\u8bd1\u4ea7\u51fa\uff0c\u5c06\u540c\u65f6\u670d\u52a1\u4e8e Meta Service \u548c Recycler\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5c3d\u7ba1 Meta Service \u548c Recycler \u5728\u672c\u8d28\u4e0a\u5c5e\u4e8e\u540c\u4e00\u7a0b\u5e8f\uff0c\u4f46\u76ee\u524d\u9700\u8981\u5206\u522b\u4e3a\u5b83\u4eec\u51c6\u5907\u72ec\u7acb\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002Meta Service \u548c Recycler \u4e24\u4e2a\u76ee\u5f55\u5b8c\u5168\u4e00\u81f4\uff0c\u53ea\u662f\u542f\u52a8\u53c2\u6570\u4e0d\u540c\u3002"),(0,a.yg)("p",null,"\u51c6\u5907\u4e24\u4efd\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u53ea\u9700\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4ece",(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"\u76ee\u5f55\u4e2d\u62f7\u8d1d\u4e8c\u8fdb\u5236\u6587\u4ef6\u81f3\u4e00\u4e2a\u65b0\u7684 Recycler \u5de5\u4f5c\u76ee\u5f55",(0,a.yg)("inlineCode",{parentName:"p"},"re"),"\uff0c\u7136\u540e\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"re"),"\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"conf"),"\u5b50\u76ee\u5f55\u4e0b\uff0c\u5bf9\u7aef\u53e3\u53f7\u7b49\u53c2\u6570\u6309\u9700\u8fdb\u884c\u5fc5\u8981\u4fee\u6539\u5373\u53ef\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"cp -r ms re\n")),(0,a.yg)("h2",{id:"\u7248\u672c\u4fe1\u606f"},"\u7248\u672c\u4fe1\u606f"),(0,a.yg)("p",null,"\u53ef\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u68c0\u67e5",(0,a.yg)("inlineCode",{parentName:"p"},"doris_cloud")," \u7684\u7248\u672c\u4fe1\u606f\uff0c\u82e5\u5176\u4e2d\u4e00\u79cd\u65b9\u5f0f\u65e0\u6cd5\u6b63\u786e\u6267\u884c\uff0c\u53ef\u5c1d\u8bd5\u53e6\u4e00\u65b9\u5f0f\uff0c\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"\u6216\u8005",(0,a.yg)("inlineCode",{parentName:"p"},"re"),"\u76ee\u5f55\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"bin/start.sh --version")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"lib/doris_cloud --version"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},'$ lib/doris_cloud --version\nversion:{doris_cloud-0.0.0-debug} code_version:{commit=b9c1d057f07dd874ad32501ff43701247179adcb time=2024-03-24 20:44:50 +0800} build_info:{initiator=gavinchou@VM-10-7-centos build_at=2024-03-24 20:44:50 +0800 build_on=NAME="TencentOS Server" VERSION="3.1 (Final)" }\n')),(0,a.yg)("h2",{id:"meta-service-\u548c-recycler-\u90e8\u7f72"},"Meta Service \u548c Recycler \u90e8\u7f72"),(0,a.yg)("p",null,"Meta Service \u548c Recycler \u662f\u540c\u4e00\u7a0b\u5e8f\u7684\u4e0d\u540c\u8fdb\u7a0b\uff0c\u901a\u8fc7\u542f\u52a8\u4e0d\u540c\u53c2\u6570\u6765\u5206\u522b\u8fd0\u884c\u3002"),(0,a.yg)("p",null,"\u8fd9\u4e24\u4e2a\u8fdb\u7a0b\u4f9d\u8d56 FoundationDB\uff0c\u5173\u4e8e FoundationDB \u7684\u90e8\u7f72\u53ef\u53c2\u8003\u201c\u90e8\u7f72\u524d\u51c6\u5907\u201d\u9875\u7684 FoundationDB \u5b89\u88c5\u6307\u5f15\uff09\u3002"),(0,a.yg)("h3",{id:"meta-service-\u914d\u7f6e"},"Meta Service \u914d\u7f6e"),(0,a.yg)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"./conf")," \u76ee\u5f55\u4e0b\u7684\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6 ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_cloud.conf"),"\u4e2d\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"brpc_listen_port")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"fdb_cluster")," \u4e24\u4e2a\u53c2\u6570\u3002\uff08Meta Service \u914d\u7f6e\u53ea\u9700\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u3002\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"brpc_listen_port = 5000\nfdb_cluster = xxx:yyy@127.0.0.1:4500\n")),(0,a.yg)("p",null,"\u4e0a\u8ff0 ",(0,a.yg)("inlineCode",{parentName:"p"},"brpc_listen_port = 5000")," \u662f Meta Service \u7684\u9ed8\u8ba4\u7aef\u53e3\u3002\u5176\u4e2d\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"fdb_cluster")," \u662f FoundationDB \u96c6\u7fa4\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u901a\u5e38\u53ef\u4ece FoundationDB \u6240\u90e8\u7f72\u673a\u5668\u4e0a\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/fdb.cluster")," \u6587\u4ef6\u4e2d\u83b7\u5f97\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"cat /etc/foundationdb/fdb.cluster\n\nDO NOT EDIT!\nThis file is auto-generated, it is not to be edited by hand.\ncloud_ssb:A83c8Y1S3ZbqHLL4P4HHNTTw0A83CuHj@127.0.0.1:4500\n")),(0,a.yg)("h3",{id:"recycler-\u914d\u7f6e"},"Recycler \u914d\u7f6e"),(0,a.yg)("p",null,"\u9664\u4e86\u7aef\u53e3\u5916\uff0cRecycler \u7684\u5176\u4ed6\u9ed8\u8ba4\u914d\u7f6e\u5747\u4e0e Meta Service \u76f8\u540c\u3002Recycler \u7684 bRPC \u7aef\u53e3\u4e00\u822c\u91c7\u7528 5100\u3002"),(0,a.yg)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"./conf")," \u76ee\u5f55\u4e0b\u7684\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6 ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_cloud.conf"),"\u4e2d\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"brpc_listen_port")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"fdb_cluster")," \u4e24\u4e2a\u53c2\u6570\u3002\uff08Recycler \u914d\u7f6e\u53ea\u9700\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u3002\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"brpc_listen_port = 5100\nfdb_cluster = xxx:yyy@127.0.0.1:4500\n")),(0,a.yg)("p",null,"\u4e0a\u8ff0 ",(0,a.yg)("inlineCode",{parentName:"p"},"brpc_listen_port = 5100")," \u662f Recycler \u7684\u9ed8\u8ba4\u7aef\u53e3\u3002\u5176\u4e2d\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"fdb_cluster")," \u662f FoundationDB \u96c6\u7fa4\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u901a\u5e38\u53ef\u4ece FoundationDB \u6240\u90e8\u7f72\u673a\u5668\u4e0a\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/fdb.cluster")," \u6587\u4ef6\u4e2d\u83b7\u5f97\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"cat /etc/foundationdb/fdb.cluster\n\nDO NOT EDIT!\nThis file is auto-generated, it is not to be edited by hand.\ncloud_ssb:A83c8Y1S3ZbqHLL4P4HHNTTw0A83CuHj@127.0.0.1:4500\n")),(0,a.yg)("h3",{id:"\u6a21\u5757\u542f\u505c"},"\u6a21\u5757\u542f\u505c"),(0,a.yg)("p",null,"Meta Service \u548c Recycler \u4f9d\u8d56 JAVA \u8fd0\u884c\u73af\u5883\uff0c\u5e76\u4f7f\u7528 OpenJDK 17\u3002\u5728\u542f\u52a8\u524d\u8fd9\u4e24\u4e2a\u670d\u52a1\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u6b63\u786e\u8bbe\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"export JAVA_HOME")," \u73af\u5883\u53d8\u91cf\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"doris_cloud")," \u90e8\u7f72\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e86\u542f\u505c\u811a\u672c\uff0c\u8c03\u7528\u5bf9\u5e94\u7684\u542f\u505c\u811a\u672c\u5373\u53ef\u5b8c\u6210\u542f\u505c\u3002"),(0,a.yg)("h3",{id:"\u542f\u505c-meta-service"},"\u542f\u505c Meta Service"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"ms")," \u76ee\u5f55\u4e2d\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"export JAVA_HOME=${path_to_jdk_17}\nbin/start.sh --meta-service --daemonized\n\nbin/stop.sh\n")),(0,a.yg)("h3",{id:"\u542f\u505c-recycler"},"\u542f\u505c Recycler"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"re")," \u76ee\u5f55\u4e2d\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Shell"},"export JAVA_HOME=${path_to_jdk_17}\nbin/start.sh --recycler --daemonized\n\nbin/stop.sh\n")),(0,a.yg)("p",null,"\u5728\u6210\u529f\u90e8\u7f72\u5e76\u542f\u52a8 Meta Service \u548c Recycler \u4e4b\u540e\uff0cDoris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u7684\u5e95\u5ea7\u4fbf\u5df2\u5b8c\u6210\u642d\u5efa\u3002"),(0,a.yg)("p",null,"\u82e5 Meta Service \u8fdb\u7a0b\u6b63\u5e38\u542f\u52a8\uff0c\u5c06\u80fd\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_cloud.out")," \u6587\u4ef6\u4e2d\u89c2\u5bdf\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"meta-service started")," \u7684\u8f93\u51fa\u4fe1\u606f\u3002\u540c\u6837\u5730\uff0cRecycler \u8fdb\u7a0b\u5982\u679c\u6b63\u5e38\u542f\u52a8\uff0c\u5219\u4f1a\u5728\u8be5\u6587\u4ef6\u4e2d\u663e\u793a ",(0,a.yg)("inlineCode",{parentName:"p"},"recycler started")," \u7684\u8f93\u51fa\u4fe1\u606f\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'Tue Jun 18 00:46:37 CST 2024\nprocess working directory: "/mnt/disk1/gavinchou/debug/doris-cloud/ms"\npid=2682786 written to file=./bin/doris_cloud.pid\nversion:{doris_cloud-0.0.0-debug} code_version:{commit=4517faffbf79b48d34a94abb22ee090f2d6e2007 time=2024-06-18 00:40:29 +0800} build_info:{initiator=gavinchou@VM-10-7-centos build_at=2024-06-18 00:40:29 +0800 build_on=NAME="TencentOS Server" VERSION="3.1 (Final)" }\n\nmeta-service started\n')))}s.isMDXComponent=!0}}]);