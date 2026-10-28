import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/resume';

const links = [
  { to: '/#about', label: 'About' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#leadership', label: 'Leadership' },
  { to: '/#skills', label: 'Skills' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">HG</span>
          <span className="brand-name">{profile.name}</span>
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={close}>
              {l.label}
            </Link>
          ))}
          <NavLink to="/contact" className="btn btn-primary btn-sm" onClick={close}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
