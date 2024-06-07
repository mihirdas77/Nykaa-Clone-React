import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY } from './actionTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});



export const decreaseQuantity = (itemId) => ({
  type: DECREASE_QUANTITY,
  payload: itemId,
});