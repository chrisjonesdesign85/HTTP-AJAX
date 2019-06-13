import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import FriendsList from './components/FriendsList';
import EditFriend from './components/EditFriend';
import SingleFriend from './components/SingleFriend';
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

  editFriend = (id, updatedFriend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(response => {
        this.setState({ friends: response.date });
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/">
            <h1 className="header">My Friends</h1>
          </Link>
          <Route exact path="/" render={(props) => <FriendsList {...props} friends={this.state.friends} addFriend={this.addFriend} />} />
          <Route path="/friends/:id/edit" render={(props) => <EditFriend {...props} editFriend={this.editFriend} />} />
          <Route exact path="/friends/:id" render={(props) => <SingleFriend {...props} deleteFriend={this.deleteFriend} />} />
        </Router>
      </div>
    );
  }
}


export default App;
