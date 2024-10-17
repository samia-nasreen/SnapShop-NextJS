import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const DeliveryDetails: React.FC = () => {
  const t = useTranslations('productDetails.deliveryDetails');

  return (
    <div className="border border-gray-600 rounded-md max-w-[420px]">
      <div className="flex items-center p-4 border-b border-gray-600">
        <Image
          src="/assets/delivery_icon.svg"
          alt="Free Delivery Icon"
          width={32}
          height={32}
          className="w-6 md:w-8 h-7 md:h-8 mr-4"
        />
        <div>
          <h3 className="text-sm md:text-base font-medium mb-1">
            {t('freeDelivery.title')}
          </h3>
          <Link
            href="#"
            className="text-xs font-medium underline underline-offset-1"
          >
            {t('freeDelivery.description')}
          </Link>
        </div>
      </div>
      <div className="flex items-center p-4">
        <Image
          src="/assets/return_icon.svg"
          alt="Return Delivery Icon"
          width={32}
          height={32}
          className="w-6 md:w-8 h-7 md:h-8 mr-4"
        />
        <div>
          <h3 className="text-sm md:text-base font-medium mb-2">
            {t('returnDelivery.title')}
          </h3>
          <p className="text-xs font-medium">
            {t('returnDelivery.description')}
            <Link href="#" className="underline underline-offset-1">
              {t('returnDelivery.details')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
