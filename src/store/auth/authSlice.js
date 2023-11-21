import { createSlice } from '@reduxjs/toolkit';
import {
  signInUser,
  signUpUser,
  logOut,
  refreshUser,
  updateAvatar,
  changeUserData,
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
      state.error = '';
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
      .addCase(signInUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = 'Wrong email or password';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(signInUser.pending, (state, action) => {
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.successful = true;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = 'Entered values are not valid, try again';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(signUpUser.pending, (state, action) => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = '';
      })
      .addCase(refreshUser.pending, (state, action) => {
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
      .addCase(refreshUser.rejected, (state, { error, payload }) => {
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
      .addCase(changeUserData.rejected, (state, { error, payload }) => {
        state.error = payload.message;
      })
      .addCase(changeUserData.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.user.gender = payload.gender;
        state.avatarURL = payload.avatarURL;
        state.successful = true;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resetSuccessful, resetError } = authSlice.actions;
