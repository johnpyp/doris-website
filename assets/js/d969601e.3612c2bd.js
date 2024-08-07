"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[702233],{15680:(t,n,e)=>{e.d(n,{xA:()=>l,yg:()=>_});var r=e(296540);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function m(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var p=r.createContext({}),s=function(t){var n=r.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},l=function(t){var n=s(t.components);return r.createElement(p.Provider,{value:n},t.children)},c="mdxType",b={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,l=m(t,["components","mdxType","originalType","parentName"]),c=s(e),u=i,_=c["".concat(p,".").concat(u)]||c[u]||b[u]||o;return e?r.createElement(_,a(a({ref:n},l),{},{components:e})):r.createElement(_,a({ref:n},l))}));function _(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,a=new Array(o);a[0]=u;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=t,m[c]="string"==typeof t?t:i,a[1]=m;for(var s=2;s<o;s++)a[s]=e[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},848655:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=e(58168),i=(e(296540),e(15680));const o={title:"BITMAP_XOR",language:"en"},a=void 0,m={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-xor",id:"version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-xor",title:"BITMAP_XOR",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-xor.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-xor",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-xor",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BITMAP_XOR",language:"en"},sidebar:"docs",previous:{title:"BITMAP_UNION",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-union"},next:{title:"BITMAP_NOT",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-not"}},p={},s=[{value:"bitmap_xor",id:"bitmap_xor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:s},c="wrapper";function b(t){let{components:n,...e}=t;return(0,i.yg)(c,(0,r.A)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_xor"},"bitmap_xor"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_XOR(BITMAP lhs, BITMAP rhs, ...)")),(0,i.yg)("p",null,"Compute the symmetric union of two or more input bitmaps, return the new bitmap."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4')));\n+----------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'))) |\n+----------------------------------------------------------------------------------------+\n| 1,4                                                                                    |\n+----------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5')));\n+---------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'))) |\n+---------------------------------------------------------------------------------------------------------------------+\n| 1,3,5                                                                                                               |\n+---------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),bitmap_empty()));\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty())) |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| 1,3,5                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),NULL));\n+---------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_xor(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL)) |\n+---------------------------------------------------------------------------------------------------------------------------+\n| NULL                                                                                                                      |\n+---------------------------------------------------------------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_XOR,BITMAP\n")))}b.isMDXComponent=!0}}]);