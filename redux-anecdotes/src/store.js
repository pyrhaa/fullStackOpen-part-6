import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer, { appendAnecdote } from './reducers/anecdoteReducer';
import notifReducer from './reducers/notifReducer';
import filterReducer from './reducers/filterReducer';
import anecdoteService from './services/anecdotes';

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

anecdoteService.getAll().then((anecdotes) =>
  anecdotes.forEach((anecdote) => {
    store.dispatch(appendAnecdote(anecdote));
  })
);

export default store;
