'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { wishlistActions } from '@/lib/features/wishlist/wishlistSlice';
import { cartActions } from '@/lib/features/cart/cartSlice';
import Button from '@/components/UI/Button';
import EmptyMessage from '@/components/UI/EmptyMessage';
import ProductsGrid from '@/components/UI/ProductsGrid';
import { useTranslations } from 'next-intl';

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist.items);
  const isWishlistEmpty = wishlist.length === 0;
  const t = useTranslations('wishlist');

  const moveAllToCartHandler = () => {
    wishlist.forEach((product) => {
      dispatch(cartActions.addToCart({ ...product, quantity: 1 }));
    });

    dispatch(wishlistActions.clearWishlist());
  };

  return (
    <div className="container mx-auto my-10 p-5">
      <div className="flex flex-row justify-between items-center mb-5">
        <h2 className="text-lg sm:text-2xl">
          {t('heading')} ({wishlist.length})
        </h2>
        {!isWishlistEmpty && (
          <Button
            text={t('moveToCart')}
            onClick={moveAllToCartHandler}
            variant="transparent"
          />
        )}
      </div>
      <EmptyMessage message={t('emptyMessage')} isEmpty={isWishlistEmpty} />
      <ProductsGrid products={wishlist} />
    </div>
  );
};

export default Wishlist;
