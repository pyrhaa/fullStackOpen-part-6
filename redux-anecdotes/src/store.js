import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdoteReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore(
  {
    reducer: {
      anecdotes: anecdoteReducer
    }
  },
  composeWithDevTools()
);

export default store;
