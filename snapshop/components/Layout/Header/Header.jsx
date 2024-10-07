'use client';

import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="hidden lg:flex bg-black text-white font-sans p-4 items-center justify-between h-12">
      <div className="flex items-center flex-grow justify-center">
        <span className="inline-block text-sm mr-2 ml-[130px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
        </span>
        <span className="font-medium text-sm underline cursor-pointer">
          ShopNow
        </span>
      </div>
      <div className="flex items-center relative">
        <select
          value={locale}
          onChange={handleLanguageChange}
          className="custom-select text-sm mr-24"
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
