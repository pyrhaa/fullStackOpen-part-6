const notifReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIF':
      return action.notif;
    default:
      return state;
  }
};

export const notifChange = (notif, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIF',
      notif
    });

    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIF',
        notif: null
      });
    }, time * 1000);
  };
};

export default notifReducer;
