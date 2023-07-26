"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[648],{648:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),u=n(689),o=n(87),p=n(7),l=n.n(p),f=n(184),v=function(e){var t=e.img,n=e.title,r=e.release,a=e.vote,c=e.overview,s=e.genres;return(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",width:250,alt:n}),(0,f.jsxs)("h2",{children:[n," (",r,")"]}),(0,f.jsxs)("p",{children:["User Scores: ",a,"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:c}),(0,f.jsx)("h4",{children:"Genres"}),s&&s.map((function(e){var t=e.name,n=e.id;return(0,f.jsx)("p",{children:t},n)}))]})};v.propType={img:l().string,title:l().string,release:l().string,vote:l().string,overview:l().string,genres:l().string};var d=n(107),h=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],p=(0,i.useState)(!1),l=(0,a.Z)(p,2)[1],h=(0,i.useState)(null),g=(0,a.Z)(h,2)[1],x=(0,u.UO)().movieId,m=(0,u.s0)(),w=(0,u.TH)(),k=(0,i.useCallback)((0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.YJ)(x);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),g(e.t0.message);case 10:return e.prev=10,l(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])}))),[x]);(0,i.useEffect)((function(){l(!0),k()}),[k]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("button",{type:"button",onClick:function(){m(w.state||"/")},children:["<-","Go back"]}),(0,f.jsx)(v,{img:n.poster_path,title:n.title,release:n.release_date,vote:n.vote_average,overview:n.overview,genres:n.genres},n.id),(0,f.jsx)("h4",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(i.Suspense,{children:(0,f.jsx)(u.j3,{})})]})}},107:function(e,t,n){n.d(t,{Ap:function(){return g},WZ:function(){return x},Wf:function(){return d},XT:function(){return v},YJ:function(){return h}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="5710a8f06496583a27b9e808ee84dcbe",u="https://api.themoviedb.org/3",o="en-US",p="/search/movie",l="false",f="/movie",v=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u).concat("/trending/movie/day","?api_key=").concat(i,"&page=1&language=").concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,f=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:1,e.next=3,s.Z.get("".concat(u).concat(p,"?query=").concat(t,"&api_key=").concat(i,"&page=").concat(n,"&include_adult=").concat(l,"&language=").concat(o));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u).concat(f,"/").concat(t,"?api_key=").concat(i,"&language=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u).concat(f,"/").concat(t).concat("/credits","?api_key=").concat(i,"&language=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u).concat(f,"/").concat(t).concat("/reviews","?api_key=").concat(i,"&language=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=648.74c22cf4.chunk.js.map