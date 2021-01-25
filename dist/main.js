(()=>{"use strict";var n={434:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const a=o},890:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),c=t(195),d=o()((function(n){return n[1]})),s=i()(c);d.push([n.id,"* {\n  color: white;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  height: 100%;\n}\n\n.bg {\n  background-image: url("+s+");\n  background-repeat: no-repeat;\n  background-size: cover;\n  max-width: 100%;\n  min-width: 300px;\n  height: 100%;\n  /* border: 2px solid red; */\n}\n\n#content {\n  height: 100%;\n}\n\n#nav {\n  display: flex;\n  justify-content: space-around;\n  height: 5vh;\n}\n\n.navElement {\n  margin-top: 0.5%;\n  color: white;\n  text-decoration: none;\n  font-size: x-large;\n}\n\n.navElement:visited {\n  text-decoration: none;\n  text-decoration-color: black;\n}\n\n.navElement:hover {\n  text-decoration: underline;\n  text-decoration-color: white;\n}\n\n.section-content {\n  margin-top: 3vh;\n  height: 92vh;\n  /* border: 5px solid purple; */\n}\n\n.article-header {\n  font-size: xx-large;\n  text-align: center;\n  height: 5%;\n}\n\n.article-p {\n  font-size: larger;\n  text-align: center;\n  width: 70%;\n  margin: 3% auto;\n}\n\n.album-wrapper {\n  width: 100%;\n  height: 95%;\n  /* border: 2px solid blue; */\n}\n\n.album-wrapper img {\n  width: 100%;\n  height: 41vh;\n  padding: 10px;\n}\n\n.album-wrapper img:hover {\n  border: 1px solid white;\n}\n\niframe {\n  position: absolute;\n  left: 50%;\n  bottom: 3em;\n  transform: translate(-50%);\n  /* margin-top: -50px; */\n}\n\n#footer {\n  position: fixed;\n  /* display: flex; */\n  /* margin: 0 auto; */\n  left: 0;\n  right: 0;\n  bottom: 1%;\n}\n\n#footer p {\n  text-align: center;\n}\n\n@media screen and (min-width: 426px) {\n  .album-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n\n  .album-wrapper img {\n    width: calc(99% / 2);\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .album-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n\n  .album-wrapper img {\n    width: calc(99% / 3);\n  }\n}\n",""]);const l=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],d=e.base?c[0]+e.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var p=i(l),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:l,updater:f(u,e),references:1}),r.push(l)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function u(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function f(n,e){var t,r,o;if(e.singleton){var a=m++;t=h||(h=d(e)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=d(e),r=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var d=c(n,e),s=0;s<t.length;s++){var l=i(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=d}}}},195:(n,e,t)=>{n.exports=t.p+"1e3dde11673ba042ca76.jpg"}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{const n=(n,e)=>{const t=document.createElement("a");return t.setAttribute("href","#"),t.setAttribute("id",n),t.classList.add("navElement"),t.textContent=e,t},e=()=>{const n=document.getElementById("section-content");n.classList.add("section-content"),n.textContent="";const e=(()=>{const n=document.createElement("article");n.classList.add("article");const e=document.createElement("header");e.classList.add("article-header"),e.textContent="Le Buffet",n.appendChild(e);const t=document.createElement("p");return t.classList.add("article-p"),t.textContent="Le Buffet was born in 1989 and has been administered by the Chef Masulini since then. The buffet offers the best food quality due to its Michelin star prestige. The best buffet by far in Mexico attracts culinary tourists from all around the world to try out the immense dish options that are found in the buffet.",n.appendChild(t),n})();n.appendChild(e)},r=(n,e="",t="")=>{const r=document.createElement("article");r.classList.add("article");const o=document.createElement("header");o.classList.add("article-header"),o.textContent=n,r.appendChild(o);const a=document.createElement("p");a.classList.add("article-p"),a.textContent=e,r.appendChild(a);const i=t;return r.innerHTML+=i,r},o=n=>{const e=document.createElement("img");return e.setAttribute("src",n),e};var a=t(379),i=t.n(a),c=t(434);i()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var d=t(890);i()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,(()=>{document.body.classList.add("bg");const e=document.getElementById("content"),t=(e=>{const t=document.createElement("nav");t.setAttribute("id","nav");const r=n("home","Home"),o=n("menu","Menu"),a=n("contact","Contact");return t.appendChild(r),t.appendChild(o),t.appendChild(a),t})();e.appendChild(t);const r=(n=>{const e=document.createElement("section");return e.setAttribute("id","section-content"),e})();e.appendChild(r);const o=((n,e)=>{const t=document.createElement("footer");t.setAttribute("id","footer");const r=document.createElement("p");return r.textContent="Created by Elias Castañeda - 2021",t.appendChild(r),t})();e.appendChild(o)})(),e();const s=document.getElementById("home"),l=document.getElementById("contact"),p=document.getElementById("menu");s.addEventListener("click",e),l.addEventListener("click",(()=>{const n=document.getElementById("section-content");n.textContent="";const e=r("Phone Number","625-123-6547");n.appendChild(e);const t=r("Location","",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4845118.1716643255!2d23.49195426169363!3d53.63305659478495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da2584e2ad4881%3A0xa1d181ec8c10!2sBelarus!5e0!3m2!1sen!2smx!4v1611564201582!5m2!1sen!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');n.appendChild(t)})),p.addEventListener("click",(()=>{const n=document.getElementById("section-content");n.textContent="";const e=(()=>{const n=document.createElement("article");n.classList.add("article");const e=document.createElement("header");return e.classList.add("article-header"),e.textContent="Our main dishes",n.appendChild(e),n})();n.appendChild(e);const t=(()=>{const n=document.createElement("div");return n.classList.add("album-wrapper"),n})();n.appendChild(t);const r=o("https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"),a=o("https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"),i=o("https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"),c=o("https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"),d=o("https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_1280.jpg"),s=o("https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg");t.appendChild(r),t.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(d),t.appendChild(s)}))})()})();