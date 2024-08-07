"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[640716],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,y=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(y,s(s({ref:t},m),{},{components:a})):r.createElement(y,s({ref:t},m))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},354527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const i={title:"ADMIN-REPAIR-TABLE",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE",id:"version-2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE",title:"ADMIN-REPAIR-TABLE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ADMIN-REPAIR-TABLE",language:"en"},sidebar:"docs",previous:{title:"SHOW-REPLICA-STATUS",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS"},next:{title:"ADMIN-CANCEL-REPAIR",permalink:"/docs/2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"}},o={},p=[{value:"ADMIN-REPAIR-TABLE",id:"admin-repair-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"admin-repair-table"},"ADMIN-REPAIR-TABLE"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"ADMIN REPAIR TABLE"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"statement used to attempt to preferentially repair the specified table or partition"),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n")),(0,n.yg)("p",null,"illustrate:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"This statement only means to let the system try to repair the shard copy of the specified table or partition with high priority, and does not guarantee that the repair can be successful. Users can view the repair status through the SHOW REPLICA STATUS command."),(0,n.yg)("li",{parentName:"ol"},"The default timeout is 14400 seconds (4 hours). A timeout means that the system will no longer repair shard copies of the specified table or partition with high priority. Need to re-use this command to set")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Attempt to repair the specified table"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Try to repair the specified partition"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n")))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"ADMIN, REPAIR, TABLE\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);