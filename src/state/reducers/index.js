import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

// This creates a root reducer by combining multiple reducers
const reducers = combineReducers({
  // Creating a state object with a key called account
  // And let accountReducer manage the state under that key
  account: accountReducer,
});

export default reducers;
