import {createWrapper} from 'next-redux-wrapper';
import {reducer} from './reducer'
import {configureStore} from 'redux/toolkit'



// create a makeStore function
const makeStore = (context) =>
    configureStore({
    reducer: reducer,
    devTools: true,
  });

  // export

  export const wrapper = createWrapper(makeStore, {debug: true})