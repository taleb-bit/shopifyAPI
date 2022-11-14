import { configureStore } from "@reduxjs/toolkit";
import shopOrdersSlice from "./features/shopOrdersSlice";
import { shopProductsReducer } from "./features/shopProductsSlice";
import sideBarReducer from "./features/sideBarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
    shopOrders: shopOrdersSlice,
    shopProducts: shopProductsReducer,
  },
});
