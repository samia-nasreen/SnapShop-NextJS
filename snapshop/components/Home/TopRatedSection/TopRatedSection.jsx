'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RedSubHeading from '@/components/UI/RedSubHeading';
import Button from '@/components/UI/Button';
import Heading from '@/components/UI/Heading';
import ProductsGrid from '@/components/UI/ProductsGrid';
import GridSkeleton from '@/components/UI/GridSkeleton';

const TopRatedSection = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          '/api/products?minRating=4&randomize=true&count=4'
        );
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

  const handleViewAllButton = () => {
    router.push('/products');
  };

  return (
    <div className="flash-sales mt-16 mb-24 px-4 bg-white relative">
      <RedSubHeading subHeading="This Month" />
      <div className="flex items-center justify-between mb-4 ">
        <Heading text="Top Rated Products" />
        <Button text="View All" onClick={handleViewAllButton} />
      </div>
      {isLoading && <GridSkeleton />}
      {!isLoading && <ProductsGrid products={products} />}
      {error && <p>Error occured: {error}</p>}
    </div>
  );
};

export default TopRatedSection;
