import './App.css';

import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="app-container">
      <Route exact path='/' render={props => (<Login {...props} />)} />
      <Route path='/signup' render={props => (<Signup {...props} />)} />
    </div>
  );
}

export default App;
