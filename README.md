# DY — Dipindra Yadav Personal Website

Production-oriented Next.js + PostgreSQL + Prisma personal website and blog CMS.

## Features
- Personal homepage, About, Projects, Blog and Contact
- PostgreSQL-backed posts, categories, tags, comments, reactions, projects, messages and analytics
- Secure single-admin login with HTTP-only cookie sessions
- Admin CMS for posts, categories, projects, comments, messages and settings
- Draft, publish and scheduled-post states
- SEO metadata, canonical URLs, Open Graph, JSON-LD, sitemap and robots.txt
- Light/dark mode
- Search, tags, related posts, reactions and comments
- AdSense-ready ad slot component and ads.txt placeholder
- Render deployment configuration

## Local setup
1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env`.
3. Fill `DATABASE_URL`, `ADMIN_PASSWORD`, `AUTH_SECRET`, and email settings if needed.
4. Run `npm install`.
5. Run `npx prisma migrate dev --name init`.
6. Run `npm run prisma:seed`.
7. Run `npm run dev`.
8. Open `/admin/login` and sign in with `ADMIN_EMAIL` and `ADMIN_PASSWORD`.

## Render
Create a PostgreSQL database and web service. Add the environment variables from `.env.example`. The start command runs `prisma migrate deploy`, seeds the admin/site defaults idempotently, and starts Next.js.

## Image storage
The starter stores the supplied profile image in `public/images/profile.jpg`. For production blog uploads, connect object storage and save only metadata/URLs in the `media` table; the CMS currently provides URL-based media fields so the database never stores large binary images.

## AdSense
Set `ADSENSE_PUBLISHER_ID` after Google gives you a publisher ID and configure the actual `ads.txt` publisher line. Do not generate or encourage artificial ad clicks/impressions.
