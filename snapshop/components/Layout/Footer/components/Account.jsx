const Account = ({ t }) => {
  return (
    <div className="w-full px-4 mb-6">
      <h2 className="text-lg font-normal mb-4">{t('account.heading')}</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('account.links.myAccount')}
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('account.links.loginRegister')}
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('account.links.cart')}
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('account.links.wishlist')}
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('account.links.shop')}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Account;
