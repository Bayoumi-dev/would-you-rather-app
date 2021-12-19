import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../utils/api";

const initialState = {};

export const fetchUsers = createAsyncThunk(
  "users/receiveUsers",
  async () => await getUsers()
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUserQuestions: (state, action) => {
      const { id, author } = action.payload;
      state[author].questions = [...state[author].questions, id];
    },
    votedUser: (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      state[authedUser].answers = {
        ...state[authedUser].answers,
        [qid]: answer,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default usersSlice.reducer;

export const { updateUserQuestions, votedUser } = usersSlice.actions;
