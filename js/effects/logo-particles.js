/* Particle logo */
const lgImg=new Image();let lgFail=0,pts=[],lgc,lx,W,hov=0,tm,L=.6,M=.2;
lgImg.onload=()=>{const S=360,o=document.createElement('canvas');o.width=o.height=S;const x=o.getContext('2d');x.drawImage(lgImg,0,0,S,S);let d;try{d=x.getImageData(0,0,S,S).data}catch(err){console.warn('Logo particles need http(s), not file:// — see README.');lgFail=1;return lgInit()}
 for(let y=0;y<S;y+=ST)for(let X=0;X<S;X+=ST)if(d[(y*S+X)*4]>140){const hx=M+X/S*L,hy=M+y/S*L,a=Math.atan2(hy-.5,hx-.5)+(Math.random()-.5)*1.8,r=.04+Math.random()*.17;pts.push({hx,hy,x:hx,y:hy,vx:0,vy:0,dx:Math.cos(a)*r,dy:Math.sin(a)*r,k:.008+Math.random()*.02,ph:Math.random()*6.3})}
 lgInit()};lgImg.src=LOGO_DATA;
function lgInit(){lgc=$('#lg');if(!lgc)return;const d=Math.min(devicePixelRatio||1,2);W=lgc.clientWidth;lgc.width=lgc.height=W*d;lx=lgc.getContext('2d');lx.setTransform(d,0,0,d,0,0);
 if(RM||lgFail){lx.drawImage(lgImg,M*W,M*W,L*W,L*W);return}
 const w=$('#lgw');w.onpointerenter=e=>{if(e.pointerType=='mouse')hov=1};w.onpointerleave=e=>{if(e.pointerType=='mouse')hov=0};
 w.onpointerdown=e=>{if(e.pointerType!='mouse'){hov=1;clearTimeout(tm);tm=setTimeout(()=>hov=0,1800)}}}
function tick(t){requestAnimationFrame(tick);if(document.hidden||!lgc||!lgc.isConnected||!pts.length||RM)return;const r=lgc.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
 let e=0;const z=Math.max(1.2,W*L/360*ST*1.05);
 for(const p of pts){const tx=hov?p.hx+p.dx+Math.sin(t*.0012+p.ph)*.02:p.hx,ty=hov?p.hy+p.dy+Math.cos(t*.001+p.ph)*.02:p.hy;
  p.vx=(p.vx+(tx-p.x)*p.k)*.9;p.vy=(p.vy+(ty-p.y)*p.k)*.9;p.x+=p.vx;p.y+=p.vy;e+=Math.abs(p.x-p.hx)+Math.abs(p.y-p.hy)}
 const a=Math.max(0,1-e/pts.length*45);lx.clearRect(0,0,W,W);if(a>0){lx.globalAlpha=a;lx.drawImage(lgImg,M*W,M*W,L*W,L*W)}
 lx.globalAlpha=1;lx.fillStyle='#fff';for(const p of pts)lx.fillRect(p.x*W,p.y*W,z,z)}
requestAnimationFrame(tick);
