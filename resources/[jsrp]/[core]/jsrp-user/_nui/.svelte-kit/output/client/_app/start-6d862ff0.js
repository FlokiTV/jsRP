var st=Object.defineProperty,it=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var De=(n,e,t)=>e in n?st(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,P=(n,e)=>{for(var t in e||(e={}))Ve.call(e,t)&&De(n,t,e[t]);if(de)for(var t of de(e))qe.call(e,t)&&De(n,t,e[t]);return n},re=(n,e)=>it(n,ot(e));var ze=(n,e)=>{var t={};for(var s in n)Ve.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&de)for(var s of de(n))e.indexOf(s)<0&&qe.call(n,s)&&(t[s]=n[s]);return t};import{s as tt,n as ye,S as at,i as ct,e as lt,c as ft,a as ut,d as V,b as ve,f as B,g as q,t as dt,h as pt,j as ht,k as _t,l as C,m as mt,o as M,p as I,q as F,r as T,u as gt,v as wt,w as Ee,x as z,y as oe,z as J,A as ae,B as ce,C as K,D as le,E as Je}from"./chunks/index-c3650d4a.js";import{i as bt}from"./chunks/singletons-d1fb5791.js";const Z=[];function pe(n,e=ye){let t;const s=new Set;function l(r){if(tt(n,r)&&(n=r,t)){const i=!Z.length;for(const o of s)o[1](),Z.push(o,n);if(i){for(let o=0;o<Z.length;o+=2)Z[o][0](Z[o+1]);Z.length=0}}}function a(r){l(r(n))}function f(r,i=ye){const o=[r,i];return s.add(o),s.size===1&&(t=e(l)||ye),r(n),()=>{s.delete(o),s.size===0&&(t(),t=null)}}return{set:l,update:a,subscribe:f}}let Ke="",nt="";function yt(n){Ke=n.base,nt=n.assets||Ke}function vt(n){let e,t,s;const l=[n[1]||{}];var a=n[0][0];function f(r){let i={};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f())),{c(){e&&z(e.$$.fragment),t=C()},l(r){e&&oe(e.$$.fragment,r),t=C()},m(r,i){e&&J(e,r,i),q(r,t,i),s=!0},p(r,i){const o=i&2?ae(l,[ce(r[1]||{})]):{};if(a!==(a=r[0][0])){if(e){M();const d=e;I(d.$$.fragment,1,0,()=>{K(d,1)}),F()}a?(e=new a(f()),z(e.$$.fragment),T(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&I(e.$$.fragment,r),s=!1},d(r){r&&V(t),e&&K(e,r)}}}function $t(n){let e,t,s;const l=[n[1]||{}];var a=n[0][0];function f(r){let i={$$slots:{default:[St]},$$scope:{ctx:r}};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f(n))),{c(){e&&z(e.$$.fragment),t=C()},l(r){e&&oe(e.$$.fragment,r),t=C()},m(r,i){e&&J(e,r,i),q(r,t,i),s=!0},p(r,i){const o=i&2?ae(l,[ce(r[1]||{})]):{};if(i&525&&(o.$$scope={dirty:i,ctx:r}),a!==(a=r[0][0])){if(e){M();const d=e;I(d.$$.fragment,1,0,()=>{K(d,1)}),F()}a?(e=new a(f(r)),z(e.$$.fragment),T(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&I(e.$$.fragment,r),s=!1},d(r){r&&V(t),e&&K(e,r)}}}function kt(n){let e,t,s;const l=[n[2]||{}];var a=n[0][1];function f(r){let i={};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f())),{c(){e&&z(e.$$.fragment),t=C()},l(r){e&&oe(e.$$.fragment,r),t=C()},m(r,i){e&&J(e,r,i),q(r,t,i),s=!0},p(r,i){const o=i&4?ae(l,[ce(r[2]||{})]):{};if(a!==(a=r[0][1])){if(e){M();const d=e;I(d.$$.fragment,1,0,()=>{K(d,1)}),F()}a?(e=new a(f()),z(e.$$.fragment),T(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&I(e.$$.fragment,r),s=!1},d(r){r&&V(t),e&&K(e,r)}}}function Et(n){let e,t,s;const l=[n[2]||{}];var a=n[0][1];function f(r){let i={$$slots:{default:[Rt]},$$scope:{ctx:r}};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f(n))),{c(){e&&z(e.$$.fragment),t=C()},l(r){e&&oe(e.$$.fragment,r),t=C()},m(r,i){e&&J(e,r,i),q(r,t,i),s=!0},p(r,i){const o=i&4?ae(l,[ce(r[2]||{})]):{};if(i&521&&(o.$$scope={dirty:i,ctx:r}),a!==(a=r[0][1])){if(e){M();const d=e;I(d.$$.fragment,1,0,()=>{K(d,1)}),F()}a?(e=new a(f(r)),z(e.$$.fragment),T(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&I(e.$$.fragment,r),s=!1},d(r){r&&V(t),e&&K(e,r)}}}function Rt(n){let e,t,s;const l=[n[3]||{}];var a=n[0][2];function f(r){let i={};for(let o=0;o<l.length;o+=1)i=le(i,l[o]);return{props:i}}return a&&(e=new a(f())),{c(){e&&z(e.$$.fragment),t=C()},l(r){e&&oe(e.$$.fragment,r),t=C()},m(r,i){e&&J(e,r,i),q(r,t,i),s=!0},p(r,i){const o=i&8?ae(l,[ce(r[3]||{})]):{};if(a!==(a=r[0][2])){if(e){M();const d=e;I(d.$$.fragment,1,0,()=>{K(d,1)}),F()}a?(e=new a(f()),z(e.$$.fragment),T(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(o)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&I(e.$$.fragment,r),s=!1},d(r){r&&V(t),e&&K(e,r)}}}function St(n){let e,t,s,l;const a=[Et,kt],f=[];function r(i,o){return i[0][2]?0:1}return e=r(n),t=f[e]=a[e](n),{c(){t.c(),s=C()},l(i){t.l(i),s=C()},m(i,o){f[e].m(i,o),q(i,s,o),l=!0},p(i,o){let d=e;e=r(i),e===d?f[e].p(i,o):(M(),I(f[d],1,1,()=>{f[d]=null}),F(),t=f[e],t?t.p(i,o):(t=f[e]=a[e](i),t.c()),T(t,1),t.m(s.parentNode,s))},i(i){l||(T(t),l=!0)},o(i){I(t),l=!1},d(i){f[e].d(i),i&&V(s)}}}function Be(n){let e,t=n[5]&&We(n);return{c(){e=lt("div"),t&&t.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=ut(e);t&&t.l(l),l.forEach(V),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,l){q(s,e,l),t&&t.m(e,null)},p(s,l){s[5]?t?t.p(s,l):(t=We(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&V(e),t&&t.d()}}}function We(n){let e;return{c(){e=dt(n[6])},l(t){e=pt(t,n[6])},m(t,s){q(t,e,s)},p(t,s){s&64&&ht(e,t[6])},d(t){t&&V(e)}}}function Lt(n){let e,t,s,l,a;const f=[$t,vt],r=[];function i(d,S){return d[0][1]?0:1}e=i(n),t=r[e]=f[e](n);let o=n[4]&&Be(n);return{c(){t.c(),s=_t(),o&&o.c(),l=C()},l(d){t.l(d),s=mt(d),o&&o.l(d),l=C()},m(d,S){r[e].m(d,S),q(d,s,S),o&&o.m(d,S),q(d,l,S),a=!0},p(d,[S]){let y=e;e=i(d),e===y?r[e].p(d,S):(M(),I(r[y],1,1,()=>{r[y]=null}),F(),t=r[e],t?t.p(d,S):(t=r[e]=f[e](d),t.c()),T(t,1),t.m(s.parentNode,s)),d[4]?o?o.p(d,S):(o=Be(d),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},i(d){a||(T(t),a=!0)},o(d){I(t),a=!1},d(d){r[e].d(d),d&&V(s),o&&o.d(d),d&&V(l)}}}function Ut(n,e,t){let{stores:s}=e,{page:l}=e,{components:a}=e,{props_0:f=null}=e,{props_1:r=null}=e,{props_2:i=null}=e;gt("__svelte__",s),wt(s.page.notify);let o=!1,d=!1,S=null;return Ee(()=>{const y=s.page.subscribe(()=>{o&&(t(5,d=!0),t(6,S=document.title||"untitled page"))});return t(4,o=!0),y}),n.$$set=y=>{"stores"in y&&t(7,s=y.stores),"page"in y&&t(8,l=y.page),"components"in y&&t(0,a=y.components),"props_0"in y&&t(1,f=y.props_0),"props_1"in y&&t(2,r=y.props_1),"props_2"in y&&t(3,i=y.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(l)},[a,f,r,i,o,d,S,s,l]}class At extends at{constructor(e){super(),ct(this,e,Ut,Lt,tt,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const Ot="modulepreload",Ye={},xt="/nui/_app/",se=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${xt}${s}`,s in Ye)return;Ye[s]=!0;const l=s.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Ot,l||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),l)return new Promise((r,i)=>{f.addEventListener("load",r),f.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Nt={},Se=[()=>se(()=>import("./pages/__layout.svelte-c5eaa636.js"),["pages/__layout.svelte-c5eaa636.js","assets/pages/__layout.svelte-0ba39d92.css","chunks/index-c3650d4a.js","chunks/navigation-0e6511d1.js","chunks/singletons-d1fb5791.js"]),()=>se(()=>import("./error.svelte-43454bab.js"),["error.svelte-43454bab.js","chunks/index-c3650d4a.js"]),()=>se(()=>import("./pages/dead.svelte-c28c45dd.js"),["pages/dead.svelte-c28c45dd.js","chunks/index-c3650d4a.js"]),()=>se(()=>import("./pages/index._ext_.svelte-415318e9.js"),["pages/index._ext_.svelte-415318e9.js","chunks/index-c3650d4a.js","chunks/navigation-0e6511d1.js","chunks/singletons-d1fb5791.js"]),()=>se(()=>import("./pages/index.svelte-cfaafe82.js"),["pages/index.svelte-cfaafe82.js","chunks/index-c3650d4a.js"])],Pt={"":[[0,4],[1]],dead:[[0,2],[1]],"index.[ext]":[[0,3],[1]]};function Me(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Fe(n){if(n.fallthrough)throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");if("maxage"in n)throw new Error("maxage should be replaced with cache: { maxage }");const e=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||e){const t=n.status;if(!n.error&&e)return{status:t||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!t||t<400||t>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:t,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.dependencies&&(!Array.isArray(n.dependencies)||n.dependencies.some(t=>typeof t!="string")))return{status:500,error:new Error('"dependencies" property returned from load() must be of type string[]')};if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Ct(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function It(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}function Ge(n){let e=n.baseURI;if(!e){const t=n.getElementsByTagName("base");e=t.length?t[0].href:n.URL}return e}function Re(){return{x:pageXOffset,y:pageYOffset}}function Xe(n){return n.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function Ze(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}function He(n){const e=pe(n);let t=!0;function s(){t=!0,e.update(f=>f)}function l(f){t=!1,e.set(f)}function a(f){let r;return e.subscribe(i=>{(r===void 0||t&&i!==r)&&f(r=i)})}return{notify:s,set:l,subscribe:a}}function Tt(){const{set:n,subscribe:e}=pe(!1),t="1653279604666";let s;async function l(){clearTimeout(s);const f=await fetch(`${nt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(f.ok){const{version:r}=await f.json(),i=r!==t;return i&&(n(!0),clearTimeout(s)),i}else throw new Error(`Version check failed: ${f.status}`)}return{subscribe:e,check:l}}function jt(n,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof n=="string"?n:n.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${It(e.body)}"]`);const l=document.querySelector(s);if(l&&l.textContent){const a=JSON.parse(l.textContent),{body:f}=a,r=ze(a,["body"]);return Promise.resolve(new Response(f,r))}return fetch(n,e)}const Dt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function Vt(n){const e=[],t=[];let s=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${decodeURIComponent(n).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((a,f,r)=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(i)return e.push(i[1]),t.push(i[2]),"(?:/(.*))?";const o=f===r.length-1;return a&&"/"+a.split(/\[(.+?)\]/).map((d,S)=>{if(S%2){const[,y,H,G]=Dt.exec(d);return e.push(H),t.push(G),y?"(.*?)":"([^/]+?)"}return o&&d.includes(".")&&(s=!1),d.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:t}}function qt(n,e,t,s){const l={};for(let a=0;a<e.length;a+=1){const f=e[a],r=t[a],i=n[a+1]||"";if(r){const o=s[r];if(!o)throw new Error(`Missing "${r}" param matcher`);if(!o(i))return}l[f]=i}return l}function zt(n,e,t){return Object.entries(e).map(([l,[a,f,r]])=>{const{pattern:i,names:o,types:d}=Vt(l);return{id:l,exec:S=>{const y=i.exec(S);if(y)return qt(y,o,d,t)},a:a.map(S=>n[S]),b:f.map(S=>n[S]),has_shadow:!!r}})}const rt="sveltekit:scroll",W="sveltekit:index",$e=zt(Se,Pt,Nt),Jt=Se[0](),Kt=Se[1](),Qe={};let ie={};try{ie=JSON.parse(sessionStorage[rt])}catch{}function ke(n){ie[n]=Re()}const et=window.fetch;function Bt({target:n,session:e,base:t,trailing_slash:s}){var Te;const l=new Map,a=[],f={url:He({}),page:He({}),navigating:pe(null),session:pe(e),updated:Tt()},r={id:null,promise:null},i={before_navigate:[],after_navigate:[]};let o={branch:[],error:null,session_id:0,stuff:Qe,url:null},d=!1,S=!0,y=!1,H=1,G=null,Le,Ue,Ae=!1;f.session.subscribe(async c=>{Ue=c,Ae&&(H+=1,ge(new URL(location.href),[],!0))}),Ae=!0;let X=!0,j=(Te=history.state)==null?void 0:Te[W];j||(j=Date.now(),history.replaceState(re(P({},history.state),{[W]:j}),"",location.href));const he=ie[j];he&&(history.scrollRestoration="manual",scrollTo(he.x,he.y));let _e=!1,me,Oe;async function xe(c,{noscroll:p=!1,replaceState:w=!1,keepfocus:u=!1,state:h={}},b){const _=new URL(c,Ge(document));if(X)return be({url:_,scroll:p?Re():null,keepfocus:u,redirect_chain:b,details:{state:h,replaceState:w},accepted:()=>{},blocked:()=>{}});await te(_)}async function Ne(c){const p=Ie(c);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return r.promise=Ce(p,!1),r.id=p.id,r.promise}async function ge(c,p,w,u){var g,$,L;const h=Ie(c),b=Oe={};let _=h&&await Ce(h,w);if(!_&&c.origin===location.origin&&c.pathname===location.pathname&&(_=await ee({status:404,error:new Error(`Not found: ${c.pathname}`),url:c,routeId:null})),!_)return await te(c),!1;if(Oe!==b)return!1;if(a.length=0,_.redirect)if(p.length>10||p.includes(c.pathname))_=await ee({status:500,error:new Error("Redirect loop"),url:c,routeId:null});else return X?xe(new URL(_.redirect,c).href,{},[...p,c.pathname]):await te(new URL(_.redirect,location.href)),!1;else(($=(g=_.props)==null?void 0:g.page)==null?void 0:$.status)>=400&&await f.updated.check()&&await te(c);if(y=!0,u&&u.details){const{details:k}=u,E=k.replaceState?0:1;k.state[W]=j+=E,history[k.replaceState?"replaceState":"pushState"](k.state,"",c)}if(d?(o=_.state,Le.$set(_.props)):Pe(_),u){const{scroll:k,keepfocus:E}=u;if(!E){const m=document.body,A=m.getAttribute("tabindex");(L=getSelection())==null||L.removeAllRanges(),m.tabIndex=-1,m.focus({preventScroll:!0}),A!==null?m.setAttribute("tabindex",A):m.removeAttribute("tabindex")}if(await Je(),S){const m=c.hash&&document.getElementById(c.hash.slice(1));k?scrollTo(k.x,k.y):m?m.scrollIntoView():scrollTo(0,0)}}else await Je();r.promise=null,r.id=null,S=!0,y=!1,_.props.page&&(me=_.props.page);const v=_.state.branch[_.state.branch.length-1];return X=(v==null?void 0:v.module.router)!==!1,!0}function Pe(c){o=c.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),me=c.props.page,Le=new At({target:n,props:re(P({},c.props),{stores:f}),hydrate:!0}),d=!0,X){const w={from:null,to:new URL(location.href)};i.after_navigate.forEach(u=>u(w))}}async function we({url:c,params:p,stuff:w,branch:u,status:h,error:b,routeId:_}){var m,A;const v=u.filter(Boolean),g=v.find(R=>{var x;return(x=R.loaded)==null?void 0:x.redirect}),$={redirect:(m=g==null?void 0:g.loaded)==null?void 0:m.redirect,state:{url:c,params:p,branch:u,error:b,stuff:w,session_id:H},props:{components:v.map(R=>R.module.default)}};for(let R=0;R<v.length;R+=1){const x=v[R].loaded;$.props[`props_${R}`]=x?await x.props:null}if(!o.url||c.href!==o.url.href||o.error!==b||o.stuff!==w){$.props.page={error:b,params:p,routeId:_,status:h,stuff:w,url:c};const R=(x,U)=>{Object.defineProperty($.props.page,x,{get:()=>{throw new Error(`$page.${x} has been replaced by $page.url.${U}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}const k=v[v.length-1],E=(A=k==null?void 0:k.loaded)==null?void 0:A.cache;if(E){const R=c.pathname+c.search;let x=!1;const U=()=>{l.get(R)===$&&l.delete(R),N(),clearTimeout(O)},O=setTimeout(U,E.maxage*1e3),N=f.session.subscribe(()=>{x&&U()});x=!0,l.set(R,$)}return $}async function Q({status:c,error:p,module:w,url:u,params:h,stuff:b,props:_,routeId:v}){const g={module:w,uses:{params:new Set,url:!1,session:!1,stuff:!1,dependencies:new Set},loaded:null,stuff:b};function $(E){const{href:m}=new URL(E,u);g.uses.dependencies.add(m)}_&&g.uses.dependencies.add(u.href);const L={};for(const E in h)Object.defineProperty(L,E,{get(){return g.uses.params.add(E),h[E]},enumerable:!0});const k=Ue;if(w.load){const E={routeId:v,params:L,props:_||{},get url(){return g.uses.url=!0,new Proxy(u,{get:(A,R)=>{if(R==="hash")throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.");return Reflect.get(A,R,A)}})},get session(){return g.uses.session=!0,k},get stuff(){return g.uses.stuff=!0,P({},b)},fetch(A,R){const x=typeof A=="string"?A:A.url;return $(x),d?et(A,R):jt(A,R)},status:c!=null?c:null,error:p!=null?p:null};let m;if(m=await w.load.call(null,E),!m)throw new Error("load function must return a value");g.loaded=Fe(m),g.loaded.stuff&&(g.stuff=g.loaded.stuff),g.loaded.dependencies&&g.loaded.dependencies.forEach($)}else _&&(g.loaded=Fe({props:_}));return g}async function Ce({id:c,url:p,params:w,route:u},h){var A,R,x;if(r.id===c&&r.promise)return r.promise;if(!h){const U=l.get(c);if(U)return U}const{a:b,b:_,has_shadow:v}=u,g=o.url&&{url:c!==o.url.pathname+o.url.search,params:Object.keys(w).filter(U=>o.params[U]!==w[U]),session:H!==o.session_id};let $=[],L=Qe,k=!1,E=200,m=null;b.forEach(U=>U().catch(()=>{}));e:for(let U=0;U<b.length;U+=1){let O;try{if(!b[U])continue;const N=await b[U](),D=o.branch[U];if(!D||N!==D.module||g.url&&D.uses.url||g.params.some(Y=>D.uses.params.has(Y))||g.session&&D.uses.session||Array.from(D.uses.dependencies).some(Y=>a.some(ue=>ue(Y)))||k&&D.uses.stuff){let Y={};const ue=v&&U===b.length-1;if(ue){const ne=await et(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`,{headers:{"x-sveltekit-load":"true"}});if(ne.ok){const je=ne.headers.get("x-sveltekit-location");if(je)return{redirect:je,props:{},state:o};Y=ne.status===204?{}:await ne.json()}else E=ne.status,m=new Error("Failed to load data")}if(m||(O=await Q({module:N,url:p,params:w,props:Y,stuff:L,routeId:u.id})),O&&(ue&&(O.uses.url=!0),O.loaded)){if(O.loaded.error&&(E=O.loaded.status,m=O.loaded.error),O.loaded.redirect)return{redirect:O.loaded.redirect,props:{},state:o};O.loaded.stuff&&(k=!0)}}else O=D}catch(N){E=500,m=Me(N)}if(m){for(;U--;)if(_[U]){let N,D,fe=U;for(;!(D=$[fe]);)fe-=1;try{if(N=await Q({status:E,error:m,module:await _[U](),url:p,params:w,stuff:D.stuff,routeId:u.id}),(A=N==null?void 0:N.loaded)!=null&&A.error)continue;(R=N==null?void 0:N.loaded)!=null&&R.stuff&&(L=P(P({},L),N.loaded.stuff)),$=$.slice(0,fe+1).concat(N);break e}catch{continue}}return await ee({status:E,error:m,url:p,routeId:u.id})}else(x=O==null?void 0:O.loaded)!=null&&x.stuff&&(L=P(P({},L),O.loaded.stuff)),$.push(O)}return await we({url:p,params:w,stuff:L,branch:$,status:E,error:m,routeId:u.id})}async function ee({status:c,error:p,url:w,routeId:u}){var v,g;const h={},b=await Q({module:await Jt,url:w,params:h,stuff:{},routeId:u}),_=await Q({status:c,error:p,module:await Kt,url:w,params:h,stuff:b&&b.loaded&&b.loaded.stuff||{},routeId:u});return await we({url:w,params:h,stuff:P(P({},(v=b==null?void 0:b.loaded)==null?void 0:v.stuff),(g=_==null?void 0:_.loaded)==null?void 0:g.stuff),branch:[b,_],status:c,error:p,routeId:u})}function Ie(c){if(c.origin!==location.origin||!c.pathname.startsWith(t))return;const p=decodeURI(c.pathname.slice(t.length)||"/");for(const w of $e){const u=w.exec(p);if(u)return{id:c.pathname+c.search,route:w,params:u,url:c}}}async function be({url:c,scroll:p,keepfocus:w,redirect_chain:u,details:h,accepted:b,blocked:_}){const v=o.url;let g=!1;const $={from:v,to:c,cancel:()=>g=!0};if(i.before_navigate.forEach(m=>m($)),g){_();return}const L=Ct(c.pathname,s),k=new URL(c.origin+L+c.search+c.hash);if(ke(j),b(),d&&f.navigating.set({from:o.url,to:k}),await ge(k,u,!1,{scroll:p,keepfocus:w,details:h})){const m={from:v,to:k};i.after_navigate.forEach(A=>A(m)),f.navigating.set(null)}}function te(c){return location.href=c.href,new Promise(()=>{})}return{after_navigate:c=>{Ee(()=>(i.after_navigate.push(c),()=>{const p=i.after_navigate.indexOf(c);i.after_navigate.splice(p,1)}))},before_navigate:c=>{Ee(()=>(i.before_navigate.push(c),()=>{const p=i.before_navigate.indexOf(c);i.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(y||!d)&&(S=!1)},goto:(c,p={})=>xe(c,p,[]),invalidate:c=>{if(typeof c=="function")a.push(c);else{const{href:p}=new URL(c,location.href);a.push(w=>w===p)}return G||(G=Promise.resolve().then(async()=>{await ge(new URL(location.href),[],!0),G=null})),G},prefetch:async c=>{const p=new URL(c,Ge(document));await Ne(p)},prefetch_routes:async c=>{const w=(c?$e.filter(u=>c.some(h=>u.exec(h))):$e).map(u=>Promise.all(u.a.map(h=>h())));await Promise.all(w)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",u=>{let h=!1;const b={from:o.url,to:null,cancel:()=>h=!0};i.before_navigate.forEach(_=>_(b)),h?(u.preventDefault(),u.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(j);try{sessionStorage[rt]=JSON.stringify(ie)}catch{}}});const c=u=>{const h=Xe(u);h&&h.href&&h.hasAttribute("sveltekit:prefetch")&&Ne(Ze(h))};let p;const w=u=>{clearTimeout(p),p=setTimeout(()=>{var h;(h=u.target)==null||h.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",c),addEventListener("mousemove",w),addEventListener("sveltekit:trigger_prefetch",c),addEventListener("click",u=>{if(!X||u.button||u.which!==1||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||u.defaultPrevented)return;const h=Xe(u);if(!h||!h.href)return;const b=h instanceof SVGAElement,_=Ze(h);if(!b&&_.origin==="null")return;const v=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||v.includes("external")||h.hasAttribute("sveltekit:reload")||(b?h.target.baseVal:h.target))return;const[g,$]=_.href.split("#");if($!==void 0&&g===location.href.split("#")[0]){_e=!0,ke(j),f.page.set(re(P({},me),{url:_})),f.page.notify();return}be({url:_,scroll:h.hasAttribute("sveltekit:noscroll")?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>u.preventDefault(),blocked:()=>u.preventDefault()})}),addEventListener("popstate",u=>{if(u.state&&X){if(u.state[W]===j)return;be({url:new URL(location.href),scroll:ie[u.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=u.state[W]},blocked:()=>{const h=j-u.state[W];history.go(h)}})}}),addEventListener("hashchange",()=>{_e&&(_e=!1,history.replaceState(re(P({},history.state),{[W]:++j}),"",location.href))})},_hydrate:async({status:c,error:p,nodes:w,params:u,routeId:h})=>{const b=new URL(location.href),_=[];let v={},g,$;try{for(let L=0;L<w.length;L+=1){const k=L===w.length-1;let E;if(k){const A=document.querySelector('script[sveltekit\\:data-type="props"]');A&&(E=JSON.parse(A.textContent))}const m=await Q({module:await w[L],url:b,params:u,stuff:v,status:k?c:void 0,error:k?p:void 0,props:E,routeId:h});if(E&&(m.uses.dependencies.add(b.href),m.uses.url=!0),_.push(m),m&&m.loaded)if(m.loaded.error){if(p)throw m.loaded.error;$={status:m.loaded.status,error:m.loaded.error,url:b,routeId:h}}else m.loaded.stuff&&(v=P(P({},v),m.loaded.stuff))}g=$?await ee($):await we({url:b,params:u,stuff:v,branch:_,status:c,error:p,routeId:h})}catch(L){if(p)throw L;g=await ee({status:500,error:Me(L),url:b,routeId:h})}g.redirect&&await te(new URL(g.redirect,location.href)),Pe(g)}}}async function Ft({paths:n,target:e,session:t,route:s,spa:l,trailing_slash:a,hydrate:f}){const r=Bt({target:e,session:t,base:n.base,trailing_slash:a});bt({client:r}),yt(n),f&&await r._hydrate(f),s&&(l&&r.goto(location.href,{replaceState:!0}),r._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Ft as start};
