import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const slice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incrementCounter(state, action) {
      console.log('incrementing');
      console.log('state: ', Object.keys(state), ' --- ', 'action: ', action);
      state.value += action.payload ?? 1;
    },
    decrementCounter(state, action) {
      console.log('decrementing');
      console.log('state: ', state, ' --- ', 'action: ', action);
      state.value -= 1;
    },
  },
});

export const incrementAsync = (val) => dispatch => setTimeout(() => dispatch(incrementCounter(val)), 1000);
export const secretAsync = () => dispatch => {
  axios.get('/secret')
  .then(({data}) => dispatch(incrementCounter(data.secret)))
  .catch(e => console.error(e));
}

export const { incrementCounter, decrementCounter } = slice.actions;
export const selectCount = state => state.counter.value;

export default slice.reducer
