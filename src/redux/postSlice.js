import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    status: 'idle',
    posts: [],
    error: null,
  },
  reducers: {},
});

export default postSlice.reducer;
