"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1261],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60959:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l={unversionedId:"recipes/validate/README",id:"recipes/validate/README",isDocsHomePage:!1,title:"Transform",description:"The validate example adds the concept of scripts to the trickle file. In this script we validate the schema of the input json against some requirements and only let events through that do satisfy them. Other events are dropped. Those changes are entirely inside the example.trickle.",source:"@site/docs/recipes/03_validate/README.md",sourceDirName:"recipes/03_validate",slug:"/recipes/validate/README",permalink:"/tremor-new-website/docs/recipes/validate/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/recipes/03_validate/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transform",permalink:"/tremor-new-website/docs/recipes/transform/README"},next:{title:"Transform",permalink:"/tremor-new-website/docs/recipes/logstash/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[{value:"Discussion",id:"discussion",children:[]}]}],p={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"validate")," example adds the concept of scripts to the trickle file. In this script we validate the schema of the input json against some requirements and only let events through that do satisfy them. Other events are dropped. Those changes are entirely inside the ",(0,i.kt)("a",{target:"_blank",href:n(92695).Z},(0,i.kt)("code",null,"example.trickle")),"."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{target:"_blank",href:n(92695).Z},(0,i.kt)("code",null,"example.trickle"))," we define a script that validates the schema that the field ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," is a string and the field ",(0,i.kt)("inlineCode",{parentName:"p"},"selected")," is a boolean. If both conditions are true we pass it on, otherwise it'll drop."),(0,i.kt)("p",null,"All other configuration is the same as per the previous example, and is elided here for brevity."),(0,i.kt)("h2",{id:"business-logic"},"Business Logic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},"define script validate                                                          # define the script\nscript\n  match event of\n    case %{ present hello, present selected }                                   # Record pattern, validating field presence\n        when type::is_string(event.hello) and type::is_bool(event.selected)     # guards\n            => emit event                                                       # propagate if valid\n    default => drop                                                             # discard or reroute\n  end\nend;\n")),(0,i.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,i.kt)("p",null,"Run a the query against a sample input.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ tremor run -i input.json example.trickle\n>> {"hello": "world"}\n')),(0,i.kt)("p",null,"Deploy the solution into a docker environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker-compose up\n>> {"hello": "again", "selected": true}\n')),(0,i.kt)("p",null,"Inject test messages via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Can be installed via ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo install websocat")," for the lazy/impatient amongst us"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat inputs.txt | websocat ws://localhost:4242\n...\n")),(0,i.kt)("p",null,"Injecting bad messages to verify validation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat invalids.txt | websocat ws://localhost:4242\n...\n")),(0,i.kt)("h3",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"We introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"declare script")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"create script")," query language features. ",(0,i.kt)("inlineCode",{parentName:"p"},"delcare script")," lets declare a template for a script to be run while ",(0,i.kt)("inlineCode",{parentName:"p"},"create script")," instanciates it as a part of the graph. ",(0,i.kt)("inlineCode",{parentName:"p"},"create script")," takes an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"as <name>")," argument if it is omitted the operator will have the same name as the declaration."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Scripts themselves can not connect to elements inside the graph, a ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," statement is needed to glue scripts and other logic together."))))}d.isMDXComponent=!0},92695:function(e,t,n){t.Z=n.p+"assets/files/example-6823b48f5bf4299ac64a456bfb415ad4.trickle"}}]);