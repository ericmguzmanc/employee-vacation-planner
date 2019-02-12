export function isFetching (state = {
  loading: false, 
  error: {}
}, action) {
  switch (action.type) {
    case 'DO_REQUEST':
      return Object.assign({}, state, { loading: true });
    case 'DO_RECEIVE':
      return Object.assign({}, state, { loading: false });
    case 'REQUEST_ERROR':
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
