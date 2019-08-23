import './App.css';

import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Login from './components/login';
import Signup from './components/signup';
import Users from './components/users';

function App() {
  return (
    <div className="app-container">
      <nav>
        <NavLink to='/'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='/users'>Users</NavLink>
      </nav>
      <Route exact path='/' render={props => (<Login {...props} />)} />
      <Route path='/signup' render={props => (<Signup {...props} />)} />
      <Route path='/users' render={props => (<Users {...props} />)} />

    </div>
  );
}

export default App;
