import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input, Label } from 'reactstrap';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      users: [],
      loggedIn: false,
    };
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  submitForm = (e) => {
    e.preventDefault();
    const object = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('http://localhost:5000/api/auth/login', object)
      .then(res => {
        console.log(res)
        localStorage.token = res.data.token;
        this.setState({ ...this.setState, loggedIn: true })
        alert('Successful log in')
      })
      .catch(err => {
        console.log(err);
        alert('unsuccessful log in')
      })
    this.setState({ ...this.setState, username: '', password: '' })
  }

  getUsers = (e) => {
    e.preventDefault();
    axios.get('http://localhost:5000/api/user', { headers: { Authorization: localStorage.token } })
      .then(res => {
        console.log(res)
        this.setState({ ...this.setState, users: res.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className='page-container'>
        <div className='login-container'>
          <Card className='card-container'>
            <h1>Login</h1>
            <div className='input-container'>
              <Label for='username'>Username</Label>
              <Input placeholder='input username' type='text' name='username' value={this.state.username} onChange={this.handleChange}></Input>
              <Label for='password'>Password</Label>
              <Input placeholder='input password' type='password' name='password' value={this.state.password} onChange={this.handleChange}></Input>
              <Button onClick={this.submitForm}>Login</Button>
            </div>
            <div className='register-container'>
              <h3 className='hdr'>Not registered yet?</h3>
              <Link to='/signup' style={{ textDecoration: 'none' }}>
                <Button className="signup" onClick={this.signUp}>Sign up</Button>
              </Link>
            </div>
            <Button className='butonee' onClick={this.getUsers}>Users</Button>
            <Button className='butonee' onClick={() => {
              localStorage.removeItem("token");
              alert('You logged out')
            }}>Log Out</Button>
          </Card>
        </div >
      </div>
    )
  }
};


export default Login;