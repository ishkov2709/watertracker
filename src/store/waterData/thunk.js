import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { MONTH } from '../../constants/month';

// export const setToken = () => {
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTRiZjk5YmU5ODQ2ZGY3YmZkM2VhNCIsImlhdCI6MTcwMDE1ODM4OSwiZXhwIjoxNzAwNzYzMTg5fQ.SrlDD_A8MMJhvmJYSOqiWCSpLvaTDVdjeDeIdie3E-s"
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//  // localStorage.setItem('token', token);
// };

// export const setToken = () => {
//   const token = localStorage.getItem('token');
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const getWaterToday = createAsyncThunk(
  'waterData/getWaterToday',
  async (_, thunkAPI) => {
    try {
      const today = new Date();
      const data = {
        day: today.getDate(),
        month: MONTH[today.getMonth()],
        year: today.getFullYear(),
      };
      // setToken();
      const response = await axios.get(
        `https://water-tracker.onrender.com/api/records/today?day=${data.day}&month=${data.month}&year=${data.year}`
      );
      //console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWaterTodayById = createAsyncThunk(
  'waterData/deleteWaterTodayById',
  async (id, thunkAPI) => {
    try {
      // setToken();
      const response = await axios.delete(
        `https://water-tracker.onrender.com/api/records/${id}`
      );
      //console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const saveWaterToday = createAsyncThunk(
  'waterData/saveWaterToday',
  async (data, thunkAPI) => {
    try {
      // setToken();
      const response = await axios.post(
        `https://water-tracker.onrender.com/api/records`,
        data
      );
      //console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMonthDays = createAsyncThunk('get/daysMonth', async params => {
  const { data } = await axios.get('/records', { params });
  return data;
});
