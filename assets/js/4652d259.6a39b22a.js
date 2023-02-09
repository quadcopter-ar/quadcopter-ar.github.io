"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[639],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||l[m]||r;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={sidebar_position:1,title:"Quadcopter Pong"},s="[Quadcopter Pong](https://github.com/quadcopter-ar/Quadcopter-Pong)",p={unversionedId:"game-specific-documentation/quadcopter-pong",id:"game-specific-documentation/quadcopter-pong",title:"Quadcopter Pong",description:"Currently, Quadcopter Pong is our flagship game. It invoves playing the age old game of Pong",source:"@site/docs/game-specific-documentation/quadcopter-pong.md",sourceDirName:"game-specific-documentation",slug:"/game-specific-documentation/quadcopter-pong",permalink:"/docs/game-specific-documentation/quadcopter-pong",editUrl:"https://github.com/quadcopter-ar/QuadcopterAR-Documentation/tree/master/docs/game-specific-documentation/quadcopter-pong.md",tags:[],version:"current",lastUpdatedBy:"Vybhav",lastUpdatedAt:1675930617,formattedLastUpdatedAt:"2/9/2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Quadcopter Pong"},sidebar:"tutorialSidebar",previous:{title:"How to get started building your own game",permalink:"/docs/getting-started/build-your-first-game"},next:{title:"Quadcopter Maze",permalink:"/docs/game-specific-documentation/quadcopter-maze"}},u={},l=[{value:"Game modes",id:"game-modes",children:[],level:2},{value:"Caveats",id:"caveats",children:[],level:2}],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quadcopter-pong"},(0,r.kt)("a",{parentName:"h1",href:"https://github.com/quadcopter-ar/Quadcopter-Pong"},"Quadcopter Pong")),(0,r.kt)("p",null,"Currently, Quadcopter Pong is our flagship game. It invoves playing the age old game of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pong"},"Pong"),"\nWe modified this game to allow for an added dimension of flight."),(0,r.kt)("p",null,"The rules of the game are as follows;"),(0,r.kt)("p",null,"The 3D Pong game is played by two players where each player hits the ball with their paddle and moves it to the\nopponent\u2019s ground, and the player loses a point once they miss a ball. The game is enclosed in a box-like structure.\nAll the four sidewalls cannot be seen because they are hidden to get a better view of the game."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Before playing the game, please look at the ",(0,r.kt)("a",{parentName:"p",href:"../guides/connecting-drone-to-game"},"Initiation Protocol")," under the guides section\nto connect the drone and the game together."))),(0,r.kt)("h2",{id:"game-modes"},"Game modes"),(0,r.kt)("p",null,"The game has multiple modes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The keyboard debug mode which allows users to test the game without the Oculus Controllers"),(0,r.kt)("li",{parentName:"ul"},"The Quest mode that allows uses of the controllers.")),(0,r.kt)("h2",{id:"caveats"},"Caveats"),(0,r.kt)("p",null,"This game was built on an older method of multiplayer. It used the Photon Unity Networking (PUN) engine. Reasons we\nmoved away can be found in the ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/system-overview/game-system#networking-and-multiplayer"},"Networking and multiplayer"),"\nportion of the documentation"))}m.isMDXComponent=!0}}]);