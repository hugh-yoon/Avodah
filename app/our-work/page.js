import Image from 'next/image';
import Link from 'next/link';
import PathDivider from '@/components/PathDivider';

export const metadata = {
  title: "Our Work | Avodah Children's Mission",
  description:
    'Education, health, water and community outreach programs run by Avodah Children\u2019s Mission in Uganda.',
};

const programs = [
  {
    id: 'education',
    title: 'Education',
    tone: 'navy',
    image: '/images/classroom-benches.jpg',
    alt: 'Children seated at wooden school benches in a rural Ugandan classroom',
    what: 'We sponsor children and build and operate schools where children are protected from abuse and early marriage.',
    approach: 'We secure sponsorships for some children while admitting both fee-paying and vulnerable children, so schools stay financially sustainable.',
    impact: 'More than 2,000 children enrolled at one time, and over 20,000 educated over the past ten years, from nursery to tertiary level.',
  },
  {
    id: 'health',
    title: 'Health',
    tone: 'clay',
    image: '/images/two-kids-tree.jpg',
    alt: 'Two young children standing together in a rural Ugandan compound',
    what: 'We provide free and affordable medical services, along with free mobile medical camps that reach families where they live.',
    approach: 'We construct and operate a hospital serving both our schools and the wider community.',
    impact: 'A 30-bed hospital serving the schools and community.',
  },
  {
    id: 'water',
    title: 'Water',
    tone: 'leaf',
    image: '/images/man-water-source.jpg',
    alt: 'A man standing in a muddy water source used by the local community',
    what: 'We provide rainwater harvesting tanks for schools and boreholes for communities, cutting the distance families walk for clean water.',
    approach: 'We install school water tanks and drill community boreholes in areas with the greatest need.',
    impact: 'A 10,000-litre tank serves 700\u20131,000 children. One borehole can serve about 20,000 people.',
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach',
    tone: 'gold',
    image: '/images/men-borehole.jpg',
    alt: 'Community members gathered near a borehole and motorbike in a rural setting',
    what: 'We promote coffee growing through value addition, including processing, grading and roasting, to raise household incomes.',
    approach: 'We organize farmers into small groups so that training, tools and support reach more households efficiently.',
    impact: 'We support farmers by distributing agricultural inputs through community groups.',
  },
];

const toneClasses = {
  navy: { bg: 'bg-navy', text: 'text-sand', accent: 'text-gold', sub: 'text-sand/75' },
  clay: { bg: 'bg-clay', text: 'text-sand', accent: 'text-gold', sub: 'text-sand/80' },
  leaf: { bg: 'bg-leaf', text: 'text-sand', accent: 'text-gold', sub: 'text-sand/80' },
  gold: { bg: 'bg-[#B9822E]', text: 'text-sand', accent: 'text-navy', sub: 'text-sand/85' },
};

export default function OurWorkPage() {
  return (
    <>
      <section className="bg-navy text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="uppercase tracking-[0.25em] text-gold text-xs mb-4">Our Work</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-3xl text-balance">
            Four programs. One connected model.
          </h1>
          <p className="mt-6 text-sand/75 max-w-xl leading-relaxed">
            Education, health, water and community outreach reinforce one another &mdash; a child
            who is in school also needs to be healthy, hydrated, and part of a household that can
            provide.
          </p>
        </div>
      </section>

      {programs.map((p, idx) => {
        const t = toneClasses[p.tone];
        const imageFirst = idx % 2 === 0;
        return (
          <div key={p.id}>
            <PathDivider tone={p.tone === 'gold' ? 'gold' : p.tone} flip={idx % 2 === 1} />
            <section id={p.id} className={`${t.bg} ${t.text}`}>
              <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                <div className={`relative aspect-[4/3] rounded-md overflow-hidden ${imageFirst ? 'md:order-1' : 'md:order-2'}`}>
                  <Image src={p.image} alt={p.alt} fill className="object-cover" />
                </div>
                <div className={imageFirst ? 'md:order-2' : 'md:order-1'}>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">{p.title}</h2>
                  <dl className="space-y-5">
                    <div>
                      <dt className={`uppercase tracking-wider text-xs font-medium mb-1 ${t.accent}`}>What We Do</dt>
                      <dd className={`leading-relaxed ${t.sub}`}>{p.what}</dd>
                    </div>
                    <div>
                      <dt className={`uppercase tracking-wider text-xs font-medium mb-1 ${t.accent}`}>Our Approach</dt>
                      <dd className={`leading-relaxed ${t.sub}`}>{p.approach}</dd>
                    </div>
                    <div>
                      <dt className={`uppercase tracking-wider text-xs font-medium mb-1 ${t.accent}`}>Our Impact</dt>
                      <dd className="leading-relaxed font-medium">{p.impact}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
        );
      })}

      <PathDivider tone="clay" />

      <section className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-5 text-balance">
            None of this happens without partners like you.
          </h2>
          <p className="text-ink/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Sponsor a child, fund a borehole, or partner with us directly &mdash; every program
            above depends on people who choose to get involved.
          </p>
          <Link
            href="/get-involved"
            className="inline-block bg-clay hover:bg-clay-deep transition-colors text-sand px-8 py-3.5 rounded-full font-medium"
          >
            See how to get involved
          </Link>
        </div>
      </section>
    </>
  );
}
