'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter, usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkoutSchema } from '@/schemas/checkoutSchema';
import { ordersActions } from '@/lib/features/orders/ordersSlice';
import { cartActions } from '@/lib/features/cart/cartSlice';
import CartSummary from '@/app/[locale]/checkout/_components/CartSummary';
import CheckoutForm from '@/app/[locale]/checkout/_components/CheckoutForm';
import Heading from '@/components/UI/Heading';
import Breadcrumb from '@/components/UI/Breadcrumb';
import { toast } from 'react-toastify';
import { confirmOrder } from '@/actions';
import { useTranslations } from 'next-intl';

const validLocales = ['fr', 'en', 'es'];

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const t = useTranslations('checkout.heading');
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);
  let locale = segments[0];

  if (!validLocales.includes(locale)) {
    locale = 'en';
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = async (data) => {
    const orderDetails = {
      ...data,
      paymentMethod: data.paymentMethod || 'Cash on delivery',
      items: cartItems,
      totalQuantity: cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
      totalPrice: totalAmount,
    };

    const formData = new FormData();
    Object.keys(orderDetails).forEach((key) => {
      formData.append(key, orderDetails[key]);
    });

    const result = await confirmOrder(formData);

    if (result.errors) {
      console.error(result.errors);
      toast.error(result.errors._form.join(', '));
    } else {
      dispatch(ordersActions.placeOrder(orderDetails));
      dispatch(cartActions.clearCart());
      toast.success('Your order has been placed');
      router.push(`/${locale}/`);
    }
  };

  return (
    <div className="container mx-auto px-8 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:pr-24">
        <Breadcrumb parts={['Account', 'My Account', 'Cart', 'Checkout']} />
        <Heading text={t('title')} />
        <CheckoutForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          setValue={setValue}
        />
      </div>
      <CartSummary
        cartItems={cartItems}
        totalAmount={totalAmount}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Checkout;
