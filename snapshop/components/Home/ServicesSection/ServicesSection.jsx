import DeliveryIcon from '@/public/assets/icon-delivery.png';
import CustomerServiceIcon from '@/public/assets/icon-headphone.png';
import MoneyBackIcon from '@/public/assets/icon-secure.png';
import ScrollToTopButton from '@/components/UI/ScrollToTopButton';
import ServiceItem from './ServiceItem';
import { useTranslations } from 'next-intl';

const ServicesSection = () => {
  const t = useTranslations('services');

  return (
    <div className="services-section my-16 px-16 py-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <ServiceItem
          icon={DeliveryIcon}
          altText={t('freeDelivery.title')}
          title={t('freeDelivery.title')}
          info={t('freeDelivery.info')}
        />
        <ServiceItem
          icon={CustomerServiceIcon}
          altText={t('customerService.title')}
          title={t('customerService.title')}
          info={t('customerService.info')}
        />
        <ServiceItem
          icon={MoneyBackIcon}
          altText={t('moneyBack.title')}
          title={t('moneyBack.title')}
          info={t('moneyBack.info')}
        />
      </div>
      <div className="flex justify-end -mr-8 mt-24 -mb-12">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default ServicesSection;
