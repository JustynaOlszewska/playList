(this.webpackJsonpplaylist=this.webpackJsonpplaylist||[]).push([[9],{54:function(t,r,n){"use strict";n.d(r,"b",(function(){return s})),n.d(r,"d",(function(){return i})),n.d(r,"a",(function(){return p})),n.d(r,"e",(function(){return h})),n.d(r,"c",(function(){return f}));var e=n(56),a=n(59),c=n(51),o=n.n(c),u=n(52),s=function(){var t=Object(u.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("http://sandbox.aurafutures.io","/justyna-olszewska-authors"));case 3:return r=t.sent,t.abrupt("return",r.json());case 7:throw t.prev=7,t.t0=t.catch(0),new Error("somthing went wrong: ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(u.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("http://sandbox.aurafutures.io","/justyna-olszewska-authors/").concat(r),{method:"DELETE"});case 3:return t.abrupt("return",!0);case 6:throw t.prev=6,t.t0=t.catch(0),new Error("somthing went wrong: ".concat(t.t0));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=Object(u.a)(o.a.mark((function t(r){var n,e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("http://sandbox.aurafutures.io","/justyna-olszewska-authors"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return n=t.sent,t.next=6,n.json();case 6:return e=t.sent,t.abrupt("return",e);case 10:throw t.prev=10,t.t0=t.catch(0),new Error("somthing went wrong: ".concat(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=Object(u.a)(o.a.mark((function t(r){var n,e,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.id,e=Object(a.a)(r,["id"]),t.prev=1,t.next=4,fetch("".concat("http://sandbox.aurafutures.io","/justyna-olszewska-authors/").concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return c=t.sent,t.next=7,c.json();case 7:return u=t.sent,t.abrupt("return",u);case 11:throw t.prev=11,t.t0=t.catch(1),new Error("somthing went wrong: ".concat(t.t0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=Object(u.a)(o.a.mark((function t(r){var n,a,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.queryKey,a=Object(e.a)(n,2),a[0],c=a[1].id,t.prev=2,t.next=5,fetch("".concat("http://sandbox.aurafutures.io","/justyna-olszewska-authors/").concat(c));case 5:return u=t.sent,t.abrupt("return",u.json());case 9:throw t.prev=9,t.t0=t.catch(2),new Error("somthing went wrong: ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(r){return t.apply(this,arguments)}}()},77:function(t,r,n){"use strict";n.r(r);var e=n(0),a=n(105),c=n(20),o=n(98),u=n(27),s=n(54),i=n(3),p=Object(e.lazy)((function(){return n.e(10).then(n.bind(null,78))}));r.default=function(){var t=Object(a.a)("authors",s.b),r=t.data,n=t.error,e=t.isLoading,h=t.isError;return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,{color:"inherit",children:Object(i.jsx)(c.b,{to:"/addAuthor",children:"Add Author"})}),e?Object(i.jsx)(u.a,{}):Object(i.jsx)("ul",{children:r.map((function(t){return Object(i.jsx)(p,{author:t,id:t.id},t.id)}))}),h&&Object(i.jsxs)("span",{children:["Error: ",n.message]})]})}}}]);
//# sourceMappingURL=9.16322701.chunk.js.map