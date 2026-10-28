import { contact, profile } from '../data/resume';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {contact.location}
        </p>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>Phone</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
