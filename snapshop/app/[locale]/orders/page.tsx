import OrdersList from '@/app/[locale]/orders/_components/OrdersList';

const Orders = ({ params }: { params: { locale: string } }) => {
  const { locale } = params;

  return (
    <div className="md:px-28">
      <OrdersList locale={locale} />;
    </div>
  );
};

export default Orders;
