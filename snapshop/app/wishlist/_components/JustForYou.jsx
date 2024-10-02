import RedSubHeading from '@/components/UI/RedSubHeading';
import TransparentButton from '@/components/UI/TransparentButton';
import ProductsGrid from '@/components/UI/ProductsGrid';
import GridSkeleton from '@/components/UI/GridSkeleton';

const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    const fetchedProducts = data.sort(() => 0.5 - Math.random()).slice(0, 4);

    const products = fetchedProducts.map((product) => ({
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

    return products;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const JustForYou = async () => {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex flex-row justify-between items-center mb-5">
        <RedSubHeading subHeading="Just For You" />
        <TransparentButton text="See All" href="/products" />
      </div>
      {!products && <GridSkeleton />}
      {products && <ProductsGrid products={products} />}
    </div>
  );
};

export default JustForYou;
