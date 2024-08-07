"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[192493],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),E=a,y=m["".concat(i,".").concat(E)]||m[E]||u[E]||l;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=E;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},96193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-CREATE-TABLE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-CREATE-TABLE",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-TABLE",title:"SHOW-CREATE-TABLE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-TABLE.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-TABLE",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-TABLE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-CREATE-TABLE",language:"en"},sidebar:"docs",previous:{title:"SHOW-CATALOGS",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-CATALOGS"},next:{title:"SHOW-CREATE-MATERIALIZED-VIEW",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW"}},i={},c=[{value:"SHOW-CREATE-TABLE",id:"show-create-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-create-table"},"SHOW-CREATE-TABLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW CREATE TABLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to display the creation statement of the data table."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [BRIEF] CREATE TABLE [DBNAME.]TABLE_NAME\n")),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("version",{since:"dev"},(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"BRIEF")," : will not show partitions info"))),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"DBNAMNE")," : database name"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"TABLE_NAME")," : table name")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View the table creation statement of a table"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE demo.tb1\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CREATE, TABLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);