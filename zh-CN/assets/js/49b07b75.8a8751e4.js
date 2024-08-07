"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[672567],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),y=n,f=p["".concat(c,".").concat(y)]||p[y]||g[y]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},51983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(296540),r(15680));const l={title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",language:"zh-CN"},o=void 0,i={unversionedId:"lakehouse/external-statistics",id:"version-2.1/lakehouse/external-statistics",title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/external-statistics.md",sourceDirName:"lakehouse",slug:"/lakehouse/external-statistics",permalink:"/zh-CN/docs/2.1/lakehouse/external-statistics",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u7f13\u5b58",permalink:"/zh-CN/docs/2.1/lakehouse/filecache"},next:{title:"\u4e91\u670d\u52a1\u8ba4\u8bc1\u63a5\u5165",permalink:"/zh-CN/docs/2.1/lakehouse/cloud-auth"}},c={},s=[{value:"\u521b\u5efa Catalog \u65f6\u6253\u5f00\u81ea\u52a8\u6536\u96c6\u7684\u5c5e\u6027 (\u9ed8\u8ba4\u662f false\uff09\uff1a",id:"\u521b\u5efa-catalog-\u65f6\u6253\u5f00\u81ea\u52a8\u6536\u96c6\u7684\u5c5e\u6027-\u9ed8\u8ba4\u662f-false",level:3},{value:"\u901a\u8fc7\u4fee\u6539 Catalog \u5c5e\u6027\u63a7\u5236\u662f\u5426\u5f00\u542f\u81ea\u52a8\u6536\u96c6\uff1a",id:"\u901a\u8fc7\u4fee\u6539-catalog-\u5c5e\u6027\u63a7\u5236\u662f\u5426\u5f00\u542f\u81ea\u52a8\u6536\u96c6",level:3}],u={toc:s},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f"},"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f"),(0,n.yg)("p",null,"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f\u7684\u6536\u96c6\u65b9\u5f0f\u548c\u6536\u96c6\u5185\u5bb9\u4e0e\u5185\u8868\u57fa\u672c\u4e00\u81f4\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003",(0,n.yg)("a",{parentName:"p",href:"../query/nereids/statistics"},"\u7edf\u8ba1\u4fe1\u606f"),"\u3002\n2.0.3 \u7248\u672c\u4e4b\u540e\uff0cHive \u5916\u8868\u652f\u6301\u4e86\u81ea\u52a8\u548c\u91c7\u6837\u6536\u96c6\u3002"),(0,n.yg)("h1",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u76ee\u524d (2.0.3) \u53ea\u6709 Hive \u5916\u8868\u652f\u6301\u81ea\u52a8\u548c\u91c7\u6837\u6536\u96c6\u3002HMS \u7c7b\u578b\u7684 Iceberg \u548c Hudi \u5916\u8868\uff0c\u4ee5\u53ca JDBC \u5916\u8868\u53ea\u652f\u6301\u624b\u52a8\u5168\u91cf\u6536\u96c6\u3002\u5176\u4ed6\u7c7b\u578b\u7684\u5916\u8868\u6682\u4e0d\u652f\u6301\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5916\u8868\u9ed8\u8ba4\u5173\u95ed\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u529f\u80fd\uff0c\u9700\u8981\u5728\u521b\u5efa Catalog \u7684\u65f6\u5019\u6dfb\u52a0\u5c5e\u6027\u6765\u6253\u5f00\uff0c\u6216\u8005\u901a\u8fc7\u8bbe\u7f6e Catalog \u5c5e\u6027\u6765\u5f00\u542f\u6216\u5173\u95ed\u3002"))),(0,n.yg)("h3",{id:"\u521b\u5efa-catalog-\u65f6\u6253\u5f00\u81ea\u52a8\u6536\u96c6\u7684\u5c5e\u6027-\u9ed8\u8ba4\u662f-false"},"\u521b\u5efa Catalog \u65f6\u6253\u5f00\u81ea\u52a8\u6536\u96c6\u7684\u5c5e\u6027 (\u9ed8\u8ba4\u662f false\uff09\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"'enable.auto.analyze' = 'true'\n")),(0,n.yg)("h3",{id:"\u901a\u8fc7\u4fee\u6539-catalog-\u5c5e\u6027\u63a7\u5236\u662f\u5426\u5f00\u542f\u81ea\u52a8\u6536\u96c6"},"\u901a\u8fc7\u4fee\u6539 Catalog \u5c5e\u6027\u63a7\u5236\u662f\u5426\u5f00\u542f\u81ea\u52a8\u6536\u96c6\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='true'); // \u6253\u5f00\u81ea\u52a8\u6536\u96c6\nALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='false'); // \u5173\u95ed\u81ea\u52a8\u6536\u96c6\n")))}g.isMDXComponent=!0}}]);