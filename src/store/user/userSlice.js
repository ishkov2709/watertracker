import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
