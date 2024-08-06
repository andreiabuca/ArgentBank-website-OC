import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/loginUser', async (userData) => {
  try {
  const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);
  return response.data;
} catch (error) {
  console.error('Error during login:', error);
    throw error;
};
});

export const fetchUserDetails = createAsyncThunk('user/fetchUserDetails', async (token) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      {},
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.body; 
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to fetch user details');
  }
});

const initialState = {
  userInfo: null,
  status: 'idle',
  error: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'success';
        state.token = action.payload.token; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userInfo = action.payload; 
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
