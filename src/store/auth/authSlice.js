import { createSlice } from '@reduxjs/toolkit';
import {
  signInUser,
  signUpUser,
  logOut,
  refreshUser,
  restoreUser,
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
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resetSuccessful, resetError } = authSlice.actions;
