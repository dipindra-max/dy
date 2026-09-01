import { cookies } from 'next/headers';
import crypto from 'node:crypto';
import { prisma } from './prisma';

const COOKIE = 'dy_admin_session';
const days = 7;
export async function createSession(userId: string) {
  const raw = crypto.randomBytes(32).toString('hex');
  const tokenHash = crypto.createHash('sha256').update(raw).digest('hex');
  await prisma.session.create({ data: { tokenHash, userId, expiresAt: new Date(Date.now()+days*86400000) } });
  const jar = await cookies();
  jar.set(COOKIE, raw, { httpOnly:true, secure:process.env.NODE_ENV==='production', sameSite:'lax', path:'/', maxAge:days*86400 });
}
export async function destroySession() {
  const jar = await cookies(); const raw = jar.get(COOKIE)?.value;
  if (raw) await prisma.session.deleteMany({ where:{ tokenHash:crypto.createHash('sha256').update(raw).digest('hex') } });
  jar.delete(COOKIE);
}
export async function getCurrentUser() {
  const raw = (await cookies()).get(COOKIE)?.value; if (!raw) return null;
  const tokenHash = crypto.createHash('sha256').update(raw).digest('hex');
  const session = await prisma.session.findUnique({ where:{ tokenHash }, include:{ user:true } });
  if (!session || session.expiresAt < new Date()) { if(session) await prisma.session.delete({where:{id:session.id}}); return null; }
  return session.user;
}
export async function requireAdmin() { const user = await getCurrentUser(); if (!user || user.role !== 'ADMIN') throw new Error('UNAUTHORIZED'); return user; }
