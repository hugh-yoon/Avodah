import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-sand/90">
      <div className="max-w-content mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-[1.3fr,1fr,1fr,1fr]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-10 w-10 shrink-0 bg-sand rounded-sm p-0.5">
              <Image src="/images/logo.jpg" alt="Avodah Children's Mission logo" fill className="object-contain" />
            </div>
            <span className="font-display font-semibold text-lg">Avodah Children&rsquo;s Mission</span>
          </div>
          <p className="text-sm text-sand/70 max-w-xs leading-relaxed">
            Love. Care. Disciple. Empower. Protecting, educating and equipping Ugandan children so they can build self-reliant communities.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-gold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-sand/80">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/our-work" className="hover:text-gold transition-colors">Our Work</Link></li>
            <li><Link href="/get-involved" className="hover:text-gold transition-colors">Get Involved</Link></li>
            <li><Link href="/updates" className="hover:text-gold transition-colors">Updates</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-gold mb-4">Get Involved</h3>
          <ul className="space-y-2 text-sm text-sand/80">
            <li><Link href="/get-involved#sponsor" className="hover:text-gold transition-colors">Sponsor a Child</Link></li>
            <li><Link href="/get-involved#donate" className="hover:text-gold transition-colors">Donate</Link></li>
            <li><Link href="/get-involved#partner" className="hover:text-gold transition-colors">Partner With Us</Link></li>
            <li><Link href="/get-involved#volunteer" className="hover:text-gold transition-colors">Volunteer</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider text-gold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-sand/80">
            <li>
              Phone:{' '}
              <a href="tel:+256393217945" className="text-sand/60 hover:text-gold transition-colors">
                +256393217945
              </a>
            </li>
            <li>
              WhatsApp:{' '}
              <a href="https://wa.me/256772066789" target="_blank" rel="noreferrer" className="text-sand/60 hover:text-gold transition-colors">
                0772066789
              </a>
            </li>
            <li>
              Email:{' '}
              <a href="mailto:avodahcm@outlook.com" className="text-sand/60 hover:text-gold transition-colors">
                avodahcm@outlook.com
              </a>
            </li>
            <li>
              Facebook:{' '}
              <a href="https://www.facebook.com/people/Avodah-Childrens-Mission/61591418400796" target="_blank" rel="noreferrer" className="text-sand/60 hover:text-gold transition-colors">
                Avodah Children&rsquo;s Mission
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="max-w-content mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-sand/50">
          <p>&copy; {new Date().getFullYear()} Avodah Children&rsquo;s Mission. All rights reserved.</p>
          <p>Site built with love for the children of Uganda.</p>
        </div>
      </div>
    </footer>
  );
}
