import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USERS_URL } from '../constants';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(USERS_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue('Error fetching users');
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'idle',
    users: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'pending';
        state.users = [];
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users = state.users.concat(action.payload.users);
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
