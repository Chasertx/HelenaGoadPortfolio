import { Link } from 'react-router-dom';
import Timeline from '../components/Timeline';
import ContactList from '../components/ContactList';
import { accomplishments, education, experience, leadership, profile, skills } from '../data/resume';

const stats = [
  { value: '200', label: 'Guest events catered' },
  { value: '$4K', label: 'Tabs closed independently' },
  { value: '3.33', label: 'GPA on a 4.0 scale' },
  { value: 'CMA', label: 'Part 1 completed' },
];

export default function Home() {
  return (
    <>
      <section className="hero container">
        <p className="eyebrow">{profile.headline}</p>
        <h1>
          Hi, I'm <span className="accent">{profile.name}</span>.
        </h1>
        <p className="lead">{profile.tagline}</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Get in touch
          </Link>
          <Link to="/#experience" className="btn btn-ghost">
            View experience
          </Link>
        </div>
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="about" className="section container">
        <header className="section-head">
          <p className="eyebrow">01 · Education</p>
          <h2>About & Education</h2>
        </header>
        <div className="grid-2">
          <article className="card card-feature">
            <span className="pill">Expected {education.graduation}</span>
            <h3>{education.degree}</h3>
            <p className="org">{education.school}</p>
            <p className="muted">{education.location}</p>
            {education.gpa && <p className="highlight">GPA {education.gpa}</p>}
          </article>
          <article className="card">
            <h3 className="card-title">Relevant Coursework</h3>
            <ul className="chips">
              {education.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="experience" className="section container">
        <header className="section-head">
          <p className="eyebrow">02 · Work</p>
          <h2>Work Experience</h2>
        </header>
        <Timeline roles={experience} />
      </section>

      <section id="leadership" className="section container">
        <header className="section-head">
          <p className="eyebrow">03 · Community</p>
          <h2>Leadership & Volunteering</h2>
        </header>
        <Timeline roles={leadership} />
      </section>

      <section id="skills" className="section container">
        <header className="section-head">
          <p className="eyebrow">04 · Toolkit</p>
          <h2>Skills & Accomplishments</h2>
        </header>
        <div className="grid-3">
          <article className="card">
            <h3 className="card-title">Accomplishments</h3>
            <ul className="bullets star">
              {accomplishments.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3 className="card-title">Computer</h3>
            <ul className="chips">
              {skills.computer.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h3 className="card-title">Essential Skills</h3>
            <ul className="chips chips-accent">
              {skills.essential.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section container">
        <div className="cta card">
          <div>
            <p className="eyebrow">Let's connect</p>
            <h2>Interested in working together?</h2>
            <p className="muted">References available upon request.</p>
            <Link to="/contact" className="btn btn-primary">
              Send a message
            </Link>
          </div>
          <ContactList />
        </div>
      </section>
    </>
  );
}
