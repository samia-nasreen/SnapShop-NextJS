import Image from 'next/image';
import Button from '@/components/UI/Button';
import PaymentMethod from '@/components/UI/PaymentMethod';
import Input from '@/components/UI/Input';
import { UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';
import { useTranslations } from 'next-intl';

interface PlaceOrderValues {
  paymentMethod: string;
}

interface PlaceOrderProps {
  register: UseFormRegister<PlaceOrderValues>;
  handleSubmit: UseFormHandleSubmit<PlaceOrderValues>;
  onSubmit: (data: PlaceOrderValues) => void;
}

const PlaceOrder: React.FC<PlaceOrderProps> = ({
  register,
  handleSubmit,
  onSubmit,
}) => {
  const t = useTranslations('checkout.placeOrder');

  return (
    <>
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <PaymentMethod
            id="bank"
            value="Bank"
            label={t('bank')}
            register={register('paymentMethod')}
          />
          <Image
            src="/assets/banks.png"
            className="h-7 lg:mr-24"
            alt="Bank methods"
            width={200}
            height={40}
          />
        </div>
        <PaymentMethod
          id="cod"
          value="Cash on delivery"
          label={t('cod')}
          register={register('paymentMethod')}
          defaultChecked
        />
      </div>
      <div className="flex flex-row items-center space-x-4 py-4">
        <Input
          name="coupon"
          placeholder={t('coupon')}
          className="flex-1"
          fontSize="text-sm"
          variant="bordered"
        />
        <Button text={t('apply')} className="-mt-6" onClick={() => {}} />
      </div>
      <Button
        text={t('placeOrder')}
        fontSize="base"
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default PlaceOrder;
