"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[735953],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>m});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),h=n,m=c["".concat(o,".").concat(h)]||c[h]||g[h]||p;return t?r.createElement(m,l(l({ref:a},u),{},{components:t})):r.createElement(m,l({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,l=new Array(p);l[0]=h;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<p;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},260703:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(58168),n=(t(296540),t(15680));const p={title:"Release 2.0.13",language:"zh-CN"},l=void 0,i={unversionedId:"releasenotes/v2.0/release-2.0.13",id:"version-2.0/releasenotes/v2.0/release-2.0.13",title:"Release 2.0.13",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/v2.0/release-2.0.13.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.13",permalink:"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.13",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0.13",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 2.1.0",permalink:"/zh-CN/docs/2.0/releasenotes/v2.1/release-2.1.0"},next:{title:"Release 2.0.12",permalink:"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.12"}},o={},s=[{value:"\u884c\u4e3a\u53d8\u66f4",id:"\u884c\u4e3a\u53d8\u66f4",level:2},{value:"\u65b0\u589e\u529f\u80fd",id:"\u65b0\u589e\u529f\u80fd",level:2},{value:"\u6539\u8fdb\u548c\u4f18\u5316",id:"\u6539\u8fdb\u548c\u4f18\u5316",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],u={toc:s},c="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(c,(0,r.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0cApache Doris 2.0.13 \u7248\u672c\u5df2\u4e8e 2024 \u5e74 7 \u6708 16 \u65e5\u6b63\u5f0f\u4e0e\u5927\u5bb6\u89c1\u9762\uff0c\u8be5\u7248\u672c\u63d0\u4ea4\u4e86 112 \u4e2a\u6539\u8fdb\u9879\u4ee5\u53ca\u95ee\u9898\u4fee\u590d\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u6027\u80fd\u53ca\u7a33\u5b9a\u6027\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\u3002"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"\u5feb\u901f\u4e0b\u8f7d")),(0,n.yg)("h2",{id:"\u884c\u4e3a\u53d8\u66f4"},"\u884c\u4e3a\u53d8\u66f4"),(0,n.yg)("p",null,"\u4ec5\u5728\u5ba2\u6237\u7aef\u542f\u7528\u4e86 ",(0,n.yg)("inlineCode",{parentName:"p"},"CLIENT_MULTI_STATEMENTS")," \u8bbe\u7f6e\u65f6\uff0cSQL \u8f93\u5165\u624d\u4f1a\u88ab\u89c6\u4e3a\u591a\u6761\u8bed\u53e5\uff0c\u4ece\u800c\u589e\u5f3a\u4e86\u4e0e MySQL \u7684\u517c\u5bb9\u6027\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36759"},"#36759")),(0,n.yg)("h2",{id:"\u65b0\u589e\u529f\u80fd"},"\u65b0\u589e\u529f\u80fd"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u65b0\u589e\u4e86 BE \u914d\u7f6e ",(0,n.yg)("inlineCode",{parentName:"p"},"allow_zero_date"),"\uff0c\u5141\u8bb8\u4f7f\u7528\u5168\u96f6\u7684\u65e5\u671f\u3002\u8bbe\u7f6e\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," \u65f6\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"0000-00-00")," \u4f1a\u88ab\u89e3\u6790\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"NULL"),"\uff1b\u8bbe\u7f6e\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u4f1a\u88ab\u89e3\u6790\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"0000-01-01"),"\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4ee5\u4fdd\u6301\u4e0e\u4e4b\u524d\u884c\u4e3a\u7684\u4e00\u81f4\u6027\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34961"},"#34961"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"LogicalWindow")," \u548c ",(0,n.yg)("inlineCode",{parentName:"p"},"LogicalPartitionTopN")," \u73b0\u5728\u652f\u6301\u591a\u5b57\u6bb5\u8c13\u8bcd\u4e0b\u63a8\uff0c\u4ee5\u63d0\u5347\u6027\u80fd\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36828"},"#36828"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"ES Catalog \u73b0\u5728\u5c06 ES \u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"nested")," \u6216 ",(0,n.yg)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\u6620\u5c04\u5230 Doris \u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"JSON")," \u7c7b\u578b\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37101"},"#37101")))),(0,n.yg)("h2",{id:"\u6539\u8fdb\u548c\u4f18\u5316"},"\u6539\u8fdb\u548c\u4f18\u5316"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"LIMIT")," \u67e5\u8be2\u73b0\u5728\u4f1a\u66f4\u65e9\u5730\u505c\u6b62\u8bfb\u53d6\u6570\u636e\uff0c\u4ee5\u51cf\u5c11\u8d44\u6e90\u6d88\u8017\u5e76\u63d0\u5347\u6027\u80fd\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36535"},"#36535"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u73b0\u5728\u652f\u6301\u5177\u6709\u7a7a\u952e\u7684\u7279\u6b8a JSON \u6570\u636e\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36762"},"#36762"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u6539\u8fdb\u4e86 Routine Load \u7684\u7a33\u5b9a\u6027\u548c\u53ef\u7528\u6027\uff0c\u5305\u62ec\u8d1f\u8f7d\u5747\u8861\u3001\u81ea\u52a8\u6062\u590d\u3001\u5f02\u5e38\u5904\u7406\u4ee5\u53ca\u66f4\u53cb\u597d\u7684\u9519\u8bef\u6d88\u606f\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36450"},"#36450")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35376"},"#35376")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35266"},"#35266")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33372"},"#33372")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32282"},"#32282")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32046"},"#32046")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32021"},"#32021")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/31846"},"#31846")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/31273"},"#31273"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5bf9 BE \u7684\u786c\u76d8\u9009\u62e9\u7b56\u7565\u548c\u901f\u5ea6\u8fdb\u884c\u4e86\u4f18\u5316\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36826"},"#36826")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36795"},"#36795")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36509"},"#36509"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u6539\u8fdb\u4e86 JDBC Catalog \u7684\u7a33\u5b9a\u6027\u548c\u53ef\u7528\u6027\uff0c\u5305\u62ec\u52a0\u5bc6\u3001\u7ebf\u7a0b\u6c60\u8fde\u63a5\u6570\u914d\u7f6e\u4ee5\u53ca\u66f4\u53cb\u597d\u7684\u9519\u8bef\u6d88\u606f\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36940"},"#36940")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36720"},"#36720")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/30880"},"#30880")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35692"},"#35692")))),(0,n.yg)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,n.yg)("p",null,"@DarvenDuan\u3001@Gabriel39\u3001@Jibing-Li\u3001@Johnnyssc\u3001@Lchangliang\u3001@LiBinfeng-01\u3001@SWJTU-ZhangLei\u3001@Thearas\u3001@Yukang-Lian\u3001@Yulei-Yang\u3001@airborne12\u3001@amorynan\u3001@bobhan1\u3001@cambyzju\u3001@csun5285\u3001@dataroaring\u3001@deardeng\u3001@eldenmoon\u3001@englefly\u3001@feiniaofeiafei\u3001@hello-stephen\u3001@jacktengg\u3001@kaijchen\u3001@liutang123\u3001@luwei16\u3001@morningman\u3001@morrySnow\u3001@mrhhsg\u3001@mymeiyi\u3001@platoneko\u3001@qidaye\u3001@sollhui\u3001@starocean999\u3001@w41ter\u3001@xiaokang\u3001@xy720\u3001@yujun777\u3001@zclllyybb"))}g.isMDXComponent=!0}}]);