/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import Input from '@/components/UI/Input';
import { useTranslations } from 'next-intl';

interface PasswordChangeProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
}

const PasswordChange: React.FC<PasswordChangeProps> = ({
  register,
  errors,
}) => {
  const t = useTranslations('profile');

  return (
    <div className="mb-5">
      <label className="block font-medium text-gray-600 mt-8 mb-2">
        {t('passwordChanges')}
      </label>
      <div className="grid grid-cols-1">
        <Input
          type="password"
          name="currentPassword"
          placeholder={t('currentPassword')}
          variant="rounded"
          register={register}
          errors={errors}
        />
        <Input
          type="password"
          name="newPassword"
          placeholder={t('newPassword')}
          variant="rounded"
          register={register}
          errors={errors}
        />
        <Input
          type="password"
          name="confirmNewPassword"
          placeholder={t('confirmNewPassword')}
          variant="rounded"
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default PasswordChange;
