import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, incrementAsync, secretAsync, selectCount } from '../slices/counterSlice';
import { plusChange, minusChange, selectPlus, selectMinus } from '../slices/changeSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <>
      <div>Counter value is {count}</div>
      <button onClick={() => dispatch(incrementCounter())}>increase</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrease</button>
      <button onClick={() => dispatch(incrementAsync(5))}>increase async</button>
      <button onClick={() => dispatch(secretAsync())}>add secret</button>
      <button onClick={() => console.log(state)}>check state</button>
    </>
  );
}

// inside component import { useSelector, useDispatch } from react-redux
// import { actionCreators, optional selector function } from './[name]slice, can also define selector function inline when calling useSelector in component
// to reference the state from store, reference useSelector(selector);
// call dispatch(actionCreator()) to dispatch action to reducer

// create individual store file
// import {configureStore } from RTK;
// import reducer(s) from slice file
/*
export default configureStore({
  reducer: {
    sliceName: reducer function  // when passed an object of slice reducers, it will pass those into a combineReducers function to generate a root reducer
  }
});
*/

// create individual slice files for each slice
// in slice, import {createSlice} from @reduxjs/toolkit
/*
export const slice = createSlice({
  name: slice name (used as prefix in action types),
  initial state,
  reducers: {     // function names are used for generating actions // these are known as case reducers
    reducerName(state, action) {
      logic
    },
    reducerName2(state, action) {},
  }
})
*/
// creating a slice will create an object of the shape {name, reducer, actions, caseReducers}
// export these as needed
// export thunks separately
// thunk = (input when called) => disatch => {
//    async functionality
// }

// in index.js which renders react onto html doc
// import Provider from react-redux
// import store from store.js
// wrap app with provider