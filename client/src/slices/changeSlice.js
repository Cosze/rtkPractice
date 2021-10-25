import { createSlice } from '@reduxjs/toolkit';
import { incrementCounter } from './counterSlice';

export const slice = createSlice({
  name: 'change',
  initialState: { plus: 0, minus: 0 },
  reducers: {
    plusChange(state, action) {
      console.log(action);
      state.plus += 1;
    },
    minusChange(state, action) {
      state.minus += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementCounter, state => {
      state.plus += 1
    });
  },
});

export const { plusChange, minusChange } = slice.actions;
export const selectPlus = state => state.change.plus;
export const selectMinus = state => state.change.minus;

export default slice.reducer;