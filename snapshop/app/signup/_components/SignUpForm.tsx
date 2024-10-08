'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '@/schemas/authSchemas';
import GoogleSignUpButton from './GoogleSignUpButton';
import LoginLink from './LoginLink';
import Button from '@/components/UI/Button';
import LineInput from '@/components/UI/LineInput';
import { toast } from 'react-toastify';
import { signUp } from '@/actions';

interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('phone', data.phone);

    await signUp(formData);
    toast.success('Registration successful');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <LineInput
        name="email"
        register={register}
        errors={errors}
        type="email"
        placeholder="Email"
      />
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
      <LineInput
        name="name"
        register={register}
        errors={errors}
        type="text"
        placeholder="Name"
      />
      <LineInput
        name="address"
        register={register}
        errors={errors}
        type="text"
        placeholder="Address"
      />
      <LineInput
        name="phone"
        register={register}
        errors={errors}
        type="text"
        placeholder="Phone"
      />
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <Button text="Create Account" fontSize="base" type="submit" />
        <GoogleSignUpButton />
      </div>
      <LoginLink />
    </form>
  );
};

export default SignUpForm;
