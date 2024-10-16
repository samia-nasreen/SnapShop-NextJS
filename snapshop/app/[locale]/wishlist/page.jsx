import JustForYou from '@/app/[locale]/wishlist/_components/JustForYou';
import Wishlist from '@/app/[locale]/wishlist/_components/Wishlist';
import { useTranslations } from 'next-intl';

const WishlistPage = ({ params }) => {
  const { locale } = params;
  const t = useTranslations('wishlist');

  return (
    <div className="px-8 sm:px-8 md:px-16 lg:px-28">
      <Wishlist />
      <JustForYou locale={locale} t={t} />
    </div>
  );
};

export default WishlistPage;
