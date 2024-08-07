"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[482111],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(t),y=o,g=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=y;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},947935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const i={title:"\u7a97\u53e3\u51fd\u6570",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/window-functions/window-function",id:"version-3.0/sql-manual/sql-functions/window-functions/window-function",title:"\u7a97\u53e3\u51fd\u6570",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/window-functions/window-function.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u7a97\u53e3\u51fd\u6570",language:"zh-CN"},sidebar:"docs",previous:{title:"QUERY",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/query"},next:{title:"WINDOW_FUNCTION_SUM",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-sum"}},c={},s=[{value:"WINDOW FUNCTION",id:"window-function",level:2},{value:"description",id:"description",level:3},{value:"Function",id:"function",level:4},{value:"PARTITION BY\u4ece\u53e5",id:"partition-by\u4ece\u53e5",level:4},{value:"ORDER BY\u4ece\u53e5",id:"order-by\u4ece\u53e5",level:4},{value:"Window\u4ece\u53e5",id:"window\u4ece\u53e5",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function"},"WINDOW FUNCTION"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u5206\u6790\u51fd\u6570\u662f\u4e00\u7c7b\u7279\u6b8a\u7684\u5185\u7f6e\u51fd\u6570\u3002\u548c\u805a\u5408\u51fd\u6570\u7c7b\u4f3c\uff0c\u5206\u6790\u51fd\u6570\u4e5f\u662f\u5bf9\u4e8e\u591a\u4e2a\u8f93\u5165\u884c\u505a\u8ba1\u7b97\u5f97\u5230\u4e00\u4e2a\u6570\u636e\u503c\u3002\u4e0d\u540c\u7684\u662f\uff0c\u5206\u6790\u51fd\u6570\u662f\u5728\u4e00\u4e2a\u7279\u5b9a\u7684\u7a97\u53e3\u5185\u5bf9\u8f93\u5165\u6570\u636e\u505a\u5904\u7406\uff0c\u800c\u4e0d\u662f\u6309\u7167 group by \u6765\u5206\u7ec4\u8ba1\u7b97\u3002\u6bcf\u4e2a\u7a97\u53e3\u5185\u7684\u6570\u636e\u53ef\u4ee5\u7528 over() \u4ece\u53e5\u8fdb\u884c\u6392\u5e8f\u548c\u5206\u7ec4\u3002\u5206\u6790\u51fd\u6570\u4f1a\u5bf9\u7ed3\u679c\u96c6\u7684\u6bcf\u4e00\u884c\u8ba1\u7b97\u51fa\u4e00\u4e2a\u5355\u72ec\u7684\u503c\uff0c\u800c\u4e0d\u662f\u6bcf\u4e2a group by \u5206\u7ec4\u8ba1\u7b97\u4e00\u4e2a\u503c\u3002\u8fd9\u79cd\u7075\u6d3b\u7684\u65b9\u5f0f\u5141\u8bb8\u7528\u6237\u5728 select \u4ece\u53e5\u4e2d\u589e\u52a0\u989d\u5916\u7684\u5217\uff0c\u7ed9\u7528\u6237\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u673a\u4f1a\u6765\u5bf9\u7ed3\u679c\u96c6\u8fdb\u884c\u91cd\u65b0\u7ec4\u7ec7\u548c\u8fc7\u6ee4\u3002\u5206\u6790\u51fd\u6570\u53ea\u80fd\u51fa\u73b0\u5728 select \u5217\u8868\u548c\u6700\u5916\u5c42\u7684 order by \u4ece\u53e5\u4e2d\u3002\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\uff0c\u5206\u6790\u51fd\u6570\u4f1a\u5728\u6700\u540e\u751f\u6548\uff0c\u5c31\u662f\u8bf4\uff0c\u5728\u6267\u884c\u5b8c join\uff0cwhere \u548c group by \u7b49\u64cd\u4f5c\u4e4b\u540e\u518d\u6267\u884c\u3002\u5206\u6790\u51fd\u6570\u5728\u91d1\u878d\u548c\u79d1\u5b66\u8ba1\u7b97\u9886\u57df\u7ecf\u5e38\u88ab\u4f7f\u7528\u5230\uff0c\u7528\u6765\u5206\u6790\u8d8b\u52bf\u3001\u8ba1\u7b97\u79bb\u7fa4\u503c\u4ee5\u53ca\u5bf9\u5927\u91cf\u6570\u636e\u8fdb\u884c\u5206\u6876\u5206\u6790\u7b49\u3002"),(0,o.yg)("p",null,"\u5206\u6790\u51fd\u6570\u7684\u8bed\u6cd5\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"function(args) OVER(partition_by_clause order_by_clause [window_clause])    \npartition_by_clause ::= PARTITION BY expr [, expr ...]    \norder_by_clause ::= ORDER BY expr [ASC | DESC] [, expr [ASC | DESC] ...]\n")),(0,o.yg)("h4",{id:"function"},"Function"),(0,o.yg)("p",null,"\u76ee\u524d\u652f\u6301\u7684 Function \u5305\u62ec AVG(), COUNT(), DENSE_RANK(), FIRST_VALUE(), LAG(), LAST_VALUE(), LEAD(), MAX(), MIN(), RANK(), ROW_NUMBER() \u548c SUM()\u3002"),(0,o.yg)("h4",{id:"partition-by\u4ece\u53e5"},"PARTITION BY\u4ece\u53e5"),(0,o.yg)("p",null,"Partition By \u4ece\u53e5\u548c Group By \u7c7b\u4f3c\u3002\u5b83\u628a\u8f93\u5165\u884c\u6309\u7167\u6307\u5b9a\u7684\u4e00\u5217\u6216\u591a\u5217\u5206\u7ec4\uff0c\u76f8\u540c\u503c\u7684\u884c\u4f1a\u88ab\u5206\u5230\u4e00\u7ec4\u3002"),(0,o.yg)("h4",{id:"order-by\u4ece\u53e5"},"ORDER BY\u4ece\u53e5"),(0,o.yg)("p",null,"Order By\u4ece\u53e5\u548c\u5916\u5c42\u7684Order By\u57fa\u672c\u4e00\u81f4\u3002\u5b83\u5b9a\u4e49\u4e86\u8f93\u5165\u884c\u7684\u6392\u5217\u987a\u5e8f\uff0c\u5982\u679c\u6307\u5b9a\u4e86 Partition By\uff0c\u5219 Order By \u5b9a\u4e49\u4e86\u6bcf\u4e2a Partition \u5206\u7ec4\u5185\u7684\u987a\u5e8f\u3002\u4e0e\u5916\u5c42 Order By \u7684\u552f\u4e00\u4e0d\u540c\u70b9\u662f\uff0cOVER \u4ece\u53e5\u4e2d\u7684 Order By n\uff08n\u662f\u6b63\u6574\u6570\uff09\u76f8\u5f53\u4e8e\u4e0d\u505a\u4efb\u4f55\u64cd\u4f5c\uff0c\u800c\u5916\u5c42\u7684 Order By n\u8868\u793a\u6309\u7167\u7b2cn\u5217\u6392\u5e8f\u3002"),(0,o.yg)("p",null,"\u4e3e\u4f8b:"),(0,o.yg)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5728select\u5217\u8868\u4e2d\u589e\u52a0\u4e00\u4e2aid\u5217\uff0c\u5b83\u7684\u503c\u662f1\uff0c2\uff0c3\u7b49\u7b49\uff0c\u987a\u5e8f\u6309\u7167events\u8868\u4e2d\u7684date_and_time\u5217\u6392\u5e8f\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT   \nrow_number() OVER (ORDER BY date_and_time) AS id,   \nc1, c2, c3, c4   \nFROM events;\n")),(0,o.yg)("h4",{id:"window\u4ece\u53e5"},"Window\u4ece\u53e5"),(0,o.yg)("p",null,"Window \u4ece\u53e5\u7528\u6765\u4e3a\u5206\u6790\u51fd\u6570\u6307\u5b9a\u4e00\u4e2a\u8fd0\u7b97\u8303\u56f4\uff0c\u4ee5\u5f53\u524d\u884c\u4e3a\u51c6\uff0c\u524d\u540e\u82e5\u5e72\u884c\u4f5c\u4e3a\u5206\u6790\u51fd\u6570\u8fd0\u7b97\u7684\u5bf9\u8c61\u3002Window \u4ece\u53e5\u652f\u6301\u7684\u65b9\u6cd5\u6709\uff1aAVG(), COUNT(), FIRST_VALUE(), LAST_VALUE() \u548c SUM()\u3002\u5bf9\u4e8e MAX() \u548c MIN(), window \u4ece\u53e5\u53ef\u4ee5\u6307\u5b9a\u5f00\u59cb\u8303\u56f4 UNBOUNDED PRECEDING"),(0,o.yg)("p",null,"\u8bed\u6cd5:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"ROWS BETWEEN [ { m | UNBOUNDED } PRECEDING | CURRENT ROW] [ AND [CURRENT ROW | { UNBOUNDED | n } FOLLOWING] ]\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u5982\u4e0b\u7684\u80a1\u7968\u6570\u636e\uff0c\u80a1\u7968\u4ee3\u7801\u662f JDR\uff0cclosing price \u662f\u6bcf\u5929\u7684\u6536\u76d8\u4ef7\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"create table stock_ticker (stock_symbol string, closing_price decimal(8,2), closing_date timestamp);    \n...load some data...    \nselect * from stock_ticker order by stock_symbol, closing_date\n | stock_symbol | closing_price | closing_date        |\n |--------------|---------------|---------------------|\n | JDR          | 12.86         | 2014-10-02 00:00:00 |\n | JDR          | 12.89         | 2014-10-03 00:00:00 |\n | JDR          | 12.94         | 2014-10-04 00:00:00 |\n | JDR          | 12.55         | 2014-10-05 00:00:00 |\n | JDR          | 14.03         | 2014-10-06 00:00:00 |\n | JDR          | 14.75         | 2014-10-07 00:00:00 |\n | JDR          | 13.98         | 2014-10-08 00:00:00 |\n")),(0,o.yg)("p",null,"\u8fd9\u4e2a\u67e5\u8be2\u4f7f\u7528\u5206\u6790\u51fd\u6570\u4ea7\u751f moving_average \u8fd9\u4e00\u5217\uff0c\u5b83\u7684\u503c\u662f3\u5929\u7684\u80a1\u7968\u5747\u4ef7\uff0c\u5373\u524d\u4e00\u5929\u3001\u5f53\u524d\u4ee5\u53ca\u540e\u4e00\u5929\u4e09\u5929\u7684\u5747\u4ef7\u3002\u7b2c\u4e00\u5929\u6ca1\u6709\u524d\u4e00\u5929\u7684\u503c\uff0c\u6700\u540e\u4e00\u5929\u6ca1\u6709\u540e\u4e00\u5929\u7684\u503c\uff0c\u6240\u4ee5\u8fd9\u4e24\u884c\u53ea\u8ba1\u7b97\u4e86\u4e24\u5929\u7684\u5747\u503c\u3002\u8fd9\u91cc Partition By \u6ca1\u6709\u8d77\u5230\u4f5c\u7528\uff0c\u56e0\u4e3a\u6240\u6709\u7684\u6570\u636e\u90fd\u662f JDR \u7684\u6570\u636e\uff0c\u4f46\u5982\u679c\u8fd8\u6709\u5176\u4ed6\u80a1\u7968\u4fe1\u606f\uff0cPartition By \u4f1a\u4fdd\u8bc1\u5206\u6790\u51fd\u6570\u503c\u4f5c\u7528\u5728\u672c Partition \u4e4b\u5185\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select stock_symbol, closing_date, closing_price,    \navg(closing_price) over (partition by stock_symbol order by closing_date    \nrows between 1 preceding and 1 following) as moving_average    \nfrom stock_ticker;\n | stock_symbol | closing_date        | closing_price | moving_average |\n |--------------|---------------------|---------------|----------------|\n | JDR          | 2014-10-02 00:00:00 | 12.86         | 12.87          |\n | JDR          | 2014-10-03 00:00:00 | 12.89         | 12.89          |\n | JDR          | 2014-10-04 00:00:00 | 12.94         | 12.79          |\n | JDR          | 2014-10-05 00:00:00 | 12.55         | 13.17          |\n | JDR          | 2014-10-06 00:00:00 | 14.03         | 13.77          |\n | JDR          | 2014-10-07 00:00:00 | 14.75         | 14.25          |\n | JDR          | 2014-10-08 00:00:00 | 13.98         | 14.36          |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION\n")))}p.isMDXComponent=!0}}]);