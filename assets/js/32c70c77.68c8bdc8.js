"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[2453],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l={unversionedId:"recipes/syslog_udp/README",id:"recipes/syslog_udp/README",isDocsHomePage:!1,title:"syslog udp",description:"The syslog udp example is demonstrate a number things:",source:"@site/docs/recipes/14_syslog_udp/README.md",sourceDirName:"recipes/14_syslog_udp",slug:"/recipes/syslog_udp/README",permalink:"/tremor-new-website/docs/recipes/syslog_udp/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/recipes/14_syslog_udp/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transform",permalink:"/tremor-new-website/docs/recipes/grafana/README"},next:{title:"syslog udp dns",permalink:"/tremor-new-website/docs/recipes/syslog_udp_dns/README"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Testing",id:"testing",children:[]}],c={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"syslog udp")," example is demonstrate a number things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Encoding data in the ",(0,i.kt)("inlineCode",{parentName:"li"},"syslog")," format."),(0,i.kt)("li",{parentName:"ol"},"Sending data over ",(0,i.kt)("inlineCode",{parentName:"li"},"UDP"),"."),(0,i.kt)("li",{parentName:"ol"},"Receiving data over ",(0,i.kt)("inlineCode",{parentName:"li"},"UDP"),"."),(0,i.kt)("li",{parentName:"ol"},"Decoding ",(0,i.kt)("inlineCode",{parentName:"li"},"syslog")," formated data.")),(0,i.kt)("p",null,"For digestion it is entirely selfcontained inside a singel tremor instance using multiple paralell pipelines, sinks and sources."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All the code here is available in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/14_syslog_udp"},"git repository")," as well and can be run with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose up"),"."))),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{target:"_blank",href:n(43753).Z},"sources and sinks")," we use are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"metronome")," source - to generate data in one second intervals."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"udp")," sink - to send the data over ",(0,i.kt)("inlineCode",{parentName:"li"},"UDP"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"udp")," source - to receive data via ",(0,i.kt)("inlineCode",{parentName:"li"},"UDP"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"stdout")," sink - to display data decoded and re-formated as ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON"),".")),(0,i.kt)("p",null,"In addition we have two pipelines."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{target:"_blank",href:n(14166).Z},"producer")," pipeline takes the tick from metronome and generates a syslog message. It is only handling message rewriting."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{target:"_blank",href:n(14166).Z},"consumer")," pipeline takes the syslog message and forwards it. It is a passthrough pipeline."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{target:"_blank",href:n(87151).Z},"binding")," expresses those relations and gives the graph of onramp, pipeline and offramp. We hare left with those two workflows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"metronome -> producer -> syslog-udp-out\n\nsyslog-udp-in -> consumer -> stdout-output\n")),(0,i.kt)("p",null,"Finally the ",(0,i.kt)("a",{target:"_blank",href:n(59415).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,i.kt)("h2",{id:"business-logic"},"Business Logic"),(0,i.kt)("p",null,"The only interesting part to look at is the event rewriting, this uses an example syslog message and adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.id")," as a ",(0,i.kt)("inlineCode",{parentName:"p"},"strucuted_data")," field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-trickle"},'select {\n  "severity": "notice",\n  "facility": "local4",\n  "hostname": "example.com",\n  "appname": "evntsog",\n  "msg": "BOMAn application event log entry...",\n  "procid": null,\n  "msgid": "ID47",\n  "protocol": "RFC5424",\n  "protocol_version": 1,\n  "structured_data": {\n              "exampleSDID@32473" :\n              [\n                {"eventSource": "Tremor"},\n                {"eventID": "#{ event.id }"}\n              ]\n            },\n  "timestamp": event.ingest_ns\n} from in into out\n')),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"from inside the docker container, custom syslog messages can be send with the ",(0,i.kt)("inlineCode",{parentName:"p"},"logger")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ logger -d -n 127.0.0.1 -P 12201 "Weeeeh. It works :D"\n')))}d.isMDXComponent=!0},43753:function(e,t,n){t.Z=n.p+"assets/files/00_ramps-72ed696b0c532eaa1e332cac22297fac.yaml"},87151:function(e,t,n){t.Z=n.p+"assets/files/01_binding-adf77a18b1e732d845e1593de9db6d2b.yaml"},59415:function(e,t,n){t.Z=n.p+"assets/files/02_mapping-87bbf82480a24d4f084bf711805395d1.yaml"},14166:function(e,t,n){t.Z=n.p+"assets/files/consumer-a5bc721242b579503e73a6e7cda4ec32.trickle"}}]);