import axios from 'axios';
import React from 'react';
import { Button, Card, Input, Label } from 'reactstrap';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      users: [],
      loggedIn: false,
    };
  };

  // componentDidMount() {
  //   axios.get('http://localhost:5000/api/user')
  //     .then(res => this.setState({ ...this.setState, users: res.data }))
  //     .catch(err => console.log(err))
  // }

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
        this.props.loggedIn = true
      })
      .catch(err => {
        console.log(err);
      })
    this.setState({ ...this.setState, username: '', password: '' })
  }

  render() {
    return (
      <div className='login-container'>
        <Card>
          <h1>Login</h1>
          <Label for='email'>Email</Label>
          <Input placeholder='input email' type='text' name='email' value={this.state.email} onChange={this.handleChange}></Input>
          <Label for='password'>Password</Label>
          <Input placeholder='input password' type='password' name='password' value={this.state.password} onChange={this.handleChange}></Input>
          <Button onClick={this.submitForm}>Submit</Button>
        </Card>
      </div >
    )
  }
};

export default Login;