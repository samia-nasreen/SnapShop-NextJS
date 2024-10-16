import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const validLocales = ['fr', 'en', 'es'];

const LoginLink: React.FC = () => {
  const t = useTranslations('signUp.loginLink');
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  let locale = segments[0];

  if (!validLocales.includes(locale)) {
    locale = 'en';
  }

  return (
    <p className="mt-4 flex items-center justify-center">
      {t('text')}
      <Link
        href={`/${locale}/login`}
        className="ml-2 p-1 font-medium border-b-[1.25px] border-gray-500"
      >
        {t('link')}
      </Link>
    </p>
  );
};

export default LoginLink;
