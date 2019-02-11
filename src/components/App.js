import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import './styles/App.css';
import AppRouter from './AppRouting';


const App = () => (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

export default App;
