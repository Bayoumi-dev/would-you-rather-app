import { SET_AUTHED_USER } from "../actoins/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.payload;
    default:
      return state;
  }
}
