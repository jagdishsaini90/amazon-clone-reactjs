import * as ActionTypes from "./ActionTypes";

export const ADDRESS = (
     state = {
          isLoading: true,
          address: [],
          error: null,
     },
     action
) => {
     switch (action.type) {
          case ActionTypes.ADD_ADDRESS:
               return {
                    ...state,
                    isLoading: false,
                    address: action.payload,
                    error: null,
               };
          case ActionTypes.ADDRESS_LOADING:
               return { ...state, isLoading: true, address: [], error: null };
          case ActionTypes.ADDRESS_FAILED:
               return {
                    ...state,
                    isLoading: false,
                    address: [],
                    error: action.payload,
               };
          default:
               return state;
     }
};
