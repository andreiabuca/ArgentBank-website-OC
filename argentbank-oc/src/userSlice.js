// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Existing actions
// export const loginUser = createAsyncThunk('user/loginUser', async (userData) => {
//   try {
//     const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message || 'Failed to log in');
//   }
// });

// export const fetchUserDetails = createAsyncThunk('user/fetchUserDetails', async (token) => {
//   try {
//     const response = await axios.post(
//       'http://localhost:3001/api/v1/user/profile',
//       {},
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response.data.body;
//   } catch (error) {
//     throw new Error(error.response.data.message || 'Failed to fetch user details');
//   }
// });

// // New action to update user profile
// export const updateUser = createAsyncThunk('user/updateUser', async ({ token, userData }) => {
//   try {
//     const response = await axios.put(
//       'http://localhost:3001/api/v1/user/profile',
//       userData,
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     return response.data.body;
//   } catch (error) {
//     throw new Error(error.response.data.message || 'Failed to update user profile');
//   }
// });

// const initialState = {
//   userInfo: null,
//   status: 'idle',
//   error: null,
//   token: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.status = 'success';
//         state.token = action.payload.token;
//         state.userInfo = null; // Reset userInfo until it's fetched
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(fetchUserDetails.fulfilled, (state, action) => {
//         state.userInfo = action.payload;
//         state.status = 'idle';
//       })
//       .addCase(fetchUserDetails.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         state.userInfo = action.payload;
//       })
//       .addCase(updateUser.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;


