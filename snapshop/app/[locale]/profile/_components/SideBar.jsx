import { useTranslations } from 'next-intl';

const SideBar = () => {
  const t = useTranslations('profileOptions');

  return (
    <div
      className="fixed inset-y-0 left-0 w-64 bg-white z-40 md:relative md:translate-x-0 md:w-1/4 px-2 py-4 md:py-0 
        translate-x-[-100%] hidden md:block"
    >
      <ul className="space-y-4">
        <li className="text-lg font-medium">{t('manageMyAccount')}</li>
        <li className="text-red-500 ml-8">{t('myProfile')}</li>
        <li className="text-gray-500 ml-8">{t('addressBook')}</li>
        <li className="text-gray-500 ml-8">{t('myPaymentOptions')}</li>
      </ul>
      <ul className="mt-10 space-y-4">
        <li className="text-lg font-medium">{t('myOrders')}</li>
        <li className="text-gray-500 ml-8">{t('myReturns')}</li>
        <li className="text-gray-500 ml-8">{t('myCancellations')}</li>
      </ul>
      <ul className="mt-10 space-y-4">
        <li className="text-lg font-medium">{t('myWishlist')}</li>
      </ul>
    </div>
  );
};

export default SideBar;
