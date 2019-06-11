import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Friends from '.components/FriendsList';
import { BrowserRouter as Route } from 'react-router-dom';

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
        <Route exact path="/" render={(props) => (
          <Friends {...props} friends={this.state.friends} />
        )} />


      </div>
    );
  }
}


export default App;
