"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[145176],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>f});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?t.createElement(f,l(l({ref:n},c),{},{components:r})):t.createElement(f,l({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},416780:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=r(58168),o=(r(296540),r(15680));const a={title:"WORKLOAD_GROUPS",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/workload-group",id:"version-2.1/sql-manual/sql-functions/table-functions/workload-group",title:"WORKLOAD_GROUPS",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/table-functions/workload-group.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/workload-group",permalink:"/docs/2.1/sql-manual/sql-functions/table-functions/workload-group",draft:!1,tags:[],version:"2.1",frontMatter:{title:"WORKLOAD_GROUPS",language:"en"},sidebar:"docs",previous:{title:"FRONTENDS",permalink:"/docs/2.1/sql-manual/sql-functions/table-functions/frontends"},next:{title:"CATALOGS",permalink:"/docs/2.1/sql-manual/sql-functions/table-functions/catalogs"}},s={},u=[{value:"<code>workload_groups</code>",id:"workload_groups",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"workload_groups"},(0,o.yg)("inlineCode",{parentName:"h2"},"workload_groups")),(0,o.yg)("h3",{id:"name"},"Name"),(0,o.yg)("p",null,"workload_groups"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Since 2.1.1, this table function has been moved to the information_schema.workload_groups.")),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"Table-Value-Function, generate a temporary table named ",(0,o.yg)("inlineCode",{parentName:"p"},"workload_groups"),". This tvf is used to view information about workload groups for which current user has permission."),(0,o.yg)("p",null,"This function is used in ",(0,o.yg)("inlineCode",{parentName:"p"},"FROM")," clauses."),(0,o.yg)("h4",{id:"syntax"},"syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"workload_groups()")),(0,o.yg)("p",null,"The table schema of ",(0,o.yg)("inlineCode",{parentName:"p"},"workload_groups()")," tvf:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> desc function workload_groups();\n+-------+-------------+------+-------+---------+-------+\n| Field | Type        | Null | Key   | Default | Extra |\n+-------+-------------+------+-------+---------+-------+\n| Id    | BIGINT      | No   | false | NULL    | NONE  |\n| Name  | STRING      | No   | false | NULL    | NONE  |\n| Item  | STRING      | No   | false | NULL    | NONE  |\n| Value | STRING      | No   | false | NULL    | NONE  |\n+-------+-------------+------+-------+---------+-------+\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from workload_groups()\\G\n+-------+--------+--------------+-------+\n| Id    | Name   | Item         | Value |\n+-------+--------+--------------+-------+\n| 11001 | normal | memory_limit | 100%  |\n| 11001 | normal | cpu_share    | 10    |\n+-------+--------+--------------+-------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"workload_groups\n")))}d.isMDXComponent=!0}}]);