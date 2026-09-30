/* Pages: privacy + terms. Data lives in js/data/content.js (C.legal.privacy / C.legal.terms): { updated, intro?, sections:[[heading, body],…] }.
   "{email}" in a body becomes a link to the contact email. A body starting with "<" is used as HTML; plain text is wrapped in a paragraph. */
['privacy','terms'].forEach(k=>R[k]=()=>{
  const d=C.legal[k],mail=`<a href="mailto:${C.email}">${C.email}</a>`;
  return`<section class="sec">${hd('Legal',k=='terms'?'Terms of Use':'Privacy Policy',d.updated)}${d.intro?`<p class="rv" style="margin-bottom:40px">${d.intro}</p>`:''}${d.sections.map(([h,t])=>`<div class="blk rv"><h3>${h}</h3>${/^\s*</.test(t)?t:`<p>${t}</p>`}</div>`).join('').replace(/\{email\}/g,mail)}</section>`});
