import { useState, type ChangeEvent, type FormEvent } from 'react';
import ContactList from '../components/ContactList';
import { contact, profile } from '../data/resume';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

const empty: FormState = { name: '', email: '', subject: '', message: '' };

// FormSubmit forwards submissions to Helena's inbox; no backend needed on GitHub Pages.
const endpoint = `https://formsubmit.co/ajax/${contact.email}`;

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>('idle');

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        // Don't leave the button stuck on "Sending…" if the service never answers.
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: form.subject || `Portfolio message from ${form.name}`,
          _replyto: form.email,
          _template: 'table',
        }),
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message);
      setStatus('sent');
      setForm(empty);
    } catch {
      setStatus('error');
    }
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
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' && (
            <p className="form-note" role="status">
              Thanks! Your message has been sent to Helena.
            </p>
          )}
          {status === 'error' && (
            <p className="form-note form-error" role="alert">
              Something went wrong sending your message. Please email{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> directly.
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
