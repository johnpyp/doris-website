"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[543065],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=s,y=p["".concat(o,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:s,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},882969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),s=(t(296540),t(15680));const a={title:"sub_replace",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/sub_replace",id:"version-1.2/sql-manual/sql-functions/string-functions/sub_replace",title:"sub_replace",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/sub_replace.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/sub_replace",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/sub_replace",draft:!1,tags:[],version:"1.2",frontMatter:{title:"sub_replace",language:"en"},sidebar:"docs",previous:{title:"substring",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/substring"},next:{title:"append_trailing_char_if_absent",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/append_trailing_char_if_absent"}},o={},c=[{value:"sub_replace",id:"sub_replace",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"sub_replace"},"sub_replace"),(0,s.yg)("h3",{id:"description"},"Description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"VARCHAR sub_replace(VARCHAR str, VARCHAR new_str, INT start[, INT len])")),(0,s.yg)("p",null,"Return with new_str replaces the str with length and starting position from start.\nWhen start and len are negative integers, return NULL.\nand the default value of len is the length of new_str."),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select sub_replace(\"this is origin str\",\"NEW-STR\",1);\n+-------------------------------------------------+\n| sub_replace('this is origin str', 'NEW-STR', 1) |\n+-------------------------------------------------+\n| tNEW-STRorigin str                              |\n+-------------------------------------------------+\n\nmysql> select sub_replace(\"doris\",\"***\",1,2);\n+-----------------------------------+\n| sub_replace('doris', '***', 1, 2) |\n+-----------------------------------+\n| d***is                            |\n+-----------------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SUB_REPLACE\n")))}f.isMDXComponent=!0}}]);