import { useTranslations } from 'next-intl';

const TableHeader: React.FC = () => {
  const t = useTranslations('cart.tableHeader');

  return (
    <div className="p-4 sm:p-6 rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.03)] mb-8">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        <div className="text-left ml-4 md:ml-10">{t('product')}</div>
        <div className="text-center">{t('price')}</div>
        <div className="text-center">{t('quantity')}</div>
        <div className="hidden md:block text-right mr-4 md:mr-10">
          {t('subtotal')}
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
