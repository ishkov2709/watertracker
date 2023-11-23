import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MONTH } from '../../constants/month';

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
      const response = await axios.get(
        `https://water-tracker.onrender.com/api/records/today?day=${data.day}&month=${data.month}&year=${data.year}`
      );
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
      const response = await axios.delete(
        `https://water-tracker.onrender.com/api/records/${id}`
      );
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const saveWaterToday = createAsyncThunk(
  'waterData/saveWaterToday',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://water-tracker.onrender.com/api/records`,
        data
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editWaterTodayById = createAsyncThunk(
  'waterData/editWaterTodayById',
  async ({ id, data }, thunkAPI) => {
    const editData = {
      dosage: data.dosage,
      time: data.time,
    };
    try {
      const response = await axios.put(
        `https://water-tracker.onrender.com/api/records/${id}`,
        editData
      );
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
