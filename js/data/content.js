/* Site content — company text, founder, team, news, jobs, legal. Games live in data/games.js.
   Images: assets/images/… (missing files show a placeholder automatically). */
const C={
 tag:'Every great game is a perfectly planned crime.',
 intro:'Organized Crimes is an independent game development brand creating original, atmospheric games with distinctive gameplay, style, and identity.',
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
 team:[['TERMORGAN','Lead Game Designer'],['TERMORGAN','Art Director'],['TERMORGAN','Lead Programmer'],['TERMORGAN','Sound & Music']].map(([n,r],i)=>({n,r,img:media('tp'+(i+1),'team',0,'assets/images/team/'),bio:'Short bio placeholder.'})),
 news:[
  ['2026-09-29','Don’t Look Back — Beta Development','Don’t Look Back is currently in beta development. The game is being refined with a focus on atmosphere, gameplay, and the core survival experience.'],
  ['2026-09-15','Flipside — Development Update','Flipside is a fast-paced 2D arcade runner featuring flip-based movement, obstacles, coins, boosts, unlockable content, and progressive difficulty.'],
  ['2026-09-01','Welcome to Organized Crimes','Organized Crimes is an independent game development brand focused on creating original games with unique gameplay, atmosphere, and identity.']],
 jobs:[['Gameplay Programmer','Remote / On-site','Full-time'],['3D Environment Artist','Remote','Contract'],['Narrative Designer','Remote','Part-time']],
 legal:{privacy:{
    updated:'Last updated: September 30, 2026',
    intro:'Organized Crimes (“we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how information may be collected, used, and protected when you visit the Organized Crimes website.',
    sections:[
      ['Information We Collect','<p>We may collect information that you voluntarily provide, such as your name, email address, or message when you contact us through the website.</p><p>The website may also automatically receive limited technical information, such as browser type, device information, IP address, and basic website usage data, depending on the services and analytics tools connected to the site.</p><p>We do not intentionally collect sensitive personal information through this website.</p>'],
      ['How We Use Your Information','<p>Information you provide may be used to:</p><ul><li>Respond to your messages and inquiries.</li><li>Communicate with you about Organized Crimes, our games, or development updates.</li><li>Maintain, improve, and secure the website.</li><li>Understand general website usage and improve the user experience.</li></ul><p>We do not sell or rent your personal information to third parties.</p>'],
      ['Cookies and Third-Party Services','<p>The website may use cookies or similar technologies where necessary for basic functionality, analytics, or embedded content such as videos and social media.</p><p>Third-party services may collect information according to their own privacy policies. We recommend reviewing the privacy policies of any third-party services you interact with through this website.</p>'],
      ['Data Retention and Security','<p>We retain personal information only for as long as reasonably necessary for the purpose for which it was collected or as required by applicable law.</p><p>We take reasonable measures to protect information from unauthorized access, alteration, disclosure, or destruction. However, no internet-based service can be guaranteed to be completely secure.</p>'],
      ['Your Rights','<p>Depending on applicable law, you may have the right to request access to, correction of, or deletion of your personal information.</p><p>To make a privacy-related request, contact us at:</p><p>Email: {email}</p>'],
      ['Children’s Privacy','This website is not intended to knowingly collect personal information from children. If you believe a child has provided personal information to us, please contact us so that we can take appropriate action.'],
      ['Changes to This Policy','We may update this Privacy Policy from time to time to reflect changes to the website, our practices, or applicable legal requirements. Any updated version will be published on this page with a revised “Last updated” date.'],
      ['Contact','<p>If you have questions or concerns about this Privacy Policy or how your information is handled, contact:</p><p>Organized Crimes<br>Email: {email}</p>']]},terms:{
    updated:'Last updated: September 30, 2026',
    sections:[
      ['Acceptance of Terms','By accessing or using the Organized Crimes website, you agree to these Terms of Use. If you do not agree with these terms, please do not use the website.'],
      ['Intellectual Property','<p>All content on this website, including the Organized Crimes name and logo, game titles, game assets, images, videos, graphics, text, designs, and other materials, belongs to Organized Crimes or is used with appropriate permission.</p><p>You may not copy, reproduce, modify, distribute, sell, or use our content without prior written permission.</p>'],
      ['Website Use','You agree to use this website only for lawful purposes. You must not attempt to damage, disrupt, misuse, or gain unauthorized access to the website or its systems.'],
      ['External Links','The website may contain links to third-party websites or social media platforms. Organized Crimes is not responsible for the content, security, or privacy practices of external websites.'],
      ['Disclaimer','Website content is provided for general informational purposes and may change without notice. We do not guarantee that the website or its content will always be complete, accurate, available, or error-free.'],
      ['Limitation of Liability','To the extent permitted by applicable law, Organized Crimes will not be responsible for losses or damages arising from your use of, or inability to use, this website or its content.'],
      ['Changes to These Terms','We may update these Terms of Use from time to time. Changes will be published on this page with an updated “Last updated” date. Continued use of the website after changes are published means you accept the updated terms.'],
      ['Governing Law','These Terms of Use shall be governed by the applicable laws of India. Any disputes relating to these terms or the website will be subject to the jurisdiction of the appropriate courts in Kerala, India.'],
      ['Contact','<p>For questions regarding these Terms of Use, contact:</p><p>Organized Crimes<br>Email: {email}</p>']]}}
};
