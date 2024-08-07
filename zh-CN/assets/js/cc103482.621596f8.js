"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88205],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),y=i,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||o;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=y;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},253959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const o={title:"BITNOT",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/bitwise-functions/bitnot",id:"version-3.0/sql-manual/sql-functions/bitwise-functions/bitnot",title:"BITNOT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/bitwise-functions/bitnot.md",sourceDirName:"sql-manual/sql-functions/bitwise-functions",slug:"/sql-manual/sql-functions/bitwise-functions/bitnot",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitwise-functions/bitnot",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BITNOT",language:"zh-CN"},sidebar:"docs",previous:{title:"BITXOR",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitwise-functions/bitxor"},next:{title:"BIT_COUNT",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitwise-functions/bitcount"}},s={},c=[{value:"bitnot",id:"bitnot",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitnot"},"bitnot"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITNOT(Integer-type value)")),(0,i.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u53d6\u53cd\u8fd0\u7b97\u7684\u7ed3\u679c."),(0,i.yg)("p",null,"\u6574\u6570\u8303\u56f4\uff1aTINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bitnot(7) ans;\n+------+\n| ans  |\n+------+\n|   -8 |\n+------+\n\nmysql> select bitxor(-127) ans;\n+------+\n| ans  |\n+------+\n|  126 |\n+------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITNOT\n")))}f.isMDXComponent=!0}}]);