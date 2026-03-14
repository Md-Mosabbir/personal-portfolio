import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mosabbir Khan - Full-Stack Developer | Node.js, Next.js, Cloud Expert',
  description:
    'Mosabbir Khan is a full-stack developer specializing in scalable web systems, backend architecture, and startup product development using Node.js, Next.js, MongoDB, and cloud infrastructure.',
  keywords:
    'Full-Stack Developer, Node.js, Next.js, MongoDB, Cloud Infrastructure, Web Development, Backend Systems, API Development, Mosabbir Khan',
  authors: [{ name: 'Mosabbir Khan' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mosabbir.tech',
    siteName: 'Mosabbir Khan Portfolio',
    title: 'Mosabbir Khan - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in scalable web systems and modern web platforms.',
    images: [
      {
        url: 'https://mosabbir.tech/photo.jpeg', // <— your face
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mosabbir Khan - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in scalable web systems and modern web platforms.',
    images: ['https://mosabbir.tech/photo.jpeg'], // <— your face
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mosabbir.tech" />
   {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/icons.svg" />
        {/* fallback for older browsers */}
        <link rel="shortcut icon" href="/icons.svg" />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
