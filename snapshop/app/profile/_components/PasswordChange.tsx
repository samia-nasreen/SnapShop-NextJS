/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import Input from '@/components/UI/Input';

interface PasswordChangeProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
}

const PasswordChange: React.FC<PasswordChangeProps> = ({
  register,
  errors,
}) => (
  <div className="mb-5">
    <label className="block font-medium text-gray-600 mt-8 mb-2">
      Password Changes
    </label>
    <div className="grid grid-cols-1">
      <Input
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        variant="rounded"
        register={register}
        errors={errors}
      />
      <Input
        type="password"
        name="newPassword"
        placeholder="New Password"
        variant="rounded"
        register={register}
        errors={errors}
      />
      <Input
        type="password"
        name="confirmNewPassword"
        placeholder="Confirm New Password"
        variant="rounded"
        register={register}
        errors={errors}
      />
    </div>
  </div>
);

export default PasswordChange;
