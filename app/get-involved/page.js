import Image from 'next/image';
import PathDivider from '@/components/PathDivider';

export const metadata = {
  title: "Get Involved | Avodah Children's Mission",
  description: 'Sponsor a child, donate to a project, partner with us, or volunteer your time and skills.',
};

const donateItems = [
  { label: 'Water to Schools', amount: 'Give a gift', note: 'Help bring clean water to students.' },
  { label: 'Mobile Medical Clinic', amount: 'Give a gift', note: 'Help bring medical care to communities.' },
  { label: 'Sponsor a Child', amount: 'Give a gift', note: 'Help provide care, education, and opportunity.' },
  { label: 'Pastor Training Program', amount: 'Give a gift', note: 'Help equip pastors and children’s ministry leaders.' },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-navy text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="uppercase tracking-[0.25em] text-gold text-xs mb-4">Get Involved</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-2xl text-balance">
            Four ways to stand with a child in Uganda.
          </h1>
        </div>
      </section>

      <PathDivider tone="gold" />

      {/* SPONSOR */}
      <section id="sponsor" className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-md overflow-hidden">
            <Image
              src="/images/boy-jerrycan.jpg"
              alt="A young boy standing beside a yellow water jerrycan"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-4">Sponsor a Child</h2>
            <p className="text-4xl font-display font-semibold text-clay mb-4">$20<span className="text-lg text-ink/60 font-body">/month</span></p>
            <p className="text-ink/75 leading-relaxed mb-8">
              Our founder was educated because of one sponsor. For $20 a month, you can give a
              child in Uganda a safe school, consistent meals, and someone walking alongside
              them &mdash; the same chance that changed his life.
            </p>
            <a
              href="#"
              className="inline-block bg-clay hover:bg-clay-deep transition-colors text-sand px-8 py-3.5 rounded-full font-medium"
            >
              Start sponsoring &mdash; [Add sponsorship link]
            </a>
          </div>
        </div>
      </section>

      <PathDivider tone="clay" />

      {/* DONATE */}
      <section id="donate" className="bg-navy text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Donate to a Project</h2>
          <p className="text-sand/75 max-w-2xl mb-14 leading-relaxed">
            Fund a specific, tangible need. Every gift below funds real infrastructure our
            communities are waiting on.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {donateItems.map((d) => (
              <div key={d.label} className="border border-sand/20 rounded-lg p-6 flex flex-col">
                <h3 className="font-display font-semibold text-gold text-lg mb-2">{d.label}</h3>
                <p className="text-xl font-semibold mb-1">{d.amount}</p>
                <p className="text-sm text-sand/60 mb-5">{d.note}</p>
                <a
                  href="#"
                  className="mt-auto text-sm font-medium text-sand underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                >
                  Give toward this &mdash; [Add donate link]
                </a>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-sand/50">
            Payment processing coming soon. In the meantime, please use the Contact page to
            arrange a gift.
          </p>
        </div>
      </section>

      <PathDivider tone="leaf" />

      {/* PARTNER */}
      <section id="partner" className="bg-leaf text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24 grid md:grid-cols-[1.2fr,1fr] gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">Partner With Us</h2>
            <p className="text-sand/85 leading-relaxed max-w-xl">
              Partner with us to expand our impact. Whether you represent a church, a business,
              or another organization, we&rsquo;d love to explore how our work in education,
              health, water and community outreach could align with your mission.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block bg-sand text-leaf-deep hover:bg-white transition-colors px-8 py-3.5 rounded-full font-medium text-center md:justify-self-end"
          >
            Start a conversation
          </a>
        </div>
      </section>

      <PathDivider tone="gold" flip />

      {/* VOLUNTEER */}
      <section id="volunteer" className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24 grid md:grid-cols-[1.2fr,1fr] gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-5">Volunteer</h2>
            <p className="text-ink/75 leading-relaxed max-w-xl">
              Join our team by volunteering your skills and time. From teaching and medical
              outreach to fundraising and communications, there&rsquo;s a place for the skills
              you already have.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block bg-clay hover:bg-clay-deep transition-colors text-sand px-8 py-3.5 rounded-full font-medium text-center md:justify-self-end"
          >
            Tell us how you&rsquo;d like to help
          </a>
        </div>
      </section>
    </>
  );
}
