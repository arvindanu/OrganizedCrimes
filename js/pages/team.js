/* Page: team */
R['team']=()=>`<section class="sec">${hd('People','Our team','The crew behind the work.')}<div class="g">${C.team.map((m,i)=>`<div class="team-card rv" style="--d:${i*.08}s"><div class="th" style="aspect-ratio:4/5">${im(m.img,'Team photo')}</div><div class="ci"><h3>${m.n}</h3><small>${m.r}</small><p>${m.bio}</p></div></div>`).join('')}</div></section>`;
