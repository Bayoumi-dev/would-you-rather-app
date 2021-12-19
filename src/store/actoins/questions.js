export const RECEIVE_QUESTIONS = "questions/receiveQuestions";
export const ADD_QUESTIONS = "questions/addQuestion";
export const ACTIVE_QUESTIONS = "questions/activeQuestions";
export const VOTED_QUESTION = "questions/votedQuestion";


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    payload: questions,
  };
}
export function addQuestions(questions) {
  return {
    type: ADD_QUESTIONS,
    payload: questions,
  };
}
export function activeQuestionssSelected(name) {
  return {
    type: ACTIVE_QUESTIONS,
    payload: name,
  };
}
export function votedToQuestion({ authedUser, qid, answer }) {
  return {
    type: VOTED_QUESTION,
    payload: { authedUser, qid, answer },
  };
}
