import './App.css';

import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/login';

function App() {
  return (
    <div className="app-container">
      <Route exact path='/' render={props => (<Login {...props} />)} />
    </div>
  );
}

export default App;
