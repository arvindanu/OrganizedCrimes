/* Subtle 3D tilt (mouse on desktop only) for the hero emblem and the founder portrait only — cards use the gentle zoom in css/depth.css.
   They lean a few degrees toward the cursor with a perspective transform. Off for touch devices and reduced-motion.
   Transform-only, rAF-throttled, will-change only while hovered. */
(function(){
  if(RM||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;
  const SEL='.pt,#lgw';let cur=null,raf=0,ev=null;
  const tgt=el=>el.id=='lgw'?el.querySelector('#lg'):el,max=el=>el.id=='lgw'?7:el.classList.contains('pt')?4:5;
  function reset(el){const t=tgt(el);if(t){t.style.transform='';t.style.willChange=''}}
  function apply(){raf=0;if(!cur||!cur.isConnected||!ev)return;const r=cur.getBoundingClientRect(),nx=(ev.clientX-r.left)/r.width,ny=(ev.clientY-r.top)/r.height,m=max(cur),t=tgt(cur);
    if(!t)return;t.style.transform=`perspective(900px) rotateX(${((.5-ny)*2*m).toFixed(2)}deg) rotateY(${((nx-.5)*2*m).toFixed(2)}deg)`;}
  document.addEventListener('pointermove',e=>{if(e.pointerType!='mouse')return;const el=e.target.closest(SEL);
    if(el!==cur){if(cur)reset(cur);cur=el;if(el){const t=tgt(el);if(t){t.classList.add('tilt-on');t.style.willChange='transform'}}}
    ev=e;if(cur&&!raf)raf=requestAnimationFrame(apply)},{passive:true});
  document.documentElement.addEventListener('mouseleave',()=>{if(cur){reset(cur);cur=null}});
})();
