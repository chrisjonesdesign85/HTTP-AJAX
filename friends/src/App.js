import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import FriendsList from './components/FriendsList';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import NewFriendForm from './components/AddFriendForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: []
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
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1>My Friends</h1>
          {/* <NewFriendForm /> */}

          <Router>
            <div>
              <Route exact path="/" render={(props) =>
                <FriendsList {...props} friends={this.state.friends} newFriend={this.newFriend} />} />
            </div>
          </Router>



          {/* <Route exact path="/friends/:id" render={(props) => <SingleFriendPage {...props} deleteFriend={this.deleteFriend} />} /> */}
          {/* <Route path="/friends/:id/edit" render={(props) => <EditFriendForm {...props} editFriend={this.editFriend} />} /> */}

          {/* <div className="friendsListWrapper">
            <FriendsList friends={this.state.friends} />
          </div> */}
        </header>
      </div>
    );
  }
}


export default App;
