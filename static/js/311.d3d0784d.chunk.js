"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[311],{4321:function(t,n,e){e.d(n,{a:function(){return c}});var r=e(643),a=e(184),c=function(){return(0,a.jsx)(r.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"three-dots-loading"})}},5130:function(t,n,e){e.d(n,{O:function(){return s}});var r=e(7689),a=e(1087),c=e(2007),u=e.n(c),o=e(184),s=function(t){var n=t.movies,e=(0,r.TH)();return(0,o.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.title;return(0,o.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:e},children:(0,o.jsx)("li",{children:r})},n)}))})};s.propType={movies:u().arrayOf(u().string)}},311:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var r=e(5861),a=e(9439),c=e(7757),u=e.n(c),o=e(2791),s=e(1087),i=e(2007),p=e.n(i),f=e(184),l=function(t){var n=t.setSearchParams,e=(0,o.useState)(""),r=(0,a.Z)(e,2),c=r[0],u=r[1];return(0,f.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!c)return alert("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0448\u0443\u043a\u0443");n(c)},children:[(0,f.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(t){u(t.currentTarget.value.toLowerCase().trim())},value:c}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})};l.propType={setSearchParams:p().object.isRequired,searchValue:p().string};var v=e(5130),h=e(4321),d=e(3107),g=function(){var t=(0,s.lr)(),n=(0,a.Z)(t,2),e=n[0],c=n[1],i=(0,o.useState)([]),p=(0,a.Z)(i,2),g=p[0],m=p[1],x=(0,o.useState)(!1),w=(0,a.Z)(x,2),k=w[0],b=w[1],y=(0,o.useState)(null),Z=(0,a.Z)(y,2),j=Z[0],S=Z[1],_=(0,o.useCallback)(function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,(0,d.Wf)(n);case 4:e=t.sent,m(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),S(t.t0.message);case 11:return t.prev=11,b(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(n){return t.apply(this,arguments)}}(),[]);return(0,o.useEffect)((function(){_(e)}),[e,_]),(0,f.jsxs)(f.Fragment,{children:[k&&(0,f.jsx)(h.a,{}),j&&(0,f.jsx)("p",{children:"Oops... Somesing went wrong..."}),(0,f.jsx)(l,{setSearchParams:c}),g.length>0&&(0,f.jsx)(v.O,{movies:g})]})}},3107:function(t,n,e){e.d(n,{Ap:function(){return g},WZ:function(){return m},Wf:function(){return h},XT:function(){return v},YJ:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),o="5710a8f06496583a27b9e808ee84dcbe",s="https://api.themoviedb.org/3",i="en-US",p="/search/movie",f="false",l="/movie",v=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s).concat("/trending/movie/day","?api_key=").concat(o,"&page=1&language=").concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a,l=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.length>1&&void 0!==l[1]?l[1]:1,t.next=3,u.Z.get("".concat(s).concat(p,"?query=").concat(n,"&api_key=").concat(o,"&page=").concat(e,"&include_adult=").concat(f,"&language=").concat(i));case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s).concat(l,"/").concat(n,"?api_key=").concat(o,"&language=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s).concat(l,"/").concat(n).concat("/credits","?api_key=").concat(o,"&language=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s).concat(l,"/").concat(n).concat("/reviews","?api_key=").concat(o,"&language=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=311.d3d0784d.chunk.js.map