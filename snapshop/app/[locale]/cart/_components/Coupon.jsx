import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import { useTranslations } from 'next-intl';

const Coupon = () => {
  const t = useTranslations('cart.coupon');
  return (
    <div className="flex items-center justify-between">
      <Input
        placeholder={t('placeholder')}
        fontSize="text-sm"
        variant="bordered"
      />
      <Button text={t('apply')} onClick={null} className="ml-4 -mt-6" />
    </div>
  );
};

export default Coupon;
