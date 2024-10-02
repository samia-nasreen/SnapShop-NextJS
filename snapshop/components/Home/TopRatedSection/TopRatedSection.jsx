import RedSubHeading from '@/components/UI/RedSubHeading';
import Button from '@/components/UI/Button';
import Heading from '@/components/UI/Heading';
import ProductsGrid from '@/components/UI/ProductsGrid';
import GridSkeleton from '@/components/UI/GridSkeleton';

const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    const filteredProducts = data.filter((product) => product.rating.rate > 4);

    const randomProducts = filteredProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    const products = randomProducts.map((product) => ({
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

const TopRatedSection = async () => {
  const products = await fetchProducts();

  return (
    <div className="flash-sales mt-16 mb-24 px-4 bg-white relative">
      <RedSubHeading subHeading="This Month" />
      <div className="flex items-center justify-between mb-4 ">
        <Heading text="Top Rated Products" />
        <Button text="View All" href="/products" />
      </div>
      {!products && <GridSkeleton />}
      {products && <ProductsGrid products={products} />}
    </div>
  );
};

export default TopRatedSection;
