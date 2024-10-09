'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Category {
  icon: string;
  label: string;
  translationKey: string;
}

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const t = useTranslations('categories');

  return (
    <div
      className="cursor-pointer flex flex-col items-center p-4 md:p-8 border rounded-md hover:bg-red-100 transition"
      onClick={onClick}
    >
      <Image
        src={`/assets/${category.icon}`}
        alt="Category Icon"
        width={80}
        height={80}
        className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-4"
      />
      <span className="text-sm md:text-md">{t(category.translationKey)}</span>
    </div>
  );
};

export default CategoryCard;
