(()=>{"use strict";const t=(t,e)=>{const n=document.createElement("a");return n.setAttribute("href","#"),n.setAttribute("id",t),n.classList.add("navElement"),n.textContent=e,n},e=()=>{const t=document.getElementById("section-content");t.classList.add("section-content"),t.textContent="";const e=(()=>{const t=document.createElement("article");t.classList.add("article");const e=document.createElement("header");e.classList.add("article-header"),e.textContent="Le Buffet",t.appendChild(e);const n=document.createElement("p");return n.classList.add("article-p"),n.textContent="Le Buffet was born in 1989 and has been administered by the Chef Masulini since then. The buffet offers the best food quality due to its Michelin star prestige. The best buffet by far in Mexico attracts culinary tourists from all around the world to try out the immense dish options that are found in the buffet.",t.appendChild(n),t})();t.appendChild(e)},n=(t,e="",n="")=>{const d=document.createElement("article");d.classList.add("article");const a=document.createElement("header");a.classList.add("article-header"),a.textContent=t,d.appendChild(a);const c=document.createElement("p");c.classList.add("article-p"),c.textContent=e,d.appendChild(c);const o=n;return d.innerHTML+=o,d};function d(t){const e=document.createElement("img");return e.setAttribute("src",t),e}(()=>{document.body.classList.add("bg");const e=document.getElementById("content"),n=(e=>{const n=document.createElement("nav");n.setAttribute("id","nav");const d=t("home","Home"),a=t("menu","Menu"),c=t("contact","Contact");return n.appendChild(d),n.appendChild(a),n.appendChild(c),n})();e.appendChild(n);const d=(t=>{const e=document.createElement("section");return e.setAttribute("id","section-content"),e})();e.appendChild(d);const a=((t,e)=>{const n=document.createElement("footer");n.setAttribute("id","footer");const d=document.createElement("p");return d.textContent="Created by Elias Castañeda - 2021",n.appendChild(d),n})();e.appendChild(a)})(),e();const a=document.getElementById("home"),c=document.getElementById("contact"),o=document.getElementById("menu");a.addEventListener("click",e),c.addEventListener("click",(()=>{const t=document.getElementById("section-content");t.textContent="";const e=n("Phone Number","625-123-6547");t.appendChild(e);const d=n("Location","",'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4845118.1716643255!2d23.49195426169363!3d53.63305659478495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da2584e2ad4881%3A0xa1d181ec8c10!2sBelarus!5e0!3m2!1sen!2smx!4v1611564201582!5m2!1sen!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');t.appendChild(d)})),o.addEventListener("click",(function(){const t=document.getElementById("section-content");t.textContent="";const e=function(){const t=document.createElement("article");t.classList.add("article");const e=document.createElement("header");return e.classList.add("article-header"),e.textContent="Our main dishes",t.appendChild(e),t}();t.appendChild(e);const n=function(){const t=document.createElement("div");return t.classList.add("album-wrapper"),t}();t.appendChild(n);const a=d("https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"),c=d("https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"),o=d("https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"),s=d("https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"),i=d("https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_1280.jpg"),r=d("https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg");n.appendChild(a),n.appendChild(c),n.appendChild(o),n.appendChild(s),n.appendChild(i),n.appendChild(r)}))})();