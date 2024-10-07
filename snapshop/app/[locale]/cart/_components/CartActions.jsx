'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { cartActions } from '@/lib/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import TransparentButton from '@/components/UI/TransparentButton';

const CartActions = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const handleClearCartButton = () => {
    dispatch(cartActions.clearCart());
  };

  const handleReturnToShopButton = () => {
    router.push(`/${locale}/`);
  };

  return (
    <div className="flex flex-row justify-between mt-8">
      <TransparentButton
        text="Return To Shop"
        fontWeight="medium"
        onClick={handleReturnToShopButton}
      />
      <TransparentButton
        text="Clear Cart"
        fontWeight="medium"
        onClick={handleClearCartButton}
      />
    </div>
  );
};

export default CartActions;
