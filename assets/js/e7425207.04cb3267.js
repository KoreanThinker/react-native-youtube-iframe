(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(88)),o={id:"basic-usage",title:"Basic Usage"},c={unversionedId:"basic-usage",id:"basic-usage",isDocsHomePage:!1,title:"Basic Usage",description:"This snippet renders a Youtube video with a button that can play or pause the video. When the player has finished playing it, an alert is triggered.",source:"@site/../docs/basic_usage.mdx",slug:"/basic-usage",permalink:"/react-native-youtube-iframe/basic-usage",version:"current",sidebar:"sideBar",previous:{title:"Installation",permalink:"/react-native-youtube-iframe/install"},next:{title:"Props",permalink:"/react-native-youtube-iframe/component-props"}},u=[],s={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This snippet renders a Youtube video with a button that can play or pause the video. When the player has finished playing it, an alert is triggered."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState, useCallback, useRef } from "react";\nimport { Button, View, Alert } from "react-native";\nimport YoutubePlayer from "react-native-youtube-iframe";\n\nexport default function App() {\n  const [playing, setPlaying] = useState(false);\n\n  const onStateChange = useCallback((state) => {\n    if (state === "ended") {\n      setPlaying(false);\n      Alert.alert("video has finished playing!");\n    }\n  }, []);\n\n  const togglePlaying = useCallback(() => {\n    setPlaying((prev) => !prev);\n  }, []);\n\n  return (\n    <View>\n      <YoutubePlayer\n        height={300}\n        play={playing}\n        videoId={"iee2TATGMyI"}\n        onChangeState={onStateChange}\n      />\n      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />\n    </View>\n  );\n}\n')))}l.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),y=r,b=p["".concat(o,".").concat(y)]||p[y]||f[y]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);