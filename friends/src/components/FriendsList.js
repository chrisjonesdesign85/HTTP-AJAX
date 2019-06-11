import React from 'react';
import { Link } from 'react-router-dom';
import AddFriendForm from './AddFriendForm';
import FriendCard from './FriendCard';

const FriendsList = props => {
    return (
        <div className="content">
            <AddFriendForm addFriend={props.addFriend} />
            <div className='friendsListWrapper'>
                {props.friends.map(friend => <Link to={`/friends/$friend.id`} key={friend.id}><FriendCard friend={friend} /></Link>)}
            </div>
        </div>
    )
}


export default FriendsList;