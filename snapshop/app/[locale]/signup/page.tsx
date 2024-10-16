import AuthImage from '@/components/UI/AuthImage';
import SignUpForm from '@/app/[locale]/signup/_components/SignUpForm';
import Heading from '@/components/UI/Heading';
import { useTranslations } from 'next-intl';

const SignUpPage = () => {
  const t = useTranslations('signUp');

  return (
    <div className="flex flex-row px-8 md:px-36 py-6 md:py-8 lg:py-10 mb-24">
      <div className="hidden md:block lg:block md:w-1/2 lg:w-1/2">
        <AuthImage />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-24">
        <Heading
          text={t('heading')}
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          className="mb-4"
        />
        <p className="mb-6">{t('subheading')}</p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
