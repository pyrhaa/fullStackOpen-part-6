import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const notifSlice = createSlice({
  name: 'notif',
  initialState,
  reducers: {
    newNotif(state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const notifChange = (notif, time) => {
  return async (dispatch) => {
    dispatch(newNotif(notif));

    setTimeout(() => {
      dispatch(newNotif(initialState));
    }, time * 1000);
  };
};

/** without createSlice */
// const notifReducer = (state = null, action) => {
//   switch (action.type) {
//     case 'SET_NOTIF':
//       return action.notif;
//     default:
//       return state;
//   }
// };

// export const notifChange = (notif, time) => {
//   return async (dispatch) => {
//     dispatch({
//       type: 'SET_NOTIF',
//       notif
//     });

//     setTimeout(() => {
//       dispatch({
//         type: 'SET_NOTIF',
//         notif: null
//       });
//     }, time * 1000);
//   };
// };

// export default notifReducer;
export const { newNotif } = notifSlice.actions;
export default notifSlice.reducer;
