"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[206],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),i=n(9960),o=n(1207);const s={sidebar_position:1,title:"Introduction"},l=void 0,c={unversionedId:"intro",id:"intro",title:"Introduction",description:"Widgets types are stand alone JavaScript applications ready to use in any publishing context. JavaScript developers",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/webpack-cli/docs/intro",draft:!1,editUrl:"https://github.com/js-widgets/webpack-cli/edit/main/website/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Summary",permalink:"/webpack-cli/docs/registry/summary"}},u={},p=[{value:"Features",id:"features",level:2},{value:"Develop widgets",id:"develop-widgets",level:2},{value:"Configurable",id:"configurable",level:3},{value:"i18n",id:"i18n",level:3}],d={toc:p};function g(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Widgets types are ",(0,a.kt)("strong",{parentName:"p"},"stand alone JavaScript applications")," ready to use in any publishing context. JavaScript developers\ncreate widgets in their own repositories, so they can be ",(0,a.kt)("strong",{parentName:"p"},"syndicated and embedded")," in publishing platforms. These\ninclude popular CMS, static HTML, other JavaScript applications, etc."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"The most important feature is that widgets can be embedded ",(0,a.kt)("strong",{parentName:"p"},"anywhere")," in your CMS. This includes the layout building\ntools, the content model relationships, the body field using the WYSIWYG editor, etc. This gives editors a lot more\npower in building ",(0,a.kt)("strong",{parentName:"p"},"amazing reactive content"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Embed anywhere",src:n(3636).Z,width:"869",height:"575"})),(0,a.kt)("p",null,"Another significant feature is that you can put new JS apps (and update existing ones) without having to update the CMS.\nThink of these JavaScript applications as you treat other media (images, videos, ...). You would not expect to have to\nhard code your images/videos in your CMS templates, with the widget registry JS apps have the same editorial experience."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Immediately available",src:n(4166).Z,width:"1212",height:"519"})),(0,a.kt)("p",null,"Build your digital strategy using widgets to maximize reuse of your development efforts. Widgets are designed to allow\nyou to focus on your strategy rather than on development."),(0,a.kt)("h2",{id:"develop-widgets"},"Develop widgets"),(0,a.kt)("p",null,"Widgets can be as simple as a personalized CTA, or as complex as a full embedded product catalog. Widgets are a powerful\ntool to build ",(0,a.kt)("strong",{parentName:"p"},"reactive applications")," that are stamped all across your digital properties."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"No effort from JS to CMS",src:n(6827).Z,width:"3840",height:"2160"})),(0,a.kt)("h3",{id:"configurable"},"Configurable"),(0,a.kt)("p",null,"Your widgets can accept external input. This can affect what the color scheme should be, what language should be used,\nwhat is the personalized text for the call-to-action button, or what data source to use to fetch for content. This\nallows you to maintain a ",(0,a.kt)("strong",{parentName:"p"},"single code base powering many variants")," without code duplication."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Widgets are configurable",src:n(9954).Z,width:"2432",height:"1766"})),(0,a.kt)("h3",{id:"i18n"},"i18n"),(0,a.kt)("p",null,"Widgets are ready for ",(0,a.kt)("strong",{parentName:"p"},"internationalization"),". Both interface text and content can be expressed in your user's language."),(0,a.kt)("div",{className:o.Z.buttons},(0,a.kt)(i.Z,{className:"button button--secondary button--lg",to:"https://github.com/js-widgets/example-widget",mdxType:"Link"},"Check an example")))}g.isMDXComponent=!0},1207:function(e,t){t.Z={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},9954:function(e,t,n){t.Z=n.p+"assets/images/configurable-f578e3f3780d4a07ed1f21501108ded2.png"},3636:function(e,t,n){t.Z=n.p+"assets/images/embed-anywhere-5c014009a2fba013f3030ee856399178.png"},4166:function(e,t,n){t.Z=n.p+"assets/images/immediately-available-d23f104d76363935e2a6914673962132.png"},6827:function(e,t,n){t.Z=n.p+"assets/images/js-to-cms-b59317e609505b87dbb99aba1199ebc8.png"}}]);