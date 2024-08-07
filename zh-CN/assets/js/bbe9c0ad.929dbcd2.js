"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[282359],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),s=a,g=m["".concat(o,".").concat(s)]||m[s]||y[s]||l;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=s;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},933228:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const l={title:"\u903b\u8f91\u89c6\u56fe",language:"zh-CN"},i=void 0,p={unversionedId:"query/view-materialized-view/create-view",id:"query/view-materialized-view/create-view",title:"\u903b\u8f91\u89c6\u56fe",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query/view-materialized-view/create-view.md",sourceDirName:"query/view-materialized-view",slug:"/query/view-materialized-view/create-view",permalink:"/zh-CN/docs/dev/query/view-materialized-view/create-view",draft:!1,tags:[],version:"current",frontMatter:{title:"\u903b\u8f91\u89c6\u56fe",language:"zh-CN"},sidebar:"docs",previous:{title:"SQL Cache",permalink:"/zh-CN/docs/dev/query/query-cache/sql-cache-manual"},next:{title:"\u540c\u6b65\u7269\u5316\u89c6\u56fe",permalink:"/zh-CN/docs/dev/query/view-materialized-view/materialized-view"}},o={},c=[{value:"\u521b\u5efa\u89c6\u56fe",id:"\u521b\u5efa\u89c6\u56fe",level:2},{value:"\u4e3e\u4f8b",id:"\u4e3e\u4f8b",level:2}],u={toc:c},m="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(m,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u89c6\u56fe\uff08\u903b\u8f91\u89c6\u56fe\uff09\u662f\u5c01\u88c5\u4e00\u4e2a\u6216\u591a\u4e2a SELECT \u8bed\u53e5\u7684\u5b58\u50a8\u67e5\u8be2\u3002\u89c6\u56fe\u5728\u6267\u884c\u65f6\u52a8\u6001\u8bbf\u95ee\u5e76\u8ba1\u7b97\u6570\u636e\u5e93\u6570\u636e\u3002\u89c6\u56fe\u662f\u53ea\u8bfb\u7684\uff0c\u53ef\u4ee5\u5f15\u7528\u8868\u548c\u5176\u4ed6\u89c6\u56fe\u7684\u4efb\u610f\u7ec4\u5408\u3002"),(0,a.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u89c6\u56fe\u5b9e\u73b0\u4ee5\u4e0b\u7528\u9014\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u51fa\u4e8e\u7b80\u5316\u8bbf\u95ee\u6216\u5b89\u5168\u8bbf\u95ee\u7684\u76ee\u7684\uff0c\u8ba9\u7528\u6237\u770b\u4e0d\u5230\u590d\u6742\u7684 SELECT \u8bed\u53e5\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u521b\u5efa\u4ec5\u663e\u793a\u7528\u6237\u6240\u9700\u7684\u5404\u8868\u4e2d\u6570\u636e\u7684\u89c6\u56fe\uff0c\u540c\u65f6\u9690\u85cf\u8fd9\u4e9b\u8868\u4e2d\u7684\u654f\u611f\u6570\u636e\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5c06\u53ef\u80fd\u968f\u65f6\u95f4\u800c\u6539\u53d8\u7684\u8868\u7ed3\u6784\u7684\u8be6\u7ec6\u4fe1\u606f\u5c01\u88c5\u5728\u4e00\u81f4\u7684\u7528\u6237\u754c\u9762\u540e\u3002"))),(0,a.yg)("p",null,"\u4e0e\u7269\u5316\u89c6\u56fe\u4e0d\u540c\uff0c\u89c6\u56fe\u4e0d\u5b9e\u4f53\u5316\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4eec\u4e0d\u5728\u78c1\u76d8\u4e0a\u5b58\u50a8\u6570\u636e\u3002\u56e0\u6b64\uff0c\u5b58\u5728\u4ee5\u4e0b\u9650\u5236\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5f53\u5e95\u5c42\u8868\u6570\u636e\u53d1\u751f\u53d8\u66f4\u65f6\uff0cDoris \u4e0d\u9700\u8981\u5237\u65b0\u89c6\u56fe\u6570\u636e\u3002\u4f46\u662f\uff0c\u8bbf\u95ee\u548c\u8ba1\u7b97\u6570\u636e\u65f6\uff0c\u89c6\u56fe\u4e5f\u4f1a\u4ea7\u751f\u4e00\u4e9b\u5f00\u9500\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u89c6\u56fe\u4e0d\u652f\u6301\u63d2\u5165\u3001\u5220\u9664\u6216\u66f4\u65b0\u64cd\u4f5c\u3002"))),(0,a.yg)("h2",{id:"\u521b\u5efa\u89c6\u56fe"},"\u521b\u5efa\u89c6\u56fe"),(0,a.yg)("p",null,"\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u903b\u8f91\u89c6\u56fe\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u89c6\u56fe\u4e3a\u903b\u8f91\u89c6\u56fe\uff0c\u6ca1\u6709\u7269\u7406\u5b58\u50a8\u3002\u6240\u6709\u5728\u89c6\u56fe\u4e0a\u7684\u67e5\u8be2\u76f8\u5f53\u4e8e\u5728\u89c6\u56fe\u5bf9\u5e94\u7684\u5b50\u67e5\u8be2\u4e0a\u8fdb\u884c\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"query_stmt \u4e3a\u4efb\u610f\u652f\u6301\u7684 SQL"))),(0,a.yg)("h2",{id:"\u4e3e\u4f8b"},"\u4e3e\u4f8b"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5728 example_db \u4e0a\u521b\u5efa\u89c6\u56fe example_view"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5305\u542b comment \u7684 view"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n')))))}y.isMDXComponent=!0}}]);