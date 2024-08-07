"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[141053],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,d=y["".concat(i,".").concat(f)]||y[f]||p[f]||l;return n?t.createElement(d,o(o({ref:r},u),{},{components:n})):t.createElement(d,o({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[y]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},493720:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const l={title:"ARRAY_LAST",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-last",id:"version-3.0/sql-manual/sql-functions/array-functions/array-last",title:"ARRAY_LAST",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-last.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-last",permalink:"/docs/sql-manual/sql-functions/array-functions/array-last",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_LAST",language:"en"},sidebar:"docs",previous:{title:"ARRAY_FIRST",permalink:"/docs/sql-manual/sql-functions/array-functions/array-first"},next:{title:"ARRAYS_OVERLAP",permalink:"/docs/sql-manual/sql-functions/array-functions/arrays-overlap"}},i={},c=[{value:"array_last",id:"array_last",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_last"},"array_last"),(0,a.yg)("p",null,"array_last"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Returns the last element in the array for which func(arr1","[i]",") returns something other than 0."),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"T array_last(lambda, ARRAY<T>)\n")),(0,a.yg)("p",null,"Use a lambda bool expression and an array as the input parameters, the lambda expression is used to evaluate the internal data of other input ARRAY parameters."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_last(x->x>2, [1,2,3,0]) ;\n+------------------------------------------------------------------------------------------------+\n| array_last(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_last(x->x>4, [1,2,3,0]) ; \n+------------------------------------------------------------------------------------------------+\n| array_last(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, LAST, ARRAY_LAST"))}p.isMDXComponent=!0}}]);