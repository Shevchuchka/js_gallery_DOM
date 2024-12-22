var e=document.querySelector(".gallery__large-img");document.querySelector(".gallery__list").addEventListener("click",function(t){var r=t.target.closest(".list-item__link"),l=t.target.closest(".gallery__thumb");if(t.preventDefault(),r&&l){var i=r.getAttribute("href");e.removeAttribute("src"),e.setAttribute("src",i)}});
//# sourceMappingURL=index.4151bf8c.js.map
