'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RedSubHeading from '../../../components/UI/RedSubHeading';
import Button from '../../../components/UI/Button';
import Heading from '../../../components/UI/Heading';
import ProductsGrid from '../../../components/UI/ProductsGrid';
import GridSkeleton from '../../../components/UI/GridSkeleton';

const ExploreSection = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products?randomize=true&count=8');
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
    <div className="explore-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Our Products" />
      <Heading text="Explore Our Products" />
      {isLoading && <GridSkeleton lines={2} />}
      {!isLoading && <ProductsGrid products={products} />}
      {error && <p>Error occured: {error}</p>}
      <div className="mt-12 text-center">
        <Button text="View All Products" onClick={handleViewAllButton} />
      </div>
    </div>
  );
};

export default ExploreSection;
