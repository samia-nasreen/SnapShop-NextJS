import RedSubHeading from '@/components/UI/RedSubHeading';
import Heading from '@/components/UI/Heading';
import ps5pro from '@/public/assets/ps5pro.jpg';
import woman from '@/public/assets/woman.jpg';
import headphones from '@/public/assets/headphones.jpg';
import gucciPerfume from '@/public/assets/gucci.jpg';
import NewArrivalItem from './NewArrivalItem';
import { useTranslations } from 'next-intl';

const NewArrivalSection = () => {
  const t = useTranslations('newArrival');

  return (
    <div className="py-8 mt-16 mb-24 px-4 bg-white relative">
      <RedSubHeading subHeading={t('subheading')} />
      <Heading text={t('heading')} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="relative group col-span-2 row-span-2 md:col-span-2 md:row-span-4 bg-white p-2 flex items-center justify-center">
          <NewArrivalItem
            image={ps5pro}
            altText={t('items.ps5Pro.title')}
            title={t('items.ps5Pro.title')}
            desc={t('items.ps5Pro.desc')}
          />
        </div>
        <div className="relative group col-span-2 row-span-1 md:col-span-2 md:row-span-2 bg-white p-2 flex items-center justify-center">
          <NewArrivalItem
            image={woman}
            altText={t('items.womensCollections.title')}
            title={t('items.womensCollections.title')}
            desc={t('items.womensCollections.desc')}
          />
        </div>
        <div className="relative group col-span-1 row-span-1 md:col-span-1 md:row-span-2 bg-white p-2 flex items-center justify-center">
          <NewArrivalItem
            image={headphones}
            altText={t('items.headphones.title')}
            title={t('items.headphones.title')}
            desc={t('items.headphones.desc')}
          />
        </div>
        <div className="relative group col-span-1 row-span-1 md:col-span-1 md:row-span-2 bg-white p-2 flex items-center justify-center">
          <NewArrivalItem
            image={gucciPerfume}
            altText={t('items.perfume.title')}
            title={t('items.perfume.title')}
            desc={t('items.perfume.desc')}
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;
