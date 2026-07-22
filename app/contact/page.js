import PathDivider from '@/components/PathDivider';

export const metadata = {
  title: "Contact | Avodah Children's Mission",
  description: "Get in touch with Avodah Children's Mission by phone, WhatsApp, email or Facebook.",
};

const channels = [
  { label: 'Phone', value: '[Add phone number]' },
  { label: 'WhatsApp', value: '[Add WhatsApp number]' },
  { label: 'Email', value: '[Add email address]' },
  { label: 'Facebook', value: '[Add Facebook page link]' },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="uppercase tracking-[0.25em] text-gold text-xs mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-2xl text-balance">
            We&rsquo;d love to hear from you.
          </h1>
        </div>
      </section>

      <PathDivider tone="gold" />

      <section className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy mb-8">Reach us directly</h2>
            <ul className="space-y-6">
              {channels.map((c) => (
                <li key={c.label} className="border-b border-clay/15 pb-5">
                  <p className="text-xs uppercase tracking-wider text-clay font-medium mb-1">{c.label}</p>
                  <p className="text-ink/60">{c.value}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink/50">
              All inquiries should use the contact information above; the contact form has been removed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
