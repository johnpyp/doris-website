"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[441576],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>d});var r=a(296540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=t,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||i;return a?r.createElement(d,o(o({ref:n},u),{},{components:a})):r.createElement(d,o({ref:n},u))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},538949:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(58168),t=(a(296540),a(15680));const i={title:"Release 2.0.4",language:"en"},o=void 0,l={unversionedId:"releasenotes/v2.0/release-2.0.4",id:"version-3.0/releasenotes/v2.0/release-2.0.4",title:"Release 2.0.4",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/releasenotes/v2.0/release-2.0.4.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.4",permalink:"/docs/releasenotes/v2.0/release-2.0.4",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Release 2.0.4",language:"en"},sidebar:"releasenotes",previous:{title:"Release 2.0.5",permalink:"/docs/releasenotes/v2.0/release-2.0.5"},next:{title:"Release 2.0.3",permalink:"/docs/releasenotes/v2.0/release-2.0.3"}},p={},s=[{value:"Behavior change",id:"behavior-change",level:2},{value:"New features",id:"new-features",level:2},{value:"Three Improvement and optimizations",id:"three-improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}],u={toc:s},c="wrapper";function g(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,r.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Thanks to our community users and developers, about 333 improvements and bug fixes have been made in Doris 2.0.4 version."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Quick Download")," : ",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"GitHub")," : ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,t.yg)("h2",{id:"behavior-change"},"Behavior change"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"More reasonable and accurate precision and scale inference for decimal data type"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/28034"},"https://github.com/apache/doris/pull/28034")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Support drop policy for user or role"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/29488"},"https://github.com/apache/doris/pull/29488"))))),(0,t.yg)("h2",{id:"new-features"},"New features"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Support datev1, datetimev1 and decimalv2 datatypes in new optimizer Nereids."),(0,t.yg)("li",{parentName:"ul"},"Support ODBC table for new optimizer Nereids."),(0,t.yg)("li",{parentName:"ul"},"Add ",(0,t.yg)("inlineCode",{parentName:"li"},"lower_case")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"ignore_above")," option for inverted index"),(0,t.yg)("li",{parentName:"ul"},"Support ",(0,t.yg)("inlineCode",{parentName:"li"},"match_regexp")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"match_phrase_prefix")," optimization by inverted index"),(0,t.yg)("li",{parentName:"ul"},"Support paimon native reader in datalake"),(0,t.yg)("li",{parentName:"ul"},"Support audit-log for ",(0,t.yg)("inlineCode",{parentName:"li"},"insert into")," SQL"),(0,t.yg)("li",{parentName:"ul"},"Support reading parquet file in lzo compressed format")),(0,t.yg)("h2",{id:"three-improvement-and-optimizations"},"Three Improvement and optimizations"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Improve storage management including balance, migration, publish and others."),(0,t.yg)("li",{parentName:"ul"},"Improve storage cooldown policy to use save disk space."),(0,t.yg)("li",{parentName:"ul"},"Performance optimization for substr with ascii string."),(0,t.yg)("li",{parentName:"ul"},"Improve partition prune when date function is used."),(0,t.yg)("li",{parentName:"ul"},"Improve auto analyze visibility and performance.")),(0,t.yg)("p",null,"See the complete list of improvements and bug fixes on github ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues?q=label%3Adev%2F2.0.4-merged+is%3Aclosed"},"dev/2.0.4-merged")),(0,t.yg)("h2",{id:"credits"},"Credits"),(0,t.yg)("p",null,"Last but not least, this release would not have been possible without the following contributors: "),(0,t.yg)("p",null,"airborne12, amorynan, AshinGau, BePPPower, bingquanzhao, BiteTheDDDDt, bobhan1, ByteYue, caiconghui,CalvinKirs, cambyzju, caoliang-web, catpineapple, csun5285, dataroaring, deardeng, dutyu, eldenmoon, englefly, feifeifeimoon, fornaix, Gabriel39, gnehil, HappenLee, hello-stephen, HHoflittlefish777,hubgeter, hust-hhb, ixzc, jacktengg, jackwener, Jibing-Li, kaka11chen, KassieZ, LemonLiTree,liaoxin01, LiBinfeng-01, lihuigang, liugddx, luwei16, morningman, morrySnow, mrhhsg, Mryange, nextdreamblue, Nitin-Kashyap, platoneko, py023, qidaye, shuke987, starocean999, SWJTU-ZhangLei, w41ter, wangbo, wsjz, wuwenchi, Xiaoccer, xiaokang, XieJiann, xingyingone, xinyiZzz, xuwei0912, xy720, xzj7019, yujun777, zclllyybb, zddr, zhangguoqiang666, zhangstar333, zhannngchen, zhiqiang-hhhh, zy-kkk, zzzxl1993"))}g.isMDXComponent=!0}}]);