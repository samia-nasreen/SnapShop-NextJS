'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks';
import Button from '@/components/UI/Button';
import Breadcrumb from '@/components/UI/Breadcrumb';
import formatDate from '@/utils/formatDate';

const OrderDetailsPage = ({
  params,
}: {
  params: { id: string; locale: string };
}) => {
  const { id, locale } = params;
  const orders = useAppSelector((state) => state.orders.orders);
  const order = orders.find((order) => order.id === parseInt(id));

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-red-600">Order Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container min-h-screen mx-auto md:px-8 pt-2 mb-16">
      <Breadcrumb parts={['Home', 'Orders', 'Details']} />
      <div className="bg-white pt-4 pb-6 px-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-red-500">
          Order ID: {order.id}
        </h2>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Date:</span>{' '}
          {formatDate(order.createdAt)}
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-medium">Total Price:</span>{' '}
          <span className="text-lg font-semibold">
            ${order.totalPrice.toFixed(2)}
          </span>
        </p>

        <h3 className="text-lg font-semibold mb-2 text-gray-800">Items:</h3>
        <ul className="list-none pl-0 mb-4">
          {order.items.map((item) => (
            <li
              key={item.id}
              className="flex items-center mb-4 border-b py-4 transition-all duration-200 hover:bg-gray-50"
            >
              <Link
                href={`${locale}/products/${item.id}`}
                className="flex items-center flex-1"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain rounded-md mr-4 shadow-md"
                />
                <div>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-gray-600">
                    Quantity: x{item.quantity}
                  </div>
                  <div className="text-gray-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Button text="Print Invoice" className="font-bold" />
        </div>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800">
          Additional Notes:
        </h3>
        <p className="text-gray-600">
          Thank you for your order! If you have any questions, feel free to
          contact our support team.
        </p>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
