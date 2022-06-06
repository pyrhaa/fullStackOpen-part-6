const notifReducer = (state = 'NONE', action) => {
  switch (action.type) {
    case 'SET_NOTIF':
      return action.notif;
    default:
      return state;
  }
};

export const notifChange = (notif) => {
  return {
    type: 'SET_FILTER',
    notif
  };
};

export default notifReducer;
