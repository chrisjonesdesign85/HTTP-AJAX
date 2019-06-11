import React from 'react';

function FriendsList(props) {
    return (
        <div>
            <div>
                {props.friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <h2>{friend.name}</h2>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    )
                })}
            </div> {/* end of child div */}
        </div>
    )
}

export default FriendsList;