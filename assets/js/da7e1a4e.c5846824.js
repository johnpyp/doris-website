"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[251641],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=n,m=u["".concat(l,".").concat(g)]||u[g]||h[g]||i;return t?r.createElement(m,o(o({ref:a},c),{},{components:t})):r.createElement(m,o({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=g;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},493688:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(58168),n=(t(296540),t(15680));const i={title:"Release 2.0.13",language:"en"},o=void 0,p={unversionedId:"releasenotes/v2.0/release-2.0.13",id:"version-2.0/releasenotes/v2.0/release-2.0.13",title:"Release 2.0.13",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/releasenotes/v2.0/release-2.0.13.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.13",permalink:"/docs/2.0/releasenotes/v2.0/release-2.0.13",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0.13",language:"en"},sidebar:"releasenotes",previous:{title:"Release 2.1.0",permalink:"/docs/2.0/releasenotes/v2.1/release-2.1.0"},next:{title:"Release 2.0.12",permalink:"/docs/2.0/releasenotes/v2.0/release-2.0.12"}},l={},s=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Credits",id:"credits",level:2}],c={toc:s},u="wrapper";function h(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Thanks to our community users and developers, about 112 improvements and bug fixes have been made in Doris 2.0.13 version"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Quick Download")),(0,n.yg)("h2",{id:"behavior-changes"},"Behavior changes"),(0,n.yg)("p",null,"SQL input is treated as multiple statements only when the ",(0,n.yg)("inlineCode",{parentName:"p"},"CLIENT_MULTI_STATEMENTS")," setting is enabled on the client side, enhancing compatibility with MySQL. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36759"},"#36759")),(0,n.yg)("h2",{id:"new-features"},"New features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A new BE configuration ",(0,n.yg)("inlineCode",{parentName:"p"},"allow_zero_date")," has been added, allowing dates with all zeros. When set to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"0000-00-00")," is parsed as ",(0,n.yg)("inlineCode",{parentName:"p"},"NULL"),", and when set to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", it is parsed as ",(0,n.yg)("inlineCode",{parentName:"p"},"0000-01-01"),". The default value is ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," to maintain consistency with previous behavior. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34961"},"#34961"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"LogicalWindow")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"LogicalPartitionTopN")," support multi-field predicate pushdown to improve performance. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36828"},"#36828"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The ES Catalog now maps ES ",(0,n.yg)("inlineCode",{parentName:"p"},"nested")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"object")," types to Doris ",(0,n.yg)("inlineCode",{parentName:"p"},"JSON")," types. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37101"},"#37101")))),(0,n.yg)("h2",{id:"improvements"},"Improvements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Queries with ",(0,n.yg)("inlineCode",{parentName:"p"},"LIMIT")," end reading data earlier to reduce resource consumption and improve performance. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36535"},"#36535"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Special JSON data with empty keys is now supported. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36762"},"#36762"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Stability and usability of routine load have been improved, including load balancing, automatic recovery, exception handling, and more user-friendly error messages. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36450"},"#36450")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35376"},"#35376")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35266"},"#35266")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33372"}," #33372")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32282"},"#32282")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32046"},"#32046")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32021"},"#32021")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/31846"},"#31846")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/31273"},"#31273"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"BE load balancing selection of hard disk strategy and speed optimization. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36826"},"#36826")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36795"},"#36795")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36509"},"#36509"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Stability and usability of the JDBC catalog have been improved, including encryption, thread pool connection count configuration, and more user-friendly error messages. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36940"},"#36940")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/36720"},"#36720")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/30880"},"#30880")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35692"},"#35692")))),(0,n.yg)("p",null,"You can access the full list through the GitHub ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.12...2.0.13"},"link")," , with the key features and improvements highlighted below."),(0,n.yg)("h2",{id:"credits"},"Credits"),(0,n.yg)("p",null,"Thanks to all who contributed to this release:"),(0,n.yg)("p",null,"@Gabriel39, @Jibing-Li, @Johnnyssc, @Lchangliang, @LiBinfeng-01, @SWJTU-ZhangLei, @Thearas, @Yukang-Lian, @Yulei-Yang, @airborne12, @amorynan, @bobhan1, @cambyzju, @csun5285, @dataroaring, @deardeng, @eldenmoon, @englefly, @feiniaofeiafei, @hello-stephen, @jacktengg, @kaijchen, @liutang123, @luwei16, @morningman, @morrySnow, @mrhhsg, @mymeiyi, @platoneko, @qidaye, @sollhui, @starocean999, @w41ter, @xiaokang, @xy720, @yujun777, @zclllyybb, @zddr"))}h.isMDXComponent=!0}}]);