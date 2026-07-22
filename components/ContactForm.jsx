'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: wire this up to an email service (e.g. Resend, Formspree) or an API route.
    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <div className="bg-leaf/10 border border-leaf/30 rounded-lg p-6">
        <p className="font-medium text-leaf-deep">
          Thanks, {form.name || 'friend'} &mdash; your message is ready to send.
        </p>
        <p className="text-sm text-ink/60 mt-2">
          This form isn&rsquo;t connected to an inbox yet. Add an email service (like Resend or
          Formspree) to start receiving these for real.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-md border border-clay/25 bg-white/60 px-4 py-2.5 text-ink outline-none focus:border-clay"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-md border border-clay/25 bg-white/60 px-4 py-2.5 text-ink outline-none focus:border-clay"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-md border border-clay/25 bg-white/60 px-4 py-2.5 text-ink outline-none focus:border-clay resize-none"
        />
      </div>
      <button
        type="submit"
        className="bg-clay hover:bg-clay-deep transition-colors text-sand px-7 py-3 rounded-full font-medium"
      >
        Send message
      </button>
    </form>
  );
}
