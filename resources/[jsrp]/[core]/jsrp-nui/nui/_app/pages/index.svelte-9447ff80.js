import{S as z,i as B,s as G,e as m,c as b,a as x,d,g as H,k as T,m as R,b as w,J as L,n as A,K as $,w as P}from"../chunks/index-92fe9422.js";import{s as Q}from"../chunks/jsrp-nui-7ad9a10d.js";import"../chunks/navigation-0e6511d1.js";import"../chunks/singletons-d1fb5791.js";function F(c,l,o){const t=c.slice();return t[0]=l[o],t}function S(c,l,o){const t=c.slice();return t[0]=l[o],t}function y(c,l,o){const t=c.slice();return t[0]=l[o],t}function C(c,l,o){const t=c.slice();return t[0]=l[o],t}function J(c){let l,o=c[0].text+"";return{c(){l=m("div")},l(t){l=b(t,"DIV",{});var i=x(l);i.forEach(d)},m(t,i){H(t,l,i),l.innerHTML=o},p(t,i){i&1&&o!==(o=t[0].text+"")&&(l.innerHTML=o)},d(t){t&&d(l)}}}function K(c){let l,o=c[0].text+"";return{c(){l=m("div")},l(t){l=b(t,"DIV",{});var i=x(l);i.forEach(d)},m(t,i){H(t,l,i),l.innerHTML=o},p(t,i){i&1&&o!==(o=t[0].text+"")&&(l.innerHTML=o)},d(t){t&&d(l)}}}function N(c){let l,o=c[0].text+"";return{c(){l=m("div")},l(t){l=b(t,"DIV",{});var i=x(l);i.forEach(d)},m(t,i){H(t,l,i),l.innerHTML=o},p(t,i){i&1&&o!==(o=t[0].text+"")&&(l.innerHTML=o)},d(t){t&&d(l)}}}function O(c){let l,o=c[0].text+"";return{c(){l=m("div")},l(t){l=b(t,"DIV",{});var i=x(l);i.forEach(d)},m(t,i){H(t,l,i),l.innerHTML=o},p(t,i){i&1&&o!==(o=t[0].text+"")&&(l.innerHTML=o)},d(t){t&&d(l)}}}function U(c){let l,o,t,i,p,v,g,D,E,k=c[0].topLeft,r=[];for(let n=0;n<k.length;n+=1)r[n]=J(C(c,k,n));let I=c[0].topRight,s=[];for(let n=0;n<I.length;n+=1)s[n]=K(y(c,I,n));let M=c[0].botRight,f=[];for(let n=0;n<M.length;n+=1)f[n]=N(S(c,M,n));let V=c[0].botLeft,h=[];for(let n=0;n<V.length;n+=1)h[n]=O(F(c,V,n));return{c(){l=m("div"),o=T(),t=m("div");for(let n=0;n<r.length;n+=1)r[n].c();i=T(),p=m("div");for(let n=0;n<s.length;n+=1)s[n].c();v=T(),g=m("div");for(let n=0;n<f.length;n+=1)f[n].c();D=T(),E=m("div");for(let n=0;n<h.length;n+=1)h[n].c();this.h()},l(n){l=b(n,"DIV",{class:!0});var a=x(l);o=R(a),t=b(a,"DIV",{class:!0});var e=x(t);for(let _=0;_<r.length;_+=1)r[_].l(e);e.forEach(d),i=R(a),p=b(a,"DIV",{class:!0});var u=x(p);for(let _=0;_<s.length;_+=1)s[_].l(u);u.forEach(d),v=R(a),g=b(a,"DIV",{class:!0});var q=x(g);for(let _=0;_<f.length;_+=1)f[_].l(q);q.forEach(d),D=R(a),E=b(a,"DIV",{class:!0});var j=x(E);for(let _=0;_<h.length;_+=1)h[_].l(j);j.forEach(d),a.forEach(d),this.h()},h(){w(t,"class","absolute top-10 left-10 p-2 flex flex-col"),w(p,"class","absolute top-10 right-10 p-2"),w(g,"class","absolute bottom-10 right-10 p-2"),w(E,"class","absolute bottom-10 left-10 p-2"),w(l,"class","h-screen flex flex-col justify-center items-center space-y-2 text-white")},m(n,a){H(n,l,a),L(l,o),L(l,t);for(let e=0;e<r.length;e+=1)r[e].m(t,null);L(l,i),L(l,p);for(let e=0;e<s.length;e+=1)s[e].m(p,null);L(l,v),L(l,g);for(let e=0;e<f.length;e+=1)f[e].m(g,null);L(l,D),L(l,E);for(let e=0;e<h.length;e+=1)h[e].m(E,null)},p(n,[a]){if(a&1){k=n[0].topLeft;let e;for(e=0;e<k.length;e+=1){const u=C(n,k,e);r[e]?r[e].p(u,a):(r[e]=J(u),r[e].c(),r[e].m(t,null))}for(;e<r.length;e+=1)r[e].d(1);r.length=k.length}if(a&1){I=n[0].topRight;let e;for(e=0;e<I.length;e+=1){const u=y(n,I,e);s[e]?s[e].p(u,a):(s[e]=K(u),s[e].c(),s[e].m(p,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=I.length}if(a&1){M=n[0].botRight;let e;for(e=0;e<M.length;e+=1){const u=S(n,M,e);f[e]?f[e].p(u,a):(f[e]=N(u),f[e].c(),f[e].m(g,null))}for(;e<f.length;e+=1)f[e].d(1);f.length=M.length}if(a&1){V=n[0].botLeft;let e;for(e=0;e<V.length;e+=1){const u=F(n,V,e);h[e]?h[e].p(u,a):(h[e]=O(u),h[e].c(),h[e].m(E,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=V.length}},i:A,o:A,d(n){n&&d(l),$(r,n),$(s,n),$(f,n),$(h,n)}}}function W(c,l,o){let t={topLeft:[],topRight:[],botLeft:[],botRight:[]};const i=(v,g,D=5e3)=>{t[g].push({text:v,time:Date.now()+D})},p=()=>{Object.keys(t).forEach(v=>{t[v].forEach((g,D)=>{Date.now()>g.time&&t[v].splice(D,1)})}),o(0,t),requestAnimationFrame(p)};return P(()=>{Q({notification:v=>{i(v.txt,v.position)}}),requestAnimationFrame(p)}),[t]}class te extends z{constructor(l){super(),B(this,l,W,U,G,{})}}export{te as default};
