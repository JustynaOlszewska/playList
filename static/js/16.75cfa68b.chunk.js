(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[16],{139:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r,i=n(20),s=n(19),u=Object(s.css)(r||(r=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"])))},147:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f}));var r,i,s,u,a=n(20),c=n(19),o=n(139),l=n(372),d=c.default.form(r||(r=Object(a.a)(["\n  ","\n  align-items: center;\n  justify-content: center;\n  height: 60vh;\n  ","\n  @media(min-height: 900px) {\n    justify-content: flex-start;\n  }\n"])),o.a,(function(t){return"add"===t.type&&Object(c.css)(i||(i=Object(a.a)(["\n      text-transform: uppercase;\n      color: red;\n    "])))})),f=Object(c.default)(l.a)(s||(s=Object(a.a)(["\n  margin: 10px 0;\n  ","\n"])),(function(t){return"song"===t.typeSong&&Object(c.css)(u||(u=Object(a.a)(["\n      width: 100%;\n    "])))}))},148:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n(166),i=r.b().shape({name:r.c().required("Title field is required").max(30,"Title field should contains max 30 characters")}),s=r.b().shape({title:r.c().required("Title field is required").max(30,"Title field should contains max 30 characters"),author:r.c().required("Author fields is required"),duration:r.a().typeError("Duration field must be a number").required("Duration field is required")}),u=r.b().shape({name:r.c().required("Playlist name field is required").max(30,"Playlist name field should contains max 30 characters")})},154:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(1),i=n(0),s=n.n(i),u=n(10),a=n(2),c=n(7),o=n(61),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(c.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(o.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;u.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(26).a),d=n(100);function f(t,e,n){var i=s.a.useRef(!1),c=s.a.useState(0)[1],o=Object(a.k)(t,e,n),f=Object(d.b)(),h=s.a.useRef();h.current?h.current.setOptions(o):h.current=new l(f,o);var b=h.current.getCurrentResult();s.a.useEffect((function(){i.current=!0;var t=h.current.subscribe(u.a.batchCalls((function(){i.current&&c((function(t){return t+1}))})));return function(){i.current=!1,t()}}),[]);var p=s.a.useCallback((function(t,e){h.current.mutate(t,e).catch(a.i)}),[]);if(b.error&&h.current.options.useErrorBoundary)throw b.error;return Object(r.a)({},b,{mutate:p,mutateAsync:b.mutate})}},185:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return o}));var r=n(135),i=n(140),s=n(136),u=function(){return Object(s.a)("".concat(s.b,"-playlists"),"GET")},a=function(t){return Object(s.a)("".concat(s.b,"-playlists"),"POST",t)},c=function(t){var e=t.id,n=Object(i.a)(t,["id"]);return console.log("ww",e,n),Object(s.a)("".concat(s.b,"-playlists/").concat(e),"PUT",n)},o=function(t){var e=t.queryKey,n=Object(r.a)(e,2),i=(n[0],n[1].id);return Object(s.a)("".concat(s.b,"-playlists/").concat(i),"GET")}},348:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),s=n(155),u=n(159),a=n(130),c=n(147),o=n(185),l=n(137),d=n.n(l),f=n(138),h=n(100),b=n(154),p=n(68),m=n(373),O=n(148),j=n(3),y=Object(r.lazy)((function(){return n.e(29).then(n.bind(null,233))})),v=function(t){var e=t.children,n=t.playList,r=t.changeStatusItems,i=t.type,l=Object(s.b)({defaultValues:{name:"playlist name"},resolver:Object(u.a)(O.b)}),v=l.register,x=l.handleSubmit,g=l.errors,R=l.reset,S=(g||{}).name,w=(S=void 0===S?{}:S).message,M=void 0===w?null:w,q=function(t,e,n,r){var i=Object(p.b)().enqueueSnackbar,s=Object(h.b)(),u=Object(b.a)(t),a=u.mutateAsync,c=u.isLoading,o=function(){var t=Object(f.a)(d.a.mark((function t(e,n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(e||{}).name,t.next=3,a({name:r,songs:n});case 3:s.invalidateQueries("playlists");case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return{onSubmit:function(t){if(0!==n.length){var s=n.map((function(t){return t.id}));o(t,s),r(),e()}else i("Your playlist is empty")},isLoading:c}}(o.a,R,n,r),E=q.onSubmit,L=q.isLoading;return Object(j.jsxs)("div",{style:{display:"flex",position:"relative"},children:[Object(j.jsxs)(c.a,{style:{height:"500px",width:"200px",justifyContent:"start"},onSubmit:x(E),children:[Object(j.jsx)(c.b,{type:"text",id:"name",name:"name",inputRef:v,errors:M,required:!0}),Object(j.jsx)("div",{style:{width:"200px",height:"100%",display:"flex",alignItems:"center"},children:Object(j.jsx)(y,{playList:n,text:"Drop your favorite songs here",children:e})}),Object(j.jsx)(a.a,{variant:"outlined",color:"primary",type:"Submit",children:L?"Wait...":i})]}),M&&Object(j.jsx)(m.a,{severity:"error",style:{position:"absolute",top:"50%",zIndex:"3",width:"100vw"},children:M})]})},x=Object(r.lazy)((function(){return n.e(30).then(n.bind(null,371))}));e.default=function(t){var e=t.children,n=t.isOver,r=t.playList,s=t.changeStatusItems;return Object(j.jsxs)("section",{style:{flexGrow:3,display:"flex"},children:[Object(j.jsx)(v,{playList:r,type:"Add",changeStatusItems:s,children:i.a.cloneElement(e,{isOver:n})}),Object(j.jsx)(x,{children:r.length&&r.map((function(t){return t.duration})).reduce((function(t,e){return t+e}))})]})}}}]);
//# sourceMappingURL=16.75cfa68b.chunk.js.map