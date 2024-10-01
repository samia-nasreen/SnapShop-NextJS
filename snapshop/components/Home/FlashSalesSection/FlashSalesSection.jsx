'use client';

import { useState, useEffect } from 'react';
import { useRef } from 'react';
import TimeRemaining from './TimeRemaining';
import ScrollLeftButton from '@/components/UI/ScrollLeftButton';
import ScrollRightButton from '@/components/UI/ScrollRightButton';
import { useRouter } from 'next/navigation';
import RedSubHeading from '@/components/UI/RedSubHeading';
import Button from '@/components/UI/Button';
import Heading from '@/components/UI/Heading';
import ProductsGrid from '@/components/UI/ProductsGrid';
import GridSkeleton from '@/components/UI/GridSkeleton';

const FlashSalesSection = () => {
  const scrollContainerRef = useRef(null);
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products?limit=10&randomize=true');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth',
    });
  };

  const handleViewAllButton = () => {
    router.push('/products');
  };

  return (
    <div className="flash-sales mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Today's" />
      <div className="flex items-start justify-between">
        <Heading text="Flash Sales" />
        <TimeRemaining />
      </div>
      <div className="relative">
        {isLoading && <GridSkeleton />}
        {!isLoading && (
          <ProductsGrid
            products={products}
            scrollContainerRef={scrollContainerRef}
            scroll
          />
        )}
        {error && <p>Error occured: {error}</p>}
        <ScrollLeftButton scrollLeft={scrollLeft} />
        <ScrollRightButton scrollRight={scrollRight} />
      </div>
      <div className="mt-4 text-center">
        <Button text="View All Products" onClick={handleViewAllButton} />
      </div>
      <div className="mt-12 border-b border-gray-200"></div>
    </div>
  );
};

export default FlashSalesSection;
