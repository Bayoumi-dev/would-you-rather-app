import {
  getQuestions,
  saveQuestion,
  saveQuestionAnswer,
} from "../../utils/api";
import {
  receiveQuestions,
  addQuestions,
  RECEIVE_QUESTIONS,
  ADD_QUESTIONS,
  ACTIVE_QUESTIONS,
  activeQuestionssSelected,
  votedToQuestion,
  VOTED_QUESTION,
} from "../actoins/questions";
import { updateUsersQuestions, votedUser } from "../actoins/users";

const initQuestion = {
  questions: {},
  status: "idle",
  activeQuestions: "Unanswered Questions",
};

// Thunk functions
export const fetchQuestions = () => async (dispatch) => {
  dispatch({ type: "Loading" });
  const questions = await getQuestions();
  dispatch(receiveQuestions(questions));
};

export const addNewQuestion = (question) => async (dispatch) => {
  /**
   * When pushing into the home page after adding the new question
   * make the Unanswered Questions section is active
   * to show the new question
   */
  dispatch(activeQuestionssSelected("Unanswered Questions"));
  dispatch({ type: "Loading" });
  const res = await saveQuestion(question);
  dispatch(addQuestions(res));
  dispatch(updateUsersQuestions(res.id, res.author));
};

export const VotedQuestion = (votedInfo) => async (dispatch) => {
  saveQuestionAnswer(votedInfo);
  dispatch(votedToQuestion(votedInfo));
  dispatch(votedUser(votedInfo));
};

export default function questions(state = initQuestion, action) {
  switch (action.type) {
    case "Loading":
      return {
        ...state,
        status: "Loading",
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: { ...action.payload },
        status: "succeeded",
      };
    case ADD_QUESTIONS:
      return {
        ...state,
        questions: { ...state.questions, [action.payload.id]: action.payload },
        status: "succeeded",
      };
    case ACTIVE_QUESTIONS:
      return {
        ...state,
        activeQuestions: action.payload,
      };
    case VOTED_QUESTION:
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        questions: {
          ...state.questions,
          [qid]: {
            ...state.questions[qid],
            [answer]: {
              ...state.questions[qid][answer],
              votes: [...state.questions[qid][answer].votes, authedUser],
            },
          },
        },
      };

    default:
      return state;
  }
}
