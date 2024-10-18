'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const t = useTranslations('header');

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="flex bg-black text-white font-sans p-4 items-center justify-between h-12">
      <div className="hidden lg:flex items-center flex-grow justify-center">
        <span className="inline-block text-sm mr-2 ml-[130px]">
          {t('saleText')}
        </span>
        <span className="font-medium text-sm underline cursor-pointer">
          {t('shopNow')}
        </span>
      </div>
      <div className="flex items-center relative ml-auto">
        <select
          value={locale}
          onChange={handleLanguageChange}
          className="custom-select text-sm mr-2 lg:mr-24"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
