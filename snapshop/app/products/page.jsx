import ProductsGrid from '@/components/UI/ProductsGrid';

export default async function AllProductsPage() {
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

  return (
    <div className="max-w-7xl mx-auto pt-4 md:pt-8 pb-20 md:pb-28 px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-8">
        All Products
      </h1>
      {error && <p className="text-red-500">Error occurred: {error}</p>}
      {!error && <ProductsGrid products={products} />}
    </div>
  );
}
