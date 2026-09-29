/* Page: news */
R['news']=()=>`<section class="sec">${hd('Newsroom','News & updates')}${C.news.map(([d,t,x])=>`<article class="li rv"><time datetime="${d}">${d}</time><div><h3>${t}</h3><p>${x}</p></div></article>`).join('')}</section>`;
