(function(e){function t(t){for(var a,s,c=t[0],i=t[1],l=t[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/marvel-lcg-randomizer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Randomizer",{attrs:{scenarios:e.data.scenarios,modules:e.data.modules}})],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"title"},[e._v("Marvel Champions Scenario Randomizer")]),n("img",{attrs:{src:e.scenarios[e.selectedScenario].img,alt:e.scenarios[e.selectedScenario].name}}),e._l(e.selectedModules,(function(t,a){return n("img",{key:a,attrs:{src:e.modules[t].img,alt:e.modules[t].name}})})),n("div",{staticClass:"randomized-scenario"},[n("span",{staticClass:"scenario"},[e._v(" "+e._s(e.scenarios[e.selectedScenario].name)+" ("+e._s(e.scenarios[e.selectedScenario].pack)+") ")]),e._v(" with "),n("span",{staticClass:"modules"},e._l(e.selectedModules,(function(t,a){return n("span",{key:a},[e._v(" "+e._s(e.modules[t].name)+"("+e._s(e.modules[t].pack)+")"),a<e.selectedModules.length-1?n("span",[e._v(",")]):e._e()])})),0),e._v(" on "),n("span",{staticClass:"difficulty"},[e._v(" "+e._s(e.selectedDifficulty)+" ")]),e._v(" difficulty ")]),n("button",{staticClass:"randomize",on:{click:e.randomize}},[e._v("New Scenario")])],2)},c=[],i=(n("a630"),n("3ca3"),{name:"Randomizer.vue",props:{scenarios:{default:[]},modules:{default:[]},difficulties:{default:function(){return["Standard","Expert"]}}},data:function(){return{selectedScenario:0,selectedModules:[0],selectedDifficulty:"Standard"}},created:function(){this.randomize()},methods:{randomize:function(){var e=this;this.selectedScenario=Math.floor(Math.random()*this.scenarios.length);var t=this.scenarios[this.selectedScenario],n=t.difficulties||this.difficulties,a=t.minModules||1;this.selectedModules=Array.from({length:a},(function(){return Math.floor(Math.random()*e.scenarios.length)})),this.selectedDifficulty=n[Math.floor(Math.random()*n.length)]}},watch:{scenarios:function(){this.randomize()},modules:function(){this.randomize()}}}),l=i,u=(n("ea54"),n("2877")),d=Object(u["a"])(l,s,c,!1,null,"01cc5450",null),m=d.exports,f=[{name:"Rhino - The Break In!",img:"https://lcgcdn.s3.amazonaws.com/mc/MC01en_97A.jpg",pack:"Core Set"},{name:"Klaw - Underground Distribution",img:"https://lcgcdn.s3.amazonaws.com/mc/MC01en_116A.jpg",pack:"Core Set"},{name:"Ultron - The Crimson Cowl",img:"https://lcgcdn.s3.amazonaws.com/mc/MC01en_137A.jpg",pack:"Core Set"}],p=[{name:"Bomb Scare",img:"https://lcgcdn.s3.amazonaws.com/mc/MC01en_109.jpg",pack:"Core Set"},{name:"The Masters of Evil",img:"https://lcgcdn.s3.amazonaws.com/mc/MC01en_128.jpg",pack:"Core Set"},{name:"Under Attack",img:"https://lcgcdn.s3.amazonaws.com/mc/MC01en_151.jpg",pack:"Core Set"},{name:"The Legions of Hydra",img:"https://lcgcdn.s3.amazonaws.com/mc/MC01en_180.jpg",pack:"Core Set"},{name:"The Doomsday Chair",img:"https://lcgcdn.s3.amazonaws.com/mc/MC01en_183.jpg",pack:"Core Set"}],h={name:"app",data:function(){return{data:{scenarios:f,modules:p}}},components:{Randomizer:m}},g=h,v=(n("034f"),Object(u["a"])(g,o,r,!1,null,null,null)),_=v.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,n){},b523:function(e,t,n){},ea54:function(e,t,n){"use strict";var a=n("b523"),o=n.n(a);o.a}});
//# sourceMappingURL=app.4d6e2a00.js.map