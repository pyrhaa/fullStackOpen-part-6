import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/anecdoteReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore(reducer, composeWithDevTools());
