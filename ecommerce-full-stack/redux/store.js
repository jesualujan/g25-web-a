import {reducer} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import {configureStore} from 'reduxjs/toolkit'

// create a makeStore function
const makeStore = (context) =>
  createStore({
    reducer: reducer,
    devTools: true,
  });

  // export

  export const wrapper = createWrapper(makeStore)