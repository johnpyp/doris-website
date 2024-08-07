"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[487529],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},801952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const i={title:"TRUNCATE",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/numeric-functions/truncate",id:"version-2.1/sql-manual/sql-functions/numeric-functions/truncate",title:"TRUNCATE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/numeric-functions/truncate.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/truncate",permalink:"/docs/2.1/sql-manual/sql-functions/numeric-functions/truncate",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TRUNCATE",language:"en"},sidebar:"docs",previous:{title:"XOR",permalink:"/docs/2.1/sql-manual/sql-functions/numeric-functions/xor"},next:{title:"ABS",permalink:"/docs/2.1/sql-manual/sql-functions/numeric-functions/abs"}},c={},s=[{value:"truncate",id:"truncate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"truncate"},"truncate"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE truncate(DOUBLE x, INT d)"),"  "),(0,a.yg)("p",null,"Numerically truncate ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," according to the number of decimal places ",(0,a.yg)("inlineCode",{parentName:"p"},"d"),".  "),(0,a.yg)("p",null,"The rules are as follows:  "),(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"d")," is literal:",(0,a.yg)("br",{parentName:"p"}),"\n","When ",(0,a.yg)("inlineCode",{parentName:"p"},"d > 0"),": keep ",(0,a.yg)("inlineCode",{parentName:"p"},"d")," decimal places of ",(0,a.yg)("inlineCode",{parentName:"p"},"x"),(0,a.yg)("br",{parentName:"p"}),"\n","When ",(0,a.yg)("inlineCode",{parentName:"p"},"d = 0"),": remove the fractional part of ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," and keep only the integer part",(0,a.yg)("br",{parentName:"p"}),"\n","When ",(0,a.yg)("inlineCode",{parentName:"p"},"d < 0"),": Remove the fractional part of ",(0,a.yg)("inlineCode",{parentName:"p"},"x"),", and replace the integer part with the number ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," according to the number of digits specified by ",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"  "),(0,a.yg)("p",null,"Else if ",(0,a.yg)("inlineCode",{parentName:"p"},"d")," is a column, and ",(0,a.yg)("inlineCode",{parentName:"p"},"x")," has Decimal type, scale of result Decimal will always be same with input Decimal."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> select truncate(124.3867, 2);\n+-----------------------+\n| truncate(124.3867, 2) |\n+-----------------------+\n|                124.38 |\n+-----------------------+\nmysql> select truncate(124.3867, 0);\n+-----------------------+\n| truncate(124.3867, 0) |\n+-----------------------+\n|                   124 |\n+-----------------------+\nmysql> select truncate(-124.3867, -2);\n+-------------------------+\n| truncate(-124.3867, -2) |\n+-------------------------+\n|                    -100 |\n+-------------------------+\nmysql> select cast("123.123456" as Decimal(9,6)), number, truncate(cast ("123.123456" as Decimal(9,6)), number) from numbers("number"="5");\n--------------\n+---------------------------------------+--------+----------------------------------------------------------------------+\n| cast(\'123.123456\' as DECIMALV3(9, 6)) | number | truncate(cast(\'123.123456\' as DECIMALV3(9, 6)), cast(number as INT)) |\n+---------------------------------------+--------+----------------------------------------------------------------------+\n|                            123.123456 |      0 |                                                           123.000000 |\n|                            123.123456 |      1 |                                                           123.100000 |\n|                            123.123456 |      2 |                                                           123.120000 |\n|                            123.123456 |      3 |                                                           123.123000 |\n|                            123.123456 |      4 |                                                           123.123400 |\n+---------------------------------------+--------+----------------------------------------------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TRUNCATE\n")))}m.isMDXComponent=!0}}]);