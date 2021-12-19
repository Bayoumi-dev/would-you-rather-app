import { combineReducers } from "redux";

import authedUserReducer from "./authedUser";
import usersReducer from "./users";
import questionsReducer from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
  authedUser: authedUserReducer,
  users: usersReducer,
  questions: questionsReducer,
  loadingBar: loadingBarReducer,

});

export default rootReducer;
