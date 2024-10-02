'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/schemas/authSchemas';
import Button from '@/components/UI/Button';
import ForgotPasswordLink from './ForgotPasswordLink';
import LineInput from '@/components/UI/LineInput';
import { authActions } from '@/store/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/actions';
import { useState } from 'react';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    toast.info('Logging in...');

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
        router.push('/');
      } else {
        setIsError(true);
        toast.error('Login failed');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <LineInput
        name="username"
        register={register}
        errors={errors}
        type="text"
        placeholder="Username"
      />
      <LineInput
        name="password"
        register={register}
        errors={errors}
        type="password"
        placeholder="Password"
      />
      {isError && (
        <p className="text-red-500 mb-4">
          Login failed. Please check your username and password.
        </p>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <Button text="Log In" type="submit" fontSize="base" />
        <ForgotPasswordLink />
      </div>
    </form>
  );
};

export default LoginForm;
