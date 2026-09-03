import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function Dashboard() {
  const [posts, comments, messages, projects, views] = await Promise.all([
    prisma.post.count(),
    prisma.comment.count({ where: { status: 'PENDING' } }),
    prisma.message.count({ where: { read: false } }),
    prisma.project.count(),
    prisma.analyticsEvent.count({ where: { eventType: 'PAGE_VIEW' } }),
  ]);

  return (
    <>
      <div className="eyebrow">Control center</div>
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="card stat">
          <span className="muted">Posts</span>
          <br />
          <strong>{posts}</strong>
        </div>
        <div className="card stat">
          <span className="muted">Pending comments</span>
          <br />
          <strong>{comments}</strong>
        </div>
        <div className="card stat">
          <span className="muted">Unread messages</span>
          <br />
          <strong>{messages}</strong>
        </div>
      </div>
      <div className="card" style={{ marginTop: 20 }}>
        <span className="muted">Projects</span>
        <br />
        <strong>{projects}</strong>
      </div>
      <div className="card" style={{ marginTop: 20 }}>
        <span className="muted">Tracked page views</span>
        <br />
        <h2>{views}</h2>
        <p className="muted">
          Analytics are intentionally lightweight and privacy-conscious. Connect Google Analytics for richer reporting.
        </p>
        <Link className="btn" href="/admin/posts/new">
          Write a new article →
        </Link>
      </div>
    </>
  );
}
