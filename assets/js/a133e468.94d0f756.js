"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=i,u=d["".concat(c,".").concat(g)]||d[g]||f[g]||o;return r?n.createElement(u,a(a({ref:t},p),{},{components:r})):n.createElement(u,a({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1,title:"register"},a="register: string[]",s={unversionedId:"registry/config/options/register",id:"registry/config/options/register",title:"register",description:"This property holds the paths with wildcards on where to find the widget definition files.",source:"@site/docs/registry/config/options/register.md",sourceDirName:"registry/config/options",slug:"/registry/config/options/register",permalink:"/webpack-cli/docs/registry/config/options/register",draft:!1,editUrl:"https://github.com/js-widgets/webpack-cli/edit/main/website/docs/registry/config/options/register.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"register"},sidebar:"tutorialSidebar",previous:{title:"Declare the Registry",permalink:"/webpack-cli/docs/registry/config/declare-registry"},next:{title:"directoryUrl",permalink:"/webpack-cli/docs/registry/config/options/directoryUrl"}},c={},l=[{value:"Examples",id:"examples",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"register-string"},(0,i.kt)("inlineCode",{parentName:"h1"},"register"),": ",(0,i.kt)("inlineCode",{parentName:"h1"},"string[]")),(0,i.kt)("p",null,"This property holds the paths with wildcards on where to find the widget ",(0,i.kt)("a",{parentName:"p",href:"../../widget-definition"},"definition files"),".\nThe presence of a widget definition file will cause a JS component to be compiled as a stand alone JS application, and\nan entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.json"),"."),(0,i.kt)("p",null,"It is highly recommended providing a path that will exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory for performance reasons when\nsearching for widget definition files."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"['../src/components/**/*.widget.js']")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"['../src/components/**/*.widget.js', '../src/pages/**/*.widget.js']"))))}d.isMDXComponent=!0}}]);