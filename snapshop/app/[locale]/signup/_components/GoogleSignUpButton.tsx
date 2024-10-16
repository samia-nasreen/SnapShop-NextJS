import { FcGoogle } from 'react-icons/fc';
import { useTranslations } from 'next-intl';

const GoogleSignUpButton: React.FC = () => {
  const t = useTranslations('signUp.googleSignUp');

  return (
    <button className="btn btn-google flex items-center justify-center">
      <FcGoogle className="mr-2" size={30} />
      {t('text')}
    </button>
  );
};

export default GoogleSignUpButton;
