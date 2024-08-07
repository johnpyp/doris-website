"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[658691],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},820678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"CANCEL-ALTER-SYSTEM",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",id:"version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",title:"CANCEL-ALTER-SYSTEM",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",permalink:"/docs/2.1/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CANCEL-ALTER-SYSTEM",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-DROP-BROKER",permalink:"/docs/2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER"},next:{title:"CREATE-ROLE",permalink:"/docs/2.1/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE"}},i={},c=[{value:"CANCEL-ALTER-SYSTEM",id:"cancel-alter-system",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"cancel-alter-system"},"CANCEL-ALTER-SYSTEM"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CANCEL DECOMMISSION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to undo a node offline operation. (Administrator only!)"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Find backend through host and port")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Find backend through backend_id")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "id1","id2","id3...";\n')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cancel the offline operation of both nodes:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "host1:port", "host2:port";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cancel the offline operation of the node with backend_id 1:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'    CANCEL DECOMMISSION BACKEND "1","2";\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CANCEL, DECOMMISSION, CANCEL ALTER\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);