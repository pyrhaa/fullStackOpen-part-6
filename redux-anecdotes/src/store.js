import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer from './reducers/anecdoteReducer';
import notifReducer from './reducers/notifReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore(
  {
    reducer: {
      anecdotes: anecdoteReducer,
      notification: notifReducer,
      filter: filterReducer
    }
  },
  composeWithDevTools()
);

export default store;
