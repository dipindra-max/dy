import crypto from 'node:crypto';
import { prisma } from './prisma';
export function hashVisitor(value:string){ return crypto.createHash('sha256').update(value).digest('hex'); }
export async function track(eventType:string, pagePath?:string, postId?:string, visitorKey?:string){
  try { await prisma.analyticsEvent.create({ data:{ eventType, pagePath, postId, visitorHash:visitorKey?hashVisitor(visitorKey):undefined } }); } catch {}
}
