"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[935533],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=r,g=u["".concat(o,".").concat(y)]||u[y]||m[y]||l;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},791815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const l={title:"CREATE-SQL-BLOCK-RULE",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",title:"CREATE-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-SQL-BLOCK-RULE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-WORKLOAD-GROUP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},next:{title:"ALTER-CATALOG",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG"}},o={},p=[{value:"CREATE-SQL-BLOCK-RULE",id:"create-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-sql-block-rule"},"CREATE-SQL-BLOCK-RULE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE SQL BLOCK RULE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u521b\u5efaSQL\u963b\u6b62\u89c4\u5219\uff0c\u8be5\u529f\u80fd\u53ef\u7528\u4e8e\u9650\u5236\u4efb\u4f55sql\u8bed\u53e5\uff08\u5305\u62ec DDL \u548c DML \u8bed\u53e5\uff09\u3002"),(0,r.yg)("p",null,"\u652f\u6301\u6309\u7528\u6237\u914d\u7f6eSQL\u9ed1\u540d\u5355\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7\u6b63\u5219\u5339\u914d\u7684\u65b9\u5f0f\u62d2\u7edd\u6307\u5b9aSQL"),(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7\u8bbe\u7f6epartition_num, tablet_num, cardinality, \u68c0\u67e5\u4e00\u4e2a\u67e5\u8be2\u662f\u5426\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9650\u5236",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"partition_num, tablet_num, cardinality \u53ef\u4ee5\u4e00\u8d77\u8bbe\u7f6e\uff0c\u4e00\u65e6\u4e00\u4e2a\u67e5\u8be2\u8fbe\u5230\u5176\u4e2d\u4e00\u4e2a\u9650\u5236\uff0c\u67e5\u8be2\u5c06\u4f1a\u88ab\u62e6\u622a")))),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE rule_name \n[PROPERTIES ("key"="value", ...)];\n')),(0,r.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sql\uff1a\u5339\u914d\u89c4\u5219(\u57fa\u4e8e\u6b63\u5219\u5339\u914d,\u7279\u6b8a\u5b57\u7b26\u9700\u8981\u8f6c\u8bd1,\u5982",(0,r.yg)("inlineCode",{parentName:"li"},"select *"),"\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"li"},"select \\\\*"),')\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c\u4e3a "NULL", \u6700\u540e\u4e0d\u8981\u5e26\u5206\u53f7'),(0,r.yg)("li",{parentName:"ul"},"sqlHash: sql hash\u503c\uff0c\u7528\u4e8e\u5b8c\u5168\u5339\u914d\uff0c\u6211\u4eec\u4f1a\u5728",(0,r.yg)("inlineCode",{parentName:"li"},"fe.audit.log"),'\u6253\u5370\u8fd9\u4e2a\u503c\uff0c\u53ef\u9009\uff0c\u8fd9\u4e2a\u53c2\u6570\u548csql\u53ea\u80fd\u4e8c\u9009\u4e00\uff0c\u9ed8\u8ba4\u503c\u4e3a "NULL"'),(0,r.yg)("li",{parentName:"ul"},"partition_num: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u4f1a\u626b\u63cf\u7684\u6700\u5927partition\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,r.yg)("li",{parentName:"ul"},"tablet_num: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u4f1a\u626b\u63cf\u7684\u6700\u5927tablet\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,r.yg)("li",{parentName:"ul"},"cardinality: \u4e00\u4e2a\u626b\u63cf\u8282\u70b9\u7c97\u7565\u7684\u626b\u63cf\u884c\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a0L"),(0,r.yg)("li",{parentName:"ul"},"global\uff1a\u662f\u5426\u5168\u5c40(\u6240\u6709\u7528\u6237)\u751f\u6548\uff0c\u9ed8\u8ba4\u4e3afalse"),(0,r.yg)("li",{parentName:"ul"},"enable\uff1a\u662f\u5426\u5f00\u542f\u963b\u6b62\u89c4\u5219\uff0c\u9ed8\u8ba4\u4e3atrue")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3a test_rule \u7684\u963b\u6b62\u89c4\u5219"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule \nPROPERTIES(\n  "sql"="select \\\\* from order_analysis",\n  "global"="false",\n  "enable"="true"\n);\n')),(0,r.yg)("p",{parentName:"li"},"\u5f53\u6211\u4eec\u53bb\u6267\u884c\u521a\u624d\u6211\u4eec\u5b9a\u4e49\u5728\u89c4\u5219\u91cc\u7684sql\u65f6\u5c31\u4f1a\u8fd4\u56de\u5f02\u5e38\u9519\u8bef\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa test_rule2\uff0c\u5c06\u6700\u5927\u626b\u63cf\u7684\u5206\u533a\u6570\u91cf\u9650\u5236\u572830\u4e2a\uff0c\u6700\u5927\u626b\u63cf\u57fa\u6570\u9650\u5236\u5728100\u4ebf\u884c\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule2 \nPROPERTIES\n(\n   "partition_num" = "30",\n   "cardinality" = "10000000000",\n   "global" = "false",\n   "enable" = "true"\n);\nQuery OK, 0 rows affected (0.01 sec)\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u7684 SQL BLOCK RULE\uff0c \u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d ( \u548c ) \u7b26\u53f7\u662f\u7279\u6b8a\u7b26\u53f7\uff0c\u6240\u4ee5\u9700\u8981\u8f6c\u4e49\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule3\nPROPERTIES\n( \n"sql" = "select count\\\\(1\\\\) from db1.tbl1"\n);\nCREATE SQL_BLOCK_RULE test_rule4\nPROPERTIES\n( \n"sql" = "select \\\\* from db1.tbl1"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"SQL",(0,r.yg)("em",{parentName:"p"},"BLCOK_RULE \u4e2d\uff0cSQL \u7684\u5339\u914d\u662f\u57fa\u4e8e\u6b63\u5219\u7684\uff0c\u5982\u679c\u60f3\u5339\u914d\u66f4\u591a\u6a21\u5f0f\u7684 SQL \u9700\u8981\u5199\u76f8\u5e94\u7684\u6b63\u5219\uff0c\u6bd4\u5982\u5ffd\u7565 SQL\n\u4e2d\u7a7a\u683c\uff0c\u8fd8\u6709 order")," \u5f00\u5934\u7684\u8868\u90fd\u4e0d\u80fd\u67e5\u8be2\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'  CREATE SQL_BLOCK_RULE test_rule4 \n  PROPERTIES(\n    "sql"="\\\\s*select\\\\s*\\\\*\\\\s*from order_\\\\w*\\\\s*",\n    "global"="false",\n    "enable"="true"\n  );\n')))),(0,r.yg)("h3",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,r.yg)("p",null,"\u5e38\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5982\u4e0b\uff1a"),(0,r.yg)("blockquote",null,(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},". \uff1a\u5339\u914d\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26\uff0c\u9664\u4e86\u6362\u884c\u7b26 \\n\u3002\n\n* \uff1a\u5339\u914d\u524d\u9762\u7684\u5143\u7d20\u96f6\u6b21\u6216\u591a\u6b21\u3002\u4f8b\u5982\uff0ca* \u5339\u914d\u96f6\u4e2a\u6216\u591a\u4e2a 'a'\u3002\n\n+ \uff1a\u5339\u914d\u524d\u9762\u7684\u5143\u7d20\u4e00\u6b21\u6216\u591a\u6b21\u3002\u4f8b\u5982\uff0ca+ \u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a 'a'\u3002\n\n? \uff1a\u5339\u914d\u524d\u9762\u7684\u5143\u7d20\u96f6\u6b21\u6216\u4e00\u6b21\u3002\u4f8b\u5982\uff0ca? \u5339\u914d\u96f6\u4e2a\u6216\u4e00\u4e2a 'a'\u3002\n\n[] \uff1a\u7528\u4e8e\u5b9a\u4e49\u5b57\u7b26\u96c6\u5408\u3002\u4f8b\u5982\uff0c[aeiou] \u5339\u914d\u4efb\u4f55\u4e00\u4e2a\u5143\u97f3\u5b57\u6bcd\u3002\n\n[^] \uff1a\u5728\u5b57\u7b26\u96c6\u5408\u4e2d\u4f7f\u7528 ^ \u8868\u793a\u5426\u5b9a\uff0c\u5339\u914d\u4e0d\u5728\u96c6\u5408\u5185\u7684\u5b57\u7b26\u3002\u4f8b\u5982\uff0c[^0-9] \u5339\u914d\u4efb\u4f55\u975e\u6570\u5b57\u5b57\u7b26\u3002\n\n() \uff1a\u7528\u4e8e\u5206\u7ec4\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u5bf9\u5176\u5e94\u7528\u91cf\u8bcd\u3002\u4f8b\u5982\uff0c(ab)+ \u5339\u914d\u8fde\u7eed\u7684 'ab'\u3002\n\n| \uff1a\u7528\u4e8e\u8868\u793a\u6216\u903b\u8f91\u3002\u4f8b\u5982\uff0ca|b \u5339\u914d 'a' \u6216 'b'\u3002\n\n^ \uff1a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u5f00\u5934\u3002\u4f8b\u5982\uff0c^abc \u5339\u914d\u4ee5 'abc' \u5f00\u5934\u7684\u5b57\u7b26\u4e32\u3002\n\n$ \uff1a\u5339\u914d\u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\u3002\u4f8b\u5982\uff0cxyz$ \u5339\u914d\u4ee5 'xyz' \u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\u3002\n\n\\ \uff1a\u7528\u4e8e\u8f6c\u4e49\u7279\u6b8a\u5b57\u7b26\uff0c\u4f7f\u5176\u53d8\u6210\u666e\u901a\u5b57\u7b26\u3002\u4f8b\u5982\uff0c\\\\. \u5339\u914d\u53e5\u70b9\u5b57\u7b26 '.'\u3002\n\n\\s \uff1a\u5339\u914d\u4efb\u4f55\u7a7a\u767d\u5b57\u7b26\uff0c\u5305\u62ec\u7a7a\u683c\u3001\u5236\u8868\u7b26\u3001\u6362\u884c\u7b26\u7b49\u3002\n\n\\d \uff1a\u5339\u914d\u4efb\u4f55\u6570\u5b57\u5b57\u7b26\uff0c\u76f8\u5f53\u4e8e [0-9]\u3002\n\n\\w \uff1a\u5339\u914d\u4efb\u4f55\u5355\u8bcd\u5b57\u7b26\uff0c\u5305\u62ec\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u4e0b\u5212\u7ebf\uff0c\u76f8\u5f53\u4e8e [a-zA-Z0-9_]\u3002\n"))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"CREATE, SQL_BLCOK_RULE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);