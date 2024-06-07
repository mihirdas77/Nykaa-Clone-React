import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { reducer as productReducer } from "./ProductReducer/reducer";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/reducer";
import {cartReducer} from "./CartReducer/reducer"

const rootReducer = combineReducers({
  
  productReducer,
  authReducer,
  cartReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));