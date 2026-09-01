import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || 'dipindrayadav100@gmail.com';
  const password = process.env.ADMIN_PASSWORD;
  if (!password || password.length < 12) throw new Error('ADMIN_PASSWORD must be set and at least 12 characters long.');
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.upsert({ where: { email }, update: { passwordHash, name: 'Dipindra Yadav' }, create: { email, passwordHash, name: 'Dipindra Yadav' } });
  const names = ['Technology','AI','Programming','Education','Nepal','Tutorials','Personal','Other'];
  for (const name of names) await prisma.category.upsert({ where: { name }, update: {}, create: { name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g,'-') } });
  await prisma.siteSettings.upsert({ where: { id: 'main' }, update: { email }, create: {
    id:'main', email, siteName:'Dipindra Yadav', displayName:'DY', tagline:'Building with Technology, AI & Code.',
    description:'Dipindra Yadav — student, developer and technology creator.', phone:'+977 9707425277', whatsapp:'9707425277',
    facebook:'https://www.facebook.com/share/1DrJTHSfxJ/', instagram:'https://www.instagram.com/dipindrayadav', youtube:'https://www.youtube.com/@Dipindra_Yadav',
    tiktok:'ym_forever1', github:'https://github.com/dipindra-max', linkedin:'https://www.linkedin.com/in/dipindra-yadav-a23305378',
    profileImage:'/images/profile.jpg', heroTitle:"Hi, I'm DY", heroSubtitle:'Dipindra Yadav',
    heroDescription:'A Grade 10 student exploring web development, app development, SEO, AI and cybersecurity.',
    aboutText:'I’m a student and technology enthusiast learning by building real projects and sharing what I learn.'
  }});
  console.log(`Seeded admin ${user.email}`);
}
main().catch(e=>{ console.error(e); process.exit(1); }).finally(()=>prisma.$disconnect());
