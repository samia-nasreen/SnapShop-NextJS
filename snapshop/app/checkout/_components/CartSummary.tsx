/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import PlaceOrder from './PlaceOrder';
import CartSummaryItem from '@/components/UI/CartSummaryItem';
import { UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';
import { CartItem } from '@/types/cartItem';

interface CartSummaryProps {
  cartItems: CartItem[];
  totalAmount: number;
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  cartItems,
  totalAmount,
  register,
  handleSubmit,
  onSubmit,
}) => (
  <div className="space-y-4 mt-8 lg:mt-28 lg:pl-16 text-lg">
    <div className="space-y-10 lg:mr-24">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="h-14 w-14 object-contain"
            />
            <span className="w-48 lg:w-72">{item.name}</span>
          </div>
          <span>${item.totalPrice.toFixed(2)}</span>
        </div>
      ))}
    </div>
    <div className="pt-6 space-y-4 lg:mr-24">
      <CartSummaryItem label="Subtotal" value={totalAmount.toFixed(2)} />
      <CartSummaryItem label="Shipping" value="Free" />
      <CartSummaryItem label="Total" value={totalAmount.toFixed(2)} lastItem />
    </div>
    <PlaceOrder
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  </div>
);

export default CartSummary;
