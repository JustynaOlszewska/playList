(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[13],{109:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return i}));var c=e(110),r=e.n(c),a=e(111),o="".concat("http://sandbox.aurafutures.io","/").concat("justyna-olszewska"),i=function(){var n=Object(a.a)(r.a.mark((function n(t,e,c){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 3:return a=n.sent,n.abrupt("return","DELETE"===e||a.json());case 7:throw n.prev=7,n.t0=n.catch(0),new Error("somthing went wrong: ".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e,c){return n.apply(this,arguments)}}()},114:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"d",(function(){return i})),e.d(t,"a",(function(){return s})),e.d(t,"e",(function(){return u})),e.d(t,"c",(function(){return d}));var c=e(108),r=e(113),a=e(109),o=function(){return Object(a.a)("".concat(a.b,"-songs"),"GET")},i=function(n){return Object(a.a)("".concat(a.b,"-songs/").concat(n),"DELETE")},s=function(n){return Object(a.a)("".concat(a.b,"-songs"),"POST",n)},u=function(n){var t=n.id,e=Object(r.a)(n,["id"]);return Object(a.a)("".concat(a.b,"-songs/").concat(t),"PUT",e)},d=function(n){var t=n.queryKey,e=Object(c.a)(t,2),r=(e[0],e[1].id);return Object(a.a)("".concat(a.b,"-songs/").concat(r),"GET")}},118:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var c,r=e(19),a=e(18),o=Object(a.css)(c||(c=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"])))},330:function(n,t,e){"use strict";e.r(t);var c,r,a=e(0),o=e(324),i=e(7),s=e(30),u=e(104),d=e(114),b=e(19),f=e(18),j=e(118),l=f.default.section(c||(c=Object(b.a)(["\n  ","\n  align-items: center;\n  width: 98%;\n  min-height: 80vh;\n  @media (min-width: 768px) {\n    width: 60%;\n  }\n"])),j.a),h=f.default.ul(r||(r=Object(b.a)(["\n  ","\n  height: 60%;\n  width: 95%;\n  padding: 0;\n"])),j.a),O=e(49),p=e(4),g=Object(a.lazy)((function(){return e.e(18).then(e.bind(null,332))})),v=Object(a.lazy)((function(){return e.e(1).then(e.bind(null,144))}));t.default=function(){var n=Object(i.h)(),t=Object(o.a)("songs",d.b),e=t.data,c=t.error,r=t.isLoading,a=t.isError;return Object(p.jsxs)(l,{children:[Object(p.jsx)("h2",{children:"List of Songs"}),Object(p.jsx)(u.a,{variant:"outlined",color:"inherit",children:Object(p.jsx)(s.b,{style:{textDecoration:"none"},to:"".concat(n.url,"/addSong"),children:"Add Song"})}),r?Object(p.jsx)(O.a,{}):Object(p.jsx)(h,{children:e.map((function(n){return Object(p.jsx)(g,{song:n},n.id)}))}),Object(p.jsx)(v,{isError:a,massage:null===c||void 0===c?void 0:c.message})]})}}}]);
//# sourceMappingURL=13.d0f79f3d.chunk.js.map