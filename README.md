# Avodah Children's Mission — Website

A Next.js 14 (App Router) + Tailwind CSS website for Avodah Children's Mission, built from
the organized content doc and photos provided.

## Pages

- `/` — Home
- `/about` — People, Our Story, Why Uganda, Vision/Mission, Objectives, Values, Our Model
- `/our-work` — Education, Health, Water, Community Outreach
- `/get-involved` — Sponsor a Child, Donate, Partner With Us, Volunteer
- `/updates` — Blog placeholder + newsletter sign-up
- `/contact` — Contact channels + a contact form

## Before you launch: things to fill in

Search the codebase for these placeholders and replace them with real info:

1. **Contact details** — phone, WhatsApp, email, Facebook link
   - `components/Footer.jsx`
   - `app/contact/page.js`
2. **Sponsorship link** — the "Start sponsoring" button in `app/get-involved/page.js` (`id="sponsor"`)
3. **Donate links** — each project card's "Give toward this" link in `app/get-involved/page.js` (`id="donate"`). Once you have a payment processor (Stripe, PayPal, GoFundMe, Give Lively, etc.), swap the `href="#"` for the real checkout link.
4. **Newsletter form** — `app/updates/page.js` currently just shows a confirmation message. Connect a real provider (Mailchimp, Buttondown, Kit) by replacing the `handleSubmit` function with an API call.
5. **Contact form** — `components/ContactForm.jsx` currently just shows a confirmation message without sending anything. Easiest options:
   - [Formspree](https://formspree.io) — point the form's `action` at your Formspree endpoint, no backend needed.
   - Or a Next.js API route + [Resend](https://resend.com) to email submissions to your inbox.
6. **Domain** — the `metadataBase` URL in `app/layout.js` is set to `https://example.com`; update it to your real domain once you have one.

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Add your custom domain under Project Settings → Domains once you have one.

**Option B — via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # deploys to production
```

Every push to your main branch will auto-deploy once connected to GitHub.

## Tech notes

- **Framework:** Next.js 14 (App Router), plain JavaScript (no TypeScript) for simplicity.
- **Styling:** Tailwind CSS with a custom palette (navy, clay/terracotta, banana-leaf green,
  gold) and two fonts — Fraunces (display) and Inter (body) — loaded via `next/font/google`.
- **Images:** all photos live in `public/images/` and are rendered with `next/image` for
  automatic optimization. Swap any image by replacing the file (keep the same filename) or
  updating the `src` path in the relevant page.
- No database or CMS is wired up. Content (bios, program descriptions, impact numbers) is
  written directly into the page files — edit the arrays/text at the top of each page file
  in `app/` to update copy.
