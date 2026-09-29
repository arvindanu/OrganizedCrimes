/* Interactive logo.
   Rest: smooth transparent logo. Hover: it detonates, then the particles organise into a rotating "syndicate" reticle
   (concentric rings · crosshair · diamond) and react to the cursor. Leave: everything flows back into the logo. */
const lgImg=new Image();
let lgFail=0,pts=[],bigs=[],lgc,lx,W,hov=0,hovT=0,tm,rest=0,pf=0,mx=.5,my=.5;
const L=.6,M=.2,RR=[.12,.19,.26,.33,.40],TAU=Math.PI*2;
lgImg.onload=()=>{
  const S=360,o=document.createElement('canvas');o.width=o.height=S;const x=o.getContext('2d');x.drawImage(lgImg,0,0,S,S);
  let d;try{d=x.getImageData(0,0,S,S).data}catch(err){console.warn('Logo particles unavailable — see README.');lgFail=1;return lgInit()}
  for(let y=0;y<S;y+=ST)for(let X=0;X<S;X+=ST){const i=(y*S+X)*4;if((d[i]+d[i+1]+d[i+2])/3*d[i+3]/255>140){
    const hx=M+X/S*L,hy=M+y/S*L,a=Math.atan2(hy-.5,hx-.5)+(Math.random()-.5)*1.8,r=.05+Math.random()*.2,q=Math.random(),
    p={hx,hy,x:hx,y:hy,vx:0,vy:0,dx:Math.cos(a)*r,dy:Math.sin(a)*r,k:.01+Math.random()*.02,ph:Math.random()*TAU,dl:Math.random()*260,g:q<.66?0:q<.86?1:2,big:Math.random()<.1};
    if(p.g==0){p.ri=Math.random()*5|0;p.a0=Math.random()*TAU;p.sp=(p.ri%2?-1:1)*(.00016+.00005*p.ri)}
    else if(p.g==1){p.a0=(Math.random()*4|0)*Math.PI/2;p.rr=.05+Math.random()*.4}
    else p.u=Math.random()*4;
    pts.push(p);if(p.big)bigs.push(p)}}
  lgInit()};
lgImg.src=LOGO_DATA;
function lgInit(){lgc=$('#lg');if(!lgc)return;const d=Math.min(devicePixelRatio||1,2);W=lgc.clientWidth;lgc.width=lgc.height=W*d;lx=lgc.getContext('2d');lx.setTransform(d,0,0,d,0,0);lx.imageSmoothingQuality='high';rest=0;hov=0;
  lx.drawImage(lgImg,M*W,M*W,L*W,L*W);if(RM||lgFail)return;
  const w=$('#lgw'),pos=e=>{const r=w.getBoundingClientRect();mx=(e.clientX-r.left)/r.width;my=(e.clientY-r.top)/r.height},on=e=>{pos(e);if(!hov)hovT=performance.now();hov=1;rest=0};
  w.onpointerenter=e=>{if(e.pointerType=='mouse')on(e)};w.onpointerleave=e=>{if(e.pointerType=='mouse')hov=0};w.onpointermove=pos;
  w.onpointerdown=e=>{if(e.pointerType!='mouse'){on(e);clearTimeout(tm);tm=setTimeout(()=>hov=0,3200)}}}
