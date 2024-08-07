"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[771546],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,f=u["".concat(o,".").concat(y)]||u[y]||d[y]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},420930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(58168),i=(n(296540),n(15680));const s={title:"DECIMAL",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-types/Data-Types/DECIMAL",id:"version-3.0/sql-manual/sql-types/Data-Types/DECIMAL",title:"DECIMAL",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-types/Data-Types/DECIMAL.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/DECIMAL",permalink:"/docs/sql-manual/sql-types/Data-Types/DECIMAL",draft:!1,tags:[],version:"3.0",frontMatter:{title:"DECIMAL",language:"en"},sidebar:"docs",previous:{title:"DOUBLE",permalink:"/docs/sql-manual/sql-types/Data-Types/DOUBLE"},next:{title:"DATE",permalink:"/docs/sql-manual/sql-types/Data-Types/DATE"}},o={},p=[{value:"DECIMAL",id:"decimal",level:2},{value:"Description",id:"description",level:3},{value:"Precision Deduction",id:"precision-deduction",level:3},{value:"Arithmetic Expressions",id:"arithmetic-expressions",level:4},{value:"Aggregation functions",id:"aggregation-functions",level:4},{value:"Default rules",id:"default-rules",level:4},{value:"Adjust the result precision",id:"adjust-the-result-precision",level:4},{value:"Why DECIMAL is required",id:"why-decimal-is-required",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"decimal"},"DECIMAL"),(0,i.yg)("p",null,"DECIMAL"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"DECIMAL (M ","[,D]",")"),(0,i.yg)("p",null,"High-precision fixed-point number, M represents the total number of significant digits, and D represents the scale."),(0,i.yg)("p",null,"The range of M is ","[1, 38]",", and the range of D is ","[0, precision]","."),(0,i.yg)("p",null,"The default value is DECIMAL(9, 0)."),(0,i.yg)("h3",{id:"precision-deduction"},"Precision Deduction"),(0,i.yg)("p",null,"DECIMAL has a very complex set of type inference rules. For different expressions, different rules will be applied for precision inference."),(0,i.yg)("h4",{id:"arithmetic-expressions"},"Arithmetic Expressions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Plus / Minus: DECIMAL(a, b) + DECIMAL(x, y) -> DECIMAL(max(a - b, x - y) + max(b, y) + 1, max(b, y))."),(0,i.yg)("li",{parentName:"ul"},"Multiply: DECIMAL(a, b) + DECIMAL(x, y) -> DECIMAL(a + x, b + y)."),(0,i.yg)("li",{parentName:"ul"},"Divide: DECIMAL(p1, s1) + DECIMAL(p2, s2) -> DECIMAL(p1 + s2 + div_precision_increment, s1 + div_precision_increment).div_precision_increment default 4.\nIt is worth noting that the process of division calculation is as follows:\nDECIMAL(p1, s1) / DECIMAL(p2, s2) is first converted to DECIMAL(p1 + s2 + div_precision_increment, s1 + s2) / DECIMAL(p2, s2) and then the calculation is performed. Therefore, it is possible that DECIMAL(p1 + s2 + div_precision_increment, s1 + div_precision_increment) satisfies the range of DECIMAL,\nbut due to the conversion to DECIMAL(p1 + s2 + div_precision_increment, s1 + s2),\nit exceeds the range. Currently, Doris handles this by converting it to Double for calculation.")),(0,i.yg)("h4",{id:"aggregation-functions"},"Aggregation functions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"SUM / MULTI_DISTINCT_SUM: SUM(DECIMAL(a, b)) -> DECIMAL(38, b)."),(0,i.yg)("li",{parentName:"ul"},"AVG: AVG(DECIMAL(a, b)) -> DECIMAL(38, max(b, 4)).")),(0,i.yg)("h4",{id:"default-rules"},"Default rules"),(0,i.yg)("p",null,"Except for the expressions mentioned above, other expressions use default rules for precision deduction. That is, for the expression ",(0,i.yg)("inlineCode",{parentName:"p"},"expr(DECIMAL(a, b))"),", the result type is also DECIMAL(a, b)."),(0,i.yg)("h4",{id:"adjust-the-result-precision"},"Adjust the result precision"),(0,i.yg)("p",null,"Different users have different accuracy requirements for DECIMAL. The above rules are the default behavior of Doris. If users ",(0,i.yg)("strong",{parentName:"p"},"have different accuracy requirements, they can adjust the accuracy in the following ways"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If the expected result precision is greater than the default precision, you can adjust the result precision by adjusting the parameter's precision. For example, if the user expects to calculate ",(0,i.yg)("inlineCode",{parentName:"li"},"AVG(col)")," and get DECIMAL(x, y) as the result, where the type of ",(0,i.yg)("inlineCode",{parentName:"li"},"col")," is DECIMAL (a, b), the expression can be rewritten to ",(0,i.yg)("inlineCode",{parentName:"li"},"AVG(CAST(col as DECIMAL (x, y))"),"."),(0,i.yg)("li",{parentName:"ul"},"If the expected result precision is less than the default precision, the desired precision can be obtained by approximating the output result. For example, if the user expects to calculate ",(0,i.yg)("inlineCode",{parentName:"li"},"AVG(col)")," and get DECIMAL(x, y) as the result, where the type of ",(0,i.yg)("inlineCode",{parentName:"li"},"col")," is DECIMAL(a, b), the expression can be rewritten as ",(0,i.yg)("inlineCode",{parentName:"li"},"ROUND(AVG(col), y)"),".")),(0,i.yg)("h3",{id:"why-decimal-is-required"},"Why DECIMAL is required"),(0,i.yg)("p",null,"DECIMAL in Doris is a real high-precision fixed-point number. Decimal has the following core advantages:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"It can represent a wider range. The value ranges of both precision and scale in DECIMAL have been significantly expanded."),(0,i.yg)("li",{parentName:"ol"},"Higher performance. The old version of DECIMAL requires 16 bytes in memory and 12 bytes in storage, while DECIMAL has made adaptive adjustments as shown below.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"+----------------------+------------------------------+\n|     precision        | Space occupied (memory/disk) |\n+----------------------+------------------------------+\n| 0 < precision <= 9   |            4 bytes           |\n+----------------------+------------------------------+\n| 9 < precision <= 18  |            8 bytes           |\n+----------------------+------------------------------+\n| 18 < precision <= 38 |           16 bytes           |\n+----------------------+------------------------------+\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"More complete precision deduction. For different expressions, different precision inference rules are applied to deduce the precision of the results.")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"DECIMAL"))}d.isMDXComponent=!0}}]);