import{a as m,S as u,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="51538469-8b3be560c440e4726340ee2f6";async function g(i){const t={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(f,{params:t})).data}const n=document.querySelector(".loader-wrapper"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(i,t){const s=L(i);t.insertAdjacentHTML("beforeend",s),l(),y.refresh()}function b(i){i.innerHTML=""}const v=()=>{n&&n.classList.remove("is-hidden")},l=()=>{n&&n.classList.add("is-hidden")};function L(i){return i.map(({webformatURL:t,largeImageURL:s,tags:o,likes:e,views:r,comments:a,downloads:d})=>`
      <li class="gallery-item">
        <a href="${s}" class="gallery-link">
          <img src="${t}" alt="${o}" class="gallery-image" />
        </a>
        <div class="image-info">
          <div class="image-info-item"><b>Likes</b><span>${e}</span></div>
          <div class="image-info-item"><b>Views</b><span>${r}</span></div>
          <div class="image-info-item"><b>Comments</b><span>${a}</span></div>
          <div class="image-info-item"><b>Downloads</b><span>${d}</span></div>
        </div>
      </li>
    `).join("")}function w(){const i=document.querySelector(".form"),t=document.querySelector(".gallery");if(!i||!t){console.error("Form or gallery element not found");return}i.addEventListener("submit",async s=>{s.preventDefault();const o=i.elements["search-text"].value.trim();if(!o){c.info({message:"Please enter a search term.",position:"topRight"});return}b(t),v();try{const e=await g(o);if(!e.hits.length){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits,t)}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{l()}})}w();
//# sourceMappingURL=index.js.map
