(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],{27:function(e,t,a){},29:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(18),i=a.n(s),n=(a(27),a(0));var o=function(){return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"netflixLogo"}),Object(n.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"avatar"})]})},l=a(4),r=(a(29),a(19)),d="008d247c8e7b200d4ea0981012edf94d",j="https://image.tmdb.org/t/p/original",b=a.n(r).a.create({baseURL:"https://api.themoviedb.org/3"});var u=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){b.get("trending/all/week?api_key=".concat(d,"&language=en-US")).then((function(e){s(e.data.results[Math.floor(20*Math.random())])}))}),[]),Object(n.jsxs)("div",{style:{backgroundImage:"url(".concat(a?j+a.backdrop_path:"",")")},className:"banner",children:[Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h1",{className:"title",children:a?a.title:"not-available"}),Object(n.jsxs)("div",{className:"navbar_buttons",children:[Object(n.jsx)("button",{className:"button",children:"Play"}),Object(n.jsx)("button",{className:"button",children:"My List"})]}),Object(n.jsx)("h1",{className:"description",children:a?a.overview:"not-available"})]}),Object(n.jsx)("div",{className:"fade_bottom"})]})},m="discover/tv?api_key=".concat(d,"&with_networks=213"),h="discover/movie?api_key=".concat(d,"&with_genres=28"),v="discover/movie?api_key=".concat(d,"&with_genres=35"),g="discover/movie?api_key=".concat(d,"&with_genres=27"),p="discover/movie?api_key=".concat(d,"&with_genres=10749"),O="discover/movie?api_key=".concat(d,"&with_genres=99"),x=(a(47),a(48),a(20));var f=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),u=r[0],m=r[1];return Object(c.useEffect)((function(){b.get(e.url).then((function(e){console.log(e.data),i(e.data.results)})).catch((function(e){}))}),[]),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsx)("div",{className:"posters",children:s.map((function(t,a){return Object(n.jsx)("img",{onClick:function(){return e=t.id,console.log(e),void b.get("/movie/".concat(e,"/videos?api_key=").concat(d,"&language=en-US")).then((function(e){0!==e.data.results.resultslength?m(e.data.results[0]):console.log("No youtube Trailer")}));var e},className:e.isSmall?"smallPoster":"poster",src:"".concat(j+t.backdrop_path),alt:"poster"},a)}))}),u&&Object(n.jsx)(x.a,{opts:{height:"390",width:"100%",playerVars:{autoplay:0}},videoId:u.key})]})};function _(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(o,{}),Object(n.jsx)(u,{}),Object(n.jsx)(f,{title:"Netflix Originals",url:m}),Object(n.jsx)(f,{title:"Action",isSmall:!0,url:h}),Object(n.jsx)(f,{title:"Comedy",isSmall:!0,url:v}),Object(n.jsx)(f,{title:"Horror",isSmall:!0,url:g}),Object(n.jsx)(f,{title:"Romance",isSmall:!0,url:p}),Object(n.jsx)(f,{title:"Documentaries",isSmall:!0,url:O})]})}var k=document.getElementById("root");i.a.render(Object(n.jsx)(c.StrictMode,{children:Object(n.jsx)(_,{})}),k)}},[[62,1,2]]]);
//# sourceMappingURL=main.aa762f3e.chunk.js.map