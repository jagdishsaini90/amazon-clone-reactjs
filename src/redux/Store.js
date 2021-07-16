import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { PRODUCTS } from "./products";
import { CART } from "./cart";
import { ORDERS } from './orders';
import { ADDRESS } from './addresses';

export const ConfigStore = () => {
     const store = createStore(
          combineReducers({
               products: PRODUCTS,
               cart: CART,
               orders: ORDERS,
               address: ADDRESS,
          }),
          applyMiddleware(thunk, logger)
     );
     return store;
};
