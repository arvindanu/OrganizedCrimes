/* Keeps the mobile hero title ("ORGANIZED CRIMES") on a single line: the CSS font size is used as-is unless the two words would
   overflow the screen, in which case the font shrinks just enough to fit. Desktop is untouched. */
function fitTitle(){const t=$('.ttl');if(!t)return;t.style.fontSize='';
  if(!matchMedia('(max-width:900px)').matches)return;
  const kids=[...t.children],fs=parseFloat(getComputedStyle(t).fontSize),pad=parseFloat(getComputedStyle($('.hero')).paddingLeft)||0,
    need=kids.reduce((a,k)=>a+k.getBoundingClientRect().width,0)+.26*fs*(kids.length-1),
    room=Math.min(t.parentElement.clientWidth,document.documentElement.clientWidth-2*pad);
  if(need>room)t.style.fontSize=(fs*room/need*.98)+'px'}
addEventListener('resize',fitTitle);
if(document.fonts){document.fonts.ready.then(fitTitle);document.fonts.addEventListener('loadingdone',fitTitle)}
