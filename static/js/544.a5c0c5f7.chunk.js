"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{368:function(n,t,e){var r=e(689),a=e(77),i=e(184);t.Z=function(n){var t=n.movies,e=(0,r.TH)();return(0,i.jsx)(a.eW,{children:t.map((function(n){var t=n.id,r=n.title,u=n.original_title,o=n.poster;return(0,i.jsx)(a.H2,{children:(0,i.jsxs)(a.up,{to:"/movies/".concat(t),state:{from:e},children:[(0,i.jsx)(a.Ei,{src:o?"https://image.tmdb.org/t/p/w200/".concat(o):"https://cdn.pixabay.com/photo/2022/03/12/11/15/ukraine-7063987_1280.jpg",alt:r}),(0,i.jsx)(a.rS,{children:(0,i.jsx)("h3",{children:r||u})})]})},t)}))})}},544:function(n,t,e){e.r(t);var r=e(861),a=e(439),i=e(757),u=e.n(i),o=e(791),c=e(368),s=e(77),p=e(642),d=e(770),f=e(184);t.default=function(){var n=(0,o.useState)(null),t=(0,a.Z)(n,2),e=t[0],i=t[1],l=(0,o.useState)(!1),x=(0,a.Z)(l,2),h=x[0],v=x[1],g=(0,o.useState)(""),m=(0,a.Z)(g,2),Z=m[0],w=m[1];return(0,o.useEffect)((function(){v(!0);var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Tg)();case 3:t=n.sent,i(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),w(n.t0);case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)(s.l3,{children:[(0,f.jsx)(s.eA,{children:"Trending today"}),h&&(0,f.jsx)(p.Z,{}),Z&&(0,f.jsx)("p",{children:"Something went wrong!"}),e&&(0,f.jsx)(c.Z,{movies:e})]})}},77:function(n,t,e){e.d(t,{Ei:function(){return m},H2:function(){return v},eA:function(){return x},eW:function(){return h},l3:function(){return l},rS:function(){return Z},up:function(){return g}});var r,a,i,u,o,c,s,p=e(168),d=e(751),f=e(87),l=d.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),x=d.ZP.h1(a||(a=(0,p.Z)(["\n  font-weight: 700;\n  color: blueviolet;\n  margin: 30px, 0;\n  text-decoration: none;\n"]))),h=d.ZP.ul(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n"]))),v=d.ZP.li(u||(u=(0,p.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 180px;\n  margin: 5px;\n  border-radius: 25px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),g=(0,d.ZP)(f.rU)(o||(o=(0,p.Z)(["\n  text-decoration: none;\n"]))),m=d.ZP.img(c||(c=(0,p.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n"]))),Z=d.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: blueviolet;\n"])))},770:function(n,t,e){e.d(t,{Hq:function(){return c},Hx:function(){return d},Tg:function(){return o},Y5:function(){return s},xc:function(){return p}});var r=e(861),a=e(757),i=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"53d5445e8f959aee965448ea492bd06d",include_adults:!1};var o=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?");case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(t));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a,o,c,s,p,d,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?"));case 2:return e=n.sent,r=e.data,a=r.id,o=r.poster_path,c=r.title,s=r.release_date,p=r.vote_average,d=r.overview,f=r.genres,n.abrupt("return",{id:a,poster:o,title:c,releaseYear:new Date(s).getFullYear(),userScore:Math.round(10*p),overview:d,genres:f});case 12:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?"));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r.map((function(n){return{id:n.id,name:n.name,character:n.character,poster:n.profile_path}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?"));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r.map((function(n){return{id:n.id,author:n.author,content:n.content}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.a5c0c5f7.chunk.js.map