"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),h=o,g=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Release Notes - Apache RocketMQ Spring - Version 2.2.0",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},s=void 0,i={permalink:"/release-notes/2021/01/08/release-notes-rocketmq-spring-2.2.0",source:"@site/release-notes/2021-01-08-release-notes-rocketmq-spring-2.2.0.md",title:"Release Notes - Apache RocketMQ Spring - Version 2.2.0",description:"* Source: rocketmq-spring-all-2.2.0-source-release.zip [PGP] [SHA512]",date:"2021-01-08T00:00:00.000Z",formattedDate:"January 8, 2021",tags:[{label:"RocketMQ_Spring",permalink:"/release-notes/tags/rocket-mq-spring"}],readingTime:.935,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.0",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},prevItem:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.0",permalink:"/release-notes/2021/03/17/release-notes-rocketmq-client-go-2.1.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.8.0",permalink:"/release-notes/2020/12/21/4.8.0"}},c={authorsImageUrls:[]},l=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq-spring/2.2.0/rocketmq-spring-rocketmq-spring-all-2.2.0.zip"},"rocketmq-spring-all-2.2.0-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.2.0/rocketmq-spring-all-2.2.0-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.2.0/rocketmq-spring-rocketmq-spring-all-2.2.0.zip.sha512"},"SHA512"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the version 2.2.0 release of RocketMQ Spring. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring"},"Quick Start"),"."),(0,o.kt)("h2",{id:"new-feature"},"New Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/306"},"ISSUE #306"),"] -  Support real LitePullMessage in RocketMQ-Spring..")),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/289"},"ISSUE #289"),"] -  Use the default instance name when using acl."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/298"},"ISSUE #298"),"] -  Too many warning info when consuming failed."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/308"},"ISSUE #308"),"] -  Fix the comment error in ACLStringConsumer class."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/314"},"ISSUE #314"),"] -  Modify parent.versions of modules in samples project from 2.1.1-SNAPSHOT to 2.1.2-SNAPSHOT."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/327"},"ISSUE #327"),"] -  Remove info log in consumeMessage method."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/329"},"ISSUE #329"),"] -  Upgrade RocketMQ version to 4.8.0."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/331"},"ISSUE #331"),"] -  Update notice and readme document.")),(0,o.kt)("h2",{id:"bug"},"Bug"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/268"},"ISSUE #268"),"] -  RocketMQMessageListener nameServer not work in some scenes."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/294"},"ISSUE #294"),"] -  GetAndWrapmessage method in rocketmqUtil is missing prefix when getting keys."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/304"},"ISSUE #304"),"] -  Fix the correspondence between enumerations and numbers.")))}u.isMDXComponent=!0}}]);