import { configureStore } from "@reduxjs/toolkit";
// this configureStore will automatically :
// 1) Combine Reducers
// 2) Add Middleware Thunk
// 3) Add Redux Devtools

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
