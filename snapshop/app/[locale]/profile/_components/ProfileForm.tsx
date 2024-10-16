'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import PasswordChange from './PasswordChange';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import { useTranslations } from 'next-intl';

interface UserData {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  address: {
    street: string;
    number: string;
    city: string;
    zipcode: string;
  };
}

interface ProfileFormProps {
  userData: UserData;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ userData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = (data) => {
    console.log(data);
  };

  const t = useTranslations('profile');

  return (
    <div className="bg-white py-10 px-10 sm:px-20 rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.05)]">
      <h2 className="text-2xl font-medium text-red-500 mb-5">
        {t('editYourProfile')}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mb-5">
          <Input
            label={t('firstName')}
            name="firstName"
            errors={errors}
            defaultValue={capitalizeFirstLetter(userData.name.firstname)}
            register={register}
            variant="rounded"
            required
          />
          <Input
            label={t('lastName')}
            name="lastName"
            errors={errors}
            defaultValue={capitalizeFirstLetter(userData.name.lastname)}
            register={register}
            variant="rounded"
            required
          />
          <Input
            label={t('email')}
            name="email"
            type="email"
            errors={errors}
            defaultValue={userData.email}
            register={register}
            variant="rounded"
            required
          />
          <Input
            label={t('address')}
            name="address"
            errors={errors}
            defaultValue={`${userData.address.street}, ${userData.address.number}, ${userData.address.city}, ${userData.address.zipcode}`}
            register={register}
            variant="rounded"
            required
          />
        </div>
        <PasswordChange register={register} errors={errors} />
        <div className="flex justify-end space-x-4">
          <button type="button" className="md:px-4 py-2">
            {t('cancel')}
          </button>
          <Button text={t('saveChanges')} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
