import usersReducer from "./usersSlice";
import authedUserReducer from "./authedUserSlice";
import questionsReducer from "./questionsSlice";
import { loadingBarReducer } from "react-redux-loading-bar";

const reducers = {
    users: usersReducer,
    authedUser: authedUserReducer,
    questions: questionsReducer,
    loadingBar: loadingBarReducer,
  }
 export default reducers
