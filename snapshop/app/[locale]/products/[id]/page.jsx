import ProductDetail from '@/app/[locale]/products/[id]/_components/ProductDetail';
import RelatedItems from '@/app/[locale]/products/[id]/_components/RelatedItems';
import Breadcrumb from '@/components/UI/Breadcrumb';
import { notFound } from 'next/navigation';

const ProductDetailPage = async ({ params }) => {
  const { id, locale } = params;

  let product = null;
  let error = null;

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const fetchedProduct = await response.json();

    product = {
      id: fetchedProduct.id,
      name: fetchedProduct.title,
      image: fetchedProduct.image,
      discount: Math.floor(Math.random() * 50) + 10,
      price: fetchedProduct.price,
      originalPrice: (fetchedProduct.price * (1 + Math.random() * 0.5)).toFixed(
        2
      ),
      category: fetchedProduct.category,
      rating: fetchedProduct.rating.rate,
      ratingCount: fetchedProduct.rating.count,
      description: fetchedProduct.description,
    };
  } catch (err) {
    error = err.message;
  }

  if (!product) {
    notFound();
  }

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
      {error && <p className="text-red-500">Error occurred: {error}</p>}
      {product && (
        <>
          <ProductDetail product={product} />
          <RelatedItems category={product.category} locale={locale} />
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
