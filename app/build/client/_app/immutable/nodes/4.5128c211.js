import{s as F}from"../chunks/scheduler.af88fea6.js";import{S as G,i as J,r as M,u as S,v as U,d as V,t as q,w as z,s as y,g as p,c as w,h as $,j as b,f as u,k as d,a as x,z as C,m as E,n as j,y as g,o as B}from"../chunks/index.3c1d0bd2.js";import{e as A}from"../chunks/each.e59479a4.js";import{M as K,H as N}from"../chunks/Heading.cbbf760d.js";function L(c,e,r){const t=c.slice();return t[1]=e[r][0],t[2]=e[r][1],t}function O(c,e,r){const t=c.slice();return t[5]=e[r].href,t[1]=e[r].title,t}function Q(c){let e;return{c(){e=E("Our Policies")},l(r){e=j(r,"Our Policies")},m(r,t){x(r,e,t)},d(r){r&&u(e)}}}function H(c){let e,r=A(c[2]),t=[];for(let a=0;a<r.length;a+=1)t[a]=P(O(c,r,a));return{c(){e=p("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=$(a,"UL",{class:!0});var n=b(e);for(let l=0;l<t.length;l+=1)t[l].l(n);n.forEach(u),this.h()},h(){d(e,"class","my-5 flex flex-col gap-2")},m(a,n){x(a,e,n);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(a,n){if(n&1){r=A(a[2]);let l;for(l=0;l<r.length;l+=1){const s=O(a,r,l);t[l]?t[l].p(s,n):(t[l]=P(s),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},d(a){a&&u(e),C(t,a)}}}function P(c){let e,r,t=c[1]+"",a,n,l;return{c(){e=p("li"),r=p("a"),a=E(t),l=y(),this.h()},l(s){e=$(s,"LI",{class:!0});var o=b(e);r=$(o,"A",{href:!0,class:!0});var i=b(r);a=j(i,t),i.forEach(u),l=w(o),o.forEach(u),this.h()},h(){d(r,"href",n=c[5]),d(r,"class","m-0 block h-full w-full"),d(e,"class","relative rounded-lg border border-base bg-dominant p-4 shadow-sm hover:bg-muted-secondary hover:shadow-md")},m(s,o){x(s,e,o),g(e,r),g(r,a),g(e,l)},p(s,o){o&1&&t!==(t=s[1]+"")&&B(a,t),o&1&&n!==(n=s[5])&&d(r,"href",n)},d(s){s&&u(e)}}}function D(c){let e,r,t,a,n,l=c[1]+"",s,o,i,f=Array.isArray(c[2]),v,h=f&&H(c);return{c(){e=p("li"),r=p("div"),t=y(),a=p("div"),n=p("h1"),s=E(l),i=y(),h&&h.c(),v=y(),this.h()},l(_){e=$(_,"LI",{class:!0});var m=b(e);r=$(m,"DIV",{class:!0}),b(r).forEach(u),t=w(m),a=$(m,"DIV",{class:!0});var k=b(a);n=$(k,"H1",{class:!0});var I=b(n);s=j(I,l),I.forEach(u),i=w(k),h&&h.l(k),k.forEach(u),v=w(m),m.forEach(u),this.h()},h(){d(r,"class","h-2 w-full bg-accent"),d(n,"class",o="font-heading text-3xl font-medium "+(Array.isArray(c[2])?"text-complementary":"text-accent")+" border-b border-base -sm:text-2xl"),d(a,"class","p-10 -sm:p-3"),d(e,"class","h-full w-full overflow-hidden rounded border border-base bg-muted")},m(_,m){x(_,e,m),g(e,r),g(e,t),g(e,a),g(a,n),g(n,s),g(a,i),h&&h.m(a,null),g(e,v)},p(_,m){m&1&&l!==(l=_[1]+"")&&B(s,l),m&1&&o!==(o="font-heading text-3xl font-medium "+(Array.isArray(_[2])?"text-complementary":"text-accent")+" border-b border-base -sm:text-2xl")&&d(n,"class",o),m&1&&(f=Array.isArray(_[2])),f?h?h.p(_,m):(h=H(_),h.c(),h.m(a,null)):h&&(h.d(1),h=null)},d(_){_&&u(e),h&&h.d()}}}function R(c){let e,r,t,a;e=new N({props:{alignment:"center",$$slots:{default:[Q]},$$scope:{ctx:c}}});let n=A(Object.entries(c[0].forms)),l=[];for(let s=0;s<n.length;s+=1)l[s]=D(L(c,n,s));return{c(){M(e.$$.fragment),r=y(),t=p("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){S(e.$$.fragment,s),r=w(s),t=$(s,"UL",{class:!0});var o=b(t);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(u),this.h()},h(){d(t,"class","my-5 flex flex-col items-center justify-center gap-5")},m(s,o){U(e,s,o),x(s,r,o),x(s,t,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(t,null);a=!0},p(s,o){const i={};if(o&256&&(i.$$scope={dirty:o,ctx:s}),e.$set(i),o&1){n=A(Object.entries(s[0].forms));let f;for(f=0;f<n.length;f+=1){const v=L(s,n,f);l[f]?l[f].p(v,o):(l[f]=D(v),l[f].c(),l[f].m(t,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=n.length}},i(s){a||(V(e.$$.fragment,s),a=!0)},o(s){q(e.$$.fragment,s),a=!1},d(s){s&&(u(r),u(t)),z(e,s),C(l,s)}}}function T(c){let e,r;return e=new K({props:{$$slots:{default:[R]},$$scope:{ctx:c}}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){U(e,t,a),r=!0},p(t,[a]){const n={};a&257&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(V(e.$$.fragment,t),r=!0)},o(t){q(e.$$.fragment,t),r=!1},d(t){z(e,t)}}}function W(c,e,r){let{data:t}=e;return c.$$set=a=>{"data"in a&&r(0,t=a.data)},[t]}class te extends G{constructor(e){super(),J(this,e,W,T,F,{data:0})}}export{te as component};