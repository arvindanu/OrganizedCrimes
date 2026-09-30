/* Page: founder */
R['founder']=()=>{const f=C.founder;return`<section class="sec"><div class="two" style="align-items:center"><div class="pt th">${im(f.photo,'Portrait of '+f.name)}</div><div><p class="ey rv">${f.role}</p><h1 class="rv">${f.name}</h1><br>${f.bio.map(b=>`<p class="rv" style="margin-bottom:18px">${b}</p>`).join('')}<p class="sf rv">${f.vision}</p></div></div></section>`};
