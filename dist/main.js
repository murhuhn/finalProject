(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.addEventListener("click",(s=>{s.target.closest(".fancyboxModal")?(e.classList.add("visible"),t.classList.add("visible")):(s.target.closest(".modal-close")||s.target.closest(".modal-overlay"))&&(e.classList.remove("visible"),t.classList.remove("visible"))}))})(),(()=>{const e=document.querySelector(".up");document.addEventListener("scroll",(()=>{window.pageYOffset>650?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}))})(),(()=>{const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const s=t.getAttribute("href").substr(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".top-slider").querySelectorAll(".item");let t=0;function s(){e[t].className="item",t=(t+1)%e.length,e[t].className="item-active"}setInterval(s,3e3),s()})(),(()=>{const e=document.querySelector(".accordeon").querySelectorAll(".element");e.forEach((t=>{t.addEventListener("click",(()=>{t.classList.contains("active")?(t.classList.remove("active"),t.childNodes[3].classList.remove("active")):(e.forEach((e=>{e.classList.remove("active"),e.childNodes[3].classList.remove("active")})),t.classList.add("active"),t.childNodes[3].classList.add("active"))}))}))})()})();