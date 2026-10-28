import type { Role } from '../data/resume';

export default function Timeline({ roles }: { roles: Role[] }) {
  return (
    <ol className="timeline">
      {roles.map((r) => (
        <li key={r.title + r.org} className="timeline-item card">
          <div className="timeline-head">
            <div>
              <h3>{r.title}</h3>
              <p className="org">{r.org}</p>
            </div>
            <div className="meta">
              <span className="pill">{r.dates}</span>
              <span className="muted">{r.location}</span>
            </div>
          </div>
          <ul className="bullets">
            {r.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