function tick(t){requestAnimationFrame(tick);
  if(document.hidden||!lgc||!lgc.isConnected||!pts.length||RM||lgFail||(rest&&!hov))return;
  const r=lgc.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
  const age=Math.max(0,t-hovT),cx=.5+(mx-.5)*.05,cy=.5+(my-.5)*.05,rot=-t*.00009,vx=[],vy=[],pat=age>420;
  for(let i=0;i<4;i++){const a=rot+i*Math.PI/2;vx[i]=cx+Math.cos(a)*.43;vy[i]=cy+Math.sin(a)*.43}
  let e=0;
  for(const p of pts){let tx=p.hx,ty=p.hy;
    if(hov){if(age<420+p.dl){tx+=p.dx*1.2;ty+=p.dy*1.2;
        /* soft radial cap: the blast never gets near the canvas edges/corners */
        const bx=tx-.5,by=ty-.5,bd=Math.hypot(bx,by);if(bd>.2){const c=.2+.09*(1-Math.exp(-(bd-.2)/.09));tx=.5+bx*c/bd;ty=.5+by*c/bd}}
      else{if(p.g==0){const a=p.a0+p.sp*t,rr=RR[p.ri];tx=cx+Math.cos(a)*rr;ty=cy+Math.sin(a)*rr}
        else if(p.g==1){const a=p.a0+t*.00007;tx=cx+Math.cos(a)*p.rr;ty=cy+Math.sin(a)*p.rr}
        else{const s=p.u|0,f=p.u-s,n=(s+1)&3;tx=vx[s]+(vx[n]-vx[s])*f;ty=vy[s]+(vy[n]-vy[s])*f}
        tx+=Math.sin(t*.0012+p.ph)*.004;ty+=Math.cos(t*.001+p.ph)*.004;
        const ex=p.x-mx,ey=p.y-my,q=ex*ex+ey*ey;if(q<.0081&&q>0){const dd=Math.sqrt(q),f=(1-dd/.09)*.006;p.vx+=ex/dd*f;p.vy+=ey/dd*f}}}
    p.vx=(p.vx+(tx-p.x)*p.k)*.9;p.vy=(p.vy+(ty-p.y)*p.k)*.9;p.x+=p.vx;p.y+=p.vy;e+=Math.abs(p.x-p.hx)+Math.abs(p.y-p.hy)}
  e/=pts.length;pf+=((hov&&pat?1:0)-pf)*(hov?.04:.08);
  lx.clearRect(0,0,W,W);lx.globalAlpha=1;
  if(!hov&&e<.0004&&pf<.003){rest=1;lx.drawImage(lgImg,M*W,M*W,L*W,L*W);return}
  const a=Math.max(0,1-e*45);if(a>0){lx.globalAlpha=a;lx.drawImage(lgImg,M*W,M*W,L*W,L*W)}
  lx.save();lx.strokeStyle='#fff';lx.lineWidth=1;const c0=cx*W,c1=cy*W;
  if(pf>.01){lx.globalAlpha=pf*.13;lx.beginPath();for(const rr of RR){lx.moveTo(c0+rr*W,c1);lx.arc(c0,c1,rr*W,0,TAU)}
    for(let i=0;i<4;i++){const j=(i+1)&3,b=t*.00007+i*Math.PI/2,c=Math.cos(b),s=Math.sin(b);lx.moveTo(vx[i]*W,vy[i]*W);lx.lineTo(vx[j]*W,vy[j]*W);lx.moveTo(c0+c*.05*W,c1+s*.05*W);lx.lineTo(c0+c*.46*W,c1+s*.46*W)}lx.stroke();
    lx.globalAlpha=pf*.4;lx.beginPath();for(let i=0;i<72;i++){const b=i*TAU/72+t*.00004,c=Math.cos(b),s=Math.sin(b),r2=.40+(i%6?.009:.022);lx.moveTo(c0+c*.40*W,c1+s*.40*W);lx.lineTo(c0+c*r2*W,c1+s*r2*W)}lx.stroke()}
  if(hov&&age<900){const k=age/900;lx.globalAlpha=(1-k)*.5;lx.lineWidth=1.5;lx.beginPath();lx.arc(c0,c1,k*.36*W,0,TAU);lx.stroke()}
  lx.restore();
  const pa=Math.min(1,e*90),z=Math.max(1,W*L/360*ST*.7);lx.fillStyle='#fff';lx.globalAlpha=pa*.8;
  for(const p of pts)if(!p.big)lx.fillRect(p.x*W-z/2,p.y*W-z/2,z,z);
  for(const p of bigs){lx.globalAlpha=pa*(.55+.45*Math.sin(t*.004+p.ph));lx.beginPath();lx.arc(p.x*W,p.y*W,z*.9,0,TAU);lx.fill()}
  lx.globalAlpha=1}
requestAnimationFrame(tick);
