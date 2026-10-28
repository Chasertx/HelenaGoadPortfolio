import { contact } from '../data/resume';

export default function ContactList() {
  const items = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: '✉' },
    { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`, icon: '☏' },
    {
      label: 'LinkedIn',
      value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: contact.linkedin,
      icon: 'in',
    },
    {
      label: 'Address',
      value: contact.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
      icon: '⌂',
    },
  ];

  return (
    <ul className="contact-list">
      {items.map((i) => (
        <li key={i.label}>
          <a href={i.href} target={i.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            <span className="contact-icon" aria-hidden="true">
              {i.icon}
            </span>
            <span>
              <span className="contact-label">{i.label}</span>
              <span className="contact-value">{i.value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
