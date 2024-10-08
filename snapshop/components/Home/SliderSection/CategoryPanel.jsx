"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";

const CategoryPanel = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleCategoryClick = (category) => {
    router.push(`/products/category/${category}`);
  };

  const isActiveCategory = (category) => {
    return pathname === `/products/category/${category}`;
  };

  return (
    <div className="w-full p-4">
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.value}
            className={`cursor-pointer hover:text-gray-700 ${
              isActiveCategory(category.value)
                ? "text-gray-700 font-semibold text-lg"
                : ""
            }`}
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;
