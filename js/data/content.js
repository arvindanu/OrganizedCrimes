/* Site content — company text, founder, team, news, jobs, legal. Games live in data/games.js.
   Images: assets/images/… (missing files show a placeholder automatically). */
const C={
 tag:'Every great game is a perfectly planned crime.',
 intro:'Organized Crimes is an independent studio building dark, cinematic, meticulously crafted games. [Replace with your studio introduction.]',
 email:'hello@yourdomain.com',social:['Instagram','YouTube','Discord','X'],
 about:[['Our story','[Placeholder] Tell the story of how the studio began, who was in the room, and the first idea worth committing to.'],['Mission','[Placeholder] What you set out to deliver to players — in one honest paragraph.'],['Vision','[Placeholder] Where the studio is heading in five years and what it wants to be known for.'],['Creative philosophy','[Placeholder] The beliefs behind every design decision: tone, restraint, craft, respect for the player.'],['Approach to development','[Placeholder] How you prototype, playtest, iterate and ship. Tools, team rhythm, quality bar.']],
 founder:{name:'TERMORGAN',role:'Founder & Creative Director',photo:'assets/images/founder/termorgan.jpg',bio:['[Placeholder] Write TERMORGAN’s biography here — background, path into games, and what led to founding Organized Crimes.','[Placeholder] Add a second paragraph about notable work, influences or milestones.'],vision:'“[Placeholder] A single sentence on the creative vision that drives the studio.”'},
 games:GAMES,
 team:[['Name Surname','Lead Game Designer'],['Name Surname','Art Director'],['Name Surname','Lead Programmer'],['Name Surname','Sound & Music']].map(([n,r],i)=>({n,r,img:`assets/images/team/member-${i+1}.jpg`,bio:'Short bio placeholder.'})),
 news:[['2026-09-29','Studio announcement — placeholder','Write your first announcement or development blog here.'],['2026-09-15','Devlog #01 — placeholder','Share progress, lessons learned and behind-the-scenes notes.'],['2026-09-01','Welcome to Organized Crimes','Introduce the studio and what players can expect.']],
 jobs:[['Gameplay Programmer','Remote / On-site','Full-time'],['3D Environment Artist','Remote','Contract'],['Narrative Designer','Remote','Part-time']],
 legal:{privacy:[['Information we collect','[Placeholder] Describe what data the site collects.'],['How we use it','[Placeholder] Explain the purposes of processing.'],['Your rights','[Placeholder] Explain access, correction and deletion rights, and how to contact you.']],terms:[['Acceptance of terms','[Placeholder] By using this website you agree to these terms.'],['Intellectual property','[Placeholder] All content, logos and game assets belong to Organized Crimes.'],['Limitation of liability','[Placeholder] Describe your limitations and governing law.']]}
};
