'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import RelatedItems from '@/components/ProductDetail/RelatedItems';
import Breadcrumb from '@/components/UI/Breadcrumb';
import ProductDetailSkeleton from '@/components/ProductDetail/ProductDetailSkeleton';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        setProduct(products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="px-1 md:px-28">
      <Breadcrumb
        parts={[
          'Account',
          product ? product.category : 'Loading...',
          product ? product.name : 'Loading...',
        ]}
        className="ml-4"
      />
      {isLoading && <ProductDetailSkeleton />}
      {!isLoading && product && (
        <>
          <ProductDetail product={product} />
          <RelatedItems category={product.category} />
        </>
      )}
      {error && <p>Error occured: {error}</p>}
    </div>
  );
};

export default ProductDetailPage;
