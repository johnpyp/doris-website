"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[745359],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>_});var a=t(296540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),s=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(t),y=n,_=p["".concat(i,".").concat(y)]||p[y]||m[y]||l;return t?a.createElement(_,o(o({ref:r},d),{},{components:t})):a.createElement(_,o({ref:r},d))}));function _(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=y;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[p]="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},602355:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=t(58168),n=(t(296540),t(15680));const l={title:"Workload\u7cfb\u7edf\u8868",language:"zh-CN"},o=void 0,u={unversionedId:"admin-manual/resource-admin/workload-system-table",id:"admin-manual/resource-admin/workload-system-table",title:"Workload\u7cfb\u7edf\u8868",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/resource-admin/workload-system-table.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-system-table",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/workload-system-table",draft:!1,tags:[],version:"current",frontMatter:{title:"Workload\u7cfb\u7edf\u8868",language:"zh-CN"},sidebar:"docs",previous:{title:"Workload Policy",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/workload-policy"},next:{title:"Resource Group",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/multi-tenant"}},i={},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"Workload\u7cfb\u7edf\u8868\u4ecb\u7ecd",id:"workload\u7cfb\u7edf\u8868\u4ecb\u7ecd",level:2},{value:"active_queries",id:"active_queries",level:3},{value:"backend_active_tasks",id:"backend_active_tasks",level:3},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u627e\u51faCPU\u4f7f\u7528\u6700\u9ad8\u7684sql",id:"\u627e\u51facpu\u4f7f\u7528\u6700\u9ad8\u7684sql",level:3},{value:"\u627e\u51fa\u5185\u5b58\u4f7f\u7528\u6700\u9ad8\u7684sql",id:"\u627e\u51fa\u5185\u5b58\u4f7f\u7528\u6700\u9ad8\u7684sql",level:3},{value:"\u627e\u51fa\u626b\u63cf\u6570\u636e\u91cf\u8fc7\u9ad8\u7684\u67e5\u8be2",id:"\u627e\u51fa\u626b\u63cf\u6570\u636e\u91cf\u8fc7\u9ad8\u7684\u67e5\u8be2",level:3}],d={toc:s},p="wrapper";function m(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,n.yg)("p",null,"Doris\u652f\u6301\u901a\u8fc7Workload\u7cfb\u7edf\u8868\u5bf9\u8fd0\u884c\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u8fdb\u884c\u5206\u6790\uff0c\u5e38\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u67e5\u770b\u96c6\u7fa4\u4e2dWorkload Group\u7684\u8d44\u6e90\u7528\u91cf\uff0c\u5305\u62ecCPU\u548c\u5185\u5b58\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u67e5\u770b\u76ee\u524d\u96c6\u7fa4\u4e2d\u76ee\u524d\u8d44\u6e90\u7528\u91cf\u6700\u5927\u7684N\u4e2asql\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u67e5\u770b\u96c6\u7fa4\u4e2dWorkload Group\u7684\u6392\u961f\u60c5\u51b5")),(0,n.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4sql\u7684\u65b9\u5f0f\u67e5\u8be2\u8fd9\u4e9b\u4fe1\u606f\uff0c\u627e\u51fa\u76ee\u524d\u7cfb\u7edf\u4e2d\u8d44\u6e90\u5360\u7528\u6bd4\u8f83\u9ad8\u7684Workload Group\u6216\u8005sql\uff0c\u5e76\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\u3002"),(0,n.yg)("h2",{id:"workload\u7cfb\u7edf\u8868\u4ecb\u7ecd"},"Workload\u7cfb\u7edf\u8868\u4ecb\u7ecd"),(0,n.yg)("p",null,"\u76ee\u524d\u7cfb\u7edf\u8868\u4e3b\u8981\u5728",(0,n.yg)("inlineCode",{parentName:"p"},"information_schema"),"\u5e93\u91cc\u3002"),(0,n.yg)("h3",{id:"active_queries"},"active_queries"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"active_queries"),"\u8868\u8bb0\u5f55\u4e86\u5f53\u524d\u5728FE\u4e0a\u67e5\u8be2\u7684\u6267\u884c\u4fe1\u606f\uff0c\u5b57\u6bb5\u7684\u8be6\u7ec6\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"query_id\uff0c\u67e5\u8be2\u7684id"),(0,n.yg)("li",{parentName:"ul"},"query_start_time\uff0c\u67e5\u8be2\u5f00\u59cb\u6267\u884c\u7684\u65f6\u95f4\uff1b\u5982\u679c\u67e5\u8be2\u6709\u6392\u961f\u7684\u8bdd\uff0c\u90a3\u4e48\u5c31\u4ee3\u8868\u6392\u961f\u7ed3\u675f\u4e4b\u540e\u5f00\u59cb\u6267\u884c\u7684\u65f6\u95f4"),(0,n.yg)("li",{parentName:"ul"},"query_time_ms\uff0c\u67e5\u8be2\u7684\u8017\u65f6\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,n.yg)("li",{parentName:"ul"},"workload_group_id\uff0c\u67e5\u8be2\u4f7f\u7528\u7684workload group\u7684id"),(0,n.yg)("li",{parentName:"ul"},"database\uff0c\u67e5\u8be2\u4e2d\u7684sql\u4f7f\u7528\u7684database"),(0,n.yg)("li",{parentName:"ul"},"frontend_instance\uff0c\u67e5\u8be2\u6240\u5728FE\u7684\u8282\u70b9\u540d\u79f0"),(0,n.yg)("li",{parentName:"ul"},"queue_start_time\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6765\u65f6\u8fdb\u5165\u4e86\u6392\u961f\u4e86\u903b\u8f91\uff0c\u90a3\u4e48\u4ee3\u8868\u67e5\u8be2\u6392\u961f\u5f00\u59cb\u7684\u65f6\u95f4\u70b9"),(0,n.yg)("li",{parentName:"ul"},"queue_end_time\uff0c\u5982\u679c\u67e5\u8be2\u5230\u6765\u65f6\u8fdb\u5165\u4e86\u6392\u961f\u7684\u903b\u8f91\uff0c\u90a3\u4e48\u4ee3\u8868\u67e5\u8be2\u6392\u961f\u7ed3\u675f\u7684\u65f6\u95f4\u70b9"),(0,n.yg)("li",{parentName:"ul"},"query_status\uff0c\u67e5\u8be2\u76ee\u524d\u7684\u72b6\u6001\uff0c\u76ee\u524d\u4e3b\u8981\u6709\u4e24\u4e2a\u53d6\u503cRUNNING\u548cQUEUED\uff0cRUNNIG\u4ee3\u8868\u67e5\u8be2\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\uff1bQUEUED\u4ee3\u8868\u5f53\u524d\u67e5\u8be2\u6b63\u5728\u6392\u961f"),(0,n.yg)("li",{parentName:"ul"},"sql\uff0c\u67e5\u8be2\u7684sql\u6587\u672c")),(0,n.yg)("h3",{id:"backend_active_tasks"},"backend_active_tasks"),(0,n.yg)("p",null,"\u4e00\u4e2a\u67e5\u8be2\u901a\u5e38\u4f1a\u88ab\u5206\u6210\u591a\u4e2afragment\u5728\u591a\u4e2aBE\u4e0a\u6267\u884c\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"backend_active_tasks"),"\u5c31\u4ee3\u8868\u4e86\u4e00\u4e2a\u67e5\u8be2\u5728\u5355\u4e2aBE\u4e0a\u4f7f\u7528\u7684CPU\u548c\u5185\u5b58\u8d44\u6e90\u7684\u603b\u91cf\u3002\u5982\u679c\u8fd9\u4e2a\u67e5\u8be2\u5728\u5355BE\u4e0a\u6709\u591a\u4e2a\u5e76\u53d1\u548c\u591a\u4e2afragment\uff0c\u90a3\u4e48\u4e5f\u4f1a\u6c47\u603b\u6210\u4e00\u884c\u6570\u636e\u3002\n\u5b57\u6bb5\u8be6\u7ec6\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"be_id\uff0cbe\u7684id"),(0,n.yg)("li",{parentName:"ul"},"fe_host\uff0c\u4ee3\u8868\u4e86\u8fd9\u4e2a\u67e5\u8be2\u662f\u4ece\u54ea\u4e2aFE\u63d0\u4ea4\u7684"),(0,n.yg)("li",{parentName:"ul"},"query_id\uff0c\u67e5\u8be2\u7684id"),(0,n.yg)("li",{parentName:"ul"},"task_time_ms\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u7684\u6267\u884c\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,n.yg)("li",{parentName:"ul"},"task_cpu_time_ms\uff0c\u67e5\u8be2\u5728be\u4e0a\u6267\u884c\u65f6\u7684cpu\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2"),(0,n.yg)("li",{parentName:"ul"},"scan_rows\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u626b\u63cf\u7684\u884c\u6570\uff0c\u5982\u679c\u626b\u63cf\u4e86\u591a\u4e2a\u8868\uff0c\u90a3\u4e48\u5c31\u662f\u591a\u4e2a\u8868\u7684\u7d2f\u52a0\u503c"),(0,n.yg)("li",{parentName:"ul"},"scan_bytes\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u626b\u63cf\u7684\u5b57\u8282\u6570\uff0c\u5982\u679c\u626b\u63cf\u4e86\u591a\u4e2a\u8868\uff0c\u90a3\u4e48\u5c31\u662f\u591a\u4e2a\u8868\u7684\u7d2f\u52a0\u503c"),(0,n.yg)("li",{parentName:"ul"},"be_peak_memory_bytes\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u4f7f\u7528\u7684\u5185\u5b58\u7684\u5cf0\u503c\uff0c\u5355\u4f4d\u662f\u5b57\u8282"),(0,n.yg)("li",{parentName:"ul"},"current_used_memory_bytes\uff0c\u67e5\u8be2\u5728\u5f53\u524dbe\u4e0a\u4f7f\u7528\u4e2d\u7684\u5185\u5b58\u91cf\uff0c\u5355\u4f4d\u662f\u5b57\u8282"),(0,n.yg)("li",{parentName:"ul"},"shuffle_send_bytes\uff0c\u67e5\u8be2\u5728\u5f53\u524d\u8282\u70b9\u4f5c\u4e3ashuffle\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u5b57\u8282\u6570"),(0,n.yg)("li",{parentName:"ul"},"shuffle_send_rows\uff0c\u67e5\u8be2\u5728\u5f53\u524d\u8282\u70b9\u4f5c\u4e3ashuffle\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u884c\u6570")),(0,n.yg)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u67e5\u770b\u8d44\u6e90\u7528\u91cftopN\u7684sql"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t1.mem_used,\n        t2.`sql`\nfrom\n(select query_id, sum(task_cpu_time_ms) as cpu_time,sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by cpu_time desc, mem_used desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u67e5\u770b\u76ee\u524d\u5355BE\u4e0a\u8d44\u6e90\u7528\u91cftopN\u7684sql"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t1.mem_used,\n        t2.`sql`\nfrom\n(select query_id, sum(task_cpu_time_ms) as cpu_time,sum(current_used_memory_bytes) as mem_used \n    from backend_active_tasks where be_id=12345 group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by cpu_time desc, mem_used desc limit 10;\n")))),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u67e5\u770b\u5404\u4e2aworkload group\u8fd0\u884c\u4e2d/\u6392\u961f\u7684\u67e5\u8be2\u6570\u91cf"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n    workload_group_id, \n    sum(case when query_status='QUEUED' then 1 else 0 end) as queue_num, \n    sum(case when query_status='RUNNING' then 1 else 0 end) as running_query_num\nfrom \n    active_queries\ngroup by workload_group_id\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u67e5\u770b\u5404\u4e2aworkload group\u6392\u961f\u7684\u90fd\u662f\u54ea\u4e9b\u67e5\u8be2\uff0c\u4ee5\u53ca\u6392\u961f\u7684\u65f6\u95f4"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n         workload_group_id,\n         query_id,\n         query_status,\n         now() - queue_start_time as queued_time\nfrom \n     active_queries\nwhere query_status='queued'\norder by workload_group_id\n")))),(0,n.yg)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,n.yg)("p",null,"\u5f53\u96c6\u7fa4\u7684\u67e5\u8be2\u5ef6\u8fdf\u4e0a\u5347\u65f6\uff0c\u53ef\u7528\u6027\u4e0b\u964d\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u96c6\u7fa4\u7684\u6574\u4f53\u76d1\u63a7\u786e\u74f6\u9888\u70b9\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u5f53BE\u7684CPU\u8d44\u6e90\u7528\u6ee1\uff0c\u5185\u5b58\u4f7f\u7528\u4e0d\u9ad8\uff0c\u8bf4\u660e\u4e3b\u8981\u74f6\u9888\u5e94\u8be5\u5728CPU\u4e0a\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u5f53BE\u7684CPU\u8d44\u6e90\u548c\u5185\u5b58\u8d44\u6e90\u4f7f\u7528\u90fd\u5f88\u9ad8\uff0c\u8bf4\u660e\u4e3b\u8981\u74f6\u9888\u5728\u5185\u5b58\u4e0a\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u5f53BE\u7684CPU\u8d44\u6e90\u548c\u5185\u5b58\u8d44\u6e90\u4f7f\u7528\u90fd\u4e0d\u9ad8\uff0c\u4f46\u662fIO\u4f7f\u7528\u5f88\u9ad8\uff0c\u8bf4\u660e\u4e3b\u8981\u74f6\u9888\u5728IO\u4e0a\u3002"),(0,n.yg)("li",{parentName:"ol"},"CPU/\u5185\u5b58/IO\u90fd\u4e0d\u9ad8\uff0c\u4f46\u662f\u6392\u961f\u7684\u67e5\u8be2\u8f83\u591a\uff0c\u8bf4\u660e\u6392\u961f\u53c2\u6570\u914d\u7f6e\u4e0d\u5408\u7406\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u8c03\u5927\u6392\u961f\u5e76\u53d1\u3002\n\u786e\u8ba4\u4e86\u96c6\u7fa4\u7684\u74f6\u9888\u70b9\u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7workload group\u7cfb\u7edf\u8868\u8fdb\u4e00\u6b65\u5206\u6790\u51fa\u76ee\u524d\u4f7f\u7528\u8d44\u6e90\u8f83\u591a\u7684sql\uff0c\u7136\u540e\u8fdb\u884c\u67e5\u8be2\u7684\u964d\u7ea7\u5904\u7406\u3002")),(0,n.yg)("h3",{id:"\u627e\u51facpu\u4f7f\u7528\u6700\u9ad8\u7684sql"},"\u627e\u51faCPU\u4f7f\u7528\u6700\u9ad8\u7684sql"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"CPU\u4f7f\u7528topN\u7684sql"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t2.`database`,\n        t1.cpu_time,\n        t2.`sql`\nfrom\n(select query_id, sum(task_cpu_time_ms) as cpu_time from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id\norder by cpu_time desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u7edf\u8ba1workload group\u7684cpu\u65f6\u95f4"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.workload_group_id,\n        sum(t1.cpu_time) cpu_time\nfrom\n(select query_id, sum(task_cpu_time_ms) as cpu_time from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by workload_group_id order by cpu_time desc\n")))),(0,n.yg)("p",null,"\u5982\u679c\u662f\u5355sql\u7684CPU\u4f7f\u7528\u7387\u8fc7\u9ad8\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u53d6\u6d88\u67e5\u8be2\u7684\u65b9\u5f0f\u6765\u7f13\u89e3\u3002"),(0,n.yg)("p",null,"\u5982\u679c\u662fcpu\u65f6\u95f4\u8f83\u957f\u7684sql\u90fd\u6765\u81ea\u4e8e\u540c\u4e00\u4e2aworkload group\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u8c03\u4f4e\u8fd9\u4e2aworkload group\u7684cpu\u4f18\u5148\u7ea7\u6216\u8005\u8c03\u4f4escan\u7ebf\u7a0b\u7684\u6570\u91cf\u6765\u964d\u4f4ecpu\u7684\u4f7f\u7528\u3002"),(0,n.yg)("h3",{id:"\u627e\u51fa\u5185\u5b58\u4f7f\u7528\u6700\u9ad8\u7684sql"},"\u627e\u51fa\u5185\u5b58\u4f7f\u7528\u6700\u9ad8\u7684sql"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5185\u5b58\u4f7f\u7528topN\u7684sql"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t1.mem_used\nfrom\n(select query_id, sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by mem_used desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5404\u4e2aworkload group\u7684\u5185\u5b58\u7528\u91cf"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.workload_group_id,\n        sum(t1.mem_used) wg_mem_used\nfrom\n(select query_id, sum(current_used_memory_bytes) as mem_used from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by t2.workload_group_id order by wg_mem_used desc\n")))),(0,n.yg)("p",null,"\u5982\u679c\u662f\u5355\u4e2a\u67e5\u8be2\u5360\u6389\u4e86\u5927\u90e8\u5206\u5185\u5b58\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u53d6\u6d88\u8fd9\u4e2a\u67e5\u8be2\u6765\u5feb\u901f\u91ca\u653e\u5185\u5b58\u3002"),(0,n.yg)("p",null,"\u5982\u679c\u6709\u4f18\u5148\u7ea7\u8f83\u4f4e\u7684workload group\u4f7f\u7528\u4e86\u8f83\u591a\u7684\u5185\u5b58\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u5bf9\u8fd9\u4e2aworkload group\u8fdb\u884c\u964d\u7ea7\u6765\u91ca\u653e\u5185\u5b58\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u5982\u679c\u5185\u5b58\u914d\u7f6e\u7684\u662f\u8f6f\u9650\uff0c\u90a3\u4e48\u53ef\u4ee5\u4fee\u6539\u4e3a\u786c\u9650\uff0c\u5e76\u51cf\u5c0fworkload group\u7684\u5185\u5b58\u9650\u5236"),(0,n.yg)("li",{parentName:"ol"},"\u901a\u8fc7workload group\u7684\u6392\u961f\u529f\u80fd\u964d\u4f4e\u8fd9\u4e2aworkload\u7684\u67e5\u8be2\u5e76\u53d1")),(0,n.yg)("h3",{id:"\u627e\u51fa\u626b\u63cf\u6570\u636e\u91cf\u8fc7\u9ad8\u7684\u67e5\u8be2"},"\u627e\u51fa\u626b\u63cf\u6570\u636e\u91cf\u8fc7\u9ad8\u7684\u67e5\u8be2"),(0,n.yg)("p",null,"\u76ee\u524dDoris\u6ca1\u6709\u76f4\u63a5\u6536\u96c6\u67e5\u8be2\u7684\u78c1\u76d8IO\u7684\u6307\u6807\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u626b\u63cf\u6570\u636e\u7684\u884c\u6570\u548c\u5b57\u8282\u6570\u8fdb\u884c\u95f4\u63a5\u7684\u5224\u65ad"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u626b\u63cf\u6570\u636e\u91cftopN\u7684sql"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.query_id,\n        t2.workload_group_id,\n        t1.scan_rows,\n        t1.scan_bytes\nfrom\n(select query_id, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \norder by scan_rows desc,scan_bytes desc limit 10;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5404\u4e2aworkload group\u7684scan\u6570\u636e\u91cf"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"select \n        t2.workload_group_id,\n        sum(t1.scan_rows) as wg_scan_rows,\n        sum(t1.scan_bytes) as wg_scan_bytes\nfrom\n(select query_id, sum(scan_rows) as scan_rows,sum(scan_bytes) as scan_bytes from backend_active_tasks group by query_id) \n        t1 left join active_queries t2\non t1.query_id = t2.query_id \ngroup by t2.workload_group_id\norder by wg_scan_rows desc,wg_scan_bytes desc\n")))),(0,n.yg)("p",null,"\u5982\u679c\u662f\u5355\u4e2asql\u7684scan\u6570\u636e\u91cf\u8f83\u5927\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u6740\u6b7b\u67e5\u8be2\u7684\u65b9\u5f0f\u67e5\u770b\u662f\u5426\u4f1a\u6709\u7f13\u89e3"),(0,n.yg)("p",null,"\u5982\u679c\u662f\u67d0\u4e2aworkload group\u7684\u626b\u63cf\u6570\u636e\u91cf\u8f83\u5927\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u8c03\u4f4eworkload group\u7684\u626b\u63cf\u7ebf\u7a0b\u6570\u6765\u964d\u4f4eIO"))}m.isMDXComponent=!0}}]);