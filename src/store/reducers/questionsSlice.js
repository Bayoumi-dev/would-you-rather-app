import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getQuestions,
  saveQuestion,
  saveQuestionAnswer,
} from "../../utils/api";
import { votedUser } from "./usersSlice";

const initialState = {
  questions: {},
  status: "idle",
  activeQuestions: "Unanswered Questions",
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  "questions/receiveQuestions",
  async () => await getQuestions()
);

export const addNewQuestion = createAsyncThunk(
  "questions/addQuestion",
  async (question) => await saveQuestion(question)
);

export const VotedQuestion = createAsyncThunk(
  "questions/VotedQuestion",
  async (votedInfo, { dispatch }) => {
    dispatch(votedToQuestion(votedInfo));
    dispatch(votedUser(votedInfo));
    await saveQuestionAnswer(votedInfo);
  }
);
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    activeQuestionssSelected: (state, action) => {
      state.activeQuestions = action.payload;
    },
    votedToQuestion: (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      state.questions[qid][answer].votes = [
        ...state.questions[qid][answer].votes,
        authedUser,
      ];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state, _) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewQuestion.pending, (state, _) => {
        state.status = "loading";
        state.activeQuestions = "Unanswered Questions";
      })
      .addCase(addNewQuestion.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = {
          ...state.questions,
          [action.payload.id]: action.payload,
        };
      });
  },
});

export default questionsSlice.reducer;

export const { activeQuestionssSelected, votedToQuestion } =
  questionsSlice.actions;
