"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[865153],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||r;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},205594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(58168),o=(t(296540),t(15680));const r={title:"WINDOW_FUNCTION_CUME_DIST",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/window-function-cume-dist",id:"version-3.0/sql-manual/sql-functions/window-functions/window-function-cume-dist",title:"WINDOW_FUNCTION_CUME_DIST",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/window-functions/window-function-cume-dist.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-cume-dist",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-cume-dist",draft:!1,tags:[],version:"3.0",frontMatter:{title:"WINDOW_FUNCTION_CUME_DIST",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_PERCENT_RANK",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-percent-rank"},next:{title:"WINDOW_FUNCTION_FIRST_VALUE",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-first-value"}},i={},c=[{value:"WINDOW FUNCTION CUME_DIST",id:"window-function-cume_dist",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-cume_dist"},"WINDOW FUNCTION CUME_DIST"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"CUME_DIST (Cumulative Distribution) is a window function commonly used to calculate the relative ranking of the current row value within a sorted result set. It returns the percentage ranking of the current row value in the result set, i.e., the ratio of the number of rows less than or equal to the current row value to the total number of rows in the result set after sorting."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CUME_DIST() OVER(partition_by_clause order_by_clause)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"Suppose there is a table named sales containing sales data, including salesperson name (sales_person), sales amount (sales_amount), and sales date (sales_date). We want to calculate the cumulative percentage of sales amount for each salesperson on each sales date compared to the total sales amount for that day."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    sales_person,\n    sales_date,\n    sales_amount,\n    CUME_DIST() OVER (PARTITION BY sales_date ORDER BY sales_amount ASC) AS cumulative_sales_percentage\nFROM \n    sales;\n")),(0,o.yg)("p",null,"Suppose the data in the sales table is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"+------+--------------+------------+--------------+\n| id   | sales_person | sales_date | sales_amount |\n+------+--------------+------------+--------------+\n|    1 | Alice        | 2024-02-01 |         2000 |\n|    2 | Bob          | 2024-02-01 |         1500 |\n|    3 | Alice        | 2024-02-02 |         1800 |\n|    4 | Bob          | 2024-02-02 |         1200 |\n|    5 | Alice        | 2024-02-03 |         2200 |\n|    6 | Bob          | 2024-02-03 |         1900 |\n|    7 | Tom          | 2024-02-03 |         2000 |\n|    8 | Jerry        | 2024-02-03 |         2000 |\n+------+--------------+------------+--------------+\n")),(0,o.yg)("p",null,"After executing the above SQL query, the result will display the sales amount for each salesperson on each sales date and their cumulative percentage ranking for that sales date."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"+--------------+------------+--------------+-----------------------------+\n| sales_person | sales_date | sales_amount | cumulative_sales_percentage |\n+--------------+------------+--------------+-----------------------------+\n| Bob          | 2024-02-01 |         1500 |                         0.5 |\n| Alice        | 2024-02-01 |         2000 |                           1 |\n| Bob          | 2024-02-02 |         1200 |                         0.5 |\n| Alice        | 2024-02-02 |         1800 |                           1 |\n| Bob          | 2024-02-03 |         1900 |                        0.25 |\n| Tom          | 2024-02-03 |         2000 |                        0.75 |\n| Jerry        | 2024-02-03 |         2000 |                        0.75 |\n| Alice        | 2024-02-03 |         2200 |                           1 |\n+--------------+------------+--------------+-----------------------------+\n")),(0,o.yg)("p",null,"In this example, the CUME_DIST() function sorts the sales amount for each sales date and then calculates the cumulative percentage of sales amount for each salesperson on that date compared to the total sales amount for that day. Since we use PARTITION BY sales_date, the calculation is done within each sales date, and the sales amount for salespersons on different dates is calculated separately."),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,CUME_DIST\n")))}p.isMDXComponent=!0}}]);