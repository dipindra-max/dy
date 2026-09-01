export const SITE_URL = (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/,'');
export const defaultDescription = 'Dipindra Yadav — student, developer and technology creator writing about AI, technology and programming.';
export function absoluteUrl(path:string){ return `${SITE_URL}${path.startsWith('/')?path:`/${path}`}`; }
