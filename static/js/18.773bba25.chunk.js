(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[18],{135:function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return u}));var c=r(136),e=r.n(c),a=r(137),o="".concat("http://sandbox.aurafutures.io","/").concat("justyna-olszewska"),u=function(){var t=Object(a.a)(e.a.mark((function t(n,r,c){var a;return e.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n,{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 3:return a=t.sent,t.abrupt("return","DELETE"===r||a.json());case 7:throw t.prev=7,t.t0=t.catch(0),new Error("somthing went wrong: ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n,r,c){return t.apply(this,arguments)}}()},140:function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"d",(function(){return u})),r.d(n,"a",(function(){return i})),r.d(n,"e",(function(){return s})),r.d(n,"c",(function(){return b}));var c=r(134),e=r(139),a=r(135),o=function(){return Object(a.a)("".concat(a.b,"-songs"),"GET")},u=function(t){return Object(a.a)("".concat(a.b,"-songs/").concat(t),"DELETE")},i=function(t){return Object(a.a)("".concat(a.b,"-songs"),"POST",t)},s=function(t){var n=t.id,r=Object(e.a)(t,["id"]);return Object(a.a)("".concat(a.b,"-songs/").concat(n),"PUT",r)},b=function(t){var n=t.queryKey,r=Object(c.a)(n,2),e=(r[0],r[1].id);return Object(a.a)("".concat(a.b,"-songs/").concat(e),"GET")}},143:function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"d",(function(){return u})),r.d(n,"a",(function(){return i})),r.d(n,"e",(function(){return s})),r.d(n,"c",(function(){return b}));var c=r(134),e=r(139),a=r(135),o=function(){return Object(a.a)("".concat(a.b,"-authors"),"GET")},u=function(t){return Object(a.a)("".concat(a.b,"-authors/").concat(t),"DELETE")},i=function(t){return Object(a.a)("".concat(a.b,"-authors"),"POST",t)},s=function(t){var n=t.id,r=Object(e.a)(t,["id"]);return Object(a.a)("".concat(a.b,"-authors/").concat(n),"PUT",r)},b=function(t){var n=t.queryKey,r=Object(c.a)(n,2),e=(r[0],r[1].id);return Object(a.a)("".concat(a.b,"-authors/").concat(e),"GET")}},368:function(t,n,r){"use strict";r.r(n);var c=r(0),e=r(372),a=r(143),o=r(140),u=r(9),i=r(60),s=r(3),b=Object(c.lazy)((function(){return Promise.all([r.e(2),r.e(13)]).then(r.bind(null,204))})),d=Object(c.lazy)((function(){return r.e(0).then(r.bind(null,190))}));n.default=function(){var t=Object(u.g)().id,n=Object(e.a)("authors",a.b),r=n.data,c=n.isLoading,f=n.error,j=n.isError,O=Object(e.a)(["songs",{id:t}],o.c),l=O.data,h=O.error,p=O.isLoading,g=O.isError,E=(f||{}).message,v=(h||{}).message;return Object(s.jsxs)("div",{children:[c||p?Object(s.jsx)(i.a,{}):Object(s.jsx)(b,{type:"update",defaultValue:l,isLoading:c,allAuthors:r,children:"Update Songs"}),Object(s.jsx)(d,{isError:j||g,massage:E||v})]})}}}]);
//# sourceMappingURL=18.773bba25.chunk.js.map