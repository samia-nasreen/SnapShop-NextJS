'use client';

import { useAppSelector } from '@/lib/hooks';

const Orders = () => {
  const orders = useAppSelector((state) => state.orders.orders);

  return (
    <div>
      <h1>Orders Page</h1>
      {orders.length === 0 ? (
        <p>No orders have been placed yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order">
            <h2>Order ID: {order.id}</h2>
            <p>Created At: {order.createdAt}</p>
            <p>Total Quantity: {order.totalQuantity}</p>
            <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
            <h3>Items:</h3>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.quantity} pcs - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
