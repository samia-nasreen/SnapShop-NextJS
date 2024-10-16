'use client';

import useCountdown from '@/hooks/useCountdown';
import Timer from '@/components/UI/Timer';
import { useTranslations } from 'next-intl';

const CountdownTimer: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  const t = useTranslations('timer');

  return (
    <div className="text-2xl text-gray-900 flex items-center">
      <div className="flex flex-col">
        <div className="flex space-x-4">
          <Timer time={days} unit={t('days')} />
          <Timer time={hours} unit={t('hours')} />
          <Timer time={minutes} unit={t('minutes')} />
          <Timer time={seconds} unit={t('seconds')} lastItem />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
