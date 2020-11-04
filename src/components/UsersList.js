import React from 'react';
import User from './User';
import './UsersList.css'

function UsersList(props) {
    if (props.data.length === 0) {
        return (
            <div>
                <h2>No users found</h2>
            </div>
        );
    }
    return (
        <ul className="usersList">
            {props.data.map(item =>
                <User 
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    numberOfPlaces={item.count}
                />
                )}
        </ul>
        
    )
}

export default UsersList
