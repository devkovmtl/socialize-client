import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { POSTS_URL } from '../constants';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(POSTS_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue('Error fetching posts');
    }
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    status: 'idle',
    posts: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'pending';
        state.posts = [];
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.posts = state.posts.concat(action.payload.posts);
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
