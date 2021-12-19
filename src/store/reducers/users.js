import { getUsers } from "../../utils/api";
import {
  receiveUsers,
  RECEIVE_USERS,
  UPDATE_USERS_QUESTIONS,
  VOTED_USER,
} from "../actoins/users";

// Thunk function
export const fetchUsers = () => async (dispatch) => {
  const users = await getUsers();
  dispatch(receiveUsers(users));
};

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.payload,
      };

    case UPDATE_USERS_QUESTIONS:
      const { qId, author } = action.payload;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, qId],
        },
      };

    case VOTED_USER:
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
