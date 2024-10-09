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

// import { configureStore } from '@reduxjs/toolkit';
// // import {
// //   persistStore,
// //   persistReducer,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// //   Persistor,
// // } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// import authReducer from '@/lib/features/auth/authSlice';
// import wishlistReducer from '@/lib/features/wishlist/wishlistSlice';
// import cartReducer from '@/lib/features/cart/cartSlice';
// import ordersReducer from '@/lib/features/orders/ordersSlice';

// const rootReducer = {
//   auth: authReducer,
//   wishlist: wishlistReducer,
//   cart: cartReducer,
//   orders: ordersReducer,
// };

// const makeStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     // devTools: true,
//   });
// };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export const makeStore = () => {
// //   return configureStore({
// //     reducer: persistedReducer,
// //     middleware: (getDefaultMiddleware) =>
// //       getDefaultMiddleware({
// //         serializableCheck: {
// //           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //         },
// //       }),
// //   });
// // };

// // export const persistor: Persistor | null =
// //   typeof window !== 'undefined' ? persistStore(makeStore()) : null;
// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];
