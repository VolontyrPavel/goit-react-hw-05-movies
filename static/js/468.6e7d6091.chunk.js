"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[468],{130:function(n,t,e){e.d(t,{O:function(){return o}});var r=e(87),a=e(7),c=e.n(a),u=e(184),o=function(n){var t=n.movies;return(0,u.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title;return(0,u.jsx)(r.rU,{to:"/movies/".concat(t),children:(0,u.jsx)("li",{children:e})},t)}))})};o.propType={movies:c().arrayOf(c().string)}},468:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(791),s=e(107),i=e(130),p=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],f=(0,o.useState)(!1),v=(0,a.Z)(f,2)[1],l=(0,o.useState)(null),d=(0,a.Z)(l,2)[1];(0,o.useEffect)((function(){v(!0),h()}),[]);var h=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.XT)();case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d(n.t0.message);case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(i.O,{movies:e})]})}},107:function(n,t,e){e.d(t,{Ap:function(){return g},WZ:function(){return m},Wf:function(){return d},XT:function(){return l},YJ:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="5710a8f06496583a27b9e808ee84dcbe",s="https://api.themoviedb.org/3",i="en-US",p="/search/movie",f="false",v="/movie",l=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s).concat("/trending/movie/day","?api_key=").concat(o,"&page=1&language=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a,v=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=v.length>1&&void 0!==v[1]?v[1]:1,n.next=3,u.Z.get("".concat(s).concat(p,"?query=").concat(t,"&api_key=").concat(o,"&page=").concat(e,"&include_adult=").concat(f,"&language=").concat(i));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s).concat(v,"/").concat(t,"?api_key=").concat(o,"&language=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s).concat(v,"/").concat(t).concat("/credits","?api_key=").concat(o,"&language=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s).concat(v,"/").concat(t).concat("/reviews","?api_key=").concat(o,"&language=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=468.6e7d6091.chunk.js.map