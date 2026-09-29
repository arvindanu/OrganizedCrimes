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
const GAMES=[
  G('ledger','Codename: Ledger','Tactical Heist','In development','A crew, a vault and one clean plan. [Placeholder description.]'),
  G('silencer','Codename: Silencer','Stealth Action','Prototype','Patience is the only weapon that never runs out. [Placeholder description.]'),
  G('vendetta','Codename: Vendetta','Narrative Thriller','Concept','Loyalty has a price and someone always pays it. [Placeholder description.]'),
  G('ashfall','Codename: Ashfall','Open-World Survival','Coming soon','A city built on debts, collected in full. [Placeholder description.]')
];
