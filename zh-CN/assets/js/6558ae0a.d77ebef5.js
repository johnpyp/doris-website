"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[764732],{15680:(e,l,a)=>{a.d(l,{xA:()=>g,yg:()=>y});var t=a(296540);function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function p(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?p(Object(a),!0).forEach((function(l){r(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function o(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),n=function(e){var l=t.useContext(u),a=l;return e&&(a="function"==typeof e?e(l):i(i({},l),e)),a},g=function(e){var l=n(e.components);return t.createElement(u.Provider,{value:l},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},m=t.forwardRef((function(e,l){var a=e.components,r=e.mdxType,p=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),h=n(a),m=r,y=h["".concat(u,".").concat(m)]||h[m]||s[m]||p;return a?t.createElement(y,i(i({ref:l},g),{},{components:a})):t.createElement(y,i({ref:l},g))}));function y(e,l){var a=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=m;var o={};for(var u in l)hasOwnProperty.call(l,u)&&(o[u]=l[u]);o.originalType=e,o[h]="string"==typeof e?e:r,i[1]=o;for(var n=2;n<p;n++)i[n]=a[n];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},561051:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>n});var t=a(58168),r=(a(296540),a(15680));const p={title:"Release 2.1.1",language:"zh-CN"},i=void 0,o={unversionedId:"releasenotes/v2.1/release-2.1.1",id:"version-3.0/releasenotes/v2.1/release-2.1.1",title:"Release 2.1.1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/releasenotes/v2.1/release-2.1.1.md",sourceDirName:"releasenotes/v2.1",slug:"/releasenotes/v2.1/release-2.1.1",permalink:"/zh-CN/docs/releasenotes/v2.1/release-2.1.1",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Release 2.1.1",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 2.1.2",permalink:"/zh-CN/docs/releasenotes/v2.1/release-2.1.2"},next:{title:"Release 2.1.0",permalink:"/zh-CN/docs/releasenotes/v2.1/release-2.1.0"}},u={},n=[{value:"1 \u884c\u4e3a\u53d8\u66f4",id:"1-\u884c\u4e3a\u53d8\u66f4",level:2},{value:"2 \u5347\u7ea7\u95ee\u9898",id:"2-\u5347\u7ea7\u95ee\u9898",level:2},{value:"3 \u65b0\u529f\u80fd",id:"3-\u65b0\u529f\u80fd",level:2},{value:"4 \u6539\u8fdb\u4e0e\u4f18\u5316",id:"4-\u6539\u8fdb\u4e0e\u4f18\u5316",level:2},{value:"5 Bugs \u4fee\u590d",id:"5-bugs-\u4fee\u590d",level:2}],g={toc:n},h="wrapper";function s(e){let{components:l,...a}=e;return(0,r.yg)(h,(0,t.A)({},g,a,{components:l,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0cApache Doris 2.1.1 \u7248\u672c\u5df2\u4e8e 2024 \u5e74 4 \u6708 3 \u65e5\u6b63\u5f0f\u53d1\u5e03\u3002\u8be5\u7248\u672c\u9488\u5bf9 2.1.0 \u7248\u672c\u51fa\u73b0\u7684\u95ee\u9898\u8fdb\u884c\u8f83\u4e3a\u5168\u9762\u7684\u4f18\u5316\uff0c\u63d0\u4ea4\u4e86\u82e5\u5e72\u6539\u8fdb\u9879\u4ee5\u53ca\u95ee\u9898\u4fee\u590d\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u6027\u80fd\u53ca\u7a33\u5b9a\u6027\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u7acb\u5373\u4e0b\u8f7d\uff1a")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GitHub Release:")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")))),(0,r.yg)("h2",{id:"1-\u884c\u4e3a\u53d8\u66f4"},"1 \u884c\u4e3a\u53d8\u66f4"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6539\u53d8\u4e86 Float \u7c7b\u578b\u5b57\u6bb5\u8fd4\u56de\u503c\u5e8f\u5217\u5316\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u63d0\u5347\u5927\u6570\u636e\u91cf\u4e0b Float \u8fd4\u56de\u7684\u6027\u80fd\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32049"},"https://github.com/apache/doris/pull/32049")," ")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u5c06\u90e8\u5206 Table Valued Function \u53d8\u66f4\u4e3a\u7cfb\u7edf\u8868 ",(0,r.yg)("inlineCode",{parentName:"li"},"active_queries()"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"workload_groups()"),"\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32314"},"https://github.com/apache/doris/pull/32314")," ")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u7531\u4e8e ",(0,r.yg)("inlineCode",{parentName:"li"},"show query``/l``oad profile stmt")," \u8bed\u53e5\u5728\u5b9e\u9645\u7528\u6237\u573a\u666f\u4e2d\u4f7f\u7528\u8f83\u5c11\uff0c\u8be5\u8bed\u53e5\u5c06\u4e0d\u518d\u652f\u6301\u4e0e\u7ef4\u62a4\u3002\u540c\u65f6\u8be5\u529f\u80fd\u5728 Pipeline \u4e0e PipelineX \u5f15\u64ce\u4e2d\u4e0d\u652f\u6301\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32467"},"https://github.com/apache/doris/pull/32467"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u5347\u7ea7 Arrow Flight \u7248\u672c\u81f3 15.0.2\uff0c\u540c\u65f6\u7528\u6237\u9700\u8981\u4f7f\u7528 ADBC 15.0.2 \u7248\u672c\u8bbf\u95ee Doris\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32827"},"https://github.com/apache/doris/pull/32827"),".  ")),(0,r.yg)("h2",{id:"2-\u5347\u7ea7\u95ee\u9898"},"2 \u5347\u7ea7\u95ee\u9898"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u4e86\u4ece 2.0.x \u6eda\u52a8\u5347\u7ea7\u81f3 2.1.x \u7684\u8fc7\u7a0b\u4e2d\uff0c\u90e8\u5206 BE \u8282\u70b9\u5347\u7ea7\u51fa\u73b0 Core \u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32672"},"https://github.com/apache/doris/pull/32672"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32444"},"https://github.com/apache/doris/pull/32444")," ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32162"},"https://github.com/apache/doris/pull/32162")," "))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u4e86\u5728 2.0.x \u6eda\u52a8\u5347\u7ea7\u81f3 2.1.x \u8fc7\u7a0b\u4e2d\uff0c\u4f7f\u7528 JDBC Catalog \u4f1a\u51fa\u73b0 Query \u62a5\u9519\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32618"},"https://github.com/apache/doris/pull/32618"))),(0,r.yg)("h2",{id:"3-\u65b0\u529f\u80fd"},"3 \u65b0\u529f\u80fd"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u9ed8\u8ba4\u5f00\u542f\u5217\u7ea7\u6743\u9650\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32659"},"https://github.com/apache/doris/pull/32659"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Pipeline \u548c PipelineX \u5f15\u64ce\u80fd\u591f\u5728 K8S \u4e0b\u51c6\u786e\u83b7\u53d6 CPU \u6838\u6570\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32370"},"https://github.com/apache/doris/pull/32370")," ")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301\u8bfb\u53d6 Parquet INT96 \u7c7b\u578b")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32394"},"https://github.com/apache/doris/pull/32394")," ")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301 IP \u900f\u4f20\u7684\u534f\u8bae\uff0c\u4ee5\u65b9\u4fbf\u5728 FE \u4e4b\u524d\u542f\u7528\u4ee3\u7406\u7684\u540c\u65f6\u8fd8\u80fd\u83b7\u53d6\u5ba2\u6237\u7aef\u51c6\u786e\u7684 IP \u5730\u5740\uff0c\u5b9e\u73b0\u767d\u540d\u5355\u6743\u9650\u63a7\u5236\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32338/files"},"https://github.com/apache/doris/pull/32338/files")," ")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"\u589e\u52a0\u5bf9 Workload Queue \u68c0\u6d4b\u6307\u6807\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32259"},"https://github.com/apache/doris/pull/32259")," ")),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"\u589e\u52a0\u7cfb\u7edf\u8868 ",(0,r.yg)("inlineCode",{parentName:"li"},"backend_active_tasks "),"\uff0c\u4ee5\u5b9e\u65f6\u76d1\u6d4b\u6bcf\u4e2a BE \u4e0a\u6d3b\u8dc3\u4efb\u52a1\u4ee5\u53ca\u6d88\u8017\u7684\u8d44\u6e90\u4fe1\u606f\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31945"},"https://github.com/apache/doris/pull/31945")," ")),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"\u5728 Spark Doris Connector \u4e2d\u589e\u52a0 IPV4 \u548c IPV6 \u7684\u652f\u6301\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32240"},"https://github.com/apache/doris/pull/32240"))),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"CCR \u652f\u6301\u5012\u6392\u7d22\u5f15\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32101"},"https://github.com/apache/doris/pull/32101")," ")),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301\u67e5\u8be2 Experimental \u7684 Session Variable\u3002  ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31837"},"https://github.com/apache/doris/pull/31837"))),(0,r.yg)("ol",{start:10},(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301\u5efa\u7acb ",(0,r.yg)("inlineCode",{parentName:"li"},"bitmap_union(bitmap_from_array())")," \u51fd\u6570\u7684\u7269\u5316\u89c6\u56fe\u3002")),(0,r.yg)("p",null,"-",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/31962"},"https://github.com/apache/doris/pull/31962")),(0,r.yg)("ol",{start:11},(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301\u5bf9 Hive \u4e2d ",(0,r.yg)("inlineCode",{parentName:"li"},"HIVE_DEFAULT_PARTITION")," \u5206\u533a\u8fdb\u884c\u5217\u88c1\u526a\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31736"},"https://github.com/apache/doris/pull/31736")," ")),(0,r.yg)("ol",{start:12},(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"li"},"set variable")," \u8bed\u53e5\u4e2d\u4f7f\u7528\u51fd\u6570\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32492"},"https://github.com/apache/doris/pull/32492"))),(0,r.yg)("ol",{start:13},(0,r.yg)("li",{parentName:"ol"},"Arrow \u5e8f\u5217\u5316\u65b9\u5f0f\u589e\u52a0\u5bf9 Variant \u7c7b\u578b\u7684\u652f\u6301\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32809"},"https://github.com/apache/doris/pull/32809"))),(0,r.yg)("h2",{id:"4-\u6539\u8fdb\u4e0e\u4f18\u5316"},"4 \u6539\u8fdb\u4e0e\u4f18\u5316"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5f53\u7cfb\u7edf\u81ea\u52a8\u91cd\u542f\u6216\u8005\u6eda\u52a8\u5347\u7ea7\u4e4b\u540e\uff0c\u81ea\u52a8\u542f\u52a8 Routine Load \u5bfc\u5165\u4efb\u52a1\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32239"},"https://github.com/apache/doris/pull/32239"),"  ")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u4f18\u5316\u4e86 Routine Load \u4efb\u52a1\u5728\u5404\u4e2a BE \u4e0a\u7684\u5206\u5e03\u65b9\u5f0f\uff0c\u8ba9\u5404\u4e2a BE \u8d1f\u8f7d\u66f4\u52a0\u5747\u8861\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32021"},"https://github.com/apache/doris/pull/32021")," ")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u5347\u7ea7 Spark \u7684\u7248\u672c\uff0c\u89e3\u51b3\u90e8\u5206 Spark Load \u7684\u5b89\u5168\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/30368"},"https://github.com/apache/doris/pull/30368"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u5728\u51b7\u70ed\u5206\u79bb\u8fc7\u7a0b\u4e2d\uff0c\u81ea\u52a8\u8df3\u8fc7\u88ab\u5220\u9664\u7684 Tablet. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32079"},"https://github.com/apache/doris/pull/32079"))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Workload Group \u652f\u6301\u5bf9 Routine Load \u7684\u8d44\u6e90\u8fdb\u884c\u9650\u5236\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31671"},"https://github.com/apache/doris/pull/31671"))),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"\u5927\u5e45\u5ea6\u4f18\u5316\u591a\u8868\u7269\u5316\u89c6\u56fe\u67e5\u8be2\u6539\u5199\u6027\u80fd\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31886"},"https://github.com/apache/doris/pull/31886"))),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"\u4f18\u5316 Broker Load \u4efb\u52a1\u5bf9 FE \u7684\u5185\u5b58\u4f7f\u7528")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31985"},"https://github.com/apache/doris/pull/31985"))),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"\u4f18\u5316 Partition \u7684\u88c1\u526a\u903b\u8f91\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31970"},"https://github.com/apache/doris/pull/31970")," ")),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"\u4f18\u5316 Tablet Schema Cache \u5bf9 BE \u5185\u5b58\u4f7f\u7528\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31141"},"https://github.com/apache/doris/pull/31141"))),(0,r.yg)("ol",{start:10},(0,r.yg)("li",{parentName:"ol"},"\u591a\u8868\u7269\u5316\u89c6\u56fe\u589e\u52a0\u66f4\u591a\u5bf9 JOIN \u7c7b\u578b\u7684\u652f\u6301\uff0c\u5305\u62ec INNER JOIN\u3001LEFT OUTER JOIN\u3001RIGHT OUTER JOIN\u3001FULL OUTER JOIN\u3001LEFT SEMI JOIN\u3001RIGHT SEMI JOIN\u3001LEFT ANTI JOIN\u3001RIGHT ANTI JOIN ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32909"},"https://github.com/apache/doris/pull/32909")," ")),(0,r.yg)("h2",{id:"5-bugs-\u4fee\u590d"},"5 Bugs \u4fee\u590d"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d TopN \u4e0b\u63a8\u5bfc\u81f4\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/326332"},"https://github.com/apache/doris/pull/326332"),".")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d JAVA UDF \u5e26\u6765\u7684\u5185\u5b58\u6cc4\u9732\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32630"},"https://github.com/apache/doris/pull/32630"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d ODBC \u8868\u5907\u4efd\u6062\u590d\u95ee\u9898\u3002 ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31989"},"https://github.com/apache/doris/pull/31989"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u5bf9 Variant \u7c7b\u578b\u8fdb\u884c\u8fd0\u7b97\u65f6\u5e38\u91cf\u6298\u53e0\u4f1a\u5bfc\u81f4 BE \u51fa\u9519\u7684\u95ee\u9898")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32265"},"https://github.com/apache/doris/pull/32265"))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u4e86\u90e8\u5206\u5bfc\u5165\u4efb\u52a1\u5931\u8d25\u65f6 Routine Load \u5361\u4f4f\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32638"},"https://github.com/apache/doris/pull/32638"))),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d SEMI JOIN \u7ed3\u679c\u4e0d\u6b63\u786e\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32477"},"https://github.com/apache/doris/pull/32477")," ")),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"\u5f53\u5217\u7684\u6570\u636e\u4e3a\u7a7a\u65f6\uff0c\u4fee\u590d\u5efa\u7acb\u5012\u6392\u7d22\u5f15\u4f1a\u51fa\u9519\u7684\u95ee\u9898\u3002 ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32669"},"https://github.com/apache/doris/pull/32669")," ")),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d",(0,r.yg)("inlineCode",{parentName:"li"},"<=> join")," \u64cd\u4f5c\u4f1a\u51fa\u73b0 Core \u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32623"},"https://github.com/apache/doris/pull/32623")," ")),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u90e8\u5206\u5217\u66f4\u65b0\u5728\u6709 Sequence \u5217\u7ed3\u679c\u51c6\u786e\u6027\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32574"},"https://github.com/apache/doris/pull/32574"))),(0,r.yg)("ol",{start:10},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d Select Outfile \u5bfc\u51fa\u5230 Parquet \u6216\u8005 ORC \u683c\u5f0f\u7684\u5217\u7c7b\u578b\u6620\u5c04\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32281"},"https://github.com/apache/doris/pull/32281")," ")),(0,r.yg)("ol",{start:11},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u5728 Restore \u8fc7\u7a0b\u4e2d BE \u6709\u65f6\u5019\u4f1a Core \u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32489"},"https://github.com/apache/doris/pull/32489"))),(0,r.yg)("ol",{start:12},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d ",(0,r.yg)("inlineCode",{parentName:"li"},"array_agg "),"\u51fd\u6570\u7ed3\u679c\u4e0d\u5bf9\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32387"},"https://github.com/apache/doris/pull/32387")," ")),(0,r.yg)("ol",{start:13},(0,r.yg)("li",{parentName:"ol"},"\u4f7f Variant \u7c7b\u578b\u5e94\u5f53\u4e00\u76f4\u662f nullable. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32248"},"https://github.com/apache/doris/pull/32248"))),(0,r.yg)("ol",{start:14},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d Schema Change \u6ca1\u6709\u6b63\u786e\u5904\u7406\u7a7a Block \u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32396"},"https://github.com/apache/doris/pull/32396"))),(0,r.yg)("ol",{start:15},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"json_length()")," \u51fd\u6570\u65f6\u90e8\u5206\u573a\u666f\u4f1a\u51fa\u9519\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32145"},"https://github.com/apache/doris/pull/32145")," ")),(0,r.yg)("ol",{start:16},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d Iceberg \u8868\u6ca1\u6709\u6b63\u786e\u5904\u7406 Date Cast \u8f6c\u6362\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32194"},"https://github.com/apache/doris/pull/32194")," ")),(0,r.yg)("ol",{start:17},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d Variant \u7c7b\u578b\u5efa\u7acb Index \u65f6\u51fa\u73b0\u7684\u90e8\u5206 Bug\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31992"},"https://github.com/apache/doris/pull/31992")," ")),(0,r.yg)("ol",{start:18},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u5f53\u591a\u4e2a ",(0,r.yg)("inlineCode",{parentName:"li"},"map_agg")," \u51fd\u6570\u540c\u65f6\u4f7f\u7528\u65f6\u7ed3\u679c\u4e0d\u6b63\u786e\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31928"},"https://github.com/apache/doris/pull/31928"))),(0,r.yg)("ol",{start:19},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d ",(0,r.yg)("inlineCode",{parentName:"li"},"money_format")," \u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679c\u4e0d\u6b63\u786e\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31883"},"https://github.com/apache/doris/pull/31883")," ")),(0,r.yg)("ol",{start:20},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u5728\u9ad8\u5e76\u53d1\u7684\u5efa\u7acb\u94fe\u63a5\u65f6\u90e8\u5206\u8bf7\u6c42\u4f1a\u5361\u4f4f\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31594"},"https://github.com/apache/doris/pull/31594"))))}s.isMDXComponent=!0}}]);