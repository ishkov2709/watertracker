import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const setToken = () => {
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTRiZjk5YmU5ODQ2ZGY3YmZkM2VhNCIsImlhdCI6MTcwMDA1MjkzMiwiZXhwIjoxNzAwNjU3NzMyfQ.FSqbGP7YCGOOvDSTlBMCaqrG1Jv_Qk_C0wj8IfZY0EM"
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//  // localStorage.setItem('token', token);
// };

export const setToken = () => {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getWaterToday = createAsyncThunk("waterData/getWaterToday", async (_, thunkAPI) => {
    try {
        setToken()
        const response = await axios.get("https://water-tracker.onrender.com/api/records/today?day=15&month=November&year=2023");
        //console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
})
  
export const deleteWaterTodayById = createAsyncThunk("waterData/deleteWaterTodayById", async (id, thunkAPI) => {
    try {
        setToken()
        const response = await axios.delete(`https://water-tracker.onrender.com/api/records/${id}`);
        //console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
})
  
export const saveWaterToday = createAsyncThunk("waterData/saveWaterToday", async (data, thunkAPI) => {
    try {
        setToken()
        const response = await axios.post(`https://water-tracker.onrender.com/api/records`,data);
        //console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })