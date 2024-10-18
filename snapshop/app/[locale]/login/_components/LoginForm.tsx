'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/schemas/authSchemas';
import Button from '@/components/UI/Button';
import ForgotPasswordLink from './ForgotPasswordLink';
import Input from '@/components/UI/Input';
import { authActions } from '@/lib/features/auth/authSlice';
import { toast } from 'react-toastify';
import { useRouter, usePathname } from 'next/navigation';
import { useAppDispatch } from '@/lib/hooks';
import { useTranslations } from 'next-intl';
import { login } from '@/actions';
import { useState } from 'react';

interface LoginFormValues {
  username: string;
  password: string;
}

const validLocales = ['en', 'fr', 'es'];

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('login.form');
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);
  let locale = segments[0];

  if (!validLocales.includes(locale)) {
    locale = 'en';
  }

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setIsLoading(true);
    console.log(data);

    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);

    const result = await login(formData);

    if (result.errors) {
      setIsError(true);

      toast.error('Login failed');
    } else if (result.token) {
      const token = result.token;

      if (token !== null) {
        dispatch(authActions.login());
        toast.success('Logged in successfully');
        console.log('Redirecting to:', `/${locale}/`);
        router.push(`/${locale}/`);
      } else {
        setIsError(true);
        toast.error('Login failed');
      }
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <Input
        name="username"
        register={register}
        errors={errors}
        type="text"
        placeholder={t('username')}
        onChange={(e) => {
          setValue('username', e.target.value);
        }}
        variant="line"
      />
      <Input
        name="password"
        register={register}
        errors={errors}
        type="password"
        placeholder={t('password')}
        onChange={(e) => {
          setValue('password', e.target.value);
        }}
        variant="line"
      />
      {isError && (
        <p className="text-red-500 mb-4">
          Login failed. Please check your username and password.
        </p>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <Button
          text={t('button')}
          type="submit"
          fontSize="base"
          isLoading={isLoading}
        />
        <ForgotPasswordLink />
      </div>
    </form>
  );
};

export default LoginForm;
