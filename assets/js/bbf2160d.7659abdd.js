"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[796],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,p=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return r?a.createElement(p,i(i({ref:t},u),{},{components:r})):a.createElement(p,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6833:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return h}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:2,title:"Quadcopter Maze"},l="[Quadcopter Maze Game](https://github.com/quadcopter-ar/Quadcopter-Maze)",c={unversionedId:"game-specific-documentation/quadcopter-maze",id:"game-specific-documentation/quadcopter-maze",title:"Quadcopter Maze",description:"The Maze Game is currently setup as a very basic game with the Wilson Maze generation algorithm. This lets us generate",source:"@site/docs/game-specific-documentation/quadcopter-maze.md",sourceDirName:"game-specific-documentation",slug:"/game-specific-documentation/quadcopter-maze",permalink:"/docs/game-specific-documentation/quadcopter-maze",editUrl:"https://github.com/quadcopter-ar/QuadcopterAR-Documentation/tree/master/docs/game-specific-documentation/quadcopter-maze.md",tags:[],version:"current",lastUpdatedBy:"Conar Abramson-Davis",lastUpdatedAt:1712725259,formattedLastUpdatedAt:"4/10/2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Quadcopter Maze"},sidebar:"tutorialSidebar",previous:{title:"Quadcopter Pong",permalink:"/docs/game-specific-documentation/quadcopter-pong"},next:{title:"Quadcopter Shooting",permalink:"/docs/game-specific-documentation/quadcopter-shooting"}},u={},m=[{value:"Maze Generation",id:"maze-generation",children:[],level:2},{value:"How to run the game",id:"how-to-run-the-game",children:[],level:2},{value:"Libraries used in this game",id:"libraries-used-in-this-game",children:[{value:"Mirror: used for networking",id:"mirror-used-for-networking",children:[],level:3},{value:"ParrelSync: used to make debugging networking easier",id:"parrelsync-used-to-make-debugging-networking-easier",children:[],level:3}],level:2}],d={toc:m};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quadcopter-maze-game"},(0,o.kt)("a",{parentName:"h1",href:"https://github.com/quadcopter-ar/Quadcopter-Maze"},"Quadcopter Maze Game")),(0,o.kt)("p",null,"The Maze Game is currently setup as a very basic game with the Wilson Maze generation algorithm. This lets us generate\nnew mazes every time the game starts."),(0,o.kt)("p",null,"The game uses ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/system-overview/game-system#networking-and-multiplayer"},"Mirror")," to build the networking system for the game."),(0,o.kt)("h2",{id:"maze-generation"},"Maze Generation"),(0,o.kt)("p",null,"The game is built on a simple DFS algorithm to generate Mazes. Each maze is a bunch of Wall objects."),(0,o.kt)("p",null,"All the variables in the code should be straightforward, except for wallSize, wallSize should be set to the length\nof the actual Wall object (though it\u2019s better to have the Wall object be slightly bigger so the corners of the\nmaze don\u2019t look awkward). In essence, it lets you adjust the width of the corridors in the maze."),(0,o.kt)("p",null,"The size variables are automatically validated to be odd and the hole rows/cols are validated to be less than maze rows/cols (this is in the Validate method)"),(0,o.kt)("h2",{id:"how-to-run-the-game"},"How to run the game"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow the instructions on how to ",(0,o.kt)("a",{parentName:"li",href:"../guides/connecting-drone-to-game"},"connect the drone to the game")),(0,o.kt)("li",{parentName:"ol"},"Navigate to the \u201cOfflineScene\u201d scene"),(0,o.kt)("li",{parentName:"ol"},"Click start"),(0,o.kt)("li",{parentName:"ol"},"Click on \u201cHost\u201d button in the hud (top left) to host a game (and \u201cClient\u201d, on localhost, to join the game with another user)")),(0,o.kt)("p",null,"You should now see the generated maze."),(0,o.kt)("h2",{id:"libraries-used-in-this-game"},"Libraries used in this game"),(0,o.kt)("p",null,"This game uses two libraries besides the XR one:"),(0,o.kt)("h3",{id:"mirror-used-for-networking"},(0,o.kt)("a",{parentName:"h3",href:"../getting-started/system-overview/game-system#networking-and-multiplayer"},"Mirror"),": used for networking"),(0,o.kt)("p",null,"Here are specifics regarding the Maze game"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The main object is the network manager"),(0,o.kt)("li",{parentName:"ul"},"Located in the offline scene but it has DontDestroyOnLoad so it persists between scenes"),(0,o.kt)("li",{parentName:"ul"},"It has a custom MyNetworkManager script on it, which simply inherits from the Mirror-provided NetworkManager class in a script."),(0,o.kt)("li",{parentName:"ul"},"It also has the NetworkHUD, which provides the buttons to Host a game or join as a client"),(0,o.kt)("li",{parentName:"ul"},"You can make your own by overriding methods in the MyNetworkManager script."),(0,o.kt)("li",{parentName:"ul"},"Every object which should be networked (in this case just the players, but there might be other objects in the future) must have a NetworkIdentity script on them. It\u2019s what makes them \u201cnetworked\u201d"),(0,o.kt)("li",{parentName:"ul"},"The player objects also have the NetworkTransform component which automatically sync the position, scale, and rotation of the object to all other players"),(0,o.kt)("li",{parentName:"ul"},"The Maze scene has spawn objects which dictate where the players will spawn")),(0,o.kt)("h3",{id:"parrelsync-used-to-make-debugging-networking-easier"},(0,o.kt)("a",{parentName:"h3",href:"../guides/using-parrelsync-for-games"},"ParrelSync"),": used to make debugging networking easier"))}h.isMDXComponent=!0}}]);