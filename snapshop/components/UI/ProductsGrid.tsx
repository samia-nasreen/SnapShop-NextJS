'use client';

import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import ScrollLeftButton from './ScrollLeftButton';
import ScrollRightButton from './ScrollRightButton';
import { usePathname } from 'next/navigation';

interface ProductsGridProps {
  products: Product[];
  scroll?: boolean;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  scroll = false,
}) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={scroll ? scrollContainerRef : null}
      className={`${
        scroll
          ? 'flex overflow-x-auto space-x-4 scrollbar-hide py-4'
          : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4'
      }`}
    >
      {products.map((product) => (
        <div key={product.id} className={scroll ? 'flex-shrink-0' : ''}>
          <ProductCard product={product} locale={locale} />
        </div>
      ))}
      {scroll && (
        <>
          <ScrollLeftButton scrollLeft={scrollLeft} />
          <ScrollRightButton scrollRight={scrollRight} />
        </>
      )}
    </div>
  );
};

export default ProductsGrid;
