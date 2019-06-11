import React from 'react';

function FriendsList(props) {
    return (
        <div className="friendCard">
            {props.friends.map(friend => {
                return (
                    <div key={friend.id}>
                        <h2><span>Name: </span>{friend.name}</h2>
                        <p><span>Age: </span>{friend.age}</p>
                        <p><span>email: </span>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList;