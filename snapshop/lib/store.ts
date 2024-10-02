import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/lib/features/auth/authSlice';
import wishlistReducer from '@/lib/features/wishlist/wishlistSlice';
import cartReducer from '@/lib/features/cart/cartSlice';
import ordersReducer from '@/lib/features/orders/ordersSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      wishlist: wishlistReducer,
      cart: cartReducer,
      orders: ordersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
