(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[3],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i,r=n(19),a=n(18),c=Object(a.css)(i||(i=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"])))},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var i,r,a,c,s=n(19),l=n(18),o=n(125),u=n(329),d=l.default.form(i||(i=Object(s.a)(["\n  ","\n  align-items: center;\n  justify-content: center;\n  height: 60vh;\n  ","\n  @media(min-height: 900px) {\n    justify-content: flex-start;\n  }\n"])),o.a,(function(e){return"add"===e.type&&Object(l.css)(r||(r=Object(s.a)(["\n      text-transform: uppercase;\n      color: red;\n    "])))})),j=Object(l.default)(u.a)(a||(a=Object(s.a)(["\n  margin: 10px 0;\n  ","\n"])),(function(e){return"song"===e.typeSong&&Object(l.css)(c||(c=Object(s.a)(["\n      width: 100%;\n    "])))}))},177:function(e,t,n){"use strict";n.r(t);n(0);var i=n(143),r=n(158),a=n(168),c=n(343),s=n(113),l=n(330),o=n(138),u=n(3),d=a.b().shape({name:a.c().required("Title field is required").max(30,"Title field should contains max 30 characters")});t.default=function(e){var t,n,a=e.defaultValue,j=e.onFormSubmit,b=e.isLoading,m=e.type,h=e.children,p=Object(i.b)({defaultValue:a,resolver:Object(r.a)(d)}),f=p.register,O=p.handleSubmit,x=p.errors,v=O((function(e){j(e)}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(o.a,{style:{position:"relative"},type:m,onSubmit:v,children:[Object(u.jsx)("h1",{children:h}),Object(u.jsx)(c.a,{htmlFor:"name",children:"Author"}),Object(u.jsx)(o.b,{defaultValue:null===a||void 0===a?void 0:a.name,type:"text",id:"name",name:"name",inputRef:f,errors:x.name}),Object(u.jsx)(s.a,{variant:"outlined",color:"primary",type:"Submit",children:b?"Wait...":h.split(" ").slice(0,1)}),x.exampleRequired&&Object(u.jsx)("span",{children:"This field is required"}),Object(u.jsx)("div",{style:{position:"absolute",top:"0",width:"100%"},children:(null===x||void 0===x||null===(t=x.name)||void 0===t?void 0:t.message)&&Object(u.jsx)(l.a,{severity:"error",children:Object(u.jsx)("p",{children:null===x||void 0===x||null===(n=x.name)||void 0===n?void 0:n.message})})})]})})}}}]);
//# sourceMappingURL=3.08f42faf.chunk.js.map