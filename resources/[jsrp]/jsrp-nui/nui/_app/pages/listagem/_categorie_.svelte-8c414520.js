import{U as oe,S as ee,i as se,s as ae,e as o,k as m,t as $,c as n,a as i,d as a,m as g,h as E,b as u,R as ne,g as ct,H as t,n as Tt,V as Zt,I as ht,j as re,W as ie,X as Jt,Q as le,x as rt,y as lt,z as ot,r as G,p as J,q as ce,C as nt,Y as de,o as ue,Z as pe}from"../../chunks/index-47960c00.js";import{a as fe}from"../../chunks/index-94ca1d29.js";import{g as ve}from"../../chunks/navigation-0e6511d1.js";import"../../chunks/singletons-d1fb5791.js";const _e=()=>{const c=oe("__svelte__");return{page:{subscribe:c.page.subscribe},navigating:{subscribe:c.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:c.navigating.subscribe}},session:c.session,updated:c.updated}},he={subscribe(c){return _e().page.subscribe(c)}};function me(c){let e,l,v,_,N,x,b,w,h,M,r,d,f,A,P,R,O,T,k;return{c(){e=o("div"),l=o("div"),v=o("figure"),_=o("img"),x=m(),b=o("div"),w=o("h2"),h=$("Hamburguer!"),M=m(),r=o("h3"),d=$("Sanduiches"),f=m(),A=o("p"),P=o("span"),R=o("div"),O=$(`\r
          R$49,90`),T=o("span"),k=$("R$29,99"),this.h()},l(C){e=n(C,"DIV",{class:!0});var D=i(e);l=n(D,"DIV",{class:!0});var H=i(l);v=n(H,"FIGURE",{});var F=i(v);_=n(F,"IMG",{class:!0,src:!0,alt:!0}),F.forEach(a),x=g(H),b=n(H,"DIV",{class:!0});var V=i(b);w=n(V,"H2",{class:!0});var j=i(w);h=E(j,"Hamburguer!"),j.forEach(a),M=g(V),r=n(V,"H3",{class:!0});var q=i(r);d=E(q,"Sanduiches"),q.forEach(a),f=g(V),A=n(V,"P",{class:!0});var p=i(A);P=n(p,"SPAN",{class:!0});var s=i(P);R=n(s,"DIV",{class:!0}),i(R).forEach(a),O=E(s,`\r
          R$49,90`),s.forEach(a),T=n(p,"SPAN",{class:!0});var I=i(T);k=E(I,"R$29,99"),I.forEach(a),p.forEach(a),V.forEach(a),H.forEach(a),D.forEach(a),this.h()},h(){u(_,"class","w-full"),ne(_.src,N="https://api.lorem.space/image/burger?w=400&h=225&hash=ASD"+c[0](1,9999))||u(_,"src",N),u(_,"alt","Hamburguer"),u(w,"class","card-title subtitle"),u(r,"class","font text-xs"),u(R,"class","border-b-2 absolute left-0 right-0 bottom-2 border-base-content"),u(P,"class","text-xs mr-1 relative"),u(T,"class","font-bold text-green-600"),u(A,"class","font"),u(b,"class","card-body p-4"),u(l,"class","card bg-base-100 shadow hover:shadow-lg duration-100 cursor-pointer"),u(e,"class","w-full md:w-1/2 p-2")},m(C,D){ct(C,e,D),t(e,l),t(l,v),t(v,_),t(l,x),t(l,b),t(b,w),t(w,h),t(b,M),t(b,r),t(r,d),t(b,f),t(b,A),t(A,P),t(P,R),t(P,O),t(A,T),t(T,k)},p:Tt,i:Tt,o:Tt,d(C){C&&a(e)}}}function ge(c){return[(l,v)=>(l=Math.ceil(l),v=Math.floor(v),Math.floor(Math.random()*(v-l))+l)]}class it extends ee{constructor(e){super(),se(this,e,ge,me,ae,{})}}function be(c){const e=c-1;return e*e*e+1}function Kt(c,{delay:e=0,duration:l=400,easing:v=be}={}){const _=getComputedStyle(c),N=+_.opacity,x=parseFloat(_.height),b=parseFloat(_.paddingTop),w=parseFloat(_.paddingBottom),h=parseFloat(_.marginTop),M=parseFloat(_.marginBottom),r=parseFloat(_.borderTopWidth),d=parseFloat(_.borderBottomWidth);return{delay:e,duration:l,easing:v,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*N};height: ${f*x}px;padding-top: ${f*b}px;padding-bottom: ${f*w}px;margin-top: ${f*h}px;margin-bottom: ${f*M}px;border-top-width: ${f*r}px;border-bottom-width: ${f*d}px;`}}function te(c){let e,l,v,_,N,x,b,w,h,M,r,d,f,A,P,R,O,T,k,C,D,H,F,V,j,q,p,s,I,z,K,tt,y,mt,gt,dt,bt,$t,ut,Et,wt,L,pt,It,Nt,Q,X,Pt,Y,St,W,xt,Dt,et,st,Vt,Z,ft,yt,Ot;return{c(){e=o("div"),l=o("div"),v=o("div"),_=$("Pre\xE7o "),N=o("span"),x=$("$0 - $"),b=$(c[2]),w=m(),h=o("input"),M=m(),r=o("div"),d=o("span"),f=$("|"),A=m(),P=o("span"),R=$("|"),O=m(),T=o("span"),k=$("|"),C=m(),D=o("span"),H=$("|"),F=m(),V=o("span"),j=$("|"),q=m(),p=o("span"),s=$("|"),I=m(),z=o("span"),K=$("|"),tt=m(),y=o("span"),mt=$("|"),gt=m(),dt=o("span"),bt=$("|"),$t=m(),ut=o("span"),Et=$("|"),wt=m(),L=o("div"),pt=o("div"),It=$("Ordem"),Nt=m(),Q=o("select"),X=o("option"),Pt=$("Menor pre\xE7o"),Y=o("option"),St=$("Maior pre\xE7o"),W=o("option"),xt=$("Novidades"),Dt=m(),et=o("div"),st=o("button"),Vt=$("filtrar"),this.h()},l(B){e=n(B,"DIV",{class:!0});var U=i(e);l=n(U,"DIV",{class:!0});var at=i(l);v=n(at,"DIV",{class:!0});var At=i(v);_=E(At,"Pre\xE7o "),N=n(At,"SPAN",{class:!0});var Mt=i(N);x=E(Mt,"$0 - $"),b=E(Mt,c[2]),Mt.forEach(a),At.forEach(a),w=g(at),h=n(at,"INPUT",{type:!0,min:!0,max:!0,class:!0,step:!0}),M=g(at),r=n(at,"DIV",{class:!0});var S=i(r);d=n(S,"SPAN",{});var kt=i(d);f=E(kt,"|"),kt.forEach(a),A=g(S),P=n(S,"SPAN",{});var Ft=i(P);R=E(Ft,"|"),Ft.forEach(a),O=g(S),T=n(S,"SPAN",{});var Rt=i(T);k=E(Rt,"|"),Rt.forEach(a),C=g(S),D=n(S,"SPAN",{});var Ct=i(D);H=E(Ct,"|"),Ct.forEach(a),F=g(S),V=n(S,"SPAN",{});var Ht=i(V);j=E(Ht,"|"),Ht.forEach(a),q=g(S),p=n(S,"SPAN",{});var Bt=i(p);s=E(Bt,"|"),Bt.forEach(a),I=g(S),z=n(S,"SPAN",{});var Ut=i(z);K=E(Ut,"|"),Ut.forEach(a),tt=g(S),y=n(S,"SPAN",{});var jt=i(y);mt=E(jt,"|"),jt.forEach(a),gt=g(S),dt=n(S,"SPAN",{});var qt=i(dt);bt=E(qt,"|"),qt.forEach(a),$t=g(S),ut=n(S,"SPAN",{});var Wt=i(ut);Et=E(Wt,"|"),Wt.forEach(a),S.forEach(a),at.forEach(a),wt=g(U),L=n(U,"DIV",{class:!0});var vt=i(L);pt=n(vt,"DIV",{});var Gt=i(pt);It=E(Gt,"Ordem"),Gt.forEach(a),Nt=g(vt),Q=n(vt,"SELECT",{class:!0});var _t=i(Q);X=n(_t,"OPTION",{});var zt=i(X);Pt=E(zt,"Menor pre\xE7o"),zt.forEach(a),Y=n(_t,"OPTION",{});var Lt=i(Y);St=E(Lt,"Maior pre\xE7o"),Lt.forEach(a),W=n(_t,"OPTION",{});var Qt=i(W);xt=E(Qt,"Novidades"),Qt.forEach(a),_t.forEach(a),vt.forEach(a),Dt=g(U),et=n(U,"DIV",{class:!0});var Xt=i(et);st=n(Xt,"BUTTON",{class:!0});var Yt=i(st);Vt=E(Yt,"filtrar"),Yt.forEach(a),Xt.forEach(a),U.forEach(a),this.h()},h(){u(N,"class","float-right"),u(v,"class","mb-2"),u(h,"type","range"),u(h,"min","0"),u(h,"max","100"),u(h,"class","range"),u(h,"step","10"),u(r,"class","w-full flex justify-between text-xs px-2"),u(l,"class","w-full md:w-1/2 p-2"),X.__value="Menor pre\xE7o",X.value=X.__value,Y.__value="Maior pre\xE7o",Y.value=Y.__value,W.selected=!0,W.__value="Novidades",W.value=W.__value,u(Q,"class","select select-bordered select-sm w-full"),u(L,"class","w-full md:w-1/2 pt-4 md:pt-2 p-2"),u(st,"class","btn btn-sm"),u(et,"class","w-full flex justify-end pt-4"),u(e,"class","bg-base-300 flex p-2 flex-wrap")},m(B,U){ct(B,e,U),t(e,l),t(l,v),t(v,_),t(v,N),t(N,x),t(N,b),t(l,w),t(l,h),Zt(h,c[2]),t(l,M),t(l,r),t(r,d),t(d,f),t(r,A),t(r,P),t(P,R),t(r,O),t(r,T),t(T,k),t(r,C),t(r,D),t(D,H),t(r,F),t(r,V),t(V,j),t(r,q),t(r,p),t(p,s),t(r,I),t(r,z),t(z,K),t(r,tt),t(r,y),t(y,mt),t(r,gt),t(r,dt),t(dt,bt),t(r,$t),t(r,ut),t(ut,Et),t(e,wt),t(e,L),t(L,pt),t(pt,It),t(L,Nt),t(L,Q),t(Q,X),t(X,Pt),t(Q,Y),t(Y,St),t(Q,W),t(W,xt),t(e,Dt),t(e,et),t(et,st),t(st,Vt),ft=!0,yt||(Ot=[ht(h,"change",c[5]),ht(h,"input",c[5])],yt=!0)},p(B,U){(!ft||U&4)&&re(b,B[2]),U&4&&Zt(h,B[2])},i(B){ft||(ie(()=>{Z||(Z=Jt(e,Kt,{},!0)),Z.run(1)}),ft=!0)},o(B){Z||(Z=Jt(e,Kt,{},!1)),Z.run(0),ft=!1},d(B){B&&a(e),B&&Z&&Z.end(),yt=!1,le(Ot)}}}function $e(c){let e,l,v,_,N,x,b,w,h,M,r,d,f,A,P,R,O,T,k,C,D,H,F,V,j,q,p=c[1]&&te(c);return f=new it({}),P=new it({}),O=new it({}),k=new it({}),D=new it({}),F=new it({}),{c(){e=o("div"),l=o("div"),v=$("voltar"),_=m(),N=o("div"),x=$(c[0]),b=m(),w=o("div"),h=$("filtros"),M=m(),p&&p.c(),r=m(),d=o("div"),rt(f.$$.fragment),A=m(),rt(P.$$.fragment),R=m(),rt(O.$$.fragment),T=m(),rt(k.$$.fragment),C=m(),rt(D.$$.fragment),H=m(),rt(F.$$.fragment),this.h()},l(s){e=n(s,"DIV",{class:!0});var I=i(e);l=n(I,"DIV",{class:!0});var z=i(l);v=E(z,"voltar"),z.forEach(a),_=g(I),N=n(I,"DIV",{class:!0});var K=i(N);x=E(K,c[0]),K.forEach(a),b=g(I),w=n(I,"DIV",{class:!0});var tt=i(w);h=E(tt,"filtros"),tt.forEach(a),I.forEach(a),M=g(s),p&&p.l(s),r=g(s),d=n(s,"DIV",{class:!0});var y=i(d);lt(f.$$.fragment,y),A=g(y),lt(P.$$.fragment,y),R=g(y),lt(O.$$.fragment,y),T=g(y),lt(k.$$.fragment,y),C=g(y),lt(D.$$.fragment,y),H=g(y),lt(F.$$.fragment,y),y.forEach(a),this.h()},h(){u(l,"class","btn btn-sm btn-ghost"),u(N,"class","flex-1 text-center cat-title font-light uppercase svelte-1gu8gax"),u(w,"class","btn btn-sm btn-ghost"),u(e,"class","bg-base-300 flex py-3"),u(d,"class","flex flex-wrap p-2")},m(s,I){ct(s,e,I),t(e,l),t(l,v),t(e,_),t(e,N),t(N,x),t(e,b),t(e,w),t(w,h),ct(s,M,I),p&&p.m(s,I),ct(s,r,I),ct(s,d,I),ot(f,d,null),t(d,A),ot(P,d,null),t(d,R),ot(O,d,null),t(d,T),ot(k,d,null),t(d,C),ot(D,d,null),t(d,H),ot(F,d,null),V=!0,j||(q=[ht(l,"click",c[3]),ht(w,"click",c[4])],j=!0)},p(s,[I]){(!V||I&1)&&re(x,s[0]),s[1]?p?(p.p(s,I),I&2&&G(p,1)):(p=te(s),p.c(),G(p,1),p.m(r.parentNode,r)):p&&(ue(),J(p,1,1,()=>{p=null}),ce())},i(s){V||(G(p),G(f.$$.fragment,s),G(P.$$.fragment,s),G(O.$$.fragment,s),G(k.$$.fragment,s),G(D.$$.fragment,s),G(F.$$.fragment,s),V=!0)},o(s){J(p),J(f.$$.fragment,s),J(P.$$.fragment,s),J(O.$$.fragment,s),J(k.$$.fragment,s),J(D.$$.fragment,s),J(F.$$.fragment,s),V=!1},d(s){s&&a(e),s&&a(M),p&&p.d(s),s&&a(r),s&&a(d),nt(f),nt(P),nt(O),nt(k),nt(D),nt(F),j=!1,le(q)}}}function Ee(c,e,l){let v;de(c,he,f=>l(8,v=f));const{categorie:_}=v.params;let N=[],x,b="",w=!1,h=50;fe.get("/categories.json").then(f=>{N=f.data,x=N.filter(A=>A.slug==_),x.length?l(0,b=x[0].title):l(0,b="Todas categorias")});const M=()=>{ve("/")},r=()=>{l(1,w=!w)};function d(){h=pe(this.value),l(2,h)}return[b,w,h,M,r,d]}class Se extends ee{constructor(e){super(),se(this,e,Ee,$e,ae,{})}}export{Se as default};
