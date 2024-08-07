"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[484016],{15680:(n,e,t)=>{t.d(e,{xA:()=>u,yg:()=>_});var r=t(296540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=r.createContext({}),c=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(i.Provider,{value:e},n.children)},p="mdxType",j={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,i=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=c(t),y=a,_=p["".concat(i,".").concat(y)]||p[y]||j[y]||o;return t?r.createElement(_,s(s({ref:e},u),{},{components:t})):r.createElement(_,s({ref:e},u))}));function _(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,s=new Array(o);s[0]=y;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l[p]="string"==typeof n?n:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},378167:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>j,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"JSON_EXTRACT",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/json-extract",id:"version-2.0/sql-manual/sql-functions/json-functions/json-extract",title:"JSON_EXTRACT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/json-functions/json-extract.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-extract",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-extract",draft:!1,tags:[],version:"2.0",frontMatter:{title:"JSON_EXTRACT",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_PARSE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-parse"},next:{title:"JSON_EXISTS_PATH",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-exists-path"}},i={},c=[{value:"json_extract",id:"json_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function j(n){let{components:e,...t}=n;return(0,a.yg)(p,(0,r.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_extract"},"json_extract"),(0,a.yg)("version",{since:"dev"}),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"VARCHAR json_extract(VARCHAR json_str, VARCHAR path[, VARCHAR path] ...)\nJSON jsonb_extract(JSON j, VARCHAR json_path)\nBOOLEAN json_extract_isnull(JSON j, VARCHAR json_path)\nBOOLEAN json_extract_bool(JSON j, VARCHAR json_path)\nINT json_extract_int(JSON j, VARCHAR json_path)\nBIGINT json_extract_bigint(JSON j, VARCHAR json_path)\nLARGEINT json_extract_largeint(JSON j, VARCHAR json_path)\nDOUBLE json_extract_double(JSON j, VARCHAR json_path)\nSTRING json_extract_string(JSON j, VARCHAR json_path)\n")),(0,a.yg)("p",null,"json_extract\u662f\u4e00\u7cfb\u5217\u51fd\u6570\uff0c\u4eceJSON\u7c7b\u578b\u7684\u6570\u636e\u4e2d\u63d0\u53d6json_path\u6307\u5b9a\u7684\u5b57\u6bb5\uff0c\u6839\u636e\u8981\u63d0\u53d6\u7684\u5b57\u6bb5\u7c7b\u578b\u4e0d\u540c\u63d0\u4f9b\u4e0d\u540c\u7684\u7cfb\u5217\u51fd\u6570\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"json_extract\u5bf9VARCHAR\u7c7b\u578b\u7684json string\u8fd4\u56deVARCHAR\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"jsonb_extract\u8fd4\u56deJSON\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"json_extract_isnull\u8fd4\u56de\u662f\u5426\u4e3ajson null\u7684BOOLEAN\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"json_extract_bool\u8fd4\u56deBOOLEAN\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"json_extract_int\u8fd4\u56deINT\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"json_extract_bigint\u8fd4\u56deBIGINT\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"json_extract_largeint\u8fd4\u56deLARGEINT\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"json_extract_double\u8fd4\u56deDOUBLE\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"json_extract_STRING\u8fd4\u56deSTRING\u7c7b\u578b")),(0,a.yg)("p",null,"json path\u7684\u8bed\u6cd5\u5982\u4e0b"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"'$' \u4ee3\u8868json root"),(0,a.yg)("li",{parentName:"ul"},"'.k1' \u4ee3\u8868json object\u4e2dkey\u4e3a'k1'\u7684\u5143\u7d20",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},'\u5982\u679c key \u5217\u503c\u5305\u542b ".", json_path \u4e2d\u9700\u8981\u7528\u53cc\u5f15\u53f7\uff0c\u4f8b\u5982 SELECT json_extract(\'{"k1.a":"abc","k2":300}\', \'$."k1.a"\'); '))),(0,a.yg)("li",{parentName:"ul"},"'","[i]","' \u4ee3\u8868json array\u4e2d\u4e0b\u6807\u4e3ai\u7684\u5143\u7d20",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u83b7\u53d6 json_array \u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u53ef\u4ee5\u7528'$","[last]","'\uff0c\u5012\u6570\u7b2c\u4e8c\u4e2a\u5143\u7d20\u53ef\u4ee5\u7528'$","[last-1]","'\uff0c\u4ee5\u6b64\u7c7b\u63a8")))),(0,a.yg)("p",null,"\u7279\u6b8a\u60c5\u51b5\u5904\u7406\u5982\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c json_path \u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSON\u4e2d\u4e0d\u5b58\u5728\uff0c\u8fd4\u56deNULL"),(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c json_path \u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSON\u4e2d\u7684\u5b9e\u9645\u7c7b\u578b\u548cjson_extract_t\u6307\u5b9a\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u5982\u679c\u80fd\u65e0\u635f\u8f6c\u6362\u6210\u6307\u5b9a\u7c7b\u578b\u8fd4\u56de\u6307\u5b9a\u7c7b\u578bt\uff0c\u5982\u679c\u4e0d\u80fd\u5219\u8fd4\u56deNULL")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Types/JSON"},"json tutorial")," \u4e2d\u7684\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id');\n+------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id') |\n+------------------------------------------------------+\n| 123                                                  |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('[1, 2, 3]', '$.[1]');\n+------------------------------------+\n| json_extract('[1, 2, 3]', '$.[1]') |\n+------------------------------------+\n| 2                                  |\n+------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]');\n+-------------------------------------------------------------------------------------------------------------------+\n| json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]') |\n+-------------------------------------------------------------------------------------------------------------------+\n| [\"v1\",6.6,[1,2],2]                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name');\n+-----------------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name') |\n+-----------------------------------------------------------------+\n| [null,\"doris\"]                                                  |\n+-----------------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"JSONB, JSON, json_extract, json_extract_isnull, json_extract_bool, json_extract_int, json_extract_bigint, json_extract_largeint, json_extract_double, json_extract_string"))}j.isMDXComponent=!0}}]);