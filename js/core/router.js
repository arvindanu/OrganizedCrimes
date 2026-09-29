/* Hash router with page-transition curtain + scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
let first=1;
function route(){const[p='',id]=location.hash.replace(/^#\/?/,'').split('/');const f=R[p]||R[''];
 const set=()=>{document.title=(p&&R[p]?p[0].toUpperCase()+p.slice(1)+' — ':'')+'ORGANIZED CRIMES';$('#app').innerHTML=f(id);scrollTo(0,0);
  document.querySelectorAll('.rv').forEach(e=>io.observe(e));document.querySelectorAll('[data-n]').forEach(a=>a.toggleAttribute('aria-current',a.dataset.n==p));
  document.body.classList.remove('mo');$('#bb').setAttribute('aria-expanded',false);lgInit();$('#cur').classList.remove('on')};
 if(first||RM){first=0;set()}else{$('#cur').classList.add('on');setTimeout(set,460)}}
addEventListener('hashchange',route);
