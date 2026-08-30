import type { Metadata } from 'next';
import './globals.css';
import { prisma } from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import AnalyticsScript from '@/components/AnalyticsScript';
import { SITE_URL, defaultDescription } from '@/lib/seo';

export const metadata: Metadata = { metadataBase:new URL(SITE_URL), title:{default:'Dipindra Yadav — DY',template:'%s | Dipindra Yadav'}, description:defaultDescription, authors:[{name:'Dipindra Yadav'}], openGraph:{type:'website',siteName:'Dipindra Yadav',title:'Dipindra Yadav — DY',description:defaultDescription,images:['/images/profile.jpg']}, twitter:{card:'summary_large_image',title:'Dipindra Yadav — DY',description:defaultDescription,images:['/images/profile.jpg']}, robots:{index:true,follow:true} };

export default async function RootLayout({children}:{children:React.ReactNode}){
  const settings = await prisma.siteSettings.findUnique({where:{id:'main'}}).catch(()=>null);
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider><Navbar settings={settings}/><main>{children}</main><Footer settings={settings}/></ThemeProvider><AnalyticsScript id={settings?.googleAnalyticsId}/></body></html>;
}
