"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[931717],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>g});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||y[f]||l;return r?t.createElement(g,i(i({ref:n},p),{},{components:r})):t.createElement(g,i({ref:n},p))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},868111:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const l={title:"PERCENTILE_ARRAY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile-array",id:"sql-manual/sql-functions/aggregate-functions/percentile-array",title:"PERCENTILE_ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/percentile-array.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile-array",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile-array",draft:!1,tags:[],version:"current",frontMatter:{title:"PERCENTILE_ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile"},next:{title:"PERCENTILE_APPROX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile-approx"}},c={},s=[{value:"PERCENTILE_ARRAY",id:"percentile_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"percentile_array"},"PERCENTILE_ARRAY"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY_DOUBLE PERCENTILE_ARRAY(BIGINT, ARRAY_DOUBLE p)")),(0,a.yg)("p",null,"\u8ba1\u7b97\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570\uff0c\u9002\u7528\u4e8e\u5c0f\u6570\u636e\u91cf\u3002\u5148\u5bf9\u6307\u5b9a\u5217\u964d\u5e8f\u6392\u5217\uff0c\u7136\u540e\u53d6\u7cbe\u786e\u7684\u7b2c p \u4f4d\u767e\u5206\u6570\u3002\n\u8fd4\u56de\u503c\u4e3a\u4f9d\u6b21\u53d6\u6570\u7ec4p\u4e2d\u6307\u5b9a\u7684\u767e\u5206\u6570\u7ec4\u6210\u7684\u7ed3\u679c\u3002\n\u53c2\u6570\u8bf4\u660e:\nexpr: \u5fc5\u586b\u3002\u503c\u4e3a\u6574\u6570\uff08\u6700\u5927\u4e3abigint\uff09 \u7c7b\u578b\u7684\u5217\u3002\np: \u9700\u8981\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570, \u7531\u5e38\u91cf\u7ec4\u6210\u7684\u6570\u7ec4, \u53d6\u503c\u4e3a ","[0.0,1.0]","\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select percentile_array(k1,[0.3,0.5,0.9]) from baseall;\n+----------------------------------------------+\n| percentile_array(`k1`, ARRAY(0.3, 0.5, 0.9)) |\n+----------------------------------------------+\n| [5.2, 8, 13.6]                               |\n+----------------------------------------------+\n1 row in set (0.02 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"PERCENTILE_ARRAY"))}y.isMDXComponent=!0}}]);