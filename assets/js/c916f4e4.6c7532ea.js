"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[677259],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>_});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,_=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(_,a(a({ref:n},p),{},{components:t})):r.createElement(_,a({ref:n},p))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},660600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_CIDR_TO_RANGE",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range",id:"version-2.1/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range",title:"IPV4_CIDR_TO_RANGE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range",permalink:"/docs/2.1/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range",draft:!1,tags:[],version:"2.1",frontMatter:{title:"IPV4_CIDR_TO_RANGE",language:"en"},sidebar:"docs",previous:{title:"IS_IPV4_MAPPED",permalink:"/docs/2.1/sql-manual/sql-functions/ip-functions/is-ipv4-mapped"},next:{title:"IPV6_CIDR_TO_RANGE",permalink:"/docs/2.1/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range"}},c={},s=[{value:"IPV4_CIDR_TO_RANGE",id:"ipv4_cidr_to_range",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_cidr_to_range"},"IPV4_CIDR_TO_RANGE"),(0,i.yg)("p",null,"IPV4_CIDR_TO_RANGE"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"STRUCT<IPV4, IPV4> IPV4_CIDR_TO_RANGE(IPV4 ip_v4, INT16 cidr)")),(0,i.yg)("p",null,"Receive an IPv4 and an Int16 value containing CIDR. Returns a struct that contains two IPv4 fields representing the lower range (min) and higher range (max) of the subnet, respectively."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SELECT ipv4_cidr_to_range(ipv4_string_to_num(\'192.168.5.2\'), 16);\n+-----------------------------------------------------------+\n| ipv4_cidr_to_range(ipv4_string_to_num(\'192.168.5.2\'), 16) |\n+-----------------------------------------------------------+\n| {"min": "192.168.0.0", "max": "192.168.255.255"}          |\n+-----------------------------------------------------------+\n\nmysql> SELECT ipv4_cidr_to_range(to_ipv4(\'192.168.5.2\'), 16);\n+--------------------------------------------------+\n| ipv4_cidr_to_range(to_ipv4(\'192.168.5.2\'), 16)   |\n+--------------------------------------------------+\n| {"min": "192.168.0.0", "max": "192.168.255.255"} |\n+--------------------------------------------------+\n\nmysql> SELECT ipv4_cidr_to_range(NULL, NULL);\n+--------------------------------+\n| ipv4_cidr_to_range(NULL, NULL) |\n+--------------------------------+\n| NULL                           |\n+--------------------------------+\n')),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV4_CIDR_TO_RANGE, IP"))}d.isMDXComponent=!0}}]);