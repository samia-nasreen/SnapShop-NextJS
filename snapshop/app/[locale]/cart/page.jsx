'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cartActions } from '@/lib/features/cart/cartSlice';
import Coupon from '@/app/[locale]/cart/_components/Coupon';
import CartTotal from '@/app/[locale]/cart/_components/CartTotal';
import CartActions from '@/app/[locale]/cart/_components/CartActions';
import EmptyMessage from '@/components/UI/EmptyMessage';
import Breadcrumb from '@/components/UI/Breadcrumb';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const InfoTable = dynamic(
  () => import('@/app/[locale]/cart/_components/InfoTable'),
  {
    ssr: false,
  }
);

const validLocales = ['fr', 'en', 'es'];

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const t = useTranslations('cart.empty');
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);
  let locale = segments[0];

  if (!validLocales.includes(locale)) {
    locale = 'en';
  }

  const increaseQuantityHandler = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };

  const decreaseQuantityHandler = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="container px-8 sm:px-8 mx-auto pb-32">
      <Breadcrumb parts={['Home', 'Cart']} />
      <EmptyMessage message={t('message')} isEmpty={isCartEmpty} />
      {!isCartEmpty && (
        <InfoTable
          cartItems={cartItems}
          increaseQuantityHandler={increaseQuantityHandler}
          decreaseQuantityHandler={decreaseQuantityHandler}
        />
      )}
      <CartActions locale={locale} />
      <div className="flex flex-col md:flex-row justify-between items-start mt-20">
        <Coupon />
        <CartTotal
          totalAmount={totalAmount}
          isCartEmpty={isCartEmpty}
          locale={locale}
        />
      </div>
    </div>
  );
};

export default Cart;
