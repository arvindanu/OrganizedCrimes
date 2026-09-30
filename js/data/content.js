/* Site content — company text, founder, team, news, jobs, legal. Games live in data/games.js.
   Images: assets/images/… (missing files show a placeholder automatically). */
const C={
 tag:'Every great game is a perfectly planned crime.',
 intro:'Organized Crimes is an independent studio building dark, cinematic, meticulously crafted games. [Replace with your studio introduction.]',
 email:'organizedcrimes.studio1@gmail.com',
 social:[['Instagram','https://www.instagram.com/termorgan_?stkn=MXJqMWRienBxN3Bycw=='],['YouTube','https://youtube.com/@termorgan?si=0RwAMehFyN2dJkQ4'],['Discord',''],['X','']],
 about:[
  ['Our Story','Organized Crimes started as an independent game development brand built around one simple goal: creating games with their own identity. What began as a solo creative journey is gradually growing into something bigger, with original ideas, experiments, and playable projects shaping the studio’s direction.'],
  ['Mission','Our mission is to create games that are simple to understand, engaging to play, and memorable to experience. We focus on strong ideas, unique gameplay, atmosphere, and attention to detail while keeping the experience enjoyable and meaningful for players.'],
  ['Vision','Organized Crimes aims to grow from an independent development brand into a creative game studio with a talented team behind it. Over the coming years, the goal is to build original games, explore different genres, create unique worlds, and establish a recognizable identity in the gaming industry.'],
  ['Creative Philosophy','We believe every game should have its own identity. We value creativity, atmosphere, simplicity, experimentation, and attention to detail. Every design choice should have a purpose, from gameplay and visuals to sound and storytelling. Most importantly, we respect the player’s time and experience.'],
  ['Approach to Development','Every project begins with an idea and develops through experimentation. We prototype, playtest, identify what works, make changes, and repeat the process until the game feels right. As an independent developer, the focus is on staying flexible, learning continuously, and building each project step by step. As Organized Crimes grows, this approach will evolve alongside the team while keeping the same focus on creativity and quality.']],
 founder:{name:'TERMORGAN',role:'Founder & Independent Game Developer',photo:'assets/images/founder/termorgan.jpg',bio:[
    'TERMORGAN is an independent game developer and the founder of Organized Crimes. Driven by a passion for games, creativity, and experimentation, the journey began with a desire to turn original ideas into playable experiences. Organized Crimes was created as a personal game development brand to build games with their own identity, atmosphere, and style.',
    'From early concepts and prototypes to developing complete playable projects, TERMORGAN continues to explore different genres, mechanics, and creative ideas. Each project is an opportunity to learn, experiment, and improve, with the long-term goal of expanding Organized Crimes into a larger independent game studio.'],
  vision:'“Create games with an identity of their own — simple in concept, bold in atmosphere, and memorable to experience.”'},
 games:GAMES,
 team:[['Name Surname','Lead Game Designer'],['Name Surname','Art Director'],['Name Surname','Lead Programmer'],['Name Surname','Sound & Music']].map(([n,r],i)=>({n,r,img:`assets/images/team/member-${i+1}.jpg`,bio:'Short bio placeholder.'})),
 news:[
  ['2026-09-29','Don’t Look Back — Beta Development','Don’t Look Back is currently in beta development. The game is being refined with a focus on atmosphere, gameplay, and the core survival experience.'],
  ['2026-09-15','Flipside — Development Update','Flipside is a fast-paced 2D arcade runner featuring flip-based movement, obstacles, coins, boosts, unlockable content, and progressive difficulty.'],
  ['2026-09-01','Welcome to Organized Crimes','Organized Crimes is an independent game development brand focused on creating original games with unique gameplay, atmosphere, and identity.']],
 jobs:[['Gameplay Programmer','Remote / On-site','Full-time'],['3D Environment Artist','Remote','Contract'],['Narrative Designer','Remote','Part-time']],
 legal:{privacy:[['Information we collect','[Placeholder] Describe what data the site collects.'],['How we use it','[Placeholder] Explain the purposes of processing.'],['Your rights','[Placeholder] Explain access, correction and deletion rights, and how to contact you.']],terms:[['Acceptance of terms','[Placeholder] By using this website you agree to these terms.'],['Intellectual property','[Placeholder] All content, logos and game assets belong to Organized Crimes.'],['Limitation of liability','[Placeholder] Describe your limitations and governing law.']]}
};
