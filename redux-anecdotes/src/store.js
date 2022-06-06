import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer from './reducers/anecdoteReducer';
import notifReducer from './reducers/notifReducer';

const store = configureStore(
  {
    reducer: {
      anecdotes: anecdoteReducer,
      notification: notifReducer
    }
  },
  composeWithDevTools()
);

export default store;
