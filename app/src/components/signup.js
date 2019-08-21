import axios from 'axios';
import React from 'react';
import { Button, Card, Input, Label } from 'reactstrap';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      users: [],
      loggedIn: false,
    };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/user')
      .then(res => this.setState({ ...this.setState, users: res.data }))
      .catch(err => console.log(err))
  }

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
    axios.post('http://localhost:5000/api/auth/register', object)
      .then(res => {
        console.log('hello')
        this.setState({ ...this.setState, loggedIn: true })
      })
      .catch(err => {
        console.log(err);
      })
    this.setState({ ...this.setState, username: '', password: '' })
  }

  render() {
    return (
      <div className='page-container'>
        <div className='login-container'>
          <Card className='card-container'>
            <h1>Sign Up</h1>
            <div className='input-container'>
              <Label for='username'>Username</Label>
              <Input placeholder='input username' type='text' name='username' value={this.state.username} onChange={this.handleChange}></Input>
              <Label for='password'>Password</Label>
              <Input placeholder='input password' type='password' name='password' value={this.state.password} onChange={this.handleChange}></Input>
              <Button onClick={this.submitForm}>Login</Button>
            </div>
          </Card>
        </div >
      </div>
    )
  }
};

export default Signup;