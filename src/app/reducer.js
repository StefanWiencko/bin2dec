import { combineReducers } from "redux";

import { countReducer } from "../features/count/countSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  count: countReducer,
});

export default rootReducer;
