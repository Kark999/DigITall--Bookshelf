import{f as c,i as E,a as x,b as M,e as i,r as l,c as s,d as k,g as h,h as B,u as $,s as A,j as T}from"./assets/showHideFn-bdab7341.js";import{b as I}from"./assets/vendor-389f7b34.js";function f(t,e){const a=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(t.target.textContent.toLowerCase().includes("add"))a.push(e),localStorage.setItem("cart",JSON.stringify(a));else{const o=a.findIndex(n=>n._id===e._id);a.splice(o,1),localStorage.setItem("cart",JSON.stringify(a))}}function y(t){const e=_();return e?e.some(a=>a._id===t._id):!1}function _(){return JSON.parse(localStorage.getItem("cart"))||[]}const d="Add to shopping list",u="Remove from the shopping list",v='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',C="",D="No description has been added to this book";let m;async function W(t){const e=t.target.dataset.id,a=await c(e);return m=a,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${E}#x-close></use></svg></button>

        <div class="modal-book-wrapper">
        <img
          class="modal-img"
          src="${a.book_image}"
          alt="${a.title}"
          width="287"
          height="408"/>
        <div class="modal-book-desc-wrapper">
        <h2 class="modal-book-title">${a.title}</h2>
        <h3 class="modal-book-author">${a.author}</h3>
        <p class="modal-book-desc">${a.description?a.description:D}</p>
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${a.buy_links[0].url}
          target="_blank">
        <img
          class="modal-link-amazon-icon"
          src=${x}
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${a.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${M}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>
        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${y(a)?u:d}</button>
          <p class="modal-text make-visible">${y(a)?v:C}</p>
        </div></div>`}async function b(t){if(t.target===t.currentTarget)return;const e=await W(t);I.create(e,{onClose:N()}).show(q)}function q(t){g(),document.body.classList.add("scroll-ban");const e=t.element().querySelector(".modal-button-close"),a=t.element().querySelector(".add-remove-button");e.addEventListener("click",()=>t.close()),a.addEventListener("click",O),window.addEventListener("resize",g)}function N(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",g)}}function O(t){t.currentTarget.textContent===d?(f(t,m),t.currentTarget.textContent=u,t.currentTarget.nextElementSibling.textContent=v):t.currentTarget.textContent===u&&(f(t,m),t.currentTarget.textContent=d,t.currentTarget.nextElementSibling.textContent=C)}function g(){const t=document.querySelector(".basicLightbox"),e=document.querySelector(".modal-container");window.innerHeight<e.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}function H(t){return t.map(e=>{const a=e.list_name.split(" ");a[a.length-1]=`<span>${a[a.length-1]}</span>`;const o=`<h2 class="category-title">${a.join(" ")}</h2>`,n=k(e.books,h),r=B("see-more-button","See more",e.list_name);return o+n+r}).join("")}async function L(){const t=await c(i.topbooks),e=H(t);l(s.mainCatWrap,e,b)}j();s.catList.addEventListener("click",R);async function j(){const t=await c(i.list),e=z(t);l(s.catList,e)}function z(t){const e='<li class="sidebar-category-item"><p class="sidebar-category-text make-blue">All categories</p></li>',a=t.map(n=>`<li class="sidebar-category-item" data-category="${n.list_name}"><p class="sidebar-category-text" data-category="${n.list_name}">${n.list_name}</p></li>`).join("");return e+a}function w(t){t.target.nodeName==="LI"?(t.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(a=>{a.classList.remove("make-blue")}),t.target.firstElementChild.classList.add("make-blue")):t.target.nodeName==="P"&&(t.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(a=>{a.classList.remove("make-blue")}),t.target.classList.add("make-blue"))}async function R(t){if(t.target===t.currentTarget)return;if(!t.target.dataset.category){s.mainTitle.innerHTML="Best Sellers <span>Books</span>",w(t),L();return}w(t);const e=t.target.dataset.category.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`,s.mainTitle.innerHTML=e.join(" ");const a=await c(i.category,t.target.dataset.category),o=k(a,h);l(s.mainCatWrap,o,b),document.querySelectorAll(".main-category-item").forEach(r=>showElement(r))}const p=document.querySelector(".button-up");p.addEventListener("click",S);window.addEventListener("scroll",J);function J(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e?p.classList.add("button-up--show"):p.classList.remove("button-up--show")}function S(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(S,0))}$();A("header-nav-link-home");L();s.mainCatWrap.addEventListener("click",F);async function F(t){if(!t.target.dataset.category)return;const e=t.target.dataset.category.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`,s.mainTitle.innerHTML=e.join(" ");const a=await c(i.category,t.target.dataset.category),o=k(a,h);l(s.mainCatWrap,o,b),document.querySelectorAll(".main-category-item").forEach(r=>T(r))}
//# sourceMappingURL=commonHelpers.js.map
