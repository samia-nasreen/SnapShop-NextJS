'use client';

import { useState, useEffect } from 'react';
import ProductsGrid from '@/components/UI/ProductsGrid';
import GridSkeleton from '@/components/UI/GridSkeleton';
import ReactPaginate from 'react-paginate';

const PRODUCTS_PER_PAGE = 8;

const AllProductsPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        setData(products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const paginatedData = data
    ? data.slice(
        currentPage * PRODUCTS_PER_PAGE,
        (currentPage + 1) * PRODUCTS_PER_PAGE
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto pt-4 md:pt-8 pb-20 md:pb-28 px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-8">
        All Products
      </h1>
      {isLoading && <GridSkeleton lines={5} />}
      {!isLoading && <ProductsGrid products={paginatedData} />}
      {error && <p className="text-red-500">Error occurred: {error.message}</p>}
      {!isLoading && !error && data && (
        <ReactPaginate
          pageCount={Math.ceil(data.length / PRODUCTS_PER_PAGE)}
          onPageChange={handlePageChange}
          containerClassName="flex justify-center mt-6 text-lg font-medium"
          pageClassName="mx-1"
          pageLinkClassName="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-300 transition"
          activeClassName="bg-blue-500 text-white"
          activeLinkClassName="bg-blue-500 text-white hover:bg-blue-500"
          previousLabel="<"
          previousClassName="mx-1"
          previousLinkClassName="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-300 transition"
          nextLabel=">"
          nextClassName="mx-1"
          nextLinkClassName="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-300 transition"
        />
      )}
    </div>
  );
};

export default AllProductsPage;
