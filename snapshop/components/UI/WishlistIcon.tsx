'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch, RootState } from '@/lib/store';
import { wishlistActions } from '@/lib/features/wishlist/wishlistSlice';
import { Product } from '@/types/product';

interface WishListIconProps {
  product: Product;
  className?: string;
  size?: string;
  radius?: string;
}

const WishListIcon: React.FC<WishListIconProps> = ({
  product,
  className = '',
  size = '9',
  radius = 'rounded-md',
}) => {
  const dispatch = useAppDispatch<AppDispatch>();
  const wishlist = useAppSelector((state: RootState) => state.wishlist.items);

  const isInWishlist = wishlist.some(
    (item: { id: number }) => item.id === product.id
  );

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(wishlistActions.removeFromWishlist(product.id));
    } else {
      dispatch(wishlistActions.addToWishlist(product));
    }
  };

  return (
    <button
      aria-label="Add to wishlist"
      className={`border bg-white border-gray-500 p-1 ${radius} top-2 right-2 ${className}`}
      onClick={handleWishlistToggle}
    >
      <svg
        className={`w-${size} h-${size} p-1`}
        fill={isInWishlist ? '#ef4444' : 'none'}
        stroke={isInWishlist ? '#ef4444' : 'black'}
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
};

export default WishListIcon;
