(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[10,11],{121:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return l}));var r=n(117),i=n(122),u=n(118),s=function(){return Object(u.a)("".concat(u.b,"-songs"),"GET")},c=function(t){return Object(u.a)("".concat(u.b,"-songs/").concat(t),"DELETE")},o=function(t){return Object(u.a)("".concat(u.b,"-songs"),"POST",t)},a=function(t){var e=t.id,n=Object(i.a)(t,["id"]);return Object(u.a)("".concat(u.b,"-songs/").concat(e),"PUT",n)},l=function(t){var e=t.queryKey,n=Object(r.a)(e,2),i=(n[0],n[1].id);return Object(u.a)("".concat(u.b,"-songs/").concat(i),"GET")}},124:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},125:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r,i=n(19),u=n(18),s=Object(u.css)(r||(r=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"])))},126:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(124);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},138:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return b}));var r,i,u,s,c=n(19),o=n(18),a=n(125),l=n(329),d=o.default.form(r||(r=Object(c.a)(["\n  ","\n  align-items: center;\n  justify-content: center;\n  height: 60vh;\n  ","\n  @media(min-height: 900px) {\n    justify-content: flex-start;\n  }\n"])),a.a,(function(t){return"add"===t.type&&Object(o.css)(i||(i=Object(c.a)(["\n      text-transform: uppercase;\n      color: red;\n    "])))})),b=Object(o.default)(l.a)(u||(u=Object(c.a)(["\n  margin: 10px 0;\n  ","\n"])),(function(t){return"song"===t.typeSong&&Object(o.css)(s||(s=Object(c.a)(["\n      width: 100%;\n    "])))}))},141:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(1),i=n(0),u=n.n(i),s=n(9),c=n(2),o=n(6),a=n(55),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(o.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(a.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;s.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(22).a),d=n(88);function b(t,e,n){var i=u.a.useRef(!1),o=u.a.useState(0)[1],a=Object(c.k)(t,e,n),b=Object(d.b)(),f=u.a.useRef();f.current?f.current.setOptions(a):f.current=new l(b,a);var h=f.current.getCurrentResult();u.a.useEffect((function(){i.current=!0;var t=f.current.subscribe(s.a.batchCalls((function(){i.current&&o((function(t){return t+1}))})));return function(){i.current=!1,t()}}),[]);var p=u.a.useCallback((function(t,e){f.current.mutate(t,e).catch(c.i)}),[]);if(h.error&&f.current.options.useErrorBoundary)throw h.error;return Object(r.a)({},h,{mutate:p,mutateAsync:h.mutate})}},169:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(143),u=n(158),s=n(168),c=n(121),o=n(343),a=n(113),l=n(330),d=n(138),b=n(119),f=n.n(b),h=n(126),p=n(120),O=n(88),j=n(141),m=n(7),v=n(3),y=s.b().shape({title:s.c().required("Title field is required").max(30,"Title field should contains max 30 characters"),author:s.c().required("Author fiels is required"),duration:s.a().typeError("Duration field must be a number").required("Duration field is required")});e.default=function(t){var e=t.isLoading,n=t.type,s=t.allAuthors,b=t.defaultValue,g=t.children,x=Object(i.b)({defaultValues:b,resolver:Object(u.a)(y)}),R=x.register,S=x.handleSubmit,E=x.errors,w=x.reset,M=x.setValue,P=E.duration,q=E.title,T=E.author;Object(r.useEffect)((function(){var t;M("title",null===b||void 0===b?void 0:b.title),M("duration",null===b||void 0===b?void 0:b.duration),M("author",null===b||void 0===b||null===(t=b.author)||void 0===t?void 0:t.name)}),[b]);var D=function(t,e,n){var r=Object(m.g)().id,i=Object(O.b)(),u=Object(j.a)(t).mutateAsync,s=function(){var t=Object(p.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(r?Object(h.a)(Object(h.a)({},e),{},{id:r}):e);case 2:i.invalidateQueries("songs");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{onSubmit:function(t){var r=t.author,i=t.title,u=t.duration,c=n.filter((function(t){return t.name===r}));s({title:i,author:c[0],duration:u}),e()}}}("add"===n?c.a:c.e,w,s).onSubmit;return Object(v.jsx)(r.Fragment,{children:Object(v.jsxs)(d.a,{style:{position:"relative"},type:n,onSubmit:S(D),children:[Object(v.jsx)("h1",{children:g}),Object(v.jsx)(o.a,{htmlFor:"tite",children:"Title of song"}),Object(v.jsx)(d.b,{required:!0,type:"text",id:"title",name:"title",inputRef:R,errors:E.title}),Object(v.jsx)(o.a,{style:{margin:"10px 0"},htmlFor:"author",children:"Author"}),Object(v.jsx)("select",{style:{width:"80%",margin:"0 0 20px 0"},id:"author",name:"author",errors:null===E||void 0===E?void 0:E.author,ref:R,children:s&&s.map((function(t){return Object(v.jsx)("option",{value:t.name,children:t.name},t.id)}))}),Object(v.jsx)(o.a,{htmlFor:"duration",children:"Duration"}),Object(v.jsx)(d.b,{required:!0,type:"number",inputProps:{min:"1",max:"10",step:"1"},id:"duration",name:"duration",inputRef:R,errors:E.duration}),Object(v.jsx)(a.a,{style:{margin:"10px 0"},variant:"outlined",color:"primary",type:"submit",children:e?"Wait...":g.split(" ").slice(0,1)}),E.exampleRequired&&Object(v.jsx)("span",{children:"This field is required"}),Object(v.jsx)("div",{style:{position:"absolute",top:"-30%",width:"100%"},children:(q||P||T)&&Object(v.jsx)(l.a,{children:(null===q||void 0===q?void 0:q.message)||(null===P||void 0===P?void 0:P.message)||(null===T||void 0===T?void 0:T.message)})})]})})}}}]);
//# sourceMappingURL=10.05d70de5.chunk.js.map