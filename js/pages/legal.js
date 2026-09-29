/* Pages: privacy + terms */
['privacy','terms'].forEach(k=>R[k]=()=>`<section class="sec">${hd('Legal',k=='terms'?'Terms of use':'Privacy policy','Editable placeholder — have it reviewed by legal counsel.')}${C.legal[k].map(([h,t])=>`<div class="blk rv"><h3>${h}</h3><p>${t}</p></div>`).join('')}</section>`);
