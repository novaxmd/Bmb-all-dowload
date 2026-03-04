import '../globals.css';
import '../utilities.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';
import { locales } from '@/config';
import { Providers } from './providers';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Bmb Download All Video',
  description:
    'Free online tool to download videos from YouTube, Instagram, Twitter and many websites.',
  keywords:
    'video downloader, youtube downloader, mp3 converter, download video',
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      sw: '/sw',
    },
  },
  openGraph: {
    title: 'Bmb Download All Video',
    description:
      'Download videos easily from multiple platforms online.',
    url: 'https://yourdomain.com',
    siteName: 'Bmb Download All Video',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bmb Download All Video',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bmb Download All Video',
    description: 'Download videos easily online.',
    images: ['/twitter-image.jpg'],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}`)).default;
  } catch (error) {
    notFound();
  }

  const description =
    'Download videos easily from multiple platforms online.';

  return (
    <html lang={locale} className="h-full bg-black">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>

      <body className={`${inter.className} h-full bg-black text-white`}>
        <Providers locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen bg-black text-white">
            
            {/* HEADER */}
            <header className="bg-gray-900 shadow-md border-b border-gray-800">
              <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center">
                  <Link href={`/${locale}`} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-500 mr-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    <h1 className="text-xl font-bold text-white">
                      Bmb Download All Video
                    </h1>
                  </Link>
                </div>

                <nav className="flex items-center space-x-6">
                  <LanguageSwitcher />
                  <ul className="flex space-x-4">
                    <li>
                      <a
                        href="https://github.com/novaxmd"
                        className="text-gray-300 hover:text-white transition"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-grow max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {children}
            </main>

            {/* FOOTER */}
            <Footer locale={locale} />
          </div>
        </Providers>

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Bmb Download All Video',
              url: 'https://yourdomain.com',
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description: description,
            }),
          }}
        />
      </body>
    </html>
  );
}