"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[100],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7397:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},c="Welcome",s={unversionedId:"getting-started/welcome",id:"getting-started/welcome",title:"Welcome",description:"Welcome to the Xtended Reality Labs' Quadcopter AR Project. This will be the starting point off of which all the",source:"@site/docs/getting-started/welcome.md",sourceDirName:"getting-started",slug:"/getting-started/welcome",permalink:"/docs/getting-started/welcome",editUrl:"https://github.com/quadcopter-ar/QuadcopterAR-Documentation/tree/master/docs/getting-started/welcome.md",tags:[],version:"current",lastUpdatedBy:"BrownTable445",lastUpdatedAt:1712768107,formattedLastUpdatedAt:"4/10/2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"System Overview",permalink:"/docs/getting-started/system-overview/"}},u={},d=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Onboarding",id:"onboarding",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome"},"Welcome"),(0,a.kt)("p",null,"Welcome to the Xtended Reality Labs' Quadcopter AR Project. This will be the starting point off of which all the\ndocumentation will follow. This guide will outline the basis of how the project works, along with giving you a\ncurrent guideline on understanding the flow of the project and the parts."),(0,a.kt)("p",null,"If you are interested in joining us and you haven't already, please reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:max@cs.ucdavis.edu"},"Professor Nelson Max"),".\nHe will guide you on reaching out to the appropriate individual in terms joining the project and getting started."),(0,a.kt)("p",null,"An older version of our project can be viewed ",(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1-HHOPozhRY5PVgjHw9CNeOgYKYicRlzg/view?usp=sharing"},"here")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This is a very old video. Much has change since then. But to have a basic understanding, please take a look"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Although we don't expect you to have pre-reqs as a part of this project, an ideal researcher would have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An understanding of a programming language; C, C# and Python is what our current stack is built on."),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of the Unity Game engine or any other game engine. (Or how games work)"),(0,a.kt)("li",{parentName:"ul"},"An understanding of how Networks work.")),(0,a.kt)("h2",{id:"onboarding"},"Onboarding"),(0,a.kt)("p",null,"We are glad you want to start with us. Please look through the rest of the Getting Started Guides. Especially the\n",(0,a.kt)("a",{parentName:"p",href:"system-overview"},"System Overview")," section. If you have any questions, please reach out via email to either\n",(0,a.kt)("a",{parentName:"p",href:"mailto:bcgchen@ucdavis.edu"},"Benjamin Chen")," and we would be glad\nto help."),(0,a.kt)("p",null,"We also have meetings every week on Monday at Academic Surge Room 2306 at 7pm. We would be very glad to have you there."),(0,a.kt)("p",null,"Welcome to the Team!"))}m.isMDXComponent=!0}}]);