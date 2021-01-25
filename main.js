(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("a");return n.setAttribute("href","#"),n.setAttribute("id",e),n.classList.add("navElement"),n.textContent=t,n},t=()=>{const e=document.getElementById("section-content");e.classList.add("section-content"),e.textContent="";const t=(()=>{const e=document.createElement("article");e.classList.add("article");const t=document.createElement("header");t.classList.add("article-header"),t.textContent="Le Buffet",e.appendChild(t);const n=document.createElement("p");return n.classList.add("article-p"),n.textContent="Le Buffet was born in 1989 and has been administered by the Chef Masulini since then. The buffet offers the best food quality due to its Michelin star prestige. The best buffet by far in Mexico attracts culinary tourists from all around the world to try out the immense dish options that are found in the buffet.",e.appendChild(n),e})();e.appendChild(t)},n=(e,t="",n="")=>{const d=document.createElement("article");d.classList.add("article");const a=document.createElement("header");a.classList.add("article-header"),a.textContent=e,d.appendChild(a);const c=document.createElement("p");c.classList.add("article-p"),c.textContent=t,d.appendChild(c);const o=n;return d.innerHTML+=o,d};function d(e){const t=document.createElement("div");t.classList.add("menu-photo");const n=document.createElement("img");return n.setAttribute("src",e),t.appendChild(n),t}(()=>{document.body.classList.add("bg");const t=document.getElementById("content"),n=(t=>{const n=document.createElement("nav");n.setAttribute("id","nav");const d=e("home","Home"),a=e("menu","Menu"),c=e("contact","Contact");return n.appendChild(d),n.appendChild(a),n.appendChild(c),n})();t.appendChild(n);const d=(e=>{const t=document.createElement("section");return t.setAttribute("id","section-content"),t})();t.appendChild(d);const a=((e,t)=>{const n=document.createElement("footer");n.setAttribute("id","footer");const d=document.createElement("p");return d.textContent="Created by Elias Castañeda - 2021",n.appendChild(d),n})();t.appendChild(a)})(),t();const a=document.getElementById("home"),c=document.getElementById("contact"),o=document.getElementById("menu");a.addEventListener("click",t),c.addEventListener("click",(()=>{const e=document.getElementById("section-content");e.textContent="";const t=n("Phone Number","625-123-6547");e.appendChild(t);const d=n("Location","",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4845118.1716643255!2d23.49195426169363!3d53.63305659478495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da2584e2ad4881%3A0xa1d181ec8c10!2sBelarus!5e0!3m2!1sen!2smx!4v1611564201582!5m2!1sen!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');e.appendChild(d)})),o.addEventListener("click",(function(){const e=document.getElementById("section-content");e.textContent="";const t=function(){const e=document.createElement("article");e.classList.add("menu-article");const t=document.createElement("header");return t.classList.add("menu-header"),t.textContent="Our main dishes",e.appendChild(t),e}();e.appendChild(t);const n=d("https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"),a=d("https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"),c=d("https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"),o=d("https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"),s=d("https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_1280.jpg"),i=d("https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg");e.appendChild(n),e.appendChild(a),e.appendChild(c),e.appendChild(o),e.appendChild(s),e.appendChild(i)}))})();