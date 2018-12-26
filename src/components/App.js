import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import './styles/App.css';
import AppRouter from './AppRouting';


const App = () => (
  <Provider store={store}>
    {/* <div className="App"> */}
      <AppRouter />
    {/* </div> */}
  </Provider>
);

export default App;
