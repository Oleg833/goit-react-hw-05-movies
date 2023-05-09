"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,i,c,u,o,s,p=e(861),d=e(439),l=e(757),x=e.n(l),f=e(791),h=e(689),g=e(168),m=e(751),v=m.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),b=m.ZP.ul(a||(a=(0,g.Z)(["\n  list-style: none;\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n  transition-duration: 300ms;\n"]))),Z=m.ZP.li(i||(i=(0,g.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border: 5px solid red;\n  border-radius: 25px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n"]))),w=m.ZP.img(c||(c=(0,g.Z)(["\n  padding: 0px;\n  margin: 0px;\n  border-radius: 25px;\n  height: 260px;\n  width: 100%;\n  display: block;\n"]))),k=m.ZP.div(u||(u=(0,g.Z)(["\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: blueviolet;\n"]))),_=m.ZP.h3(o||(o=(0,g.Z)(["\n  text-align: center;\n  margin: 0px;\n"]))),y=m.ZP.p(s||(s=(0,g.Z)(["\n  margin: 0px;\n"]))),j=e(642),P=e(384),S=e(184),C=function(){var n=(0,h.UO)("movieId").movieId,t=(0,f.useState)(null),e=(0,d.Z)(t,2),r=e[0],a=e[1],i=(0,f.useState)(""),c=(0,d.Z)(i,2),u=c[0],o=c[1],s=(0,f.useState)(!1),l=(0,d.Z)(s,2),g=l[0],m=l[1];return(0,f.useEffect)((function(){m(!0);var t=function(){var t=(0,p.Z)(x().mark((function t(){var e;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,P.xc)(n);case 3:if(0!==(e=t.sent).length){t.next=6;break}return t.abrupt("return",alert("Ther is nothing found!!!"));case 6:a(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),o(t.t0);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,S.jsxs)(v,{children:[r&&(0,S.jsx)(b,{children:r.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.poster;return(0,S.jsxs)(Z,{children:[(0,S.jsx)(w,{src:a?"https://image.tmdb.org/t/p/w200/".concat(a):"https://cdn.pixabay.com/photo/2022/03/12/11/15/ukraine-7063987_1280.jpg",alt:e}),(0,S.jsxs)(k,{children:[(0,S.jsx)(_,{children:e}),(0,S.jsxs)(y,{children:["Character: ",r]})]})]},t)}))}),g&&(0,S.jsx)(j.Z,{}),u&&(0,S.jsx)("p",{children:"Something went wrong"})]})}},384:function(n,t,e){e.d(t,{Hq:function(){return o},Hx:function(){return d},Tg:function(){return u},Y5:function(){return s},xc:function(){return p}});var r=e(861),a=e(757),i=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"53d5445e8f959aee965448ea492bd06d",include_adults:!1};var u=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c.Z.get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}}))})).catch((function(n){alert(n.massage)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c.Z.get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}}))})).catch((function(n){alert(n.massage)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a,u,o,s,p,d,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(t,"?"));case 3:return e=n.sent,r=e.data,a=r.id,u=r.poster_path,o=r.title,s=r.release_date,p=r.vote_average,d=r.overview,l=r.genres,n.abrupt("return",{id:a,poster:u,title:o,releaseYear:new Date(s).getFullYear(),userScore:Math.round(10*p),overview:d,genres:l});case 15:n.prev=15,n.t0=n.catch(0),console.log(n.t0.message);case 18:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/movie/".concat(t,"/credits?"));case 3:return e=n.sent,r=e.data.cast,n.abrupt("return",r.map((function(n){return{id:n.id,name:n.name,character:n.character,poster:n.profile_path}})));case 8:n.prev=8,n.t0=n.catch(0),alert(n.t0.massage);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),d=function(n){return c.Z.get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){alert(n.massage)}))}}}]);
//# sourceMappingURL=387.f9f0191d.chunk.js.map