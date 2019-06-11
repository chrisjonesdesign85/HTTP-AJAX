import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import FriendsList from './components/FriendsList';
import { Route } from 'react-router-dom';

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
      .then(res => this.ListeningStateChangedEvent({ friends: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1>My Friends</h1>
          <FriendsList friends={this.state.friends} />
        </header>
        {/* <Route exact path="/" render={(props) => (
          <FriendsList {...props} friends={this.state.friends} />
        )} /> */}


      </div>
    );
  }
}


export default App;
