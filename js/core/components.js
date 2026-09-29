/* Reusable render helpers: placeholders, images, video, headings, game cards */
const ph=(l,v)=>v?`<div class="ph vid" role="img" aria-label="${l} placeholder"><i></i><span style="position:absolute;bottom:14px">${l}</span></div>`:`<div class="ph" role="img" aria-label="${l} placeholder">${l}</div>`;
const im=(s,l)=>s?`<img loading="lazy" src="${s}" alt="${l}" data-ph="${l}">`:ph(l);
const vd=(s,l)=>s?`<video controls preload="none" playsinline src="${s}" data-ph="${l}" data-v="1"></video>`:ph(l,1);
const hd=(e,t,s='')=>`<div class="hh"><p class="ey rv">${e}</p><h1 class="rv">${t}</h1>${s?`<p class="sf rv">${s}</p>`:''}</div>`;
const card=(g,i)=>`<a class="card rv" style="--d:${i*.08}s" href="#/games/${g.id}"><div class="th">${im(g.img,'Screenshot / artwork 16:10')}${g.video?`<video class="pv" data-opt muted loop playsinline preload="none" src="${g.video}"></video>`:''}<em>Preview</em></div><div class="ci"><small>${g.genre}</small><h3>${g.title}</h3><p>${g.desc}</p><div class="row"><b>${g.status}</b><span>View details</span></div></div></a>`;
