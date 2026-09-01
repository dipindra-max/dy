import Script from 'next/script';
export default function AnalyticsScript({id}:{id?:string|null}){if(!id)return null;return <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive"/>}
