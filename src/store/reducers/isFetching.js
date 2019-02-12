export function isFetching (state = false, action) {
  switch (action.type) {
    case 'DO_REQUEST':
      return true;
    case 'DO_RECEIVE':
      return false;
    default:
      return state;
  }
};
