'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/UI/Button';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '@/schemas/contactSchema';
import { sendContactMessage } from '@/actions';
import Input from '@/components/UI/Input';
import { useTranslations } from 'next-intl';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
  });
  const t = useTranslations('contact.form');

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);

    await sendContactMessage(formData);
    toast.success('Message sent successfully');
    reset();
  };

  return (
    <div
      className="bg-white rounded-md px-8 py-12 w-full md:w-2/3"
      style={{ boxShadow: '0px 0px 8px 2px rgba(0, 0, 0, 0.05)' }}
    >
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row md:space-x-10 mb-4">
          <Input
            name="name"
            placeholder={t('name')}
            register={register}
            errors={errors}
            onChange={(e) => {
              setValue('name', e.target.value);
            }}
            variant="rounded"
            className="flex-1"
            required
          />
          <Input
            name="email"
            placeholder={t('email')}
            register={register}
            errors={errors}
            onChange={(e) => {
              setValue('email', e.target.value);
            }}
            variant="rounded"
            className="flex-1"
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder={t('phone')}
            register={register}
            errors={errors}
            onChange={(e) => {
              setValue('phone', e.target.value);
            }}
            variant="rounded"
            className="flex-1"
            required
          />
        </div>
        <textarea
          placeholder={t('message')}
          rows={8}
          className="w-full p-3 border border-white bg-stone-100 rounded"
          {...register('message', { required: true })}
          onChange={(e) => {
            setValue('message', e.target.value);
          }}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">Message is required</p>
        )}
        <div className="pt-4 pb-2 text-right">
          <Button text={t('send')} type="submit" fontSize="base" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
