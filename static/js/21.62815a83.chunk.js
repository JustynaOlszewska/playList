(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[21],{154:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(1),u=n(0),s=n.n(u),i=n(10),a=n(2),c=n(7),o=n(61),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(c.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(o.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;i.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(26).a),h=n(100);function f(t,e,n){var u=s.a.useRef(!1),c=s.a.useState(0)[1],o=Object(a.k)(t,e,n),f=Object(h.b)(),d=s.a.useRef();d.current?d.current.setOptions(o):d.current=new l(f,o);var b=d.current.getCurrentResult();s.a.useEffect((function(){u.current=!0;var t=d.current.subscribe(i.a.batchCalls((function(){u.current&&c((function(t){return t+1}))})));return function(){u.current=!1,t()}}),[]);var p=s.a.useCallback((function(t,e){d.current.mutate(t,e).catch(a.i)}),[]);if(b.error&&d.current.options.useErrorBoundary)throw b.error;return Object(r.a)({},b,{mutate:p,mutateAsync:b.mutate})}},158:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r,u=n(20),s=n(19),i=Object(s.css)(r||(r=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])))},190:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(137),u=n.n(r),s=n(138),i=n(100),a=n(154),c=function(t,e,n){var r=Object(i.b)(),c=Object(a.a)(t),o=c.mutateAsync,l=c.isLoading;return[function(){var t=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r.invalidateQueries(n);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l]}},380:function(t,e,n){"use strict";n.r(e);var r,u=n(135),s=(n(0),n(36)),i=n(130),a=n(143),c=n(20),o=n(19),l=n(158),h=o.default.li(r||(r=Object(c.a)(["\n  ","\n  width: 70%;\n  margin: 10px auto;\n"])),l.a),f=n(190),d=n(3);e.default=function(t){var e=t.author,n=e.name,r=e.id,c=Object(f.a)(a.d,r,"authors"),o=Object(u.a)(c,2),l=o[0],b=o[1];return Object(d.jsxs)(h,{children:[Object(d.jsx)(s.b,{to:"/updateAuthors/".concat(r),children:n}),Object(d.jsx)(i.a,{variant:"outlined",color:"primary",onClick:l,children:b?"wait...":"Delete"})]})}}}]);
//# sourceMappingURL=21.62815a83.chunk.js.map