import{s as X,c as Z,i as ee,u as te,g as ae,d as se}from"../chunks/scheduler.af88fea6.js";import{S as ne,i as oe,r as O,u as Y,v as Q,d as k,t as M,w as W,s as I,g as y,c as D,h as v,j as b,f,k as g,a as R,p as re,b as ie,z as le,m as S,n as E,y as p}from"../chunks/index.3c1d0bd2.js";import{e as j}from"../chunks/each.e59479a4.js";import{M as ce,H as de}from"../chunks/Heading.cbbf760d.js";const pe=""+new URL("../assets/poster1.e5f658b8.webp",import.meta.url).href,ue=""+new URL("../assets/poster2.325f39a9.webp",import.meta.url).href,me=""+new URL("../assets/poster3.7171f754.webp",import.meta.url).href,he=""+new URL("../assets/poster4.877af274.webp",import.meta.url).href,fe=""+new URL("../assets/poster5.01f15f1f.webp",import.meta.url).href,ge=""+new URL("../assets/poster6.421e370e.webp",import.meta.url).href,ye=""+new URL("../assets/poster7.4da57583.webp",import.meta.url).href,ve=""+new URL("../assets/poster8.9a09cd6f.webp",import.meta.url).href,_e=""+new URL("../assets/poster9.50040e2b.webp",import.meta.url).href,be=""+new URL("../assets/poster10.d6397837.webp",import.meta.url).href,we=""+new URL("../assets/poster11.d8c92b9b.webp",import.meta.url).href;function q(i,e,n){const s=i.slice();return s[3]=e[n].src,s[4]=e[n].description,s[5]=e[n].name,s[6]=e[n].date,s}function $e(i){let e;return{c(){e=S("Events")},l(n){e=E(n,"Events")},m(n,s){R(n,e,s)},d(n){n&&f(e)}}}function J(i){let e,n,s=i[5]+"",l,c,t,A,a,o,u,r,T=i[6]+"",H,N,_,C,w,F=i[4]+"",L,U,P,$;const K=i[1].default,h=Z(K,i,i[2],null);return{c(){e=y("div"),n=y("h1"),l=S(s),c=I(),t=y("img"),a=I(),o=y("p"),u=S("Date: "),r=y("span"),H=S(T),N=I(),_=y("p"),C=S("Description: "),w=y("span"),L=S(F),U=I(),h&&h.c(),P=I(),this.h()},l(m){e=v(m,"DIV",{class:!0});var d=b(e);n=v(d,"H1",{class:!0});var z=b(n);l=E(z,s),z.forEach(f),c=D(d),t=v(d,"IMG",{src:!0,alt:!0,class:!0}),a=D(d),o=v(d,"P",{class:!0});var x=b(o);u=E(x,"Date: "),r=v(x,"SPAN",{class:!0});var G=b(r);H=E(G,T),G.forEach(f),x.forEach(f),N=D(d),_=v(d,"P",{class:!0});var B=b(_);C=E(B,"Description: "),w=v(B,"SPAN",{class:!0});var V=b(w);L=E(V,F),V.forEach(f),B.forEach(f),U=D(d),h&&h.l(d),P=D(d),d.forEach(f),this.h()},h(){g(n,"class","h-10 w-full rounded-t-lg bg-accent p-2 text-skin-inverted"),ee(t.src,A=i[3])||g(t,"src",A),g(t,"alt",i[5]),g(t,"class","h-40"),g(r,"class","font-normal text-skin-muted"),g(o,"class","mt-5 self-start pl-3 font-semibold"),g(w,"class","font-normal text-skin-muted"),g(_,"class","p-3 text-justify font-semibold"),g(e,"class","flex flex-col items-center justify-start rounded-lg border-[1px] border-base bg-muted text-center")},m(m,d){R(m,e,d),p(e,n),p(n,l),p(e,c),p(e,t),p(e,a),p(e,o),p(o,u),p(o,r),p(r,H),p(e,N),p(e,_),p(_,C),p(_,w),p(w,L),p(e,U),h&&h.m(e,null),p(e,P),$=!0},p(m,d){h&&h.p&&(!$||d&4)&&te(h,K,m,m[2],$?se(K,m[2],d,null):ae(m[2]),null)},i(m){$||(k(h,m),$=!0)},o(m){M(h,m),$=!1},d(m){m&&f(e),h&&h.d(m)}}}function Ie(i){let e,n,s,l;e=new de({props:{alignment:"center",$$slots:{default:[$e]},$$scope:{ctx:i}}});let c=j(i[0]),t=[];for(let a=0;a<c.length;a+=1)t[a]=J(q(i,c,a));const A=a=>M(t[a],1,1,()=>{t[a]=null});return{c(){O(e.$$.fragment),n=I(),s=y("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){Y(e.$$.fragment,a),n=D(a),s=v(a,"DIV",{class:!0});var o=b(s);for(let u=0;u<t.length;u+=1)t[u].l(o);o.forEach(f),this.h()},h(){g(s,"class","mb-10 grid grid-cols-3 gap-5")},m(a,o){Q(e,a,o),R(a,n,o),R(a,s,o);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(s,null);l=!0},p(a,o){const u={};if(o&4&&(u.$$scope={dirty:o,ctx:a}),e.$set(u),o&5){c=j(a[0]);let r;for(r=0;r<c.length;r+=1){const T=q(a,c,r);t[r]?(t[r].p(T,o),k(t[r],1)):(t[r]=J(T),t[r].c(),k(t[r],1),t[r].m(s,null))}for(re(),r=c.length;r<t.length;r+=1)A(r);ie()}},i(a){if(!l){k(e.$$.fragment,a);for(let o=0;o<c.length;o+=1)k(t[o]);l=!0}},o(a){M(e.$$.fragment,a),t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)M(t[o]);l=!1},d(a){a&&(f(n),f(s)),W(e,a),le(t,a)}}}function De(i){let e,n;return e=new ce({props:{$$slots:{default:[Ie]},$$scope:{ctx:i}}}),{c(){O(e.$$.fragment)},l(s){Y(e.$$.fragment,s)},m(s,l){Q(e,s,l),n=!0},p(s,[l]){const c={};l&4&&(c.$$scope={dirty:l,ctx:s}),e.$set(c)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){M(e.$$.fragment,s),n=!1},d(s){W(e,s)}}}function Se(i,e,n){let{$$slots:s={},$$scope:l}=e;const c=[{name:"National Youth Day",date:"12-1-2023",description:"The National Youth Day or Rashtriya Yuva Divas is celebrated every year on January 12 to commemorate the birth anniversary of Swami Vivekananda, one of the greatest philosophers and spiritual leaders. Swami Vivekananda was born in Kolkata on January 12, 1863.",src:pe},{name:"National Pollution Control Day",date:"15-12-2022",description:"National Pollution Control Day is observed on December 2 every year. It commemorates those who lost their lives in the 1984 Bhopal Gas tragedy on December 2nd and 3rd. A poisonous gas known as MIC, Methyl Isocyanate, has caused many deaths. In terms of industrial pollution disasters, the Bhopal Gas Tragedy ranks among the worst.",src:ue},{name:"National Energy Conservation Day",date:"14-12-2022",description:"National Energy Conservation Day is celebrated on December 14 in India to raise awareness among people about global warming, climate change and promote ways of saving energy resources. It is indeed important to use energy wisely in order to enhance energy efficiency",src:me},{name:"National StartUp Day",date:"16-1-2023",description:"India is known as a startup powerhouse, and government programmes like these promote innovation in all industries. Every year, January 16 is observed as National Startup Day across the nation. This announcement was made by Prime Minister Narendra Modi last year to help startup tradition spread to the grassroots level",src:he},{name:"Field Trip at TANSAM:",date:"28-1-2023",description:"A field trip for the first year and second year UG students was organized as part of Institution's Innovation Council (IIC) at TANSAM (Tamilnadu smart and advanced manufacturing centre). A total of 21 students and one faculty member participated for this field trip. The field trip gave very good exposure to students about industry practice.",src:fe},{name:"Influx of AI generative Tools in the field of Entreprenuership",date:"6-1-2023",description:"Mr. Karthikeyan A K, Chief Executive Officer (CEO) at MaDeIT Innovation Foundation, an incubator at IIITDM Kancheepuram. During the talk, the road map of startup opportunities was discussed",src:ge},{name:"National Education Day",date:"11-11-2022",description:"A seminar was arranged on the occasion “National Education Day” to celebrate the birth anniversary of India’s first Education Minister, Maulana Abul Kalam Azad on 11/11/2022 at 10:00AM. Almost 250 students and three faculty members were present (at the hall no. H05) during the presentation on the topic by Dr Tapas Sil (Dean-Design Innovation and Incubation of IIITDM Kancheepuram).",src:ye},{name:"The Indian Story - Ronak Sutaria",date:"13-8-2022",description:"Mr. Ronak Sutaria is the Founder & CEO of Respirer living Sciences.Respirer Living Sciences is a climate science focused startup that builds low-cost and low-powered, sensor-based air quality and industrial emissions monitoring devices & ML based analytics and uses IoT and big data to provide solutions for industries, governments & communities.",src:ve},{name:"The Indian Story - Harish Hande",date:"23-7-2022",description:"Harish Hande, one among the most respected Social Entrepreneurs across the country. He Founded Selco in 1995, in the past few decades plus of operation, Selco has impacted more than a million lives in rural India.Busting the myth that the poor of this country can’t afford and maintain sustainable technologies.",src:_e},{name:"The Indian Story - Harish Hande",date:"23-7-2022",description:"Harish Hande, one among the most respected Social Entrepreneurs across the country. He Founded Selco in 1995, in the past few decades plus of operation, Selco has impacted more than a million lives in rural India.Busting the myth that the poor of this country can’t afford and maintain sustainable technologies.",src:be},{name:"IIC - Hackathon",date:"19-11-2022",description:"The ideathon was organized on the theme of promoting sustainable development goals based on product development. The event saw the participation of 34 teams across the years with a total of 101 participants.",src:we}];return i.$$set=t=>{"$$scope"in t&&n(2,l=t.$$scope)},[c,s,l]}class Ae extends ne{constructor(e){super(),oe(this,e,Se,De,X,{})}}export{Ae as component};