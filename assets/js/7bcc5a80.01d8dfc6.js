"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[467828],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},319048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"LIKE",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/fuzzy-match/like",id:"version-3.0/sql-manual/sql-functions/string-functions/fuzzy-match/like",title:"LIKE",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/fuzzy-match/like.md",sourceDirName:"sql-manual/sql-functions/string-functions/fuzzy-match",slug:"/sql-manual/sql-functions/string-functions/fuzzy-match/like",permalink:"/docs/sql-manual/sql-functions/string-functions/fuzzy-match/like",draft:!1,tags:[],version:"3.0",frontMatter:{title:"LIKE",language:"en"},sidebar:"docs",previous:{title:"MASK_LAST_N",permalink:"/docs/sql-manual/sql-functions/string-functions/mask/mask-last-n"},next:{title:"NOT LIKE",permalink:"/docs/sql-manual/sql-functions/string-functions/fuzzy-match/not-like"}},o={},c=[{value:"like",id:"like",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"like"},"like"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BOOLEAN like(VARCHAR str, VARCHAR pattern)")),(0,a.yg)("p",null,"Perform fuzzy matching on the string str, return true if it matches, and false if it doesn't match."),(0,a.yg)("p",null,"like match/fuzzy match, will be used in combination with % and _."),(0,a.yg)("p",null,"the percent sign ('%') represents zero, one, or more characters."),(0,a.yg)("p",null,"the underscore ('_') represents a single character."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"'a'   // Precise matching, the same effect as `=`\n'%a'  // data ending with a\n'a%'  // data starting with a\n'%a%' // data containing a\n'_a_' // three digits and the middle letter is a\n'_a'  // two digits and the ending letter is a\n'a_'  // two digits and the initial letter is a\n'a__b'  // four digits, starting letter is a and ending letter is b\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// Return the data containing a in the k1 string\nmysql> select k1 from test where k1 like '%a%';\n+-------+\n| k1    |\n+-------+\n| a     |\n| bab   |\n+-------+\n\n// Return the data equal to a in the k1 string\nmysql> select k1 from test where k1 like 'a';\n+-------+\n| k1    |\n+-------+\n| a     |\n+-------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"LIKE\n")))}d.isMDXComponent=!0}}]);