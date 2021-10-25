import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import changeReducer from '../slices/changeSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    change: changeReducer,
  }
})
