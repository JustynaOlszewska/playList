(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[19],{141:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(1),i=n(0),s=n.n(i),u=n(9),a=n(2),c=n(6),o=n(55),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(c.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(o.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;u.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(22).a),h=n(88);function d(t,e,n){var i=s.a.useRef(!1),c=s.a.useState(0)[1],o=Object(a.k)(t,e,n),d=Object(h.b)(),b=s.a.useRef();b.current?b.current.setOptions(o):b.current=new l(d,o);var f=b.current.getCurrentResult();s.a.useEffect((function(){i.current=!0;var t=b.current.subscribe(u.a.batchCalls((function(){i.current&&c((function(t){return t+1}))})));return function(){i.current=!1,t()}}),[]);var p=s.a.useCallback((function(t,e){b.current.mutate(t,e).catch(a.i)}),[]);if(f.error&&b.current.options.useErrorBoundary)throw f.error;return Object(r.a)({},f,{mutate:p,mutateAsync:f.mutate})}},155:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(119),i=n.n(r),s=n(120),u=n(88),a=n(141),c=function(t,e,n){var r=Object(u.b)(),c=Object(a.a)(t),o=c.mutateAsync,l=c.isLoading;return[function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r.invalidateQueries(n);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l]}},341:function(t,e,n){"use strict";n.r(e);var r,i,s=n(117),u=(n(0),n(7)),a=n(30),c=n(113),o=n(121),l=n(19),h=n(18),d=n(134),b=h.default.li(r||(r=Object(l.a)(["\n  ","\n  word-wrap: break-word;\n  width: 90%;\n  margin: 10px 0;\n  flex-direction: column;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])),d.a),f=Object(h.default)(a.b)(i||(i=Object(l.a)(["\n  margin: 5px 0;\n  text-align: center;\n  @media (min-width: 767px) {\n    margin: 0;\n    text-align: left;\n  }\n"]))),p=n(155),O=n(3);e.default=function(t){var e=t.song,n=Object(u.h)(),r=e.title,i=e.id,l=Object(p.a)(o.d,i,"songs"),h=Object(s.a)(l,2),d=h[0],v=h[1];return Object(O.jsxs)(b,{children:[Object(O.jsx)(f,{style:{width:"150px"},to:"".concat(n.url,"/songDetails/").concat(i),children:r}),Object(O.jsxs)("div",{children:[Object(O.jsx)(c.a,{variant:"outlined",color:"primary",onClick:d,children:v?"wait...":"Delete"}),Object(O.jsx)(c.a,{variant:"outlined",color:"inherit",children:Object(O.jsx)(a.b,{style:{textDecoration:"none"},to:"".concat(n.url,"/changeSong/").concat(i),children:"Change Details"})})]})]})}}}]);
//# sourceMappingURL=19.fbbfdd0e.chunk.js.map