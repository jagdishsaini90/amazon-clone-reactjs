import * as ActionTypes from "./ActionTypes";

export const CART = (
     state = {
          isLoading: true,
          cart: [],
          error: null,
          deletepro : false
     },
     action
) => {
     switch (action.type) {
          case ActionTypes.ADD_CART:
               return {
                    ...state,
                    isLoading: false,
                    cart: action.payload,
                    error: null,
                    deletepro:false
               };
          case ActionTypes.CART_LOADING:
               return { ...state, isLoading: true, cart: [], error: null,deletepro:false };
          case ActionTypes.CART_FAILED:
               return {
                    ...state,
                    isLoading: false,
                    cart: [],
                    error: action.payload,
                    deletepro:false
               };
          case ActionTypes.PRODUCT_DELETE:
               return { ...state, deletepro: true };
          default:
               return state;
     }
};
