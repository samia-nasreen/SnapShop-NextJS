const Support = ({ t }) => {
  return (
    <div className="w-full px-4 mb-6">
      <h2 className="text-lg font-normal mb-4">{t('support.heading')}</h2>
      <p className="w-40 mb-4 text-sm font-light">{t('support.address')}</p>
      <p className="mb-4 text-sm font-light">exclusive@gmail.com</p>
      <p className="text-sm font-light">+88015-88888-9999</p>
    </div>
  );
};

export default Support;
