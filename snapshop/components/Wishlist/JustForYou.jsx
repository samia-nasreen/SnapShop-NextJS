'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RedSubHeading from '@/components/UI/RedSubHeading';
import TransparentButton from '@/components/UI/TransparentButton';
import ProductsGrid from '@/components/UI/ProductsGrid';
import GridSkeleton from '@/components/UI/GridSkeleton';

const JustForYou = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products?randomize=true&count=4');
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

  const handleSeeAllButton = () => {
    router.push('/products');
  };

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex flex-row justify-between items-center mb-5">
        <RedSubHeading subHeading="Just For You" />
        <TransparentButton text="See All" onClick={handleSeeAllButton} />
      </div>
      {isLoading && <GridSkeleton />}
      {!isLoading && <ProductsGrid products={products} />}
      {error && <p>Error occured: {error}</p>}
    </div>
  );
};

export default JustForYou;
