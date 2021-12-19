export const RECEIVE_USERS = "users/receiveUsers";
export const UPDATE_USERS_QUESTIONS = "users/updateUsersQuestions";
export const VOTED_USER = "users/votedUser";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: users,
  };
}
export function updateUsersQuestions(qId, author) {
  return {
    type: UPDATE_USERS_QUESTIONS,
    payload: { qId, author },
  };
}
export function votedUser({ authedUser, qid, answer }) {
  return {
    type: VOTED_USER,
    payload: { authedUser, qid, answer },
  };
}
