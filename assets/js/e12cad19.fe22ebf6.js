"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[988493],{15680:(e,t,a)=>{a.d(t,{xA:()=>E,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},E=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,E=s(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,d=p["".concat(o,".").concat(c)]||p[c]||u[c]||l;return a?n.createElement(d,i(i({ref:t},E),{},{components:a})):n.createElement(d,i({ref:t},E))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},787693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(58168),r=(a(296540),a(15680));const l={title:"ALTER-ASYNC-MATERIALIZED-VIEW",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW",title:"ALTER-ASYNC-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW",permalink:"/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-ASYNC-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"ALTER-SQL-BLOCK-RULE",permalink:"/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE"},next:{title:"PAUSE-JOB",permalink:"/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/PAUSE-JOB"}},o={},m=[{value:"ALTER-ASYNC-MATERIALIZED-VIEW",id:"alter-async-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"illustrate",id:"illustrate",level:4},{value:"RENAME",id:"rename",level:5},{value:"refreshMethod",id:"refreshmethod",level:5},{value:"refreshTrigger",id:"refreshtrigger",level:5},{value:"SET",id:"set",level:5},{value:"REPLACE",id:"replace",level:5},{value:"Keywords",id:"keywords",level:3}],E={toc:m},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-async-materialized-view"},"ALTER-ASYNC-MATERIALIZED-VIEW"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER ASYNC MATERIALIZED VIEW"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to modify asynchronous materialized views."),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER MATERIALIZED VIEW mvName=multipartIdentifier ((RENAME newName=identifier)\n       | (REFRESH (refreshMethod | refreshTrigger | refreshMethod refreshTrigger))\n       | REPLACE WITH MATERIALIZED VIEW newName=identifier propertyClause?\n       | (SET  LEFT_PAREN fileProperties=propertyItemList RIGHT_PAREN))\n")),(0,r.yg)("h4",{id:"illustrate"},"illustrate"),(0,r.yg)("h5",{id:"rename"},"RENAME"),(0,r.yg)("p",null,"Used to change the name of the materialized view"),(0,r.yg)("p",null,"For example, changing the name of mv1 to mv2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER MATERIALIZED VIEW mv1 rename mv2;\n")),(0,r.yg)("h5",{id:"refreshmethod"},"refreshMethod"),(0,r.yg)("p",null,"Same as ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"creating asynchronous materialized views")),(0,r.yg)("h5",{id:"refreshtrigger"},"refreshTrigger"),(0,r.yg)("p",null,"Same as ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"creating asynchronous materialized views")),(0,r.yg)("h5",{id:"set"},"SET"),(0,r.yg)("p",null,"Modify properties unique to materialized views"),(0,r.yg)("p",null,"For example, modifying the grace_period of mv1 to 3000ms"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER MATERIALIZED VIEW mv1 set("grace_period"="3000");\n')),(0,r.yg)("h5",{id:"replace"},"REPLACE"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER MATERIALIZED VIEW [db.]mv1 REPLACE WITH MATERIALIZED VIEW mv2\n[PROPERTIES('swap' = 'true')];\n")),(0,r.yg)("p",null,"Replacing atoms with two materialized views"),(0,r.yg)("p",null,"swap default is TRUE"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the swap parameter is set to TRUE, it is equivalent to renaming the materialized view mv1 to mv2, and renaming mv2 to mv1 at the same time"),(0,r.yg)("li",{parentName:"ul"},"If the swap parameter is set to FALSE, it is equivalent to renaming mv2 to mv1 and deleting the original mv1")),(0,r.yg)("p",null,"For example, if you want to swap the names of mv1 and mv2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER MATERIALIZED VIEW db1.mv1 REPLACE WITH MATERIALIZED VIEW mv2;\n")),(0,r.yg)("p",null,"For example, if you want to rename mv2 to mv1 and delete the original mv1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER MATERIALIZED VIEW db1.mv1 REPLACE WITH MATERIALIZED VIEW mv2\nPROPERTIES('swap' = 'false');\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER, ASYNC, MATERIALIZED, VIEW\n")))}u.isMDXComponent=!0}}]);