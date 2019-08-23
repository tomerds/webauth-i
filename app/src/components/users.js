import axios from 'axios';
import React from 'react';

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    if (!localStorage.token) {
      alert('no access allowed')
      this.props.history.push('/notallowed')
    } else {
      axios.get('http://localhost:5000/api/user', { headers: { Authorization: localStorage.token } })
        .then(res => this.setState({ ...this.setState, users: res.data }))
        .catch(err => console.log(err))
      console.log(this.state.users);
    }
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    )
  }
}

export default Users;