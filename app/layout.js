import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Avodah Children's Mission | Love. Care. Disciple. Empower.",
  description:
    "Avodah Children's Mission protects, educates, empowers and evangelizes vulnerable children in Uganda through education, health, water and community programs.",
  metadataBase: new URL('https://https://avodah-seven.vercel.app'),
  openGraph: {
    title: "Avodah Children's Mission",
    description:
      'Love. Care. Disciple. Empower. Building self-reliant communities for Uganda\u2019s children.',
    images: ['/images/classroom-benches.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
