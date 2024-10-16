import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ContactInfoCard = () => {
  const t = useTranslations('contact.info');

  return (
    <div
      className="bg-white rounded px-16 py-12 w-full md:w-1/3"
      style={{ boxShadow: '0px 0px 8px 2px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0 bg-red-500 p-3 rounded-full">
          <Image
            src="/assets/call_icon.svg"
            alt="Call Icon"
            width={80}
            height={80}
            className="w-6 h-6 text-white"
          />
        </div>
        <h2 className="text-lg font-semibold ml-3">{t('callToUs.heading')}</h2>
      </div>
      <p className="my-4 text-sm">{t('callToUs.desc')}</p>
      <p className="mb-8 text-sm">{t('callToUs.phone')}: +8801611112222</p>
      <hr className="my-4 bg-gray-300 h-[1px]" />
      <div className="flex items-center mt-8 mb-6">
        <div className="flex-shrink-0 bg-red-500 p-3 rounded-full">
          <Image
            src="/assets/mail_icon.svg"
            alt="Mail Icon"
            width={80}
            height={80}
            className="w-6 h-6 text-white"
          />
        </div>
        <h2 className="text-lg font-semibold ml-3">{t('writeToUs.heading')}</h2>
      </div>
      <p className="my-4 text-sm">{t('writeToUs.desc')}</p>
      <p className="mb-4 text-sm">
        {t('writeToUs.email')}: customer@snapshop.com
      </p>
      <p className="text-sm">{t('writeToUs.email')}: support@snapshop.com</p>
    </div>
  );
};

export default ContactInfoCard;
