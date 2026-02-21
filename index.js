import{S as u,a as f,i as a}from"./assets/vendor-DwMeSIBD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img 
          src="${e.webformatURL}" 
          alt="${e.tags}"
        >
      </a>
      <ul class="info">
      <li class="info-item"> 
      <b>Likes</b>
          ${e.likes}
      </li>
      <li class="info-item"><b>Views</b>
          ${e.views}
      </li>
       <li class="info-item"><b>Comments</b>
          ${e.comments}
      </li>
       <li class="info-item"><b>Downloads</b>
          ${e.downloads}
      </li>
      </ul>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),d.refresh()}function y(){l.innerHTML=""}function p(){c.classList.remove("hidden")}function h(){c.classList.add("hidden")}const g="54666795-342cd36b10c863945e9f956f4";async function b(s){const o="https://pixabay.com/api/",e={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(o,{params:e})).data}const L=document.querySelector(".form");L.addEventListener("submit",w);async function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter search text!"});return}y(),p();try{const e=await b(o);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(e.hits)}catch{a.error({message:"Error loading images"})}finally{h()}}
//# sourceMappingURL=index.js.map
