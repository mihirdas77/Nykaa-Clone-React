// reducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY } from './actionTypes';

const initialState = {
  items: [], // Initial state for cart items
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item._id === newItem._id);
      
        if (existingItem) {
          // If the item already exists in the cart, increment its quantity
          return {
            ...state,
            items: state.items.map((item) =>
              item._id === existingItem._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          // If it's a new item, add it to the cart with a quantity of 1
          return {
            ...state,
            items: [...state.items, { ...newItem, quantity: 1 }],
          };
        }
        case DECREASE_QUANTITY:
  return {
    ...state,
    items: state.items.map((item) =>
      item._id === action.payload && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  };
      case REMOVE_FROM_CART:
        // Filter out the item with the specified itemId
        const updatedItems = state.items.filter((item) => item._id !== action.payload);
        return {
          ...state,
          items: updatedItems, // Set the items array to the filtered array
        };
    default:
      return state;
  }
};


