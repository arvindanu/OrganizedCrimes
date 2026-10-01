/* Ambient background — layered parallax in black / white / gold.
   Every element has a depth d: the bigger d, the more it moves with scroll and cursor (far layers barely move, near layers drift more).
     far : two huge soft gold lights + a few bokeh orbs
     mid : thin rings (one with reticle ticks), rotating diamonds, diagonal hairlines
     near: HUD plus-marks, gold light streaks, dust particles
   One canvas, one pre-rendered glow sprite, time-based motion, eased scroll/cursor input, paused when the tab is hidden,
   30fps on phones, a single static frame for reduced-motion. Alphas are kept very low so text contrast is never affected. */
(function(){
  const c=$('#bg'),x=c.getContext('2d'),DPR=MOB?1:Math.min(devicePixelRatio||1,1.5),TAU=Math.PI*2,rnd=Math.random,GOLD='232,196,96';
  let w=0,h=0,m=0,P=[],sy=0,px=0,py=0,tx=0,ty=0,gx=0,gy=0,moved=0,last=0;
  const B=Array.from({length:MOB?4:9},()=>({x:rnd(),y:rnd(),r:16+rnd()*34,a:.05+rnd()*.07,d:.05+rnd()*.1,ph:rnd()*TAU}));
  const K=Array.from({length:MOB?5:11},()=>({x:rnd(),y:rnd(),s:5+rnd()*5,a:.1+rnd()*.12,d:.1+rnd()*.14}));
  const spr=document.createElement('canvas');spr.width=spr.height=128;
  {const q=spr.getContext('2d'),r=q.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,`rgba(${GOLD},1)`);r.addColorStop(.35,`rgba(${GOLD},.26)`);r.addColorStop(1,`rgba(${GOLD},0)`);q.fillStyle=r;q.fillRect(0,0,128,128)}
  const wrap=(v,s)=>{const H=h+2*s;return((v%H)+H)%H-s};              /* endless vertical wrap, off-screen at the seam */
  const ox=d=>-px*d*180,oy=d=>-py*d*110-sy*d;                           /* depth → cursor / scroll offset */
  const X=(n,d)=>n*w+ox(d),Y=(n,d,s)=>wrap(n*h+oy(d),s);
  const orb=(a,b,r,al)=>{x.globalAlpha=al;x.drawImage(spr,a-r,b-r,r*2,r*2)};
  function ring(nx,ny,r,d,a,col,t,ticks){const a0=X(nx,d),b0=Y(ny,d,r);x.strokeStyle=`rgba(${col},${a})`;x.beginPath();x.arc(a0,b0,r,0,TAU);x.stroke();
    if(ticks){x.strokeStyle=`rgba(${col},${a*2})`;x.beginPath();for(let i=0;i<72;i++){const A=i*TAU/72+t*.00002+sy*.0002,co=Math.cos(A),si=Math.sin(A),l=i%6?5:11;x.moveTo(a0+co*r,b0+si*r);x.lineTo(a0+co*(r+l),b0+si*(r+l))}x.stroke()}}
  function dia(nx,ny,r,d,a,col,rot){const a0=X(nx,d),b0=Y(ny,d,r);x.strokeStyle=`rgba(${col},${a})`;x.beginPath();
    for(let i=0;i<4;i++){const A=rot+i*Math.PI/2,u=a0+Math.cos(A)*r,v=b0+Math.sin(A)*r;i?x.lineTo(u,v):x.moveTo(u,v)}x.closePath();x.stroke()}
  function draw(t,dt){
    x.clearRect(0,0,w,h);x.lineWidth=1;
    /* far */
    const br=1+.04*Math.sin(t*.0003);
    orb(X(.16,.03),Y(.2,.03,m),.55*m*br,.075);orb(X(.86,.04),Y(.74,.04,m),.5*m*(2-br),.06);
    for(const b of B){const r=b.r*(m>600?1:.75);orb(X(b.x,b.d),Y(b.y,b.d,r),r,b.a*(.75+.25*Math.sin(t*.0008+b.ph)))}
    /* mid */
    x.globalAlpha=1;x.strokeStyle=`rgba(${GOLD},.07)`;x.beginPath();const W2=w+h*.6;
    for(let i=0;i<4;i++){const d=.04+i*.03,o=(((w*(.15+i*.24)+ox(d)-sy*d*.4)%W2)+W2)%W2;x.moveTo(o,0);x.lineTo(o-h*.6,h)}x.stroke();
    ring(.8,.2,.3*m,.06,.07,GOLD,t,1);dia(.7,.66,.24*m,.12,.08,GOLD,t*.00004+sy*.0003);
    if(!MOB){ring(.1,.82,.2*m,.09,.06,'255,255,255',t);dia(.2,.32,.08*m,.17,.09,'255,255,255',-t*.00005)}
    /* near */
    x.strokeStyle='#fff';for(const k of K){const a0=X(k.x,k.d),b0=Y(k.y,k.d,20);x.globalAlpha=k.a;x.beginPath();x.moveTo(a0-k.s,b0);x.lineTo(a0+k.s,b0);x.moveTo(a0,b0-k.s);x.lineTo(a0,b0+k.s);x.stroke()}
    for(const[nx,d] of [[.32,.2],[.74,.28]]){const L=.22*h,a0=X(nx,d),b0=wrap(h*.6+oy(d)*1.4,L),g=x.createLinearGradient(a0-L*.5,b0-L*.87,a0+L*.5,b0+L*.87);
      g.addColorStop(0,`rgba(${GOLD},0)`);g.addColorStop(.5,`rgba(${GOLD},.2)`);g.addColorStop(1,`rgba(${GOLD},0)`);x.globalAlpha=1;x.strokeStyle=g;x.beginPath();x.moveTo(a0-L*.5,b0-L*.87);x.lineTo(a0+L*.5,b0+L*.87);x.stroke()}
    x.globalAlpha=1;
    for(const p of P){if(dt)p.y-=p.s*dt;if(p.y<-4){p.y=h+4;p.x=rnd()*w}const d=.03+p.r*.05;
      x.fillStyle=p.g?`rgba(240,205,110,${Math.min(1,p.a+.25)})`:`rgba(255,255,255,${p.a})`;x.fillRect(p.x+ox(d)*.6,wrap(p.y-sy*d-py*d*110,4),p.r,p.r)}
  }
  function size(){const W=innerWidth,H=innerHeight;
    if(w){const a=W/w,b=H/h;P.forEach(p=>{p.x*=a;p.y*=b})}else P=Array.from({length:MOB?26:64},()=>({x:rnd()*W,y:rnd()*H,r:rnd()*1.3+.3,s:rnd()*.3+.05,a:rnd()*.4+.1,g:rnd()<.14}));
    w=W;h=H;m=Math.min(W,H);c.width=W*DPR;c.height=H*DPR;x.setTransform(DPR,0,0,DPR,0,0);if(RM)draw(0,0)}
  function frame(t){requestAnimationFrame(frame);if(document.hidden)return;
    const el=t-last;if(MOB&&el<30)return;last=t;const dt=Math.min(3,el/16.67);
    sy+=(scrollY-sy)*Math.min(1,.07*dt);px+=(tx-px)*Math.min(1,.05*dt);py+=(ty-py)*Math.min(1,.05*dt);
    if(moved){moved=0;const s=document.body.style;s.setProperty('--mx',gx+'px');s.setProperty('--my',gy+'px')}   /* cursor glow (.gl) */
    draw(t,dt)}
  size();addEventListener('resize',size);
  if(!RM){addEventListener('pointermove',e=>{tx=e.clientX/w*2-1;ty=e.clientY/h*2-1;gx=e.clientX;gy=e.clientY;moved=1},{passive:true});requestAnimationFrame(frame)}
})();
