(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(88)),i={id:"remove-context-share",title:"Remove Context Menu"},c={unversionedId:"remove-context-share",id:"remove-context-share",isDocsHomePage:!1,title:"Remove Context Menu",description:"---",source:"@site/../docs/remove-context-share.mdx",slug:"/remove-context-share",permalink:"/react-native-youtube-iframe/remove-context-share",version:"current",sidebar:"sideBar",previous:{title:"Google Play Store",permalink:"/react-native-youtube-iframe/play-store-compatibility"},next:{title:"Show elapsed time",permalink:"/react-native-youtube-iframe/elapsed-time"}},l=[{value:"Removing context menu on long-press:",id:"removing-context-menu-on-long-press",children:[]},{value:"Removing context menu on kebab menu (prevent share):",id:"removing-context-menu-on-kebab-menu-prevent-share",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("h3",{id:"removing-context-menu-on-long-press"},"Removing context menu on long-press:"),Object(a.b)("p",null,"Wrap the ",Object(a.b)("inlineCode",{parentName:"p"},"<YoutubePlayer />")," in a View that has ",Object(a.b)("inlineCode",{parentName:"p"},'pointerEvents="none"')," to disable app touch-events to the player."),Object(a.b)("p",null,"Then react-native's ",Object(a.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable API")," or any of the touchables to intercept presses."),Object(a.b)("p",null,"example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Pressable\n  onPress={() => {\n    // handle or ignore\n  }}\n  onLongPress={() => {\n    // handle or ignore\n  }}>\n\n  <View pointerEvents="none">\n    <YoutubePlayer (...) />\n  </View>\n\n</Pressable>\n')),Object(a.b)("h3",{id:"removing-context-menu-on-kebab-menu-prevent-share"},"Removing context menu on kebab menu (prevent share):"),Object(a.b)("p",null,"It is not possible to change to UI of the player. You can however achieve this by placing an absolutely positioned view on the player (either fully covering the player or just tall enough to cover the title) to prevent the webview from receiving user touches. This will not remove the logo or three dots, but will make it un-interactable."),Object(a.b)("p",null,"example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"<View>\n  <YoutubePlayer height={300} videoId={'XSqi5s3rfqk'} />\n  <TouchableOpacity\n    // TouchableOpacity to \"steal\" taps\n    // absolutely positioned to the top\n    // height must be adjusted to\n    // just cover the top 3 dots\n    style={{\n      top: 0,\n      height: 50,\n      width: '100%',\n      position: 'absolute',\n    }}\n  />\n</View>\n")))}s.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,v=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(v,c(c({ref:t},u),{},{components:n})):o.a.createElement(v,c({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);