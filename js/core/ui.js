/* Navigation, footer, menu, contact form, media hover + fallbacks */
const links=N.map(([k,l])=>`<a class="nl" data-n="${k}" href="#/${k}">${l}</a>`).join('');$('#nv').innerHTML=links;$('#mm').innerHTML='<a href="#/">Home</a>'+N.map(([k,l])=>`<a href="#/${k}">${l}</a>`).join('');
$('footer').innerHTML=`<span>© ${new Date().getFullYear()} ORGANIZED CRIMES</span><nav aria-label="Footer">${links}<a class="nl" href="#/privacy">Privacy</a><a class="nl" href="#/terms">Terms</a></nav>`;
$('#bb').onclick=()=>{const o=document.body.classList.toggle('mo');$('#bb').setAttribute('aria-expanded',o)};
document.addEventListener('submit',e=>{if(e.target.id!='cf')return;e.preventDefault();const d=new FormData(e.target);location.href=`mailto:${C.email}?subject=${encodeURIComponent('Website message from '+d.get('n'))}&body=${encodeURIComponent(d.get('m')+'\n\n'+d.get('e'))}`});
document.addEventListener('mouseover',e=>{const v=e.target.closest('.card')?.querySelector('video');if(v)v.play()?.then(()=>v.style.opacity=1).catch(()=>{})});
document.addEventListener('mouseout',e=>{const v=e.target.closest('.card')?.querySelector('video');if(v){v.pause();v.style.opacity=0}});
/* Missing media: optional previews vanish, images/videos fall back to placeholders */
document.addEventListener('error',e=>{const t=e.target;if(!t.dataset||!['IMG','VIDEO'].includes(t.tagName))return;if('opt' in t.dataset)t.remove();else if(t.dataset.ph)t.outerHTML=ph(t.dataset.ph,t.dataset.v)},true);
if(!RM)addEventListener('scroll',()=>document.documentElement.style.setProperty('--sy',scrollY),{passive:true});
