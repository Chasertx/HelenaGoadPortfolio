import { useState, type ChangeEvent, type FormEvent } from 'react';
import ContactList from '../components/ContactList';
import { contact, profile } from '../data/resume';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      form.subject || `Hello from ${form.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm(empty);
  };

  return (
    <section className="section container contact-page">
      <header className="section-head">
        <p className="eyebrow">Contact</p>
        <h1>
          Reach out to <span className="accent">{profile.name.split(' ')[0]}</span>
        </h1>
        <p className="lead">
          Internship opportunities, accounting roles, or just a question — send a note and Helena will get back to you.
        </p>
      </header>

      <div className="contact-grid">
        <form className="card form" onSubmit={submit}>
          <div className="field-row">
            <label>
              <span>Your name</span>
              <input name="name" value={form.name} onChange={update} required autoComplete="name" />
            </label>
            <label>
              <span>Your email</span>
              <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" value={form.subject} onChange={update} placeholder="e.g. Accounting internship" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={6} value={form.message} onChange={update} required />
          </label>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
          {sent && (
            <p className="form-note" role="status">
              Your email app should open with the message ready to send.
            </p>
          )}
        </form>

        <aside className="card">
          <h3 className="card-title">Contact details</h3>
          <ContactList />
          <p className="muted small">Based in {contact.location}. References available upon request.</p>
        </aside>
      </div>
    </section>
  );
}
