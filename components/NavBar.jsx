'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const links = [
  { href: '/about', label: 'About Us' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/updates', label: 'Updates' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand/95 backdrop-blur border-b border-clay/15">
      <div className="max-w-content mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative h-11 w-11 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Avodah Children's Mission logo"
              fill
              className="object-contain rounded-sm"
              priority
            />
          </div>
          <span className="font-display font-semibold text-navy text-lg md:text-xl leading-tight tracking-tight">
            Avodah<span className="text-clay"> Children&rsquo;s Mission</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-[15px] text-ink">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-clay transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/get-involved#donate"
            className="bg-clay text-sand px-5 py-2.5 rounded-full font-medium hover:bg-clay-deep transition-colors"
          >
            Donate
          </Link>
        </nav>

        <button
          className="md:hidden text-navy p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {open ? (
              <path d="M6 6L20 20M20 6L6 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 8H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 13H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-clay/15 bg-sand px-5 pb-5 flex flex-col gap-1 font-body text-ink">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-clay/10 last:border-none"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/get-involved#donate"
            onClick={() => setOpen(false)}
            className="mt-3 bg-clay text-sand px-5 py-3 rounded-full font-medium text-center"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}
