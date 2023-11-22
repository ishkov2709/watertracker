import { createSlice } from '@reduxjs/toolkit';
import {
  signInUser,
  signUpUser,
  logOut,
  refreshUser,
  updateAvatar,
  changeUserData,
  logout,
  restoreUser,
  updateDailyNorma,
} from './thunk';
import initialState from '../initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,

  reducers: {
    resetSuccessful: state => {
      state.successful = false;
    },
    resetError: state => {
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signInUser.rejected, state => {
        state.isRefreshing = false;
        state.error = 'Wrong email or password.';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(signInUser.pending, state => {
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, state => {
        // state.user = action.payload.user;
        state.successful = true;
        state.error = null;
      })
      .addCase(signUpUser.rejected, state => {
        state.isRefreshing = false;
        state.error = 'Entered values are not valid, try again.';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(signUpUser.pending, state => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = '';
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = '';
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL;
      })
      .addCase(changeUserData.pending, state => {
        state.error = '';
      })
      .addCase(changeUserData.rejected, (state, { payload }) => {
        state.error = payload.message;
      })
      .addCase(changeUserData.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.user.gender = payload.gender;
        state.avatarURL = payload.avatarURL;
        state.successful = true;
      })
      .addCase(logout.pending, state => {
        state.error = '';
        state.isLoggedIn = true;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload.message;
      })
      .addCase(logout.fulfilled, state => {
        state.user.username = '';
        state.user.email = '';
        state.user.avatarURL = '';
        state.user.gender = '';
        state.user.dailyNorma = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = '';
        state.error = '';
      })
      .addCase(restoreUser.pending, state => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(restoreUser.fulfilled, state => {
        state.successful = true;
        state.error = null;
      })
      .addCase(restoreUser.rejected, state => {
        state.error = 'Entered email was never used, try again.';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(updateDailyNorma.pending, (state, action) => {
        state.error = null;
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.user.dailyNorma = action.payload;
      })
      .addCase(updateDailyNorma.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resetSuccessful, resetError } = authSlice.actions;
