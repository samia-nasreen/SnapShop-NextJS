'use client';

import { useAppSelector } from '@/lib/hooks';
import formatDate from '@/utils/formatDate';
import Link from 'next/link';
import { Order } from '@/lib/features/orders/ordersSlice';
import { useTranslations } from 'next-intl';

const OrdersList = ({ locale }: { locale: string }) => {
  const orders = useAppSelector((state) => state.orders.orders);
  const t = useTranslations('orders');

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="ml-2 text-xl font-semibold mb-4">{t('heading')}</h1>
      <div className="overflow-x-auto">
        <table className="w-full px-2 table-auto border-separate border-spacing-y-4">
          <thead>
            <tr className="bg-gray-200 text-center rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.03)]">
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                {t('id')}
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                {t('date')}
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                {t('noOfItems')}
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                {t('total')}
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase">
                {t('details')}
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6">
                  {t('emptyMessage')}
                </td>
              </tr>
            ) : (
              orders.map((order: Order) => (
                <tr
                  key={order.id}
                  className="bg-white text-center shadow-[0px_0px_8px_2px_rgba(0,0,0,0.05)] hover:shadow-md transform hover:-translate-y-1 transition duration-200 cursor-pointer"
                >
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">{formatDate(order.createdAt)}</td>
                  <td className="px-6 py-4">{order.totalQuantity}</td>
                  <td className="px-6 py-4">${order.totalPrice.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/${locale}/orders/${order.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {t('view')}
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
