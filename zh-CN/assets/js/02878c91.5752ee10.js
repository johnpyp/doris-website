"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[460759],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>d});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=t.createContext({}),p=function(e){var a=t.useContext(g),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},s=function(e){var a=p(e.components);return t.createElement(g.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,d=m["".concat(g,".").concat(c)]||m[c]||u[c]||o;return n?t.createElement(d,l(l({ref:a},s),{},{components:n})):t.createElement(d,l({ref:a},s))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var g in a)hasOwnProperty.call(a,g)&&(i[g]=a[g]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},847135:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(296540),n(15680));const o={title:"\u5982\u4f55\u5f00\u542f Debug \u65e5\u5fd7",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/maint-monitor/debug-log",id:"version-2.0/admin-manual/maint-monitor/debug-log",title:"\u5982\u4f55\u5f00\u542f Debug \u65e5\u5fd7",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/maint-monitor/debug-log.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/debug-log",permalink:"/zh-CN/docs/2.0/admin-manual/maint-monitor/debug-log",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u5982\u4f55\u5f00\u542f Debug \u65e5\u5fd7",language:"zh-CN"},sidebar:"docs",previous:{title:"\u670d\u52a1\u81ea\u52a8\u62c9\u8d77",permalink:"/zh-CN/docs/2.0/admin-manual/maint-monitor/automatic-service-start"},next:{title:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55",permalink:"/zh-CN/docs/2.0/admin-manual/config/config-dir"}},g={},p=[{value:"\u5f00\u542f FE Debug \u65e5\u5fd7",id:"\u5f00\u542f-fe-debug-\u65e5\u5fd7",level:2},{value:"\u5f00\u542f BE Debug \u65e5\u5fd7",id:"\u5f00\u542f-be-debug-\u65e5\u5fd7",level:2}],s={toc:p},m="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris \u7684 FE \u548c BE \u8282\u70b9\u7684\u7cfb\u7edf\u8fd0\u884c\u65e5\u5fd7\u9ed8\u8ba4\u4e3a INFO \u7ea7\u522b\u3002\u901a\u5e38\u53ef\u4ee5\u6ee1\u8db3\u5bf9\u7cfb\u7edf\u884c\u4e3a\u7684\u5206\u6790\u548c\u57fa\u672c\u95ee\u9898\u7684\u5b9a\u4f4d\u3002\u4f46\u662f\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u9700\u8981\u5f00\u542f DEBUG \u7ea7\u522b\u7684\u65e5\u5fd7\u6765\u8fdb\u4e00\u6b65\u6392\u67e5\u95ee\u9898\u3002\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5f00\u542f FE\u3001BE \u8282\u70b9\u7684 DEBUG \u65e5\u5fd7\u7ea7\u522b\u3002"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4e0d\u5efa\u8bae\u5c06\u65e5\u5fd7\u7ea7\u522b\u8c03\u6574\u4e3a WARN \u6216\u66f4\u9ad8\u7ea7\u522b\uff0c\u8fd9\u4e0d\u5229\u4e8e\u7cfb\u7edf\u884c\u4e3a\u7684\u5206\u6790\u548c\u95ee\u9898\u7684\u5b9a\u4f4d\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5f00\u542f DEBUG \u65e5\u5fd7\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5927\u91cf\u65e5\u5fd7\u4ea7\u751f\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u751f\u4ea7\u73af\u5883\u8bf7\u8c28\u614e\u5f00\u542f"),"\u3002")))),(0,r.yg)("h2",{id:"\u5f00\u542f-fe-debug-\u65e5\u5fd7"},"\u5f00\u542f FE Debug \u65e5\u5fd7"),(0,r.yg)("p",null,"FE \u7684 Debug \u7ea7\u522b\u65e5\u5fd7\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u754c\u9762\u6216 API \u5728\u8fd0\u884c\u65f6\u6253\u5f00\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5f00\u542f"),(0,r.yg)("p",{parentName:"li"},"\u5728 fe.conf \u4e2d\u6dfb\u52a0\u914d\u7f6e\u9879 ",(0,r.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_modules"),"\u3002\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"# \u4ec5\u5f00\u542f\u7c7b org.apache.doris.catalog.Catalog \u7684 Debug \u65e5\u5fd7\nsys_log_verbose_modules=org.apache.doris.catalog.Catalog\n\n# \u5f00\u542f\u5305 org.apache.doris.catalog \u4e0b\u6240\u6709\u7c7b\u7684 Debug \u65e5\u5fd7\nsys_log_verbose_modules=org.apache.doris.catalog\n\n# \u5f00\u542f\u5305 org \u4e0b\u6240\u6709\u7c7b\u7684 Debug \u65e5\u5fd7\nsys_log_verbose_modules=org\n")),(0,r.yg)("p",{parentName:"li"},"\u6dfb\u52a0\u914d\u7f6e\u9879\u5e76\u91cd\u542f FE \u8282\u70b9\uff0c\u5373\u53ef\u751f\u6548\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 FE UI \u754c\u9762"),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 UI \u754c\u9762\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4fee\u6539\u65e5\u5fd7\u7ea7\u522b\u3002\u65e0\u9700\u91cd\u542f FE \u8282\u70b9\u3002\u5728\u6d4f\u89c8\u5668\u6253\u5f00 FE \u8282\u70b9\u7684 http \u7aef\u53e3\uff08\u9ed8\u8ba4\u4e3a 8030\uff09\uff0c\u5e76\u767b\u9646 UI \u754c\u9762\u3002\u4e4b\u540e\u70b9\u51fb\u4e0a\u65b9\u5bfc\u822a\u680f\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Log")," \u6807\u7b7e\u3002"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f87b8c1.png",alt:"image.png"})),(0,r.yg)("p",{parentName:"li"},"\u6211\u4eec\u5728 Add \u8f93\u5165\u6846\u4e2d\u53ef\u4ee5\u8f93\u5165\u5305\u540d\u6216\u8005\u5177\u4f53\u7684\u7c7b\u540d\uff0c\u53ef\u4ee5\u6253\u5f00\u5bf9\u5e94\u7684 Debug \u65e5\u5fd7\u3002\u5982\u8f93\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.doris.catalog.Catalog")," \u5219\u53ef\u4ee5\u6253\u5f00 Catalog \u7c7b\u7684 Debug \u65e5\u5fd7\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{parentName:"p",src:"https://bce.bdstatic.com/doc/BaiduDoris/DORIS/image_f0d4a23.png",alt:"image.png"})),(0,r.yg)("p",{parentName:"li"},"\u4f60\u4e5f\u53ef\u4ee5\u5728 Delete \u8f93\u5165\u6846\u4e2d\u8f93\u5165\u5305\u540d\u6216\u8005\u5177\u4f53\u7684\u7c7b\u540d\uff0c\u6765\u5173\u95ed\u5bf9\u5e94\u7684 Debug \u65e5\u5fd7\u3002"),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684\u4fee\u6539\u53ea\u4f1a\u5f71\u54cd\u5bf9\u5e94\u7684 FE \u8282\u70b9\u7684\u65e5\u5fd7\u7ea7\u522b\u3002\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6 FE \u8282\u70b9\u7684\u65e5\u5fd7\u7ea7\u522b\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 API \u4fee\u6539"),(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b API \u4e5f\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4fee\u6539\u65e5\u5fd7\u7ea7\u522b\u3002\u65e0\u9700\u91cd\u542f FE \u8282\u70b9\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?add_verbose=org.apache.doris.catalog.Catalog\n")),(0,r.yg)("p",{parentName:"li"},"\u5176\u4e2d\u7528\u6237\u540d\u5bc6\u7801\u4e3a\u767b\u9646 Doris \u7684 root \u6216 admin \u7528\u6237\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"add_verbose")," \u53c2\u6570\u6307\u5b9a\u8981\u5f00\u542f Debug \u65e5\u5fd7\u7684\u5305\u540d\u6216\u7c7b\u540d\u3002\u82e5\u6210\u529f\u5219\u8fd4\u56de\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success", \n    "code": 0, \n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org,org.apache.doris.catalog.Catalog", \n            "AuditNames": "slow_query,query,load", \n            "Level": "INFO"\n        }\n    }, \n    "count": 0\n}\n')),(0,r.yg)("p",{parentName:"li"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b API \u5173\u95ed Debug \u65e5\u5fd7\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?del_verbose=org.apache.doris.catalog.Catalog\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"del_verbose")," \u53c2\u6570\u6307\u5b9a\u8981\u5173\u95ed Debug \u65e5\u5fd7\u7684\u5305\u540d\u6216\u7c7b\u540d\u3002"))),(0,r.yg)("h2",{id:"\u5f00\u542f-be-debug-\u65e5\u5fd7"},"\u5f00\u542f BE Debug \u65e5\u5fd7"),(0,r.yg)("p",null,"BE \u7684 Debug \u65e5\u5fd7\u76ee\u524d\u4ec5\u652f\u6301\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u5e76\u91cd\u542f BE \u8282\u70b9\u4ee5\u751f\u6548\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_modules")," \u6307\u5b9a\u8981\u5f00\u542f\u7684\u6587\u4ef6\u540d\uff0c\u53ef\u4ee5\u901a\u8fc7\u901a\u914d\u7b26 * \u6307\u5b9a\u3002\u6bd4\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=*\n")),(0,r.yg)("p",null,"\u8868\u793a\u5f00\u542f\u6240\u6709 DEBUG \u65e5\u5fd7\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_level")," \u8868\u793a DEBUG \u7684\u7ea7\u522b\u3002\u6570\u5b57\u8d8a\u5927\uff0c\u5219 DEBUG \u65e5\u5fd7\u8d8a\u8be6\u7ec6\u3002\u53d6\u503c\u8303\u56f4\u5728 1-10\u3002"))}u.isMDXComponent=!0}}]);