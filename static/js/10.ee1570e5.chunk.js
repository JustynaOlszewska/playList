(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[10],{104:function(t,e,n){"use strict";n.r(e);var r,s,u=n(82),i=n.n(u),a=n(83),c=(n(0),n(28)),o=n(59),l=n(94),h=n(79),d=n(84),p=n(19),b=n(17),f=Object(b.css)(r||(r=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),O=b.default.li(s||(s=Object(p.a)(["\n  ","\n  width: 70%;\n  margin: 10px auto;\n"])),f),v=n(3);e.default=function(t){var e=t.author,n=Object(o.b)(),r=Object(l.a)(d.d),s=r.mutateAsync,u=r.isLoading,p=e.name,b=e.id,f=function(){var t=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(b);case 2:n.invalidateQueries("authors");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)(O,{children:[Object(v.jsx)(c.b,{to:"/updateAuthors/".concat(b),children:p}),Object(v.jsx)(h.a,{variant:"outlined",color:"primary",onClick:f,children:u?"wait...":"Delete"})]})}},94:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(1),s=n(0),u=n.n(s),i=n(7),a=n(2),c=n(5),o=n(38),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(c.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(o.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;i.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(21).a),h=n(59);function d(t,e,n){var s=u.a.useRef(!1),c=u.a.useState(0)[1],o=Object(a.k)(t,e,n),d=Object(h.b)(),p=u.a.useRef();p.current?p.current.setOptions(o):p.current=new l(d,o);var b=p.current.getCurrentResult();u.a.useEffect((function(){s.current=!0;var t=p.current.subscribe(i.a.batchCalls((function(){s.current&&c((function(t){return t+1}))})));return function(){s.current=!1,t()}}),[]);var f=u.a.useCallback((function(t,e){p.current.mutate(t,e).catch(a.i)}),[]);if(b.error&&p.current.options.useErrorBoundary)throw b.error;return Object(r.a)({},b,{mutate:f,mutateAsync:b.mutate})}}}]);
//# sourceMappingURL=10.ee1570e5.chunk.js.map