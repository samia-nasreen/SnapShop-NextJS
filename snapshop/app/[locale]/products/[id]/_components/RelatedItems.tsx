import ProductsGrid from '@/components/UI/ProductsGrid';
import RedSubHeading from '@/components/UI/RedSubHeading';

interface RelatedItemsProps {
  category: string;
  locale: string;
}

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const fetchProducts = async (category: string) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    const fetchedProducts = data.sort(() => 0.5 - Math.random()).slice(0, 4);

    const products = fetchedProducts.map((product: Product) => ({
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

const RelatedItems: React.FC<RelatedItemsProps> = async ({
  category,
  locale,
}) => {
  const relatedProducts = await fetchProducts(category);
  const subHeading =
    locale === 'es'
      ? 'Artículos relacionados'
      : locale === 'fr'
      ? 'Articles associés'
      : 'Related Items';

  return (
    <div className="container mx-auto mt-16 mb-24 p-5">
      <div className="flex justify-between items-center mb-5">
        <RedSubHeading subHeading={subHeading} />
      </div>
      {relatedProducts && <ProductsGrid products={relatedProducts || []} />}
    </div>
  );
};

export default RelatedItems;
