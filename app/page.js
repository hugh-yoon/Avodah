import Image from 'next/image';
import Link from 'next/link';
import PathDivider from '@/components/PathDivider';

const whyUganda = [
  {
    title: 'Orphans',
    body: 'Many children have lost one or both parents, leaving them vulnerable and with limited access to education.',
  },
  {
    title: 'Elderly-Led Families',
    body: 'Many children are raised by grandparents or elderly caregivers with limited resources.',
  },
  {
    title: 'Poverty',
    body: 'Poverty limits access to education, healthcare, clean water, and economic opportunity.',
  },
  {
    title: 'HIV/AIDS',
    body: 'HIV/AIDS continues to affect many families and has left many children orphaned.',
  },
  {
    title: 'A Young Population',
    body: 'Uganda has one of the youngest populations in the world. Investing in children and young people builds stronger communities.',
  },
];

const workAreas = [
  {
    title: 'Education',
    stat: '20,000+ educated in 10 years',
    body: 'We sponsor children and build and operate schools where children are protected from abuse and early marriage.',
    href: '/our-work#education',
  },
  {
    title: 'Health',
    stat: 'A 30-bed hospital',
    body: 'Free and affordable medical services, plus mobile medical camps, for schools and the surrounding community.',
    href: '/our-work#health',
  },
  {
    title: 'Water',
    stat: '1 borehole serves ~20,000 people',
    body: 'Rainwater harvesting tanks for schools and boreholes for communities, delivering clean water close to home.',
    href: '/our-work#water',
  },
  {
    title: 'Community Outreach',
    stat: 'Farmer groups equipped',
    body: 'We promote coffee growing through processing, grading and roasting, and organize farmers into small groups.',
    href: '/our-work#community-outreach',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
        <Image
          src="/images/classroom-benches.jpg"
          alt="Children sitting at a wooden school bench in Uganda, looking toward the camera"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-transparent to-transparent" />

        <div className="relative h-full max-w-content mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
          <p className="font-body uppercase tracking-[0.25em] text-gold text-xs md:text-sm mb-5">
            Love &middot; Care &middot; Disciple &middot; Empower
          </p>
          <h1 className="font-display text-sand text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-3xl text-balance">
            Every child deserves a place at the bench.
          </h1>
          <p className="mt-6 text-sand/85 text-base md:text-lg max-w-xl leading-relaxed">
            Avodah Children&rsquo;s Mission protects, educates, empowers and evangelizes vulnerable
            children across Uganda &mdash; through schools, a community hospital, clean water and
            farmer outreach.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/get-involved#sponsor"
              className="bg-clay hover:bg-clay-deep transition-colors text-sand px-7 py-3.5 rounded-full font-medium"
            >
              Sponsor a Child &mdash; $20/month
            </Link>
            <Link
              href="/get-involved#donate"
              className="border border-sand/40 hover:border-sand transition-colors text-sand px-7 py-3.5 rounded-full font-medium"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

      <PathDivider tone="clay" />

      {/* FOUNDER STORY */}
      <section className="bg-navy text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-[0.9fr,1.1fr] gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-md overflow-hidden">
            <Image
              src="/images/two-kids-tree.jpg"
              alt="Two Ugandan children standing together beside a tree"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-display text-gold text-7xl leading-none">&ldquo;</span>
            <p className="font-display text-xl md:text-2xl leading-relaxed -mt-6 text-balance">
              I was born in 1984. My father died of HIV/AIDS in 1990, when I was six years old.
              After his death, I went to live with my grandmother before later being taken to an
              orphanage. Through sponsorship, I earned two degrees. I would not be where I am
              today without sponsorship.
            </p>
            <p className="mt-6 text-sand/75 leading-relaxed">
              Of my five siblings, I was the only one who received an education &mdash; because I
              was taken to an orphanage and blessed with a Western sponsor. Avodah Children&rsquo;s
              Mission exists so that many more children get that same chance.
            </p>
            <p className="mt-6 font-display font-semibold text-gold">
              Henry Lutwama, Founder &amp; Executive Director
            </p>
          </div>
        </div>
      </section>

      <PathDivider tone="gold" />

      {/* WHY UGANDA */}
      <section className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy">Why Uganda?</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Five realities shape every program we run &mdash; and why the work is far from finished.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyUganda.map((item) => (
              <div
                key={item.title}
                className="bg-white/60 border border-clay/15 rounded-lg p-6 hover:border-clay/40 transition-colors"
              >
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PathDivider tone="leaf" />

      {/* MISSION / VISION */}
      <section className="bg-leaf text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.2em] text-gold text-xs mb-3">Our Vision</p>
            <p className="font-display text-2xl md:text-3xl font-semibold leading-snug text-balance">
              Holistically developed children in a self-reliant community.
            </p>
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] text-gold text-xs mb-3">Our Mission</p>
            <p className="font-display text-2xl md:text-3xl font-semibold leading-snug text-balance">
              To protect, educate, empower, and evangelize children within a safe and productive
              community.
            </p>
          </div>
        </div>
      </section>

      {/* OUR WORK PREVIEW */}
      <section className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy">Our Work</h2>
              <p className="mt-4 text-ink/70 max-w-lg leading-relaxed">
                Four programs, one goal: children who are protected, educated, healthy and
                connected to a thriving community.
              </p>
            </div>
            <Link href="/our-work" className="text-clay font-medium hover:text-clay-deep transition-colors">
              See all our programs &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {workAreas.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className="group border border-clay/15 rounded-lg p-8 hover:bg-white/60 hover:border-clay/40 transition-colors"
              >
                <p className="text-xs uppercase tracking-wider text-clay font-medium mb-2">{w.stat}</p>
                <h3 className="font-display text-2xl font-semibold text-navy mb-3">{w.title}</h3>
                <p className="text-ink/70 leading-relaxed">{w.body}</p>
                <span className="inline-block mt-4 text-navy font-medium group-hover:text-clay transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PathDivider tone="clay" flip />

      {/* CTA BAND */}
      <section className="bg-navy-deep text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-[1.3fr,1fr] gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-balance">
              Your sponsorship changed one life. It can change another.
            </h2>
            <p className="mt-4 text-sand/75 leading-relaxed max-w-xl">
              For $20 a month, you can give a child in Uganda the same chance our founder was
              given &mdash; a safe place to learn, grow, and be known.
            </p>
          </div>
          <div className="flex md:justify-end gap-4 flex-wrap">
            <Link
              href="/get-involved#sponsor"
              className="bg-clay hover:bg-clay-deep transition-colors px-7 py-3.5 rounded-full font-medium text-center"
            >
              Sponsor a Child
            </Link>
            <Link
              href="/contact"
              className="border border-sand/40 hover:border-sand transition-colors px-7 py-3.5 rounded-full font-medium text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
