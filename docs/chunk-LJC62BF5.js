import{a as b}from"./chunk-OLBMHYGZ.js";import{a as L,b as N}from"./chunk-OM4BP7QK.js";import{l as H,m as D,n as J,o as K}from"./chunk-V75PI7OT.js";import{Aa as C,Ca as W,D as w,E as S,K as F,Ka as T,Na as h,Oa as x,Pa as v,Qa as y,Ra as a,Sa as c,Ta as d,W as l,Xa as P,Y as f,Za as m,_a as B,d as O,db as _,e as $,gb as R,hb as U,m as z,p as V,r as k,s as M,va as A,xa as q,ya as I,yb as G}from"./chunk-YBSSHO5Y.js";function ot(t,e){t&1&&(a(0,"p"),m(1,"Loading featured products..."),c())}var it=(t,e)=>e.id;function nt(t,e){if(t&1&&d(0,"app-product",1),t&2){let i=e.$implicit;T("product",i)}}function rt(t,e){if(t&1&&v(0,nt,1,1,"app-product",2,it),t&2){let i=P();y(i)}}function at(t,e){if(t&1&&(a(0,"h2"),m(1,"Featured Products"),c(),a(2,"div",0),h(3,ot,2,0,"p")(4,rt,2,0),c(),d(5,"hr")),t&2){let i=P();C(3),x(3,i.isLoading?3:4)}}var X=(()=>{let e=class e{constructor(){this.products=q([]),this.isLoading=!1;let n=l(b);this.isLoading=!0;let o=n.getFeaturedProducts().pipe(S(()=>this.isLoading=!1));K(this.products,o)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=f({type:e,selectors:[["app-feature-products"]],standalone:!0,features:[_],decls:1,vars:1,consts:[[1,"featured"],[1,"item",3,"product"],["class","item",3,"product"]],template:function(o,r){if(o&1&&h(0,at,6,1),o&2){let u;x(0,(u=r.products())?0:-1,u)}},dependencies:[L],styles:["h2[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]{margin-bottom:.5rem}div.featured[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:.75rem}div.featured[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{flex-basis:250px}"]});let t=e;return t})();function E(...t){let{normalizedSources:e,hasInitValue:i,operator:n,options:o}=ct(t),r=J(E,o?.injector);return i?D(M(e).pipe(n),{initialValue:o.initialValue,injector:r}):D(M(e).pipe(n),{injector:r,requireSync:!0})}function ct(t){if(!t||!t.length||typeof t[0]!="object")throw new TypeError("computedFrom needs sources");let e=typeof t[1]=="function";if(t.length==3&&!e)throw new TypeError("computedFrom needs pipeable operator as a second argument");e||t.splice(1,0,O);let[i,n,o]=t,r=o?.initialValue!==void 0;return{normalizedSources:Object.entries(i).reduce((s,[g,p])=>(A(p)?s[g]=H(p,{injector:o?.injector}).pipe(F(I(p))):V(p)?s[g]=p.pipe(w()):s[g]=z(p).pipe(w()),s),Array.isArray(i)?[]:{}),operator:n,hasInitValue:r,options:o}}function pt(t,e){t&1&&(a(0,"p"),m(1,"Loading products..."),c())}var st=(t,e)=>e.category,dt=(t,e)=>e.id;function mt(t,e){if(t&1&&d(0,"app-product",1),t&2){let i=e.$implicit;T("product",i)}}function ut(t,e){if(t&1&&(a(0,"p"),m(1),R(2,"titlecase"),c(),a(3,"div",0),v(4,mt,1,1,"app-product",1,dt),c()),t&2){let i=e.$implicit;C(1),B(U(2,1,i.category)),C(3),y(i.products)}}function lt(t,e){if(t&1&&v(0,ut,6,3,null,null,st),t&2){let i=P();y(i.categoryProducts())}}var Y=(()=>{let e=class e{constructor(){this.isLoading=!1;let n=l(b),o=l(N),r=l(W),u=[o.categories$,n.products$];this.isLoading=!0,this.categoryProducts=E(u,$(k(s=>{let g=s[0],p=s[1];return g.reduce((Z,j)=>{let tt=p.filter(({category:et})=>et===j);return Z.concat({category:j,products:tt})},[])}),S(()=>{this.isLoading=!1,r.markForCheck()}),F([])))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=f({type:e,selectors:[["app-product-list"]],standalone:!0,features:[_],decls:5,vars:1,consts:[[1,"products"],[3,"product"]],template:function(o,r){o&1&&(a(0,"h2"),m(1,"Catalogue"),c(),a(2,"div"),h(3,pt,2,0,"p")(4,lt,2,0),c()),o&2&&(C(3),x(3,r.isLoading?3:4))},dependencies:[L,G],styles:["div.products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:stretch}app-product[_ngcontent-%COMP%]{flex-basis:250px;height:300px;margin-bottom:1rem}"],changeDetection:0});let t=e;return t})();var At=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=f({type:e,selectors:[["app-product-catalogue"]],standalone:!0,features:[_],decls:2,vars:0,template:function(o,r){o&1&&d(0,"app-feature-products")(1,"app-product-list")},dependencies:[X,Y],encapsulation:2,changeDetection:0});let t=e;return t})();export{At as ProductCatalogueComponent};