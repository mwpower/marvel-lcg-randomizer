(function(e){function n(n){for(var a,o,s=n[0],c=n[1],l=n[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(n);while(m.length)m.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,s=1;s<t.length;s++){var c=t[s];0!==r[c]&&(a=!1)}a&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},r={app:0},i=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/marvel-lcg-randomizer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("85ec"),r=t.n(a);r.a},"2d27":function(e,n,t){"use strict";var a=t("bbc2"),r=t.n(a);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[e._m(0),t("button",{staticClass:"randomize-button",on:{click:e.randomize}},[e._v("Randomize")]),t("PlayerSelector",{model:{value:e.numberOfPlayer,callback:function(n){e.numberOfPlayer=n},expression:"numberOfPlayer"}}),t("PackSelector",{attrs:{packs:e.data.packs},model:{value:e.selectedPacks,callback:function(n){e.selectedPacks=n},expression:"selectedPacks"}}),t("RandomizationOptions",{model:{value:e.randomizationOptions,callback:function(n){e.randomizationOptions=n},expression:"randomizationOptions"}}),t("Scenario",{attrs:{scenario:e.selectedScenario}}),t("DeckList",{attrs:{"available-decks":e.selectedDecks,"number-of-player":e.numberOfPlayer}}),t("Changelog"),t("Contribute")],1)},i=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("h1",[a("img",{staticClass:"logo",attrs:{src:t("b640"),alt:"Marvel Champions"}})])}],o=(t("4de4"),t("c975"),t("d81d"),[{name:"Rhino - The Break In!",img:"images/scenarios/MC01en_97A.jpg",pack:"Core Set"},{name:"Klaw - Underground Distribution",img:"images/scenarios/MC01en_116A.jpg",pack:"Core Set"},{name:"Ultron - The Crimson Cowl",img:"images/scenarios/MC01en_137A.jpg",pack:"Core Set"},{name:"Green Goblin - Risky Business",img:"images/scenarios/02004.jpg",pack:"Green Goblin"},{name:"Green Goblin - Mutagen Formula",img:"images/scenarios/02017.jpg",pack:"Green Goblin"},{name:"Wrecking Crew",img:"images/scenarios/MC03en_1A.jpg",pack:"Wrecking Crew",decks:[{name:"Bulldozer",minModules:0},{name:"Piledriver",minModules:0},{name:"Thunderball",minModules:0},{name:"Wrecker",minModules:0}]}]),s=[{name:"Bomb Scare",img:"images/modules/MC01en_109.jpg",pack:"Core Set"},{name:"The Masters of Evil",img:"images/modules/MC01en_128.jpg",pack:"Core Set"},{name:"Under Attack",img:"images/modules/MC01en_151.jpg",pack:"Core Set"},{name:"The Legions of Hydra",img:"images/modules/MC01en_180.jpg",pack:"Core Set"},{name:"The Doomsday Chair",img:"images/modules/MC01en_183.jpg",pack:"Core Set"},{name:"Goblin Gimmicks",img:"images/modules/mc02en_card_goblin-glider.png",pack:"Green Goblin"},{name:"A Mess of Things",img:"images/modules/02037.jpg",pack:"Green Goblin"},{name:"Power Drain",img:"images/modules/02041.jpg",pack:"Green Goblin"},{name:"Running Interference",img:"images/modules/02046.jpg",pack:"Green Goblin"}],c=[{hero:"Spider-man",heroImg:"images/heroes/mc01en_card_spider-man.png",alterEgo:"Peter Parker",alterEgoImg:"images/heroes/mc01en_card_peter-parker.png",pack:"Core Set"},{hero:"Captain Marvel",heroImg:"images/heroes/mc01en_card_captain-marvel.png",alterEgo:"Carol Danvers",alterEgoImg:"images/heroes/mc01en_card_carol-danvers.png",pack:"Core Set"},{hero:"She-Hulk",heroImg:"images/heroes/mc01en_card_she-hulk.png",alterEgo:"Jennifer Walters",alterEgoImg:"images/heroes/mc01en_card_jennifer-walters.png",pack:"Core Set"},{hero:"Iron Man",heroImg:"images/heroes/mc01en_iron-man.png",alterEgo:"Tony Stark",alterEgoImg:"images/heroes/mc01en_card_tony-stark.png",pack:"Core Set"},{hero:"Black Panther",heroImg:"images/heroes/mc01en_card_black-panther.png",alterEgo:"T'Challa",alterEgoImg:"images/heroes/mc01en_card_tchalla.png",pack:"Core Set"},{hero:"Captain America",heroImg:"images/heroes/mc04en_card_captain-america.png",alterEgo:"Steeve Rogers",alterEgoImg:"images/heroes/mc04en_card_steve-rogers.png",pack:"Captain America"},{hero:"Ms. Marvel",heroImg:"images/heroes/mc05en_ms-marvel.png",alterEgo:"Kamala Khan",alterEgoImg:"images/heroes/mc05en_kamala-khan.png",pack:"Ms. Marvel"},{hero:"Thor",heroImg:"images/heroes/mc06en_a1_thor.png",alterEgo:"Odinson",alterEgoImg:"images/heroes/mc06en_a1_odinson.png",pack:"Thor"},{hero:"Black Widow",heroImg:"images/heroes/mc07en_black-widow.png",alterEgo:"Natasha Romanoff",alterEgoImg:"images/heroes/mc07en_natasha-romanoff.png",pack:"Black Widow"},{hero:"Doctor Strange",heroImg:"images/heroes/mc08en_doctor-strange.png",alterEgo:"Stephen Strange",alterEgoImg:"images/heroes/mc08en_stephen-strange.png",pack:"Doctor Strange"}],l=[{name:"Aggression",img:"images/aspects/MC01en_55.jpg",packs:["Core Set","Thor"]},{name:"Justice",img:"images/aspects/MC01en_62.jpg",packs:["Core Set","Black widow"]},{name:"Leadership",img:"images/aspects/MC01en_72.jpg",packs:["Core Set","Captain America"]},{name:"Protection",img:"images/aspects/MC01en_79.jpg",packs:["Core Set","Ms. Marvel","Doctor Strange"]}],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"player-selector panel"},[t("p",{staticClass:"panel-insert"},[e._v("Select the number of players")]),t("div",{staticClass:"player-buttons"},[t("button",{attrs:{disabled:1===e.value},on:{click:function(n){return e.$emit("input",1)}}},[e._v("Solo")]),t("button",{attrs:{disabled:2===e.value},on:{click:function(n){return e.$emit("input",2)}}},[e._v("Duo")]),t("button",{attrs:{disabled:3===e.value},on:{click:function(n){return e.$emit("input",3)}}},[e._v("3 players")]),t("button",{attrs:{disabled:4===e.value},on:{click:function(n){return e.$emit("input",4)}}},[e._v("4 players")])])])},d=[],m={name:"PlayerSelector",props:{value:{default:1}},methods:{addPlayer:function(){this.$emit("input",Math.min(this.value+1,4))},removePlayer:function(){this.$emit("input",Math.max(this.value-1,1))}}},p=m,g=(t("84e3"),t("2877")),f=Object(g["a"])(p,u,d,!1,null,"438c5f32",null),h=f.exports,v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"panel"},[t("div",{staticClass:"panel-insert"},[e._v(" Custom Options ")]),e.shown?t("div",[t("div",[t("button",{attrs:{disabled:e.value.additionalModules<=0},on:{click:function(n){e.additionalModulesChange((e.value.additionalModules||0)-1)}}},[e._v("-")]),e._v(" "+e._s(e.value.additionalModules||0)+" "),t("button",{on:{click:function(n){e.additionalModulesChange(parseInt(e.value.additionalModules||0)+1)}}},[e._v("+")]),e._v(" Extra Modules ")]),t("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e._v(" Hide Options ")])]):t("div",[t("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e._v(" Show Options ")])])])},_=[],k=(t("a4d3"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("ade3"));function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){Object(k["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y={name:"RandomizationOptions",props:{value:{default:{}}},data:function(){return{shown:!1}},methods:{additionalModulesChange:function(e){var n=C({},this.value);n.additionalModules=e,this.$emit("input",n)}}},O=y,w=Object(g["a"])(O,v,_,!1,null,"0d4fd231",null),S=w.exports,M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"packs-selector panel"},[t("div",{staticClass:"panel-insert"},[e._v(" Selected packs ")]),e.shown?e._e():t("div",{staticClass:"packs-selected"},[e._v(" "+e._s(e.value.join(", "))+" ")]),e.shown?t("div",{staticClass:"packs"},e._l(e.packs,(function(n,a){return t("div",{key:a,staticClass:"pack-type-column"},[t("h3",[e._v(e._s(a))]),e._l(n,(function(n){return t("label",{key:n},[t("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.indexOf(n)>=0},on:{input:function(t){return e.togglePack(n,t.target.checked)}}}),e._v(e._s(n)+" ")])}))],2)})),0):e._e(),t("div",{staticClass:"toggle"},[t("div",{staticClass:"panel-insert-content",on:{click:function(n){e.shown=!e.shown}}},[e.shown?t("span",[e._v("Finish Selection")]):t("span",[e._v("Add/Remove Packs")])])])])},j=[],P=(t("fb6a"),t("a434"),{name:"PackSelector",props:{value:{default:["Core Set"]},packs:{default:["Core Set"]}},data:function(){return{shown:!1}},methods:{togglePack:function(e,n){var t=this.value.slice(0);n?t.push(e):t.splice(t.indexOf(e),1),this.$emit("input",t)}}}),E=P,x=(t("6048"),Object(g["a"])(E,M,j,!1,null,"2c18682e",null)),z=x.exports,D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.scenario?t("div",{staticClass:"scenario-randomizer panel"},[t("div",{staticClass:"title panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Scenario")]),e.shown?t("div",{staticClass:"content"},[t("div",[t("div",{staticClass:"main-scenario"},[t("img",{attrs:{src:e.scenario.scenario.img,alt:e.scenario.scenario.name}}),t("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(e.scenario.scenario.name)+"("+e._s(e.scenario.scenario.pack)+") ")])]),e._l(e.scenario.modules,(function(n,a){var r=n.deck,i=n.modules;return t("div",{key:a},[i.length>0?t("div",{staticClass:"deck"},[e.scenario.modules.length>1?t("div",{staticClass:"deck-name"},[e._v("Deck "+e._s(r.name))]):e._e(),t("div",{staticClass:"modules"},e._l(i,(function(n,a){return t("div",{key:a},[t("img",{attrs:{src:n.img,alt:n.name}}),t("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(n.name)+"("+e._s(n.pack)+") ")])])})),0)]):e._e()])}))],2),t("div",{staticClass:"difficulty panel-insert-content"},[e._v(" Difficulty: "),t("span",{staticClass:"difficulty-value"},[e._v(" "+e._s(e.scenario.difficulty)+" ")])])]):e._e()]):e._e()},A=[],I={name:"Scenario.vue",props:{scenario:{required:!0}},data:function(){return{shown:!0}}},$=I,G=(t("2d27"),Object(g["a"])($,D,A,!1,null,"19673fbd",null)),T=G.exports,H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hero-randomizer panel"},[t("div",{staticClass:"title panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Players' Deck")]),e.availableDecks.length<e.numberOfPlayer?t("div",{staticClass:"warning"},[e._v(" Not enough Heroes for all the players. ")]):e._e(),e.shown?t("div",{staticClass:"decks"},e._l(e.selectedDecks,(function(n,a){var r=n.hero,i=n.aspect;return t("div",{key:a,staticClass:"hero-deck"},[t("h2",{staticClass:"panel-insert-content"},[e._v("Player "+e._s(a+1))]),t("div",{staticClass:"cards"},[t("img",{attrs:{src:r.alterEgoImg,alt:r.alterEgo}}),t("img",{attrs:{src:r.heroImg,alt:r.hero}}),t("img",{attrs:{src:i.img,alt:i.name}})]),t("div",{staticClass:"name panel-insert-content"},[e._v(" "+e._s(r.alterEgo)+" / "+e._s(r.hero)+"("+e._s(r.pack)+") + "+e._s(i.name)+" ")])])})),0):e._e()])},R=[],B={name:"DeckList",props:{numberOfPlayer:{default:1},availableDecks:{default:[],required:!0}},data:function(){return{shown:!0}},computed:{selectedDecks:function(){return this.availableDecks.slice(0,this.numberOfPlayer)}}},N=B,W=(t("a9c9"),Object(g["a"])(N,H,R,!1,null,"01fda1d0",null)),J=W.exports,F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"changelog panel"},[t("div",{staticClass:"panel-insert",on:{click:function(n){e.shown=!e.shown}}},[e._v("Changelog")]),e.shown?t("div",[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4)]):e._e()])},L=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"changelog-entry"},[t("h3",[e._v("On february 16th 2020")]),t("ul",[t("li",[e._v("Add Black Widow and Doctor Strange")]),t("li",[e._v("Update Green Goblin and Wrecking Crew pictures")]),t("li",[e._v("Add contribute note at the bottom of the page")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"changelog-entry"},[t("h3",[e._v("On january 2nd 2020")]),t("ul",[t("li",[e._v("Add offline availability")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"changelog-entry"},[t("h3",[e._v("On december 23rd 2019")]),t("ul",[t("li",[e._v("Refactored the randomization for a bit more of future proofing")]),t("li",[e._v("Add support for first customization option: Extra modules")])]),t("h3",[e._v("On december 15th 2019")]),t("ul",[t("li",[e._v("Add saving of the selected packs you own in your browser")]),t("li",[e._v("Add the changelog list")]),t("li",[e._v("Display pack selection by categories (Heroes, Modules, Scenarios)")]),t("li",[e._v("A bit of redesign")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"changelog-entry"},[t("h3",[e._v("On december 13th 2019")]),t("ul",[t("li",[e._v("Add Support for Multiple packs")]),t("li",[e._v("Add scenarios and modules from Green Goblins and Wrecking Crew")]),t("li",[e._v("Add Heroes Ms. Marvel, Captain America and Thor")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"changelog-entry"},[t("h3",[e._v("On december 12th 2019 (and before)")]),t("ul",[t("li",[e._v("Add Scenario randomization")]),t("li",[e._v("Add Hero randomization")]),t("li",[e._v("Add Number of player selection")])])])}],U={name:"Changelog",data:function(){return{shown:!0}}},q=U,K=(t("72a7"),Object(g["a"])(q,F,L,!1,null,"07c059d1",null)),Q=K.exports,V=(t("a630"),t("3ca3"),t("d4ec")),X=t("bee2");function Y(e){for(var n=e.slice(0),t=n.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[n[a],n[t]];n[t]=r[0],n[a]=r[1]}return n}var Z=function(){function e(){Object(V["a"])(this,e)}return Object(X["a"])(e,[{key:"randomizeScenario",value:function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{additionalModules:0},r=a.additionalModules,i=void 0===r?0:r,o=Y(e).shift(),s=o.decks||[{name:"encounter"}],c=Y(n),l=s.map((function(e){var n=(void 0!==e.minModules?e.minModules:1)+i;return{deck:e,modules:c.splice(0,n)}})),u=o.difficulties||t,d=u[Math.floor(Math.random()*u.length)];return{scenario:o,modules:l,difficulty:d}}},{key:"randomizeHeroes",value:function(e,n){var t=Y(e),a=Y(n);return Array.from({length:Math.min(4,t.length)},(function(e,n){return{hero:t[n],aspect:a[n]}}))}}]),e}(),ee=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v(" Fork this project or contribute on "),t("a",{attrs:{href:"https://github.com/Naouak/marvel-lcg-randomizer",target:"_blank"}},[e._v("Github")]),e._v(". ")])}],te={name:"Contribute"},ae=te,re=Object(g["a"])(ae,ee,ne,!1,null,"1fec2e7b",null),ie=re.exports,oe=["standard","expert"],se=window.localStorage,ce={Heroes:c.map((function(e){return e.pack})).filter((function(e,n,t){return t.indexOf(e)===n})),Scenarios:o.map((function(e){return e.pack})).filter((function(e,n,t){return t.indexOf(e)===n})),Modules:s.map((function(e){return e.pack})).filter((function(e,n,t){return t.indexOf(e)===n}))},le=new Z,ue=null;try{ue=JSON.parse(se.getItem("selectedPacks"))||["Core Set"]}catch(he){ue=["Core Set"],se.removeItem("selectedPacks")}var de={name:"app",data:function(){return{data:{scenarios:o,modules:s,heroes:c,aspects:l,packs:ce,difficulties:oe},selectedPacks:ue,selectedScenario:null,selectedDecks:[],numberOfPlayer:1,randomizationOptions:{}}},watch:{selectedPacks:function(){se.setItem("selectedPacks",JSON.stringify(this.selectedPacks)),this.randomize()},randomizationOptions:function(){this.randomize()}},created:function(){this.randomize()},computed:{availableScenarios:function(){var e=this;return this.data.scenarios.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableModules:function(){var e=this;return this.data.modules.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableHeroes:function(){var e=this;return this.data.heroes.filter((function(n){return e.selectedPacks.indexOf(n.pack)>=0}))},availableDifficulties:function(){return this.data.difficulties}},methods:{randomize:function(){this.selectedScenario=le.randomizeScenario(this.availableScenarios,this.availableModules,this.availableDifficulties,this.randomizationOptions),this.selectedDecks=le.randomizeHeroes(this.availableHeroes,this.data.aspects)}},components:{Contribute:ie,Changelog:Q,PackSelector:z,PlayerSelector:h,DeckList:J,Scenario:T,RandomizationOptions:S}},me=de,pe=(t("034f"),Object(g["a"])(me,r,i,!1,null,null,null)),ge=pe.exports,fe=t("9483");Object(fe["a"])("".concat("/marvel-lcg-randomizer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ge)}}).$mount("#app")},6048:function(e,n,t){"use strict";var a=t("6e31"),r=t.n(a);r.a},"6e31":function(e,n,t){},"72a7":function(e,n,t){"use strict";var a=t("87d8"),r=t.n(a);r.a},"84e3":function(e,n,t){"use strict";var a=t("e421"),r=t.n(a);r.a},"85ec":function(e,n,t){},"87d8":function(e,n,t){},a9c9:function(e,n,t){"use strict";var a=t("ba1d"),r=t.n(a);r.a},b640:function(e,n,t){e.exports=t.p+"img/logo.7184bee2.jpg"},ba1d:function(e,n,t){},bbc2:function(e,n,t){},e421:function(e,n,t){}});
//# sourceMappingURL=app.b611fb9b.js.map