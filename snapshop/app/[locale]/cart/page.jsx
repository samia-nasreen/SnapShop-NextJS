'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cartActions } from '@/lib/features/cart/cartSlice';
import Coupon from '@/app/[locale]/cart/_components/Coupon';
import CartTotal from '@/app/[locale]/cart/_components/CartTotal';
import CartActions from '@/app/[locale]/cart/_components/CartActions';
import EmptyMessage from '@/components/UI/EmptyMessage';
import Breadcrumb from '@/components/UI/Breadcrumb';
import dynamic from 'next/dynamic';

const InfoTable = dynamic(
  () => import('@/app/[locale]/cart/_components/InfoTable'),
  {
    ssr: false,
  }
);

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);

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
      <EmptyMessage message="Your cart is empty" isEmpty={isCartEmpty} />
      {!isCartEmpty && (
        <InfoTable
          cartItems={cartItems}
          increaseQuantityHandler={increaseQuantityHandler}
          decreaseQuantityHandler={decreaseQuantityHandler}
        />
      )}
      <CartActions />
      <div className="flex flex-col md:flex-row justify-between items-start mt-20">
        <Coupon />
        <CartTotal totalAmount={totalAmount} isCartEmpty={isCartEmpty} />
      </div>
    </div>
  );
};

export default Cart;
