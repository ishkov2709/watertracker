import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser, logOut, refreshUser } from './thunk';
import initialState from '../initialState';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialState.user,
    token: initialState.token,
    isAuth: initialState.isAuth,
    isRefreshing: initialState.isRefreshing,
    error: initialState.error,
  },

  extraReducers: builder => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
        state.error = '';
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = 'Wrong email or password';
        state.isAuth = false;
        state.token = '';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
        state.error = '';
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = 'Entered values are not valid, try again';
        state.isAuth = false;
        state.token = '';
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
        state.error = '';
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
        state.isAuth = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;

        state.isRefreshing = false;
        state.error = '';
      })
      .addCase(refreshUser.rejected, (state, { error, payload }) => {
        state.isRefreshing = false;
        state.error = payload ?? error.message;
        state.isAuth = false;
        state.token = '';
      });
  },
});

export const userReducer = userSlice.reducer;
