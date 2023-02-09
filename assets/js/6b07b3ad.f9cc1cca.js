"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[791],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="Drone System",l={unversionedId:"getting-started/system-overview/drone-system",id:"getting-started/system-overview/drone-system",title:"Drone System",description:"drone-system}",source:"@site/docs/getting-started/system-overview/drone-system.md",sourceDirName:"getting-started/system-overview",slug:"/getting-started/system-overview/drone-system",permalink:"/docs/getting-started/system-overview/drone-system",editUrl:"https://github.com/quadcopter-ar/QuadcopterAR-Documentation/tree/master/docs/getting-started/system-overview/drone-system.md",tags:[],version:"current",lastUpdatedBy:"Vybhav",lastUpdatedAt:1675930632,formattedLastUpdatedAt:"2/9/2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Game System",permalink:"/docs/getting-started/system-overview/game-system"},next:{title:"Drone \u21cc  Game",permalink:"/docs/getting-started/system-overview/drone-to-game"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drone-system"},"Drone System"),(0,a.kt)("p",null,"The quadcopter unit is built up of the following"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Quadcopter, a 3DR Solo Quadcopter"),(0,a.kt)("li",{parentName:"ul"},"A Nvidia Jetson Nano"),(0,a.kt)("li",{parentName:"ul"},"A Zed 2 camera + A T265 Intel Real Sense Camera"),(0,a.kt)("li",{parentName:"ul"},"A battery pack")),(0,a.kt)("p",null,"The current project uses two 3DR Solo Drones. The drones communicate to a remote control unit through their own communication protocol.\nThe wireless controllers give access to a wifi network, usually called ",(0,a.kt)("inlineCode",{parentName:"p"},"xxx_Sololink"),".\nAny and all communication comes into the quadcopter through this wireless signal."),(0,a.kt)("p",null,"The Jetson nano is a single board computer, much like a raspberry pi. It is, in a way, the brains of the Drone section\nin the ",(0,a.kt)("a",{parentName:"p",href:"#drone-to-game"},"Drone Connection subsystem"),"."),(0,a.kt)("p",null,"We have two camera systems on board. The Zed camera is responsible to send video data to the game to be displayed.\nThe Real sense camera is setup to give us accurate mapping system to understand how the world looks around us."),(0,a.kt)("p",null,"We are also in the process of developing a new battery to deal with the requirements of the Zed 2 and T265 Intel Real Sense Cameras on the\nNvidia Jetson Nano. This new battery will be a 5v and 4a power supply outputing from a DC power jack."))}d.isMDXComponent=!0}}]);