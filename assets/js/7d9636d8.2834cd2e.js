"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[592148],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},185730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"SECONDS_ADD",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/seconds-add",id:"version-3.0/sql-manual/sql-functions/date-time-functions/seconds-add",title:"SECONDS_ADD",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/seconds-add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/seconds-add",permalink:"/docs/sql-manual/sql-functions/date-time-functions/seconds-add",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SECONDS_ADD",language:"en"},sidebar:"docs",previous:{title:"MINUTES_SUB",permalink:"/docs/sql-manual/sql-functions/date-time-functions/minutes-sub"},next:{title:"SECONDS_DIFF",permalink:"/docs/sql-manual/sql-functions/date-time-functions/seconds-diff"}},l={},c=[{value:"seconds_add",id:"seconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"seconds_add"},"seconds_add"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME SECONDS_ADD(DATETIME date, INT seconds)")),(0,a.yg)("p",null,"ADD a specified number of seconds from a datetime or date"),(0,a.yg)("p",null,"The parameter date can be DATETIME or DATE, and the return type is DATETIME."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select seconds_add(\"2020-02-02 02:02:02\", 1);\n+---------------------------------------+\n| seconds_add('2020-02-02 02:02:02', 1) |\n+---------------------------------------+\n| 2020-02-02 02:02:03                   |\n+---------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SECONDS_ADD\n")))}p.isMDXComponent=!0}}]);