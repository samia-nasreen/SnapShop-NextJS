import TimeRemaining from './TimeRemaining';
import RedSubHeading from '@/components/UI/RedSubHeading';
import Button from '@/components/UI/Button';
import Heading from '@/components/UI/Heading';
import ProductsGrid from '@/components/UI/ProductsGrid';

const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    const fetchedProducts = data.sort(() => 0.5 - Math.random()).slice(0, 10);

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

const FlashSalesSection = async ({ locale, t }) => {
  const products = await fetchProducts();

  return (
    <div className="flash-sales mt-16 mb-12 px-4 bg-white relative">
      <RedSubHeading subHeading={t('subheading')} />
      <div className="flex items-start justify-between">
        <Heading text={t('heading')} />
        <TimeRemaining />
      </div>
      <div className="relative">
        {products && <ProductsGrid products={products} scroll />}
      </div>
      <div className="mt-4 text-center">
        <Button text={t('button')} href={`/${locale}/products`} />
      </div>
      <div className="mt-12 border-b border-gray-200"></div>
    </div>
  );
};

export default FlashSalesSection;
