"use client";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "@/schemas/checkoutSchema";
import { ordersActions } from "@/store/orders";
import { cartActions } from "@/store/cart";
import CartSummary from "@/components/Checkout/CartSummary";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import Heading from "@/components/UI/Heading";
import Breadcrumb from "@/components/UI/Breadcrumb";
import { toast } from "react-toastify";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = (data) => {
    const orderDetails = {
      ...data,
      paymentMethod: data.paymentMethod || "Cash on delivery",
      cartItems,
      totalAmount,
    };

    dispatch(ordersActions.placeOrder(orderDetails));
    dispatch(cartActions.clearCart());
    console.log(data);
    toast.success("Your order has been placed");
    router.push("/");
  };

  return (
    <div className="container mx-auto px-8 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:pr-24">
        <Breadcrumb parts={["Account", "My Account", "Cart", "Checkout"]} />
        <Heading text="Billing Details" />
        <CheckoutForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
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
