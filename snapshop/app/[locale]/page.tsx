import BuyNowSection from '@/components/Home/BuyNowSection/BuyNowSection';
import CategorySection from '@/components/Home/CategorySection/CategorySection';
import ExploreSection from '@/components/Home/ExploreSection/ExploreSection';
import FlashSalesSection from '@/components/Home/FlashSalesSection/FlashSalesSection';
import NewArrivalSection from '@/components/Home/NewArrivalSection/NewArrivalSection';
import ServicesSection from '@/components/Home/ServicesSection/ServicesSection';
import SliderSection from '@/components/Home/SliderSection/SliderSection';
import TopRatedSection from '@/components/Home/TopRatedSection/TopRatedSection';
import { useTranslations } from 'next-intl';

const HomePage = ({ params }: { params: { locale: string } }) => {
  const { locale } = params;
  const flashSales = useTranslations('flashSales');
  const topRated = useTranslations('topRated');
  const explore = useTranslations('explore');

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28">
      <SliderSection />
      <FlashSalesSection locale={locale} t={flashSales} />
      <CategorySection locale={locale} />
      <TopRatedSection locale={locale} t={topRated} />
      <BuyNowSection />
      <ExploreSection locale={locale} t={explore} />
      <NewArrivalSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
