(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[16],{109:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return s}));var r=e(110),c=e.n(r),a=e(111),o="".concat("http://sandbox.aurafutures.io","/").concat("justyna-olszewska"),s=function(){var n=Object(a.a)(c.a.mark((function n(t,e,r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return a=n.sent,n.abrupt("return","DELETE"===e||a.json());case 7:throw n.prev=7,n.t0=n.catch(0),new Error("somthing went wrong: ".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e,r){return n.apply(this,arguments)}}()},114:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"d",(function(){return s})),e.d(t,"a",(function(){return i})),e.d(t,"e",(function(){return u})),e.d(t,"c",(function(){return d}));var r=e(108),c=e(113),a=e(109),o=function(){return Object(a.a)("".concat(a.b,"-songs"),"GET")},s=function(n){return Object(a.a)("".concat(a.b,"-songs/").concat(n),"DELETE")},i=function(n){return Object(a.a)("".concat(a.b,"-songs"),"POST",n)},u=function(n){var t=n.id,e=Object(c.a)(n,["id"]);return Object(a.a)("".concat(a.b,"-songs/").concat(t),"PUT",e)},d=function(n){var t=n.queryKey,e=Object(r.a)(t,2),c=(e[0],e[1].id);return Object(a.a)("".concat(a.b,"-songs/").concat(c),"GET")}},332:function(n,t,e){"use strict";e.r(t);e(0);var r,c=e(7),a=e(323),o=e(114),s=e(19),i=e(18).default.div(r||(r=Object(s.a)(["\n  height: 100%;\n  width: 100%;\n  text-align: center;\n"]))),u=e(49),d=e(4);t.default=function(){var n,t=Object(c.g)().id,e=Object(a.a)(["songs",{id:t}],o.c),r=e.data,s=e.error,l=e.isLoading,b=e.isError;return Object(d.jsxs)(i,{children:[l?Object(d.jsx)(u.a,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:r.title}),Object(d.jsxs)("h4",{children:["Duration: ",null===r||void 0===r?void 0:r.duration," seconds"]}),Object(d.jsxs)("h5",{children:["Author: ",(null===r||void 0===r||null===(n=r.author)||void 0===n?void 0:n.name)||"author unknown"]}),Object(d.jsxs)("h6",{children:["Playlists: ",null===r||void 0===r?void 0:r.playlists]})]}),b&&Object(d.jsx)("span",{children:s.message})]})}}}]);
//# sourceMappingURL=16.be3f7dc0.chunk.js.map