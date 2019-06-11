import React from 'react';
import './App.css';

import axios from 'axios';
import FriendsList from './components/FriendsList';
import { Link, Route } from 'react-router-dom';
import NewFriendForm from './components/newFriendForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      // newFriend: []
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

  

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1>My Friends</h1>
          <NewFriendForm />
          <div className="friendsListWrapper">
            <FriendsList friends={this.state.friends} />
          </div> {/*end friendsListWrapper */}
        </header>
      </div>
    );
  }
}


export default App;
