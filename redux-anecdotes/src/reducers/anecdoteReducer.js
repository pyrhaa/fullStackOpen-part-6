import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

/** Part of the exercices, when we dont use thje db.json */
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);

const anecSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    /* createAnecdote(state, action) {
      const newAnec = action.payload;
      state.push(newAnec);
    },*/
    vote(state, action) {
      const id = action.payload.id;
      const changedAnec = action.payload;
      // const anecToChange = state.find((anec) => anec.id === id);
      // const changedAnec = {
      //   ...anecToChange,
      //   votes: anecToChange.votes + 1
      // };
      return state.map((anec) => (anec.id !== id ? anec : changedAnec));
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    }
  }
});

/* Without the createSlice under here */

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state);
//   console.log('action', action);
//   switch (action.type) {
//     case 'NEW_ANECDOTE':
//       return [...state, action.data];
//     case 'VOTE':
//       const id = action.data.id;
//       const anecToChange = state.find((anec) => anec.id === id);
//       const changedAnec = {
//         ...anecToChange,
//         votes: anecToChange.votes + 1
//       };
//       return state.map((anec) => (anec.id !== id ? anec : changedAnec));
//     default:
//       return state;
//   }
// };

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data: {
//       content,
//       id: getId(),
//       votes: 0
//     }
//   };
// };

// export const voteOf = (id) => {
//   return {
//     type: 'VOTE',
//     data: { id }
//   };
// };

export const { appendAnecdote, setAnecdotes, vote } = anecSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnec = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnec));
  };
};

export const voteOf = (id) => {
  return async (dispatch) => {
    const votedAnec = await anecdoteService.voting(id);
    dispatch(vote(votedAnec));
  };
};

export default anecSlice.reducer;
// export default reducer;
