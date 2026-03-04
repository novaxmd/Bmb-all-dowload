'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const termsPath = `/${locale}/terms`;
  const privacyPath = `/${locale}/privacy`;

  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6">
          <div>
            <Link href={termsPath} className="text-gray-400 hover:text-white transition-colors">
              {mounted ? t('termsLink') : 'Terms'}
            </Link>
          </div>
          <div>
            <Link href={privacyPath} className="text-gray-400 hover:text-white transition-colors">
              {mounted ? t('privacyLink') : 'Privacy'}
            </Link>
          </div>
        </div>

        <p className="mt-3 max-w-2xl mx-auto text-gray-500">
          {mounted ? t('disclaimer') : ''}
        </p>

        <p className="mt-4 text-gray-500">
          © {currentYear} Bmb Download All Video
          {mounted ? (
            <>
              {' '} - {t('licensedUnder')}{' '}
              <a
                href="https://opensource.org/licenses/MIT"
                className="underline hover:text-white transition-colors"
              >
                {t('mitLicense')}
              </a>
            </>
          ) : (
            <>
              {' '} - Licensed under{' '}
              <a
                href="https://opensource.org/licenses/MIT"
                className="underline hover:text-white transition-colors"
              >
                MIT License
              </a>
            </>
          )}
        </p>
      </div>
    </footer>
  );
}