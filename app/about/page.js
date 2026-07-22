import Image from 'next/image';
import PathDivider from '@/components/PathDivider';

export const metadata = {
  title: "About Us | Avodah Children's Mission",
  description:
    "Meet the team and board behind Avodah Children's Mission, and learn the founder's story, our mission, vision and model.",
};

const operations = [
  { role: 'Executive Director / Founder', name: 'Henry Lutwama' },
  { role: 'Programs Director', name: 'Duncan Gavamukulya' },
  { role: 'Finance Director', name: 'Patricia Nsita' },
  { role: 'Administrator', name: 'Hope Nasejje' },
];

const board = [
  { role: 'Chairman', name: 'Edward Ssebuyungo' },
  { role: 'Director', name: 'Henry Lutwama' },
  { role: 'Director', name: 'Eva Kabasiita' },
  { role: 'Board Member', name: 'Judah Opio' },
  { role: 'Board Member', name: 'Agape Nakachwa' },
  { role: 'Board Member', name: 'Milia Simbo' },
];

const objectives = [
  'Increase access to quality education.',
  'Protect children from abuse.',
  'Improve household resilience and overall well-being.',
  'Evangelize school-going children.',
];

const values = ['Integrity', 'Compassion', 'Teamwork', 'Community'];

const whyUganda = [
  { title: 'Orphans', body: 'Many children have lost one or both parents, leaving them vulnerable and with limited access to education.' },
  { title: 'Elderly-Led Families', body: 'Many children are raised by grandparents or elderly caregivers with limited resources.' },
  { title: 'Poverty', body: 'Poverty limits access to education, healthcare, clean water, and economic opportunity.' },
  { title: 'HIV/AIDS', body: 'HIV/AIDS continues to affect many families and has left many children orphaned.' },
  { title: 'A Young Population', body: 'Uganda has one of the youngest populations in the world. Investing in children and young people builds stronger communities.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="uppercase tracking-[0.25em] text-gold text-xs mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-2xl text-balance">
            A mission built by someone who lived it.
          </h1>
        </div>
      </section>

      <PathDivider tone="gold" />

      {/* OUR STORY */}
      <section id="story" className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24 grid md:grid-cols-[1fr,1.1fr] gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-md overflow-hidden order-2 md:order-1">
            <Image
              src="/images/kids-doorway.jpg"
              alt="Children peeking through a wooden doorway, smiling"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-6">Our Story</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              I was born in 1984. My father died of HIV/AIDS in 1990 when I was six years old.
              After his death, I went to live with my grandmother before later being taken to an
              orphanage.
            </p>
            <p className="text-ink/80 leading-relaxed mb-4">
              Through sponsorship, I earned two degrees &mdash; a Degree in Theology and a
              Bachelor of Laws (LLB). I would not be where I am today without sponsorship. Many
              children are unable to succeed because they lack access to education.
            </p>
            <p className="text-ink/80 leading-relaxed">
              Of my five siblings, I was the only one who received an education, because I was
              taken to an orphanage and was blessed with a Western sponsor. That single act of
              generosity became the seed for Avodah Children&rsquo;s Mission.
            </p>
          </div>
        </div>
      </section>

      <PathDivider tone="clay" />

      {/* WHY UGANDA */}
      <section id="why-uganda" className="bg-navy text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Why Uganda?</h2>
          <p className="text-sand/75 max-w-2xl mb-14 leading-relaxed">
            Five realities shape every program we run.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyUganda.map((item) => (
              <div key={item.title} className="border border-sand/20 rounded-lg p-6">
                <h3 className="font-display font-semibold text-gold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-sand/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION / OBJECTIVES / VALUES */}
      <section className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24 space-y-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/60 border border-clay/15 rounded-lg p-8">
              <p className="uppercase tracking-[0.2em] text-clay text-xs mb-3">Vision</p>
              <p className="font-display text-2xl font-semibold text-navy leading-snug text-balance">
                Holistically developed children in a self-reliant community.
              </p>
            </div>
            <div className="bg-white/60 border border-clay/15 rounded-lg p-8">
              <p className="uppercase tracking-[0.2em] text-clay text-xs mb-3">Mission</p>
              <p className="font-display text-2xl font-semibold text-navy leading-snug text-balance">
                To protect, educate, empower, and evangelize children within a safe and
                productive community.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[1.2fr,1fr] gap-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-6">Our Objectives</h2>
              <ol className="space-y-4">
                {objectives.map((o, i) => (
                  <li key={o} className="flex gap-4 items-start">
                    <span className="font-display text-gold font-semibold text-lg shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink/80 leading-relaxed pt-0.5">{o}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-6">Core Values</h2>
              <div className="flex flex-wrap gap-3">
                {values.map((v) => (
                  <span
                    key={v}
                    className="bg-leaf text-sand px-5 py-2.5 rounded-full text-sm font-medium"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PathDivider tone="leaf" />

      {/* OUR MODEL */}
      <section id="our-model" className="bg-leaf text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Our Model</h2>
          <p className="text-sand/85 max-w-2xl leading-relaxed">
            We combine sponsorship, schools, healthcare and clean water into a single, connected
            model &mdash; so that a child who is educated is also protected, healthy, and part of
            a community that is building its own resilience. Sponsorship funds the model;
            local staff and community groups carry it forward.
          </p>
        </div>
      </section>

      <PathDivider tone="clay" flip />

      {/* PEOPLE */}
      <section id="people" className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-14">People</h2>

          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h3 className="font-display text-xl font-semibold text-clay mb-6">Operations</h3>
              <ul className="space-y-5">
                {operations.map((p) => (
                  <li key={p.name} className="border-b border-clay/15 pb-4">
                    <p className="font-medium text-navy">{p.name}</p>
                    <p className="text-sm text-ink/60">{p.role}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-clay mb-6">Board of Directors</h3>
              <ul className="space-y-5">
                {board.map((p, i) => (
                  <li key={p.name + i} className="border-b border-clay/15 pb-4">
                    <p className="font-medium text-navy">{p.name}</p>
                    <p className="text-sm text-ink/60">{p.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
