/* Games data. To add a game: add one G('id','Title','Genre','Status','Description') line to GAMES.
   Media convention (just drop files in — missing files fall back to placeholders automatically):
     assets/images/games/<id>/cover.jpg , shot-1.jpg … shot-4.jpg
     assets/videos/games/<id>/trailer.mp4
   Override any field: Object.assign(G(...),{release:'2027',platform:'PC'}) */
const G=(id,title,genre,status,desc)=>({
  id,title,genre,status,desc,
  img:`assets/images/games/${id}/cover.jpg`,
  video:`assets/videos/games/${id}/trailer.mp4`,
  gallery:[1,2,3,4].map(n=>`assets/images/games/${id}/shot-${n}.jpg`),
  platform:'PC / Console',players:'Single-player',release:'TBA',
  long:'Placeholder — write the full gameplay description here: the core loop, the fantasy, what makes a session memorable.',
  features:['Signature feature one — describe it here','Signature feature two — describe it here','Signature feature three — describe it here']
});
/* Media finder: tries assets/, assets/images|videos/ and the game's own folder, with common extensions, so files named
   e.g. fl1.png / flmov.mp4 are picked up wherever you drop them. Usage: media('fl1','flipside')  ·  media('flmov','flipside',1) */
const media=(name,id,video)=>(video?['assets/','assets/videos/',`assets/videos/games/${id}/`]:['assets/','assets/images/',`assets/images/games/${id}/`]).flatMap(d=>(video?['mp4','webm','mov','MP4','MOV']:['png','jpg','jpeg','webp','PNG','JPG','JPEG']).map(x=>`${d}${name}.${x}`));
const GAMES=[
  Object.assign(G('flipside','Codename: Flipside','2D Arcade Runner','Developed','Flipside is a fast-paced, retro-inspired 2D arcade game.'),{
    platform:'PC / Web / Mobile',release:'29-09-2026',
    img:media('fl1','flipside'),video:media('flmov','flipside',1),
    gallery:['fl1','fl2','fl3'].map(n=>media(n,'flipside')),
    long:'In Flipside, you control a small character moving continuously through an ever-changing environment. Survive by switching between the floor and ceiling, avoiding obstacles, collecting coins, maintaining your Soul, and moving forward. The difficulty increases as your score rises, requiring faster reactions and better timing.<span class="sf" style="display:block">How far can you flip?</span>',
    features:[
      '<b>Flip Movement:</b> Switch between floor and ceiling to avoid obstacles.',
      '<b>Soul System:</b> Soul is your survival resource; coins restore it while gameplay gradually drains it.',
      '<b>Coins:</b> Collect coins throughout the level.',
      '<b>Boost:</b> Temporarily increase speed and enter an intense gameplay section.',
      '<b>Unlockable Maps:</b> Earn points to unlock new environments.',
      '<b>Unlockable Sprites:</b> Unlock different playable character appearances.',
      '<b>Progressive Difficulty:</b> The longer you survive, the harder the game becomes.',
      '<b>Dynamic Audio:</b> Background music and sound effects for coins, Boost, low Soul, collisions, movement, and other important events.']}),
  Object.assign(G('dont-look-back','Codename: Don’t Look Back','2D Arcade Runner','BETA (In Development)','A dark, cinematic 2D psychological-horror survival runner.'),{
    platform:'PC / Web / Mobile',release:'30-09-2026',
    img:media('dl1','dont-look-back'),video:media('dlmov','dont-look-back',1),
    gallery:['dl1','dl2','dl3'].map(n=>media(n,'dont-look-back')),
    long:'In Don’t Look Back, you control a character running continuously through a dark and mysterious world. Something is always following you. You can turn around and look at it, but the longer you look, the closer it gets. Survive by keeping moving, avoiding danger, and resisting the urge to look back.<span class="sf" style="display:block">How long can you keep running?</span>',
    features:[
      '<b>Automatic Running:</b> Keep moving forward as the character runs continuously.',
      '<b>The Presence:</b> Something is always following you, creating constant tension.',
      '<b>Don’t Look Back:</b> Turning around lets you see what’s behind you, but it gets closer the longer you look.',
      '<b>Survival:</b> Stay alive by moving forward and avoiding dangers along the way.',
      '<b>Psychological Horror:</b> A dark atmosphere built around fear, tension, and uncertainty.',
      '<b>Increasing Tension:</b> The longer you survive, the more intense the experience becomes.',
      '<b>Immersive Audio:</b> Atmospheric music and sound effects build suspense and warn you of danger.']}),
  G('vendetta','Codename: Vendetta','Narrative Thriller','Concept','Loyalty has a price and someone always pays it. [Placeholder description.]'),
  G('ashfall','Codename: Ashfall','Open-World Survival','Coming soon','A city built on debts, collected in full. [Placeholder description.]')
];
