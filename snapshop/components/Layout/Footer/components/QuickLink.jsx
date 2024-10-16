const QuickLink = ({ t }) => {
  return (
    <div className="w-full px-4 mb-6">
      <h2 className="text-lg font-normal mb-4">{t('quickLink.heading')}</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('quickLink.links.privacyPolicy')}
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('quickLink.links.termsOfUse')}
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('quickLink.links.faq')}
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-light hover:text-gray-400">
            {t('quickLink.links.contact')}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLink;
