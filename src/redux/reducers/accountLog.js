import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

var reqUser = null;
axios
  .get(`${process.env.REACT_APP_API_HOST}/api/account`, {
    withCredentials: true,
  })
  .then((res) => {
    reqUser = res.data;
  })
  .catch((err) => {
    console.log(err);
  });

const accountLog = createSlice({
  name: "accountLog",
  initialState: {
    account: reqUser,
  },
  reducers: {
    login: (state, action) => {
      axios
        .post(
          `${process.env.REACT_APP_API_HOST}/api/account/login`,
          {
            usernameOrEmail: action.payload.usernameOrEmail,
            password: action.payload.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          state.account = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update: (state, action) => {
      axios
        .patch(
          `${process.env.REACT_APP_API_HOST}/api/account`,
          action.payload,
          { withCredentials: true }
        )
        .then((res) => {
          state.account = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout: (state) => {
      axios
        .get(`${process.env.REACT_APP_API_HOST}/api/account/logout`)
        .then((res) => {
          state.account = null;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export const { login, update, logout } = accountLog.actions;
export default accountLog.reducer;
