import RedSubHeading from '../../../components/UI/RedSubHeading';
import LinkButton from '../../../components/UI/LinkButton';
import Heading from '../../../components/UI/Heading';
import ProductsGrid from '../../../components/UI/ProductsGrid';
import GridSkeleton from '../../../components/UI/GridSkeleton';

const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    const fetchedProducts = data.sort(() => 0.5 - Math.random()).slice(0, 8);

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

const ExploreSection = async () => {
  const products = await fetchProducts();

  return (
    <div className="explore-section mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading="Our Products" />
      <Heading text="Explore Our Products" />
      {!products ? (
        <GridSkeleton lines={2} />
      ) : (
        <ProductsGrid products={products} />
      )}
      <div className="mt-12 text-center">
        <LinkButton text="View All Products" href="/products" />
      </div>
    </div>
  );
};

export default ExploreSection;
