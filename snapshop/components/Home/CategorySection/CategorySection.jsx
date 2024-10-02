import { categoryIcons } from '@/data/categories';
import RedSubHeading from '@/components/UI/RedSubHeading';
import Heading from '@/components/UI/Heading';
import CategoryCard from '@/components/UI/CategoryCard';
import Link from 'next/link';

const CategorySection = () => {
  return (
    <div className="category-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Categories" />
      <Heading text="Browse By Category" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categoryIcons.map((category, index) => (
          <Link href={`/products/category/${category.value}`} key={index}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
      <div className="mt-16 border-b border-gray-200"></div>
    </div>
  );
};

export default CategorySection;
