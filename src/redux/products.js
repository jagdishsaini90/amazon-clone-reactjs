import * as ActionTypes from "./ActionTypes";

export const PRODUCTS = (
     state = {
          isLoading: true,
          products: [],
          error: null,
     },
     action
) => {
     switch (action.type) {
          case ActionTypes.ADD_PRODUCTS:
               return {
                    ...state,
                    isLoading: false,
                    products: action.payload,
                    error: null,
               };
          case ActionTypes.PRODUCTS_LOADING:
               return { ...state, isLoading: true, products: [], error: null };
          case ActionTypes.PRODUCTS_FAILED:
               return {
                    ...state,
                    isLoading: false,
                    products: [],
                    error: action.payload,
               };
          default:
               return state;
     }
};
