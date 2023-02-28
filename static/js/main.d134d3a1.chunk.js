(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(10),s=n(5),r=(n(20),n(21),n(2)),a=(n(22),n(6)),j=n.n(a),i=n(0),l=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(s.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(i.jsx)(s.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},o=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},d=n(8),h=n(11),u=n(4),O=n(1),x="https://mate-academy.github.io/react_people-table/api/people.json";function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(x)})).then((function(e){return e.json()}));var e}n(24);var m=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},f=function(e){var t=e.person,n=t.sex,c=t.name,r=t.slug;return Object(i.jsx)(s.b,{to:"/people/".concat(r),className:j()({"has-text-danger":"f"===n}),children:c})},v=function(e){var t=e.person,n=e.personsFather,c=e.personsMother,s=e.selectedSlug,r=t.sex,a=t.born,l=t.died,o=t.slug,b=t.motherName||"-",d=t.fatherName||"-",h=s===o;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":h}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(f,{person:t})}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:c?Object(i.jsx)(f,{person:c}):b}),Object(i.jsx)("td",{children:n?Object(i.jsx)(f,{person:n}):d})]})},g=function(e){var t=e.persons,n=e.selectedSlug;return t.length?Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var c=e.motherName,s=e.fatherName,r=e.slug,a=t.find((function(e){return e.name===c}))||null,j=t.find((function(e){return e.name===s}))||null;return Object(i.jsx)(v,{person:e,personsMother:a,personsFather:j,selectedSlug:n},r)}))})]}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},N=function(){var e=Object(O.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(O.useState)(""),a=Object(u.a)(s,2),j=a[0],l=a[1],o=Object(O.useState)(!1),b=Object(u.a)(o,2),x=b[0],f=b[1],v=Object(r.h)().slug,N=void 0===v?"":v,w=function(){var e=Object(h.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,c(t),f(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){w()}),[]),j?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[!x&&Object(i.jsx)(m,{}),x&&Object(i.jsx)(g,{persons:n,selectedSlug:N})]})})]})},w=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{path:"/",element:Object(i.jsx)(o,{})}),Object(i.jsx)(r.b,{path:"/home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsxs)(r.b,{path:"/people",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(N,{})}),Object(i.jsx)(r.b,{path:"/people/:slug",element:Object(i.jsx)(N,{})})]}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(b,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(s.a,{children:Object(i.jsx)(w,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.d134d3a1.chunk.js.map