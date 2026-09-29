/* Core config: helpers, nav items, page registry */
const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches,MOB=matchMedia('(max-width:800px)').matches,ST=MOB?5:3;
const N=[['about','About'],['games','Our Games'],['founder','Founder'],['team','Team'],['news','News'],['careers','Careers'],['contact','Contact']];
const R={}; /* page registry — each js/pages/*.js adds R[route] */
