import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import FriendsList from './components/FriendsList';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }


  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data })  // Fixed this line
      })
      .catch(err => console.log(err))
  }

  addFriend = (newFriend) => {
    axios
      .post("http://localhost:5000/friends", newFriend) // Here I used a POST request to add the new friend from the form to the database
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/">
          <h1 className="header">My Friends</h1>
          </Link>
          <Route exact path="/" render={(props) => <FriendsList {...props} friends={this.state.friends} addFriend={this.addFriend} />} />
        </Router>
      </div>
    );
  }
}


export default App;
