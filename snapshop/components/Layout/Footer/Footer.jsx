import Account from './components/Account';
import DownloadApp from './components/DownloadApp';
import Exclusive from './components/Exclusive';
import QuickLink from './components/QuickLink';
import Support from './components/Support';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-black pt-16 text-white">
      <div className="container px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between">
        <Exclusive t={t} />
        <Support t={t} />
        <Account t={t} />
        <QuickLink t={t} />
        <DownloadApp t={t} />
      </div>
      <div className="bg-black py-4 text-center text-gray-600 mt-6 border-t-[1px] border-gray-900">
        {t('copyright')}
      </div>
    </footer>
  );
};

export default Footer;
