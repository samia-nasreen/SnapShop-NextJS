import ProductsGrid from '@/components/UI/ProductsGrid';
import { notFound } from 'next/navigation';

export default async function AllProductsPage({ params }) {
  let products = [];
  let error = null;

  try {
    const response = await fetch('https://fakestoreapi.com/products');
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

  const { locale } = params;

  return (
    <div className="max-w-7xl mx-auto pt-4 md:pt-8 pb-20 md:pb-28 px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-8">
        {locale === 'en' && 'All Products'}
        {locale === 'fr' && 'Tous les produits'}
        {locale === 'es' && 'Todos los Productos'}
      </h1>
      {error && <p className="text-red-500">Error occurred: {error}</p>}
      {!error && <ProductsGrid products={products} />}
    </div>
  );
}
