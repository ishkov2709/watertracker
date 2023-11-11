import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';

const userSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  reducers: {},
});

export const authReducer = userSlice.reducer;
