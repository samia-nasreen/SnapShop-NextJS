import { useTranslations } from 'next-intl';

const ForgotPasswordLink: React.FC = () => {
  const t = useTranslations('login.forgotPassword');

  return (
    <p className="mt-4 sm:mt-0">
      <a href="#forgot-password" className="text-red-500">
        {t('text')}
      </a>
    </p>
  );
};

export default ForgotPasswordLink;
