/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '@/lib/features/auth/authSlice';
import wishlistReducer from '@/lib/features/wishlist/wishlistSlice';
import cartReducer from '@/lib/features/cart/cartSlice';
import ordersReducer from '@/lib/features/orders/ordersSlice';

const persistConfig = {
  key: 'persist',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const makeConfiguredStore = () => {
  const store: any = configureStore({
    reducer: rootReducer,
  });
  store.__persistor = null;
  return store;
};

export const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = configureStore({
      reducer: persistedReducer,
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
