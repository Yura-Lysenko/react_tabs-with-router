(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),i=(c(14),c(15),c(2)),b=c(6),j=c.n(b),r=c(0),l=c(1),d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(i.h)().tabId,t=Object(r.useMemo)((function(){return d.find((function(t){return t.id===e}))}),[e]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:d.map((function(e){return Object(l.jsx)("li",{"data-cy":"tab",className:j()({"is-active":t&&t.id===e.id}),children:Object(l.jsx)(s.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"tab-content",children:t?t.content:"Please select a tab"})]})},x=function(){return Object(l.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(l.jsx)("div",{className:"navbar-menu",children:Object(l.jsxs)("div",{className:"navbar-start",children:[Object(l.jsx)(s.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(l.jsx)(s.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})})},h=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},O=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(h,{})}),Object(l.jsxs)(i.b,{path:"/tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(o,{})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(o,{})})]}),Object(l.jsx)(i.b,{path:"/home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(O,{})})]})})]})};n.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.de4e20b2.chunk.js.map