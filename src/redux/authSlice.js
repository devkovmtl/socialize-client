import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_TOKEN_KEY, LOGIN_URL, USER_KEY } from '../constants';

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_URL, data);
      //   const { success, message, user, accessToken } = response.data;
      return response.data;
    } catch (error) {
      // error.response.status
      // error.response.data
      const { success, message, errors } = error.response.data;
      return rejectWithValue({ success, message, errors });
    }
  }
);

const initialState = {
  status: 'idle', // idle, pending, fulfilled, rejected
  isLoggedIn: false,
  user: JSON.parse(localStorage.getItem(USER_KEY)) || null,
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      state.isLoggedIn = false;
      state.user = {};
      state.accessToken = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'pending';
        state.isLoggedIn = false;
        state.user = {};
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        // action.payload => success, message, user, accessToken
        state.status = 'fulfilled';
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.error = null;
        // store the token
        localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.accessToken);
        localStorage.setItem(USER_KEY, JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        // action.payload => success, message, errors
        state.status = 'rejected';
        state.isLoggedIn = false;
        state.user = {};
        state.accessToken = null;
        state.error = action.payload.message || 'Login failed';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
