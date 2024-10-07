'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { categories } from '@/data/categories';
import { useTranslations } from 'next-intl';

const CategoryPanel = () => {
  const router = useRouter();
  const t = useTranslations('categories');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const handleCategoryClick = (category) => {
    router.push(`/${locale}/products/category/${category}`);
  };

  const isActiveCategory = (category) => {
    return pathname === `/${locale}/products/category/${category}`;
  };

  return (
    <div className="w-full p-4">
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.value}
            className={`cursor-pointer hover:text-gray-700 ${
              isActiveCategory(category.value)
                ? 'text-gray-700 font-semibold text-lg'
                : ''
            }`}
            onClick={() => handleCategoryClick(category.value)}
          >
            {t(category.translationKey)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
