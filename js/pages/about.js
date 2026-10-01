/* Page: about */
R['about']=()=>`<section class="sec">${hd('About','The syndicate','A studio built like a crew: small, loyal, precise.')}<div class="two">${C.about.map(([h,t],i)=>`<div class="blk rv" style="--d:${(i%2)*.1}s"><h3>${h}</h3><p>${t}</p></div>`).join('')}</div></section>`;
