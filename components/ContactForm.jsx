'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourFormId';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submittedName, setSubmittedName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: 'New message from Avodah website',
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'Submission failed');
      }

      setSubmittedName(form.name);
      setForm({ name: '', email: '', message: '' });
      setStatus('sent');
    } catch (error) {
      console.error(error);
      setErrorMessage(
        'Sorry, we could not send your message. Please try again or email us directly.'
      );
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-leaf/10 border border-leaf/30 rounded-lg p-6">
        <p className="font-medium text-leaf-deep">
          Thanks, {submittedName || 'friend'} &mdash; your message was sent.
        </p>
        <p className="text-sm text-ink/60 mt-2">
          We&rsquo;ll be in touch soon.
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
        disabled={status === 'sending'}
        className="bg-clay hover:bg-clay-deep transition-colors text-sand px-7 py-3 rounded-full font-medium disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 mt-2">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
