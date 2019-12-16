import React from 'react';
import logo from './logo.svg';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
      <AppNavbar/>
      <ShoppingList/>
    </div>
    </Provider>
  );
}

export default App;
