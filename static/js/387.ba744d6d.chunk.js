"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return C}});var e,a,i,u,c,o,s,p=r(5861),d=r(9439),x=r(7757),l=r.n(x),f=r(2791),h=r(7689),g=r(168),v=r(5751),m=v.ZP.div(e||(e=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),b=v.ZP.ul(a||(a=(0,g.Z)(["\n  list-style: none;\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n  transition-duration: 300ms;\n"]))),w=v.ZP.li(i||(i=(0,g.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border: 5px solid red;\n  border-radius: 25px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n"]))),Z=v.ZP.img(u||(u=(0,g.Z)(["\n  padding: 0px;\n  margin: 0px;\n  border-radius: 25px;\n  height: 260px;\n  width: 100%;\n  display: block;\n"]))),k=v.ZP.div(c||(c=(0,g.Z)(["\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: blueviolet;\n"]))),_=v.ZP.h3(o||(o=(0,g.Z)(["\n  text-align: center;\n  margin: 0px;\n"]))),y=v.ZP.p(s||(s=(0,g.Z)(["\n  margin: 0px;\n"]))),j=r(7642),P=r(7770),S=r(184),C=function(){var n=(0,h.UO)("movieId").movieId,t=(0,f.useState)(null),r=(0,d.Z)(t,2),e=r[0],a=r[1],i=(0,f.useState)(""),u=(0,d.Z)(i,2),c=u[0],o=u[1],s=(0,f.useState)(!1),x=(0,d.Z)(s,2),g=x[0],v=x[1];return(0,f.useEffect)((function(){v(!0);var t=function(){var t=(0,p.Z)(l().mark((function t(){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,P.xc)(n);case 3:if(0!==(r=t.sent).length){t.next=6;break}return t.abrupt("return",alert("Ther is nothing found!!!"));case 6:a(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),o(t.t0);case 12:return t.prev=12,v(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,S.jsxs)(m,{children:[e&&(0,S.jsx)(b,{children:e.map((function(n){var t=n.id,r=n.name,e=n.character,a=n.poster;return(0,S.jsxs)(w,{children:[(0,S.jsx)(Z,{src:a?"https://image.tmdb.org/t/p/w200/".concat(a):"https://cdn.pixabay.com/photo/2022/03/12/11/15/ukraine-7063987_1280.jpg",alt:r}),(0,S.jsxs)(k,{children:[(0,S.jsx)(_,{children:r}),(0,S.jsxs)(y,{children:["Character: ",e]})]})]},t)}))}),g&&(0,S.jsx)(j.Z,{}),c&&(0,S.jsx)("p",{children:"Something went wrong"})]})}},7770:function(n,t,r){r.d(t,{Hq:function(){return o},Hx:function(){return d},Tg:function(){return c},Y5:function(){return s},xc:function(){return p}});var e=r(5861),a=r(7757),i=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"53d5445e8f959aee965448ea492bd06d",include_adults:!1};var c=function(){var n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?");case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(t));case 2:return r=n.sent,e=r.data.results,n.abrupt("return",e.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e,a,c,o,s,p,d,x;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?"));case 2:return r=n.sent,e=r.data,a=e.id,c=e.poster_path,o=e.title,s=e.release_date,p=e.vote_average,d=e.overview,x=e.genres,n.abrupt("return",{id:a,poster:c,title:o,releaseYear:new Date(s).getFullYear(),userScore:Math.round(10*p),overview:d,genres:x});case 12:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?"));case 2:return r=n.sent,e=r.data.cast,n.abrupt("return",e.map((function(n){return{id:n.id,name:n.name,character:n.character,poster:n.profile_path}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?"));case 2:return r=n.sent,e=r.data.results,n.abrupt("return",e.map((function(n){return{id:n.id,author:n.author,content:n.content}})));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.ba744d6d.chunk.js.map