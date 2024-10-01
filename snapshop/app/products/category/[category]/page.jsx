import ProductsGrid from '@/components/UI/ProductsGrid';
import { notFound } from 'next/navigation';
import CategoryPanel from '@/components/Home/SliderSection/CategoryPanel';
import RedSubHeading from '@/components/UI/RedSubHeading';

const CategoryPage = async ({ params }) => {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);

  let products = [];
  let error = null;

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const fetchedProducts = await response.json();

    products = fetchedProducts.map((product) => ({
      id: product.id,
      name: product.title,
      image: product.image,
      discount: Math.floor(Math.random() * 50) + 10,
      price: product.price,
      originalPrice: (product.price * (1 + Math.random() * 0.5)).toFixed(2),
      category: product.category,
      rating: product.rating.rate,
      ratingCount: product.rating.count,
      description: product.description,
    }));
  } catch (err) {
    error = err.message;
  }

  if (!products.length) {
    notFound();
  }

  return (
    <div className="max-w-7xl min-h-screen mx-auto pt-4 md:pt-8 pb-20 md:pb-28 px-4 md:px-8">
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:flex w-1/4 border-r border-gray-300 pr-4">
          <CategoryPanel />
        </div>
        <div className="w-full md:w-3/4 flex flex-col pl-4">
          <div className="md:hidden mb-4">
            <RedSubHeading subHeading={decodedCategory} />
          </div>
          {error && (
            <p className="text-red-500 mb-4">Error occurred: {error}</p>
          )}
          {!error && <ProductsGrid products={products} />}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
