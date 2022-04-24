import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import postSlice from './postSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    user: userSlice,
  },
});
