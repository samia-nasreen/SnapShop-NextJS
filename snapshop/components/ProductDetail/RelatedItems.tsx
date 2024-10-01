'use client';

import { useState, useEffect } from 'react';
import ProductsGrid from '@/components/UI/ProductsGrid';
import RedSubHeading from '@/components/UI/RedSubHeading';
import GridSkeleton from '@/components/UI/GridSkeleton';

interface RelatedItemsProps {
  category: string;
}

const RelatedItems: React.FC<RelatedItemsProps> = ({ category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `/api/products/category/${category}?limit=4`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setRelatedProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex justify-between items-center mb-5">
        <RedSubHeading subHeading="Related Items" />
      </div>
      {isLoading && <GridSkeleton />}
      {!isLoading && <ProductsGrid products={relatedProducts || []} />}
      {error && <p>Error occured</p>}
    </div>
  );
};

export default RelatedItems;
