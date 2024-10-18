import Button from '@/components/UI/Button';
import Heading from '@/components/UI/Heading';
import CartSummaryItem from '@/components/UI/CartSummaryItem';
import { useTranslations } from 'next-intl';

interface CartTotalProps {
  totalAmount: number;
  isCartEmpty: boolean;
  locale: string;
}

const CartTotal: React.FC<CartTotalProps> = ({
  totalAmount,
  isCartEmpty,
  locale,
}) => {
  const t = useTranslations('cart.total');

  return (
    <div className="w-full md:w-1/2 flex justify-end">
      <div className="border-[1.5px] border-gray-700 px-4 sm:px-6 py-6 sm:py-8 rounded shadow-md w-full sm:w-5/6">
        <Heading text={t('cartTotal')} fontSize="text-lg sm:text-xl" />
        <CartSummaryItem label={t('subtotal')} value={totalAmount} />
        <CartSummaryItem label={t('shipping')} value="Free" />
        <CartSummaryItem label={t('total')} value={totalAmount} lastItem />
        <div className="flex justify-center mt-8">
          <Button
            text={t('proceed')}
            href={`/${locale}/checkout`}
            fontSize="base"
            isDisabled={isCartEmpty}
          />
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
