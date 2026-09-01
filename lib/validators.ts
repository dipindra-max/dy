import { z } from 'zod';
export const loginSchema = z.object({ email:z.string().email(), password:z.string().min(12) });
export const contactSchema = z.object({ name:z.string().min(2).max(80), email:z.string().email(), subject:z.string().min(2).max(160), message:z.string().min(10).max(5000), phone:z.string().max(30).optional() });
export const commentSchema = z.object({ name:z.string().min(2).max(80), email:z.string().email(), content:z.string().min(3).max(2000) });
