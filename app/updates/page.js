import Image from 'next/image';
import PathDivider from '@/components/PathDivider';

const posts = [
  {
    title: 'A new term begins at our schools',
    excerpt:
      'Placeholder post \u2014 replace with a short update once your first blog entry is ready.',
    image: '/images/classroom-benches.jpg',
  },
  {
    title: 'Clean water reaches another village',
    excerpt:
      'Placeholder post \u2014 share progress on your latest borehole or water tank project here.',
    image: '/images/man-water-source.jpg',
  },
  {
    title: 'Meet the children on the bench',
    excerpt:
      'Placeholder post \u2014 introduce sponsors to the day-to-day life of the children in your care.',
    image: '/images/kids-doorway.jpg',
  },
];

export default function UpdatesPage() {
  return (
    <>
      <section className="bg-navy text-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="uppercase tracking-[0.25em] text-gold text-xs mb-4">Updates</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold max-w-2xl text-balance">
            Stories from the field.
          </h1>
        </div>
      </section>

      <PathDivider tone="gold" />

      <section className="bg-sand">
        <div className="max-w-content mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((p) => (
              <article key={p.title} className="group">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden mb-5">
                  <Image src={p.image} alt="" fill className="object-cover" />
                </div>
                <h2 className="font-display text-xl font-semibold text-navy mb-2">{p.title}</h2>
                <p className="text-sm text-ink/70 leading-relaxed">{p.excerpt}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-sm text-ink/50 text-center">
            More stories coming soon. This section is ready for your team to publish real updates.
          </p>
        </div>
      </section>

    </>
  );
}
