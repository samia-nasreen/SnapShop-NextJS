'use client';

import { useRouter } from 'next/navigation';
import { cartActions } from '@/lib/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import Button from '@/components/UI/Button';

const CartActions = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClearCartButton = () => {
    dispatch(cartActions.clearCart());
  };

  const handleReturnToShopButton = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-row justify-between mt-8">
      <Button
        text="Return To Shop"
        fontWeight="medium"
        onClick={handleReturnToShopButton}
        variant="transparent"
      />
      <Button
        text="Clear Cart"
        fontWeight="medium"
        onClick={handleClearCartButton}
        variant="transparent"
      />
    </div>
  );
};

export default CartActions;
