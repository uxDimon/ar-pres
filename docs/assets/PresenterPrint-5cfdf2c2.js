import{d as _,u as d,a as p,c as m,b as u,e as n,f as t,t as s,g as a,F as h,r as f,n as g,h as v,o as r,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-c99255d6.js";import{N as P}from"./NoteDisplay-bbf82adc.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>v.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:g(a(N))},[t("div",V,[t("div",D,[t("h1",L,s(a(m).title),1),t("div",S,s(new Date().toLocaleString()),1)]),(r(!0),n(h,null,f(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),j])]),b(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/Users/uxdimon/Documents/work/test/ar-pres/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
