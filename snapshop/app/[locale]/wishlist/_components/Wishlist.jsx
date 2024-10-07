'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { wishlistActions } from '@/lib/features/wishlist/wishlistSlice';
import { cartActions } from '@/lib/features/cart/cartSlice';
import TransparentButton from '@/components/UI/TransparentButton';
import EmptyMessage from '@/components/UI/EmptyMessage';
import ProductsGrid from '@/components/UI/ProductsGrid';

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist.items);
  const isWishlistEmpty = wishlist.length === 0;

  const moveAllToCartHandler = () => {
    wishlist.forEach((product) => {
      dispatch(cartActions.addToCart({ ...product, quantity: 1 }));
    });

    dispatch(wishlistActions.clearWishlist());
  };

  return (
    <div className="container mx-auto my-10 p-5">
      <div className="flex flex-row justify-between items-center mb-5">
        <h2 className="text-lg sm:text-2xl">Wishlist ({wishlist.length})</h2>
        {!isWishlistEmpty && (
          <TransparentButton
            text="Move All to Cart"
            onClick={moveAllToCartHandler}
          />
        )}
      </div>
      <EmptyMessage
        message="Your wishlist is empty"
        isEmpty={isWishlistEmpty}
      />
      <ProductsGrid products={wishlist} />
    </div>
  );
};

export default Wishlist;
