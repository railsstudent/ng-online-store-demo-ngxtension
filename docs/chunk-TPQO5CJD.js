import{a as M,b as w}from"./chunk-OM4BP7QK.js";import{a as E}from"./chunk-SED33UY5.js";import{o as D}from"./chunk-V75PI7OT.js";import{Aa as i,Ka as u,Na as f,Oa as g,Pa as C,Qa as y,Ra as n,Sa as r,Ta as h,W as d,Xa as x,Y as m,Za as p,_a as _,db as v,gb as P,hb as S,xa as l,yb as T}from"./chunk-YBSSHO5Y.js";var F=(t,e)=>e.id;function b(t,e){if(t&1&&h(0,"app-product",2),t&2){let a=e.$implicit;u("product",a)}}function j(t,e){if(t&1&&(n(0,"div",1),C(1,b,1,1,"app-product",2,F),r()),t&2){let a=x();i(1),y(a.products())}}function O(t,e){t&1&&(n(0,"p"),p(1,"Category does not have products"),r())}var J=(()=>{let e=class e{constructor(){this.category=E(o=>o.category||""),this.products=l([]);let c=d(w);this.category()&&D(this.products,c.getCategory(this.category()))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["app-category-products"]],standalone:!0,features:[v],decls:5,vars:4,consts:[["class","products"],[1,"products"],[3,"product"]],template:function(o,s){o&1&&(n(0,"h2"),p(1),P(2,"titlecase"),r(),f(3,j,3,0,"div",0)(4,O,2,0)),o&2&&(i(1),_(S(2,2,s.category())),i(2),g(3,s.products().length>0?3:4))},dependencies:[M,T],styles:["div.products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:stretch}app-product[_ngcontent-%COMP%]{flex-basis:250px;height:300px;margin-bottom:1rem}"],changeDetection:0});let t=e;return t})();export{J as CategoryProductsComponent};
