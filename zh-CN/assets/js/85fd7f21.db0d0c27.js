"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[925988],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>c});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),o=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=o(e.components);return t.createElement(u.Provider,{value:a},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(n),g=r,c=s["".concat(u,".").concat(g)]||s[g]||y[g]||l;return n?t.createElement(c,i(i({ref:a},m),{},{components:n})):t.createElement(c,i({ref:a},m))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},997466:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var t=n(58168),r=(n(296540),n(15680));const l={title:"SQL \u62e6\u622a",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/query-admin/sql-interception",id:"version-2.0/admin-manual/query-admin/sql-interception",title:"SQL \u62e6\u622a",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/query-admin/sql-interception.md",sourceDirName:"admin-manual/query-admin",slug:"/admin-manual/query-admin/sql-interception",permalink:"/zh-CN/docs/2.0/admin-manual/query-admin/sql-interception",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SQL \u62e6\u622a",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5f39\u6027\u8ba1\u7b97\u8282\u70b9",permalink:"/zh-CN/docs/2.0/admin-manual/resource-admin/compute-node"},next:{title:"Kill Query",permalink:"/zh-CN/docs/2.0/admin-manual/query-admin/kill-query"}},u={},o=[{value:"\u89c4\u5219",id:"\u89c4\u5219",level:2},{value:"\u7528\u6237\u89c4\u5219\u7ed1\u5b9a",id:"\u7528\u6237\u89c4\u5219\u7ed1\u5b9a",level:2}],m={toc:o},s="wrapper";function y(e){let{components:a,...n}=e;return(0,r.yg)(s,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u8be5\u529f\u80fd\u7528\u4e8e\u9650\u5236\u6267\u884c sql \u8bed\u53e5\uff08DDL / DML \u90fd\u53ef\u9650\u5236\uff09\u3002\n\u652f\u6301\u6309\u7528\u6237\u914d\u7f6e SQL \u9ed1\u540d\u5355\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u6b63\u5219\u5339\u914d\u7684\u65b9\u5f0f\u62d2\u7edd\u6307\u5b9a SQL")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7\u8bbe\u7f6e partition_num, tablet_num, cardinality, \u68c0\u67e5\u4e00\u4e2a\u67e5\u8be2\u662f\u5426\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9650\u5236"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"partition_num, tablet_num, cardinality \u53ef\u4ee5\u4e00\u8d77\u8bbe\u7f6e\uff0c\u4e00\u65e6\u4e00\u4e2a\u67e5\u8be2\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9650\u5236\uff0c\u67e5\u8be2\u5c06\u4f1a\u88ab\u62e6\u622a")),(0,r.yg)("h2",{id:"\u89c4\u5219"},"\u89c4\u5219"),(0,r.yg)("p",null,"\u5bf9 SQL \u89c4\u5219\u589e\u5220\u6539\u67e5"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa SQL \u963b\u6b62\u89c4\u5219\uff0c\u66f4\u591a\u521b\u5efa\u8bed\u6cd5\u8bf7\u53c2\u9605",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},"CREATE SQL BLOCK RULE")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'sql\uff1a\u5339\u914d\u89c4\u5219 (\u57fa\u4e8e\u6b63\u5219\u5339\u914d\uff0c\u7279\u6b8a\u5b57\u7b26\u9700\u8981\u8f6c\u8bd1)\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c\u4e3a "NULL"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"sqlHash: sql hash \u503c\uff0c\u7528\u4e8e\u5b8c\u5168\u5339\u914d\uff0c\u6211\u4eec\u4f1a\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"fe.audit.log"),'\u6253\u5370\u8fd9\u4e2a\u503c\uff0c\u53ef\u9009\uff0c\u8fd9\u4e2a\u53c2\u6570\u548c SQL \u53ea\u80fd\u4e8c\u9009\u4e00\uff0c\u9ed8\u8ba4\u503c\u4e3a "NULL"')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"partition_num: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u4f1a\u626b\u63cf\u7684\u6700\u5927 Partition \u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a 0L")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"tablet_num: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u4f1a\u626b\u63cf\u7684\u6700\u5927 Tablet \u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a 0L")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"cardinality: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u7c97\u7565\u7684\u626b\u63cf\u884c\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a 0L")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"global\uff1a\u662f\u5426\u5168\u5c40 (\u6240\u6709\u7528\u6237) \u751f\u6548\uff0c\u9ed8\u8ba4\u4e3a false")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"enable\uff1a\u662f\u5426\u5f00\u542f\u963b\u6b62\u89c4\u5219\uff0c\u9ed8\u8ba4\u4e3a true"))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule \nPROPERTIES(\n  "sql"="select \\\\* from order_analysis",\n  "global"="false",\n  "enable"="true",\n  "sqlHash"=""\n)\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\n\u8fd9\u91cc SQL \u8bed\u53e5\u6700\u540e\u4e0d\u8981\u5e26\u5206\u53f7")),(0,r.yg)("p",null,"\u5f53\u6211\u4eec\u53bb\u6267\u884c\u521a\u624d\u6211\u4eec\u5b9a\u4e49\u5728\u89c4\u5219\u91cc\u7684 SQL \u65f6\u5c31\u4f1a\u8fd4\u56de\u5f02\u5e38\u9519\u8bef\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa test_rule2\uff0c\u5c06\u6700\u5927\u626b\u63cf\u7684\u5206\u533a\u6570\u91cf\u9650\u5236\u5728 30 \u4e2a\uff0c\u6700\u5927\u626b\u63cf\u57fa\u6570\u9650\u5236\u5728 100 \u4ebf\u884c\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "30", "cardinality"="10000000000","global"="false","enable"="true")\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u5df2\u914d\u7f6e\u7684 SQL \u963b\u6b62\u89c4\u5219\uff0c\u4e0d\u6307\u5b9a\u89c4\u5219\u540d\u5219\u4e3a\u67e5\u770b\u6240\u6709\u89c4\u5219\uff0c\u5177\u4f53\u8bed\u6cd5\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Show-Statements/SHOW-SQL-BLOCK-RULE"},"SHOW SQL BLOCK RULE")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW SQL_BLOCK_RULE [FOR RULE_NAME]\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 SQL \u963b\u6b62\u89c4\u5219\uff0c\u5141\u8bb8\u5bf9 sql/sqlHash/partition_num/tablet_num/cardinality/global/enable \u7b49\u6bcf\u4e00\u9879\u8fdb\u884c\u4fee\u6539\uff0c\u5177\u4f53\u8bed\u6cd5\u8bf7\u53c2\u9605",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"},"ALTER SQL BLOCK  RULE")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"sql \u548c sqlHash \u4e0d\u80fd\u540c\u65f6\u88ab\u8bbe\u7f6e\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u4e00\u4e2a rule \u8bbe\u7f6e\u4e86 sql \u6216\u8005 sqlHash\uff0c\u5219\u53e6\u4e00\u4e2a\u5c5e\u6027\u5c06\u65e0\u6cd5\u88ab\u4fee\u6539")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"sql/sqlHash \u548c partition_num/tablet_num/cardinality \u4e0d\u80fd\u540c\u65f6\u88ab\u8bbe\u7f6e\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u4e00\u4e2a rule \u8bbe\u7f6e\u4e86 partition_num\uff0c\u90a3\u4e48 sql \u6216\u8005 sqlHash \u5c06\u65e0\u6cd5\u88ab\u4fee\u6539"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n'))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664 SQL \u963b\u6b62\u89c4\u5219\uff0c\u652f\u6301\u591a\u89c4\u5219\uff0c\u4ee5",(0,r.yg)("inlineCode",{parentName:"p"},","),"\u9694\u5f00\uff0c\u5177\u4f53\u8bed\u6cd5\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-SQL-BLOCK-RULE"},"DROP SQL BLOCK RULE")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"DROP SQL_BLOCK_RULE test_rule1,test_rule2\n")))),(0,r.yg)("h2",{id:"\u7528\u6237\u89c4\u5219\u7ed1\u5b9a"},"\u7528\u6237\u89c4\u5219\u7ed1\u5b9a"),(0,r.yg)("p",null,"\u5982\u679c\u914d\u7f6e global=false\uff0c\u5219\u9700\u8981\u914d\u7f6e\u6307\u5b9a\u7528\u6237\u7684\u89c4\u5219\u7ed1\u5b9a\uff0c\u591a\u4e2a\u89c4\u5219\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},","),"\u5206\u9694"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'jack'] 'sql_block_rules' = 'test_rule1,test_rule2'\n")))}y.isMDXComponent=!0}}]);