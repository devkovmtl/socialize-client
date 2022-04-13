import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ACCESS_TOKEN_KEY,
  LOGIN_URL,
  REGISTER_URL,
  USER_KEY,
} from '../constants';
import checkIsTokenExpires from '../helpers/checkIsTokenExpires';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(REGISTER_URL, data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      const { success, message, errors } = error.response.data;
      return rejectWithValue({ success, message, errors });
    }
  }
);

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

const initialState = createInitialAuthState();

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
        state.error = action.payload.message || 'Registration failed';
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
      });
    builder
      .addCase(register.pending, (state, action) => {
        state.status = 'pending';
        state.isLoggedIn = false;
        state.user = {};
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
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
      .addCase(register.rejected, (state, action) => {
        state.status = 'rejected';
        state.isLoggedIn = false;
        state.user = {};
        state.accessToken = null;
        state.error = action.payload.message || 'Registration failed';
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

function createInitialAuthState() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) {
    localStorage.removeItem(USER_KEY);
    return {
      isLoggedIn: false,
      user: {},
      accessToken: null,
      status: 'idle',
      error: null,
    };
  }

  if (checkIsTokenExpires(accessToken)) {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    return {
      isLoggedIn: false,
      user: {},
      accessToken: null,
      status: 'idle',
      error: null,
    };
  }

  return {
    status: 'fulfilled', // idle, pending, fulfilled, rejected
    isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
    user: JSON.parse(localStorage.getItem(USER_KEY)) || null,
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || null,
    error: null,
  };
}
