import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser, logOut, refreshUser } from './thunk';
import initialState from '../initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,

  extraReducers: builder => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = '';
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = 'Wrong email or password';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(signInUser.pending, (state, action) => {
        state.error = '';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = '';
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = 'Entered values are not valid, try again';
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(signUpUser.pending, (state, action) => {
        state.error = '';
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
        state.user = action.payload;
        state.isLoggedIn = true;

        state.isRefreshing = false;
        state.error = '';
      })
      .addCase(refreshUser.rejected, (state, { error, payload }) => {
        state.isRefreshing = false;
        state.error = payload ?? error.message;
        state.isLoggedIn = false;
        state.token = '';
      });
  },
});

export const authReducer = authSlice.reducer;
