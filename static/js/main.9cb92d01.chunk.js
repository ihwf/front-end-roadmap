(this["webpackJsonpfront-end-roadmap"]=this["webpackJsonpfront-end-roadmap"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.588f5cbf.jpeg"},21:function(e,t,n){e.exports=n(40)},26:function(e,t,n){},31:function(e,t){},32:function(e,t){},33:function(e,t){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(17),o=n.n(i),l=n(10),c=n(1),h=(n(26),n(6)),s=n(8);function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i={text:e,w:n,h:r,children:a};return"number"===typeof t?i.x=t:i=Object(s.a)(Object(s.a)({},i),t),i}var u={width:140,height:40,bgColor:["#ea5455","#f07b3f","#ffd460"],subCardMargin:10,lineColor:"#3A7AF2",textColor:"#444",strokeColor:"#3A7AF2"};function p(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:u.width,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:u.height,o=new h.fabric.Rect({fill:u.bgColor[r-1],width:a,height:i,originX:"center",originY:"center",rx:4,ry:4,shadow:"rgba(0,0,0,0.3) 2px 2px 4px",hasControls:!1}),l=new h.fabric.Text(n,{fontSize:15,fill:u.textColor,originX:"center",originY:"center",fontFamily:" Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '\u5fae\u8f6f\u96c5\u9ed1', Arial, sans-serif",fontWeight:"500"}),c=new h.fabric.Group([o,l],{left:e,top:t,lockMovementX:!0,lockMovementY:!0});return c.hasControls=!1,c}var f="left";function x(e,t){var n=new h.fabric.Path("M 65 0 Q 100, 100, 200, 0",{fill:"",stroke:u.lineColor,strokeWidth:2,objectCaching:!1});return n.strokeDashArray=[5,5],n.path[0][1]=e.left+e.width,n.path[0][2]=e.top+e.height/2,e.left>t.left?(n.path[1][1]=t.left-(e.left-t.left)/2,n.path[1][2]=e.top+(t.top-e.top)/2):e.left<t.left&&(n.path[1][1]=e.left+(t.left+e.width-e.left)/2,n.path[1][2]=e.top+(t.top-e.top)/2),n.path[1][3]=t.left,n.path[1][4]=t.top+t.height/2,n.globalCompositeOperation="destination-over",n}var g=[{text:"\u51c6\u5907\u5f00\u59cb",x:400,y:0},{text:"\u4e92\u8054\u7f51",x:400,y:100,link:"/how-does-the-internet-work",children:[[d("\u4e92\u8054\u7f51\u5982\u4f55\u8fd0\u4f5c\uff1f",100,200),d("\u4ec0\u4e48\u662fHTTP/HTTPS",100,200)],[d("DNS\u539f\u7406",700,200),d("CDN\u539f\u7406",700,200)]]},{text:"\u6d4f\u89c8\u5668",x:400,y:280,link:"/how-does-the-browser-work",children:[[d("\u6d4f\u89c8\u5668\u5982\u4f55\u8fd0\u884c\uff1f",160,160),d("\u6d4f\u89c8\u5668\u5dee\u5f02/\u517c\u5bb9\u6027",160,160,40,[d("Chrome",0,100),d("Safari",0,100),d("Firefox",0,100),d("Android Browser",0,120),d("iOS Safari",0,100)])],[d("Headless Browser",700,200),d("WebView",700,200)]]},{text:"\u7f16\u8f91\u5668",x:400,y:460,link:"/editor",children:[[],[d("VSCode",700,100),d("WebStorm",700,100),d("Atom",700,100),d("Sublime",700,100)]]},{text:"HTML",x:400,y:600,link:"/html",children:[[d("\u5e38\u7528\u6807\u7b7e",100),d("\u8868\u5355",100)],[d("SEO\u641c\u7d22\u4f18\u5316",{x:700,y:590},140)]]},{text:"CSS",x:400,y:720,link:"/css",children:[[],[d("\u57fa\u672c\u8bed\u6cd5",700,140),d("\u5e03\u5c40",700,140,40,[d("\u6d6e\u52a8float",900,100),d("\u5b9a\u4f4dpostion",900,100),d("\u76d2\u6a21\u578b",900,100),d("flex",900,100),d("grid/layout",900,100)]),d("\u54cd\u5e94\u5f0f\u8bbe\u8ba1",700,140)]]},{text:"JavaScript",x:400,y:800,link:"/javascript",children:[[d("\u57fa\u672c\u8bed\u6cd5",100),d("DOM & BOM",100),d("\u63a5\u53e3\u8bf7\u6c42Ajax/Fetch",100),d("ES6+",100),d("\u91cd\u70b9\u7406\u89e3\u6982\u5ff5 \n\u53d8\u91cf\u63d0\u5347\u3001\u65f6\u95f4\u5192\u6ce1\u6355\u83b7\u3001 \n\u4f5c\u7528\u57df\u3001\u539f\u578b\u7b49 ",100,200,100)]]},{text:"\u7248\u672c\u7ba1\u7406\u5de5\u5177Git",x:380,y:960,link:"/git",children:[[],[d("\u57fa\u672c\u547d\u4ee4",600),d("\u6ce8\u518cgithub\u8d26\u53f7\u5e76\u5b66\u4f1a\u4f7f\u7528",600),d("\u642d\u5efa\u4e00\u4e2a\u9759\u6001\u535a\u5ba2\u7ad9\u70b9",600,200,40,[d("xxx.github.io/blog",840,160)])]]},{text:"           Node\u57fa\u7840 \n \uff08\u6682\u65f6\u4e0d\u7528\u6df1\u5165\u5b66\u4e60\uff09",x:440,y:1100,w:200,h:50,link:"/node",children:[[d("\u5305\u7ba1\u7406",200,100,40,[d("npm",0,100),d("yarn",0,100),d("npx",0,100)]),d("\u5e38\u7528\u5305",{x:200,y:1200},100,40,[d("\u6587\u4ef6\u8bfb\u5199fs",0,100),d("\u8def\u5f84\u67e5\u627epath",0,100),d("\u7f51\u7edchttp",0,100)])]]},{text:"\u6784\u5efa\u5de5\u5177",x:400,y:1300,children:[[],[d("\u81ea\u52a8\u5316\u6784\u5efa",{x:600,y:1200},100,40,[d("npm script",800,100),d("gulp",800,100)]),d("\u6a21\u5757\u5316\u6253\u5305",{x:600,y:1360},100,40,[d("Webpack",800,100),d("Rollup",800,100),d("Parcel",800,100),d("Snowpack",800,100)])]]},{text:"CSS\u9884\u5904\u7406",x:300,y:1400,children:[[d("Sass",100,100),d("PostCss",100,100),d("Less",100,100)]]},{text:"JS\u6846\u67b6",x:500,y:1680,children:[[d("React",{x:200,y:1580},100,40,[d("Redux/Mobx",0,100),d("React-router",0,100)]),d("Vue",{x:200,y:1680},100,40,[d("VueX",0,100),d("Vue-router",0,100)]),d("Angular",{x:200,y:1780},100,40,[d("RxJS",0,100),d("NgRx",0,100)])]]},{text:"CSS\u6846\u67b6",x:400,y:1900,children:[[],[d("Antd",700,100),d("Element UI",700,100),d("Material UI",700,100)]]},{text:"CSS\u4f18\u5316\u65b9\u6848",x:300,y:2e3,children:[[d("Styled Component",0,140),d("CSS Modules",0,140),d("Styled JSX",0,140)]]},{text:"\u6d4b\u8bd5",x:400,y:2200,children:[[d("\u5355\u5143\u6d4b\u8bd5",200,100),d("\u96c6\u6210\u6d4b\u8bd5",200,100),d("E2E\u6d4b\u8bd5",200,100)],[d("Jest",700,100),d("Enzyme",700,100),d("Puppeteer",700,100)]]},{text:"\u4ee3\u7801\u8d28\u91cf",x:400,y:2400,children:[[d("\u7c7b\u578b\u6821\u9a8c",200,100,40,[d("TypeScript",0,100),d("Flow",0,100)]),d("Linter & Formatter",{x:200,y:2460},140,40,[d("ESLint",0,100),d("Prettier",0,100)])],[d("\u7f16\u7801\u89c4\u8303",600,100,40,[d("JavaScript Style Guide",800,180),d("CSS Style Guide",800,180),d("React Style Guide",800,180)])]]},{text:"\u6027\u80fd",x:380,y:2760,children:[[d("\u6027\u80fd\u6307\u6807",140,100,40,[d("FP",0,60),d("FCP",0,60),d("FMP",0,60),d("TTI",0,60)]),d("RAIL\u6a21\u578b",140,120),d("Lighthouse \u6307\u6807",140,120),d("DevTools",140,100)],[d("PWA",700,100),d("Service Worker",700,140),d("\u9aa8\u67b6\u5c4f",700,140)]]},{text:"\u6570\u636e\u53ef\u89c6\u5316",x:300,y:2980,children:[[d("EChart",100,100),d("AntV",100,100),d("HighChart",100,100)],[d("D3.js",500,100)]]},{text:"\u670d\u52a1\u7aef\u6e32\u67d3SSR",x:420,y:3180,children:[[],[d("Next.js(React)",700,120),d("Nuxt.js(Vue)",700,120)]]},{text:"\u79fb\u52a8\u7aef\u5e94\u7528",x:360,y:3340,children:[[d("React Native",200,100),d("Weex",200,100),d("hybrid",200,100),d("Flutter",200,100)],[d("\u8c03\u8bd5",600,100,40,[d("Chrome DevTools",800,140),d("Android Simulator",800,140),d("iOS Simulator",800,140)])]]},{text:"\u5c0f\u7a0b\u5e8f",x:400,y:3560,children:[[d("\u539f\u751f",200,100,40,[d("\u5fae\u4fe1",0,100),d("\u652f\u4ed8\u5b9d",0,100),d("\u5934\u6761",0,100)])],[d("\u8de8\u7aef\u89e3\u51b3\u65b9\u6848",700,100,40,[d("Taro",900,100),d("Chameleon",900,100),d("uni-app",900,100)])]]},{text:"\u684c\u9762\u5e94\u7528",x:450,y:3670,children:[[d("Electron",200,100),d("NW.js",200,100)]]},{text:"\u9759\u6001\u7ad9\u70b9\u6784\u5efa",x:400,y:3840,children:[[],[d("GatsbyJS",700,100),d("VuePress",700,100),d("Docusaurus",700,100),d("Hexo",700,100)]]},{text:"Web Assembly",x:400,y:4e3,children:[[d("\u62e5\u62b1\u672a\u6765",200,100)]]},{text:"\u5b66\u4e60\u6c38\u65e0\u6b62\u5883",x:300,y:4500},{text:"\u7ffb\u6eda\u5427\uff01\u540e\u6d6a\uff01",x:400,y:4900}];var m=function(){var e=Object(c.e)();return Object(r.useEffect)((function(){var t,n=new h.fabric.Canvas("c",{containerClass:"roadmap-canvas",selection:!1,interactive:!1,hoverCursor:"pointer"}),r=[],a=[];g.forEach((function(e){var n=p(e.x,e.y,e.text,1,e.w,e.h);if(n.link=e.link,r.push(n),t&&a.push(function(e,t){var n=new h.fabric.Path("M 65 0 Q 100, 100, 200, 0",{fill:"",stroke:u.lineColor,strokeWidth:3,objectCaching:!1});return n.path[0][1]=e.left+u.width/2,n.path[0][2]=e.top+u.height/2,n.path[1][1]="left"===f?e.left-u.width/3:e.left+u.width,f="left"===f?"right":"left",n.path[1][2]=e.top+(t.top-e.top)/2,n.path[1][3]=t.left+u.width/2,n.path[1][4]=t.top+u.height/2,n.globalCompositeOperation="destination-over",n}(t,n)),t=n,e.children){var i=e.children[0],o=e.children[1]||[];i.forEach((function(t,o){var l=i.length,c=l%2===0,h=t.y||e.y-(Math.floor(l/2)-o)*(u.height+u.subCardMargin);h+=c?u.height/2:0;var s=p(t.x,h,t.text,2,t.w,t.h);r.push(s);var d=x(s,n);a.push(d),t.children&&t.children.forEach((function(e,n){var i=t.children.length,o=i%2===0,l=s.top-(Math.floor(i/2)-n)*(u.height+u.subCardMargin);l+=o?u.height/2:0;var c=p(e.x,l,e.text,3,e.w,e.h);r.push(c);var h=x(c,s);a.push(h)}))})),o.forEach((function(t,i){var l=o.length,c=o.length%2===0,h=t.y||e.y-(Math.floor(l/2)-i)*(u.height+u.subCardMargin);h+=c?u.height/2:0;var s=p(t.x,h,t.text,2,t.w,t.h);r.push(s);var d=x(n,s);a.push(d),t.children&&t.children.forEach((function(e,n){var i=t.children.length,o=i%2===0,l=s.top-(Math.floor(i/2)-n)*(u.height+u.subCardMargin);l+=o?u.height/2:0;var c=p(e.x,l,e.text,3,e.w,e.h);r.push(c);var h=x(s,c);a.push(h)}))}))}})),r.map((function(e){return n.add(e)})),a.map((function(e){return n.add(e)})),n.on("mouse:down",(function(t){t.target&&t.target.link&&e.push("/guide".concat(t.target.link))}))}),[]),a.a.createElement("div",{className:"roadmap-container"},a.a.createElement("div",{className:"roadmap"},a.a.createElement("canvas",{id:"c",height:"5000px",width:"1000px"})))};n(38);var b=n(19),y=n.n(b),v=n(20);function w(){return a.a.createElement("div",{div:!0,className:"header"},a.a.createElement("div",{className:"top"},a.a.createElement("img",{src:y.a,alt:"logo"}),a.a.createElement("span",{className:"github-button"},a.a.createElement(v.a,{href:"https://github.com/ObjTube/front-end-roadmap","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Star ObjTube/front-end-roadmap on GitHub"},"Star"))),a.a.createElement("div",{className:"title"},a.a.createElement("span",{className:"text"},"\u524d\u7aef\u5b66\u4e60\u8def\u7ebf",a.a.createElement("span",{className:"emoji"},"\ud83e\uddf6\ud83e\udd8c"))),a.a.createElement("div",{className:"sub-title"},"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb \u597d\u597d\u5b66\u4e60\uff0c\u5929\u5929\u6572\u4ee3\u7801 \ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null),a.a.createElement(l.a,null,a.a.createElement(c.a,{exact:!0,path:"/",component:m}),a.a.createElement(c.a,{path:"/guide/:query",component:function(){var e;switch(Object(c.f)().query){case"how-does-the-internet-work":e=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,51))}));break;case"how-does-the-browser-work":e=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,52))}));break;case"editor":e=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,53))}));break;case"html":e=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,54))}));break;case"css":e=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,55))}));break;case"javascript":e=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,56))}));break;case"git":e=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,57))}));break;case"node":e=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,58))}))}return a.a.createElement("div",{className:"guide-container"},a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,null)))}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.9cb92d01.chunk.js.map