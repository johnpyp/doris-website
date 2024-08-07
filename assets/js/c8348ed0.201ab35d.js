"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[312354],{15680:(e,t,a)=>{a.d(t,{xA:()=>A,yg:()=>m});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},A=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=l,m=c["".concat(o,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(m,i(i({ref:t},A),{},{components:a})):n.createElement(m,i({ref:t},A))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},632166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(58168),l=(a(296540),a(15680));const r={title:"ALTER-DATABASE",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE",title:"ALTER-DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE",permalink:"/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-DATABASE",language:"en"},sidebar:"docs",previous:{title:"ALTER-CATALOG",permalink:"/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG"},next:{title:"ALTER-TABLE-COLUMN",permalink:"/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"}},o={},p=[{value:"ALTER-DATABASE",id:"alter-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],A={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,l.yg)(c,(0,n.A)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"alter-database"},"ALTER-DATABASE"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"ALTER DATABASE"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"This statement is used to set properties of the specified database. (administrator only)"),(0,l.yg)("p",null,"1) Set the database data quota, the unit is B/K/KB/M/MB/G/GB/T/TB/P/PB"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name SET DATA QUOTA quota;\n")),(0,l.yg)("p",null,"2) Rename the database"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name RENAME new_db_name;\n")),(0,l.yg)("p",null,"3) Set the quota for the number of copies of the database"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE db_name SET REPLICA QUOTA quota;\n")),(0,l.yg)("p",null,"illustrate:\nAfter renaming the database, use the REVOKE and GRANT commands to modify the appropriate user permissions, if necessary.\nThe default data quota for the database is 1024GB, and the default replica quota is 1073741824."),(0,l.yg)("p",null,"4) Modify the properties of an existing database"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER DATABASE db_name SET PROPERTIES ("key"="value", ...); \n')),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Set the specified database data volume quota")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\nThe above unit is bytes, which is equivalent to\nALTER DATABASE example_db SET DATA QUOTA 10T;\n\nALTER DATABASE example_db SET DATA QUOTA 100G;\n\nALTER DATABASE example_db SET DATA QUOTA 200M;\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Rename the database example_db to example_db2")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db RENAME example_db2;\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Set the quota for the number of copies of the specified database")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"Modify the default replica distribution policy for tables in db (this operation only applies to newly created tables and will not modify existing tables in db)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER DATABASE example_db SET PROPERTIES("replication_allocation" = "tag.location.default:2");\n')),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"Cancel the default replica distribution policy for tables in db (this operation only applies to newly created tables and will not modify existing tables in db)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER DATABASE example_db SET PROPERTIES("replication_allocation" = "");\n')),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"ALTER,DATABASE,RENAME\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);