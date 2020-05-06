import { combineReducers } from "redux";
import book from "./book";
import cart from "./cart";
import orders from "./order";

const rootReducer = combineReducers({
  book,
  cart,
  orders
});

export default rootReducer;
