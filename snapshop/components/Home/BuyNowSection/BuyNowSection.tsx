'use client';

import Image from 'next/image';
import Button from '@/components/UI/Button';
import Timer from '@/components/UI/Timer';
import useCountdown from '@/hooks/useCountdown';
import { useTranslations } from 'next-intl';

const BuyNowSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown({
    days: 23,
    hours: 5,
    minutes: 59,
    seconds: 35,
  });
  const timer = useTranslations('timer');
  const t = useTranslations('buyNow');

  return (
    <div className="w-full flex flex-col md:flex-row h-auto md:h-[520px] mt-16 relative bg-black border-[16px] border-white">
      <div className="flex flex-col justify-center items-start text-white w-full md:w-1/3 pl-12 md:pl-16 z-10 py-8 md:py-0">
        <h2 className="text-xs md:text-sm font-medium text-green-400">
          {t('subheading')}
        </h2>
        <p className="mt-4 md:mt-8 text-2xl md:text-4xl font-medium">
          {t('heading1')}
        </p>
        <p className="mt-2 mb-4 text-2xl md:text-4xl font-medium">
          {t('heading2')}
        </p>
        <div className="relative flex items-center space-x-2 md:space-x-4 mt-4 mb-4">
          <Timer time={days} unit={timer('days')} circular />
          <Timer time={hours} unit={timer('hours')} circular />
          <Timer time={minutes} unit={timer('mins')} circular />
          <Timer time={seconds} unit={timer('secs')} circular />
        </div>
        <a href="#" className="mt-4">
          <Button
            text={t('button')}
            onClick={() => {}}
            fontSize="base"
            color="bg-green-500"
            hoverColor="hover:bg-green-600"
          />
        </a>
      </div>
      <div className="w-full md:w-2/3 h-64 md:h-full relative">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <Image
          src="/assets/jbl.jpeg"
          alt="Banner"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BuyNowSection;
