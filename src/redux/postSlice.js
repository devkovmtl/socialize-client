import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { POSTS_URL } from '../constants';

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(POSTS_URL, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to add new post'
      );
    }
  }
);

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
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.posts.unshift(action.payload.post);
    });
  },
});

export default postSlice.reducer;
