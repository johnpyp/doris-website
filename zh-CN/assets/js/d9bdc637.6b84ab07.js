"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[561093],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=p(t),m=a,d=y["".concat(i,".").concat(m)]||y[m]||u[m]||l;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[y]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},574539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(296540),t(15680));const l={title:"DATETIME",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-types/Data-Types/DATETIME",id:"version-2.1/sql-manual/sql-types/Data-Types/DATETIME",title:"DATETIME",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-types/Data-Types/DATETIME.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/DATETIME",permalink:"/zh-CN/docs/2.1/sql-manual/sql-types/Data-Types/DATETIME",draft:!1,tags:[],version:"2.1",frontMatter:{title:"DATETIME",language:"zh-CN"},sidebar:"docs",previous:{title:"DATE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-types/Data-Types/DATE"},next:{title:"CHAR",permalink:"/zh-CN/docs/2.1/sql-manual/sql-types/Data-Types/CHAR"}},i={},p=[{value:"DATETIME",id:"datetime",level:2},{value:"description",id:"description",level:3},{value:"note",id:"note",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"datetime"},"DATETIME"),(0,a.yg)("p",null,"DATETIMEV2"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"DATETIME(","[P]",")\n\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\uff0c\u53ef\u9009\u53c2\u6570P\u8868\u793a\u65f6\u95f4\u7cbe\u5ea6\uff0c\u53d6\u503c\u8303\u56f4\u662f","[0, 6]","\uff0c\u5373\u6700\u591a\u652f\u63016\u4f4d\u5c0f\u6570\uff08\u5fae\u79d2\uff09\u3002\u4e0d\u8bbe\u7f6e\u65f6\u4e3a0\u3002\n\u53d6\u503c\u8303\u56f4\u662f['0000-01-01 00:00:00","[.000000]","', '9999-12-31 23:59:59","[.999999]","'].\n\u6253\u5370\u7684\u5f62\u5f0f\u662f'yyyy-MM-dd HH:mm:ss.SSSSSS'"),(0,a.yg)("h3",{id:"note"},"note"),(0,a.yg)("p",null,"DATETIME \u652f\u6301\u4e86\u6700\u591a\u5230\u5fae\u79d2\u7684\u65f6\u95f4\u7cbe\u5ea6\u3002\u5728\u4f7f\u7528 BE \u7aef\u89e3\u6790\u5bfc\u5165\u7684 DATETIME \u7c7b\u578b\u6570\u636e\u65f6\uff08\u5982\u4f7f\u7528Stream load\u3001Spark load\u7b49\uff09\uff0c\u6216\u5f00\u542f",(0,a.yg)("a",{parentName:"p",href:"../../../query-acceleration/nereids"},"\u65b0\u4f18\u5316\u5668"),"\u540e\u5728 FE \u7aef\u89e3\u6790 DATETIME \u7c7b\u578b\u6570\u636e\u65f6\uff0c\u5c06\u4f1a\u5bf9\u8d85\u51fa\u5f53\u524d\u7cbe\u5ea6\u7684\u5c0f\u6570\u8fdb\u884c",(0,a.yg)("strong",{parentName:"p"},"\u56db\u820d\u4e94\u5165"),"\u3002\n\u5c06\u5e26\u6709\u5c0f\u6570\u79d2\u90e8\u5206\u7684DATETIME\u503c\u63d2\u5165\u5230\u5177\u6709\u8f83\u5c11\u5c0f\u6570\u4f4d\u7684\u76f8\u540c\u7c7b\u578b\u7684\u5217\u4e2d\u4f1a\u5bfc\u81f4",(0,a.yg)("strong",{parentName:"p"},"\u56db\u820d\u4e94\u5165"),"\u3002"),(0,a.yg)("p",null,"DATETIME \u8bfb\u5165\u65f6\u652f\u6301\u89e3\u6790\u65f6\u533a\uff0c\u683c\u5f0f\u4e3a\u539f\u672c DATETIME \u5b57\u9762\u91cf\u540e\u7d27\u8d34\u65f6\u533a\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"<date> <time>[<timezone>]\n")),(0,a.yg)("p",null,"\u5173\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"<timezone>"),"\u7684\u5177\u4f53\u652f\u6301\u683c\u5f0f\uff0c\u8bf7\u89c1",(0,a.yg)("a",{parentName:"p",href:"../../../advanced/time-zone"},"\u65f6\u533a"),"\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"DATE"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DATEV2"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"DATETIMEV2")," \u7c7b\u578b\u5747",(0,a.yg)("strong",{parentName:"p"},"\u4e0d"),'\u5305\u542b\u65f6\u533a\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u8f93\u5165\u7684\u65f6\u95f4\u5b57\u7b26\u4e32 "2012-12-12 08:00:00+08:00" \u7ecf\u89e3\u6790\u5e76\u8f6c\u6362\u81f3\u5f53\u524d\u65f6\u533a "+02:00"\uff0c\u5f97\u5230\u5b9e\u9645\u503c "2012-12-12 02:00:00" \u540e\u5b58\u50a8\u4e8e DATETIME \u5217\u4e2d\uff0c\u5219\u4e4b\u540e\u65e0\u8bba\u672c\u96c6\u7fa4\u73af\u5883\u53d8\u91cf\u5982\u4f55\u6539\u53d8\uff0c\u8be5\u503c\u672c\u8eab\u90fd\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u3002'),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select @@time_zone;\n+----------------+\n| @@time_zone    |\n+----------------+\n| Asia/Hong_Kong |\n+----------------+\n1 row in set (0.11 sec)\n\nmysql> insert into dtv23 values ("2020-12-12 12:12:12Z"), ("2020-12-12 12:12:12GMT"), ("2020-12-12 12:12:12+02:00"), ("2020-12-12 12:12:12America/Los_Angeles");\nQuery OK, 4 rows affected (0.17 sec)\n\nmysql> select * from dtv23;\n+-------------------------+\n| k0                      |\n+-------------------------+\n| 2020-12-12 20:12:12.000 |\n| 2020-12-12 20:12:12.000 |\n| 2020-12-13 04:12:12.000 |\n| 2020-12-12 18:12:12.000 |\n+-------------------------+\n4 rows in set (0.15 sec)\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATETIME\n")))}u.isMDXComponent=!0}}]);