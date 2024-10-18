import Input from '@/components/UI/Input';
import {
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { useTranslations } from 'next-intl';

interface CheckoutFormValues {
  firstName: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  phoneNumber: string;
  email: string;
}

interface CheckoutFormProps {
  handleSubmit: UseFormHandleSubmit<CheckoutFormValues>;
  onSubmit: (data: CheckoutFormValues) => void;
  register: UseFormRegister<CheckoutFormValues>;
  setValue: (name: string, value: string) => void;
  errors: FieldErrors<CheckoutFormValues>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  handleSubmit,
  onSubmit,
  register,
  setValue,
  errors,
}) => {
  const t = useTranslations('checkout.form');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-zinc-400">
      <Input
        label={t('name')}
        name="firstName"
        register={register}
        errors={errors}
        onChange={(e) => {
          setValue('firstName', e.target.value);
        }}
        variant="rounded"
        required
      />
      <Input
        label={t('company')}
        name="companyName"
        register={register}
        errors={errors}
        onChange={(e) => {
          setValue('companyName', e.target.value);
        }}
        variant="rounded"
      />
      <Input
        label={t('address')}
        name="streetAddress"
        register={register}
        errors={errors}
        onChange={(e) => {
          setValue('streetAddress', e.target.value);
        }}
        variant="rounded"
        required
      />
      <Input
        label={t('apartment')}
        name="apartment"
        register={register}
        errors={errors}
        onChange={(e) => {
          setValue('apartment', e.target.value);
        }}
        variant="rounded"
      />
      <Input
        label={t('city')}
        name="city"
        register={register}
        errors={errors}
        onChange={(e) => {
          setValue('city', e.target.value);
        }}
        variant="rounded"
        required
      />
      <Input
        label={t('phone')}
        name="phoneNumber"
        register={register}
        errors={errors}
        onChange={(e) => {
          setValue('phoneNumber', e.target.value);
        }}
        variant="rounded"
        required
      />
      <Input
        label={t('email')}
        name="email"
        register={register}
        errors={errors}
        onChange={(e) => {
          setValue('email', e.target.value);
        }}
        variant="rounded"
        required
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          id="saveInfo"
          className="mr-4 h-6 w-6 border-[1.5px] border-zinc-300 rounded-sm"
        />
        <label htmlFor="saveInfo" className="text-black">
          {t('save')}
        </label>
      </div>
    </form>
  );
};

export default CheckoutForm;
