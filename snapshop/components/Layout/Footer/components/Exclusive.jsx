import sendIcon from '@/public/assets/send_icon.png';
import Image from 'next/image';

const Exclusive = ({ t }) => {
  return (
    <div className="w-full px-4 mb-6">
      <h2 className="text-xl font-bold mb-4">{t('exclusive.heading')}</h2>
      <p className="mb-5 text-lg">{t('exclusive.subscribeText')}</p>
      <p className="mb-3 text-sm font-light">{t('exclusive.discountText')}</p>
      <form className="flex">
        <input
          type="email"
          placeholder={t('exclusive.placeholder')}
          className="py-2 pl-4 rounded-l bg-black border-2 border-r-0 border-gray-400 placeholder-gray-500"
          style={{ width: '180px', fontSize: '14px' }}
        />
        <button
          type="submit"
          className="p-2 -ml-9 rounded-r border-2 border-l-0 border-gray-400 flex items-center justify-center"
          style={{ width: '40px' }}
        >
          <Image src={sendIcon} alt={t('exclusive.sendAlt')} />
        </button>
      </form>
    </div>
  );
};

export default Exclusive;
