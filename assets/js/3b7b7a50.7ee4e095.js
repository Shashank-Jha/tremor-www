"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9916],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||o;return n?t.createElement(m,l(l({ref:r},p),{},{components:n})):t.createElement(m,l({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42914:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},u={unversionedId:"development/internal/transform",id:"development/internal/transform",isDocsHomePage:!1,title:"Match to Functional",description:"A useful step-by-step follow-up on transforming match style to functional style.",source:"@site/docs/development/internal/transform.md",sourceDirName:"development/internal",slug:"/development/internal/transform",permalink:"/tremor-new-website/docs/development/internal/transform",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/development/internal/transform.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Docusaurus",permalink:"/tremor-new-website/docs/development/internal/running-docusaurus"},next:{title:"Investigations",permalink:"/tremor-new-website/docs/development/investigations"}},s=[],p={toc:s};function d(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A useful step-by-step follow-up on transforming match style to functional style."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    let res0 = data.world.reg.find_binding(&url);\n    match res0 {\n        Ok(res) => match res {\n            Some(res) => reply(req, data, Ok(res.binding), false, 200),\n            None => Err(error::ErrorNotFound("Binding not found")),\n        },\n        Err(e) => Err(error::ErrorInternalServerError(format!(\n            "Internal server error: {}",\n            e\n        ))),\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    let res0 = data\n        .world\n        .reg\n        .find_binding(&url)\n        .map_err(|e| error::ErrorInternalServerError(format!("Internal server error: {}", e)))?\n        .ok_or_else(|| error::ErrorNotFound("Binding not found"))?;\n\n    reply(req, data, Ok(res0.binding), false, 200)\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    let res0 =\n        data.world.reg.find_binding(&url).map_err(|e| {\n            error::ErrorInternalServerError(format!("Internal server error: {}", e))\n        })?;\n\n    match res {\n        Some(res) => reply(req, data, Ok(res.binding), false, 200),\n        None => Err(error::ErrorNotFound("Binding not found")),\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    data.world\n        .reg\n        .find_binding(&url)\n        .map_err(|e| error::ErrorInternalServerError(format!("Internal server error: {}", e)))?\n        .ok_or_else(|| error::ErrorNotFound("Binding not found"))\n        .and_then(|result| reply(req, data, Ok(result.binding), false, 200))\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn get_servant(\n    (req, data, path): (HttpRequest, Data<State>, Path<(String, String)>),\n) -> HTTPResult {\n    let url = build_url(&["binding", &path.0, &path.1])?;\n    data.world\n        .reg\n        .find_binding(&url)\n        .map_err(|e| error::ErrorInternalServerError(format!("Internal server error: {}", e)))\n        .and_then(|result| result.ok_or_else(|| error::ErrorNotFound("Binding not found")))\n        .and_then(|result| reply(req, data, Ok(result.binding), false, 200))\n}\n')))}d.isMDXComponent=!0}}]);