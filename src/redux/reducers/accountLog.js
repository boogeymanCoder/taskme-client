import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "accountLog/login",
  async (credentials, thunkAPI) => {
    return (
      await axios.post(
        `${process.env.REACT_APP_API_HOST}/api/account/login`,
        credentials,
        { withCredentials: true }
      )
    ).data;
  }
);

// TODO add wrong username or email and  password warnings
export const logout = createAsyncThunk(
  "accountLog/logout",
  async (action, thunkAPI) => {
    return (
      await axios.get(`${process.env.REACT_APP_API_HOST}/api/account/logout`, {
        withCredentials: true,
      })
    ).data;
  }
);

export const update = createAsyncThunk(
  "accountLog/update",
  async (updates, thunkAPI) => {
    return (
      await axios.patch(
        `${process.env.REACT_APP_API_HOST}/api/account/${updates._id}`,
        updates,
        {
          withCredentials: true,
        }
      )
    ).data;
  }
);

const accountLog = createSlice({
  name: "accountLog",
  initialState: {
    account: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload.message) state.account = action.payload;
      else alert(action.payload.message);
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.account = null;
    });

    builder.addCase(update.fulfilled, (state, action) => {
      console.log("Update:", action.payload);
      state.account = action.payload;
    });
  },
});

export default accountLog.reducer;
