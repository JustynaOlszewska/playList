(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[25],{153:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(1),s=n(0),i=n.n(s),u=n(10),a=n(2),c=n(7),o=n(61),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(c.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(o.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;u.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(26).a),h=n(99);function d(t,e,n){var s=i.a.useRef(!1),c=i.a.useState(0)[1],o=Object(a.k)(t,e,n),d=Object(h.b)(),b=i.a.useRef();b.current?b.current.setOptions(o):b.current=new l(d,o);var f=b.current.getCurrentResult();i.a.useEffect((function(){s.current=!0;var t=b.current.subscribe(u.a.batchCalls((function(){s.current&&c((function(t){return t+1}))})));return function(){s.current=!1,t()}}),[]);var p=i.a.useCallback((function(t,e){b.current.mutate(t,e).catch(a.i)}),[]);if(f.error&&b.current.options.useErrorBoundary)throw f.error;return Object(r.a)({},f,{mutate:p,mutateAsync:f.mutate})}},189:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(136),s=n.n(r),i=n(137),u=n(99),a=n(153),c=n(9),o=function(t,e,n){var r=Object(c.f)(),o=Object(u.b)(),l=Object(a.a)(t),h=l.mutateAsync,d=l.isLoading;return[function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.push("/songs"),t.next=3,h(e);case 3:o.invalidateQueries(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d]}},385:function(t,e,n){"use strict";n.r(e);var r,s,i=n(134),u=n(0),a=n.n(u),c=n(9),o=n(36),l=n(129),h=n(140),d=n(18),b=n(16),f=n(157),p=b.default.li(r||(r=Object(d.a)(["\n  ","\n  word-wrap: break-word;\n  width: 90%;\n  margin: 10px 0;\n  flex-direction: column;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])),f.a),O=Object(b.default)(o.b)(s||(s=Object(d.a)(["\n  margin: 5px 0;\n  text-align: center;\n  @media (min-width: 767px) {\n    margin: 0;\n    text-align: left;\n  }\n"]))),m=n(189),v=n(3),j=function(t){var e=t.song,n=Object(c.h)(),r=e.title,s=e.id,u=Object(m.a)(h.d,s,"songs"),a=Object(i.a)(u,2),d=a[0],b=a[1];return Object(v.jsxs)(p,{children:[Object(v.jsx)(O,{style:{width:"150px"},to:"".concat(n.url,"/songDetails/").concat(s),children:r}),Object(v.jsxs)("div",{children:[Object(v.jsx)(l.a,{variant:"outlined",color:"primary",onClick:d,children:b?"wait...":"Delete"}),Object(v.jsx)(l.a,{variant:"outlined",color:"inherit",children:Object(v.jsx)(o.b,{style:{textDecoration:"none"},to:"".concat(n.url,"/changeSong/").concat(s),children:"Change Details"})})]})]})};e.default=a.a.memo(j)}}]);
//# sourceMappingURL=25.01a45c5e.chunk.js.map