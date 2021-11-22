import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInbox = createAsyncThunk(
  "inbox/fetch",
  async (account, thunkAPI) => {
    return (
      await axios.get(
        `${process.env.REACT_APP_API_HOST}/api/conversation/member/${account._id}`,
        { withCredentials: true }
      )
    ).data;
  }
);

// TODO forget

const inbox = createSlice({
  name: "inbox",
  initialState: {
    inbox: null,
  },
  reducers: {
    forgetInbox: (state) => {
      state.inbox = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInbox.fulfilled, (state, action) => {
        state.inbox = action.payload;
      })
      .addCase(fetchInbox.rejected, (state) => {
        state.inbox = null;
      });
  },
});

export const { forgetInbox } = inbox.actions;
export default inbox.reducer;
