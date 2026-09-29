/* Ambient background */
(function(){const c=$('#bg'),x=c.getContext('2d');let w,h,P,mx=.5,my=.5;
 const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight;P=Array.from({length:MOB?26:64},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.3+.3,s:Math.random()*.3+.05,a:Math.random()*.4+.1}))};rs();addEventListener('resize',rs);
 addEventListener('pointermove',e=>{mx=e.clientX/w;my=e.clientY/h;const s=document.body.style;s.setProperty('--mx',e.clientX+'px');s.setProperty('--my',e.clientY+'px')},{passive:true});
 function d(){x.clearRect(0,0,w,h);x.strokeStyle='rgba(255,255,255,.055)';for(let i=0;i<4;i++){const o=w*(.15+i*.24)+(mx-.5)*30*(i+1);x.beginPath();x.moveTo(o,0);x.lineTo(o-h*.6,h);x.stroke()}
  x.beginPath();x.arc(w/2,h/2,Math.min(w,h)*.42,0,6.3);x.strokeStyle='rgba(255,255,255,.04)';x.stroke();
  for(const p of P){p.y-=p.s;if(p.y<-4){p.y=h+4;p.x=Math.random()*w}x.fillStyle=`rgba(255,255,255,${p.a})`;x.fillRect(p.x+(mx-.5)*p.r*26,p.y+(my-.5)*p.r*10,p.r,p.r)}}
 function f(){requestAnimationFrame(f);if(!document.hidden)d()}RM?d():f()})();
