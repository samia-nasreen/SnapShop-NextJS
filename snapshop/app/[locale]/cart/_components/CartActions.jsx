'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Button from '@/components/UI/Button';
import { useAppDispatch } from '@/lib/hooks';
import { cartActions } from '@/lib/features/cart/cartSlice';

const CartActions = ({ locale }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const t = useTranslations('cart.actions');

  const handleClearCartButton = () => {
    dispatch(cartActions.clearCart());
  };

  const handleReturnToShopButton = () => {
    router.push(`/${locale}/`);
  };

  return (
    <div className="flex flex-row justify-between mt-8">
      <Button
        text={t('return')}
        fontWeight="medium"
        onClick={handleReturnToShopButton}
        variant="transparent"
      />
      <Button
        text={t('clear')}
        fontWeight="medium"
        onClick={handleClearCartButton}
        variant="transparent"
      />
    </div>
  );
};

export default CartActions;
