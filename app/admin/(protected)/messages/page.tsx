import { prisma } from '@/lib/prisma';
import { markMessage } from '../actions';

export default async function Messages() {
  const msgs = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <>
      <div className="eyebrow">Inbox</div>
      <h1>Messages</h1>
      <div className="grid">
        {msgs.length ? (
          msgs.map((m) => (
            <div className="card" key={m.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{m.subject}</strong>
                <span className="pill">{m.read ? 'READ' : 'UNREAD'}</span>
              </div>
              <p className="muted" style={{ fontSize: '.95rem' }}>
                {m.name} — {m.email}
              </p>
              <p className="prose" style={{ fontSize: '.95rem' }}>
                {m.message}
              </p>
              <p className="muted">{new Date(m.createdAt).toLocaleString()}</p>
              <form action={markMessage} className="socials">
                <input type="hidden" name="id" value={m.id} />
                <select
                  className="select"
                  name="status"
                  defaultValue={m.read ? 'READ' : 'UNREAD'}
                >
                  <option>UNREAD</option>
                  <option>READ</option>
                  <option>ARCHIVED</option>
                </select>
                <button className="btn">Update</button>
              </form>
            </div>
          ))
        ) : (
          <div className="empty">No messages.</div>
        )}
      </div>
    </>
  );
}
