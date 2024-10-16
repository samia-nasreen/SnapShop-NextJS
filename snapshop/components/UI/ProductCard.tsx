import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import { cartActions } from '@/lib/features/cart/cartSlice';
import { RootState } from '@/lib/store';
import Rating from './Rating';
import WishListIcon from './WishlistIcon';
import { Product } from '@/types/product';
import Image from 'next/image';
import { CartItem } from '@/types/cartItem';

interface ProductCardProps {
  product: Product;
  locale: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, locale }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const isInCart = cartItems.some((item: CartItem) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(
        cartActions.addToCart({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        })
      );
    }
  };

  return (
    <div className="product-card max-w-44 md:max-w-64 shadow-inner rounded-lg md:p-4 relative overflow-hidden group cursor-pointer">
      <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
        <Link href={`/${locale}/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-auto h-48 object-contain rounded-t-lg"
          />
        </Link>
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
          -{product.discount}%
        </div>
        <WishListIcon
          product={product}
          size="6"
          radius="rounded-full"
          className="absolute top-1 right-1 shadow-md"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-100 text-white text-sm text-center  rounded-b py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-full" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <div className="flex items-center mt-2">
          <span className="md:text-lg font-medium text-red-500">
            ${product.price}
          </span>
          <span className="text-xs md:text-sm text-gray-600 ml-2 line-through">
            ${product.originalPrice}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <Rating rating={product.rating} size="4" />
          <span className="ml-1 text-xs md:text-sm text-gray-600">
            ({product.ratingCount})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
