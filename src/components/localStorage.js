export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    console.log('load state err ', err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('save state err ', err);
  }
}

export const doCheckAuthState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      saveState({
        requestLoading: false,
        userLoggedIn: false,
        userLogged : {
          id: '',
          email: '',
          admin: false
        }
      });
    }
  } catch (err) {
    console.log('docheckauthstate err ', err)
    return undefined;
  }
}

export const getToken = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.log('get token err ', err);
    return undefined;
  }
}