import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addToCart: ['payload']
});

export const CartListTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: [],
};

/* ------------- Selectors ------------- */

export const CartListSelectors = {
  isLogged: state => state.CartList.isLogged,
};

/* ------------- Reducers ------------- */

export const addToCartReducer = (state, {payload}) => ({
  ...state,
  data: payload.data,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.addToCart]: addToCartReducer,
});
