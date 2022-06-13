import { createSlice } from '@reduxjs/toolkit';

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
    createAnecdote(state, action) {
      const newAnec = action.payload;
      state.push(newAnec);
    },
    voteOf(state, action) {
      const id = action.payload;
      const anecToChange = state.find((anec) => anec.id === id);
      const changedAnec = {
        ...anecToChange,
        votes: anecToChange.votes + 1
      };
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

export const { createAnecdote, voteOf, appendAnecdote, setAnecdotes } =
  anecSlice.actions;
export default anecSlice.reducer;
// export default reducer;
