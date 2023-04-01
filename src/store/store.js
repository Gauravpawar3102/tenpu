import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerSlice';
import { resumeApi } from '../services/resumeApi';

export default configureStore({
  reducer: {
    header: headerReducer,
    [resumeApi.reducerPath]: resumeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resumeApi.middleware),
});
