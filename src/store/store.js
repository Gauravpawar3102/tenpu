import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerSlice';

export default configureStore({
  reducer: {
    header: headerReducer,
  },
});
