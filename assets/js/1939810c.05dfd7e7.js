"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),i=r(6010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7462),i=r(7294),a=r(6010),o=r(2466),l=r(6550),s=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function d(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=d(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,u]=g({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(r);return[n,(0,i.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),y=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var y=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,a.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",f.tabList)},i.createElement(b,(0,n.Z)({},e,t)),i.createElement(v,(0,n.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return i.createElement(w,(0,n.Z)({key:String(t)},e))}},5757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),a=r(4866),o=r(5162);const l={sidebar_position:3,title:"2. Build the Registry"},s=void 0,u={unversionedId:"build-registry",id:"build-registry",title:"2. Build the Registry",description:"Once you have configured the registry with .widgetRegistry/main.js and created the",source:"@site/docs/build-registry.mdx",sourceDirName:".",slug:"/build-registry",permalink:"/webpack-cli/docs/build-registry",draft:!1,editUrl:"https://github.com/js-widgets/webpack-cli/edit/main/website/docs/build-registry.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"2. Build the Registry"},sidebar:"tutorialSidebar",previous:{title:"1.3. Render File",permalink:"/webpack-cli/docs/registry/render-file"},next:{title:"Widget Registry Sources",permalink:"/webpack-cli/docs/integration/registry-sources"}},c={},p=[{value:"Compile the Registry",id:"compile-the-registry",level:2},{value:"Upload the Registry",id:"upload-the-registry",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you have configured the registry with ",(0,i.kt)("a",{parentName:"p",href:"./registry/summary"},(0,i.kt)("inlineCode",{parentName:"a"},".widgetRegistry/main.js"))," and created the\n",(0,i.kt)("a",{parentName:"p",href:"./registry/widget-definition"},"widget definition (",(0,i.kt)("inlineCode",{parentName:"a"},"*.widget.js"),")"),", and the ",(0,i.kt)("a",{parentName:"p",href:"./registry/render-file"},"render file"),", it's time to run the CLI\nto compile all the widgets and create the registry JSON file."),(0,i.kt)("h2",{id:"compile-the-registry"},"Compile the Registry"),(0,i.kt)("p",null,"To get the CLI help information type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx @js-widgets/webpack-cli --help\n")),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," we avoid having to install the CLI in our machine and keeping it up to date."),(0,i.kt)("p",null,"At the time of writing this the output was:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="npx',metastring:'@js-widgets/webpack-cli --help"',"@js-widgets/webpack-cli":!0,'--help"':!0},"Usage: js-widgets-webpack-cli [options] <path>\n\nArguments:\n  path                            Path to the project containing the .widgetRegistry directory.\n\nOptions:\n  -v, --version                   output the version number\n  -d, --debug                     output extra debugging\n  --existing-registry <url>       HTTP URL to the existing registry. Used to get all the versions of all the widgets\n                                  in this registry. Omit this to start a new registry from scratch.\n  --output-dir <path>             a path to a directory where to save all the compiled widgets and the registry.\n                                  CAUTION: the directory will be emptied.\n  --omit-missing                  when used, widgets in the existing registry that cannot be found will not appear in\n                                  the new registry.\n  --new-version <version-string>  the new version for the widgets being compiled. If none provided a new version will\n                                  be automatically generated if possible.\n  -h, --help                      display help for command\n")),(0,i.kt)("p",null,"Let's imagine your component library is at ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/john/workspace/js/my-project-components"),". This folder is where you\ncreated the ",(0,i.kt)("inlineCode",{parentName:"p"},".widgetRegistry")," folder during ",(0,i.kt)("a",{parentName:"p",href:"./registry/config/declare-registry"},"the initial setup"),"."),(0,i.kt)(a.Z,{defaultValue:"update",values:[{label:"Create a Registry",value:"create"},{label:"Update a Registry",value:"update"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"update",mdxType:"TabItem"},"Once you already have a registry uploaded in a public location and it's being actively used, you need to provide it to the CLI. This is so the automatic versioning process can guess the correct new version.",(0,i.kt)("p",null,"Widgets that exist in the provided registry that don't exist in the project being compiled will be copied over to the\nnewly created ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.json"),". If you don't want that to happen, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--omit-missing")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Compile without setting a version"',title:'"Compile',without:!0,setting:!0,a:!0,'version"':!0},"npx @js-widgets/webpack-cli \\\n  --existing-registry https://s3.acme.us-east-1.amazonaws.com/marketing-site/registry.json \\\n  --output-dir /tmp/widget-registry\n")),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"--new-version")," option is omitted, the version will be calculated from the latest version in the widgets on the\nexisting registry."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There is a relationship between the value in ",(0,i.kt)("inlineCode",{parentName:"p"},"--existing-registry")," and the\n",(0,i.kt)("a",{parentName:"p",href:"./registry/config/options/directoryUrl"},(0,i.kt)("inlineCode",{parentName:"a"},"directoryUrl"))," that gets stored in the final ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.json"),"."))),(0,i.kt)(o.Z,{value:"create",mdxType:"TabItem"},"When you create the registry for the first time you don't have an `--existing-registry` to provide. If that is your case you have three options:",(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an empty registry in the desired location with an empty array: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide the URL where you ",(0,i.kt)("em",{parentName:"li"},"intend")," this registry to live."),(0,i.kt)("li",{parentName:"ol"},"Omit the ",(0,i.kt)("inlineCode",{parentName:"li"},"--existing-registry")," option. This requires the ",(0,i.kt)("a",{parentName:"li",href:"./registry/config/options/directoryUrl"},(0,i.kt)("inlineCode",{parentName:"a"},"directoryUrl")),"\noption to contain a fully qualified URL.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Compile without setting a version"',title:'"Compile',without:!0,setting:!0,a:!0,'version"':!0},"npx @js-widgets/webpack-cli \\\n  --existing-registry https://s3.acme.us-east-1.amazonaws.com/marketing-site/registry.json \\\n  --output-dir /tmp/widget-registry\n  --new-version 1.0.0\n")),(0,i.kt)("p",null,"If you omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"--new-version")," option on new registries, the initial version will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1.0"),"."))),(0,i.kt)("h2",{id:"upload-the-registry"},"Upload the Registry"),(0,i.kt)("p",null,"Once the compilation process ends successfully, you need to upload the result to a public location of your choice. This\ncan be a cloud storage solution, a custom HTTP server, etc. The only requirement is that the files resulting from the\ncompilation need to be accessible via HTTP."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="Resulting',metastring:'files from the compilation example"',files:!0,from:!0,the:!0,compilation:!0,'example"':!0},"output\n\u251c\u2500\u2500 registry.json\n\u2514\u2500\u2500 widgets\n    \u251c\u2500\u2500 inline-notification\n    \u2502   \u2514\u2500\u2500 js\n    \u2502       \u2514\u2500\u2500 main.js\n    \u2514\u2500\u2500 toast-notification\n        \u2514\u2500\u2500 js\n            \u2514\u2500\u2500 main.js\n")),(0,i.kt)("p",null,"Re-visit ",(0,i.kt)("a",{parentName:"p",href:"./registry/summary"},"the summary page")," for more info."))}g.isMDXComponent=!0}}]);