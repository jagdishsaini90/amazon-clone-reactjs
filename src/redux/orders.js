import * as ActionTypes from "./ActionTypes";

export const ORDERS = (
     state = {
          isLoading: true,
          orders: [],
          error: null,
     },
     action
) => {
     switch (action.type) {
          case ActionTypes.ADD_ORDERS:
               return {
                    ...state,
                    isLoading: false,
                    orders: action.payload,
                    error: null,
               };
          case ActionTypes.ORDERS_LOADING:
               return { ...state, isLoading: true, orders: [], error: null };
          case ActionTypes.ORDERS_FAILED:
               return {
                    ...state,
                    isLoading: false,
                    orders: [],
                    error: action.payload,
               };
          default:
               return state;
     }
};
