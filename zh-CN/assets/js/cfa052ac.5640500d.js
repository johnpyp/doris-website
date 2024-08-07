"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[446134],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(u,".").concat(f)]||p[f]||g[f]||a;return r?t.createElement(y,i(i({ref:n},c),{},{components:r})):t.createElement(y,i({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},204026:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=r(58168),o=(r(296540),r(15680));const a={title:"GROUP_BIT_OR",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/group-bit-or",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/group-bit-or",title:"GROUP_BIT_OR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/group-bit-or.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group-bit-or",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bit-or",draft:!1,tags:[],version:"3.0",frontMatter:{title:"GROUP_BIT_OR",language:"zh-CN"},sidebar:"docs",previous:{title:"GROUP_BIT_AND",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bit-and"},next:{title:"GROUP_BIT_XOR",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/group-bit-xor"}},u={},s=[{value:"group_bit_or",id:"group_bit_or",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function g(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"group_bit_or"},"group_bit_or"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"expr GROUP_BIT_OR(expr)")),(0,o.yg)("p",null,"\u5bf9expr\u8fdb\u884c or \u8ba1\u7b97, \u8fd4\u56de\u65b0\u7684expr\n\u652f\u6301\u6240\u6709INT\u7c7b\u578b"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select * from group_bit;\n+-------+\n| value |\n+-------+\n|     3 |\n|     1 |\n|     2 |\n|     4 |\n+-------+\n4 rows in set (0.02 sec)\n\nmysql> select group_bit_or(value) from group_bit;\n+-----------------------+\n| group_bit_or(`value`) |\n+-----------------------+\n|                     7 |\n+-----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"GROUP_BIT_OR,BIT\n")))}g.isMDXComponent=!0}}]);