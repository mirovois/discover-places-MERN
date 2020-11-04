import React from 'react';
import "./User.css";
import {Link} from 'react-router-dom';


const User = (props) => {
    console.log(props)
    return (
        <li>
          <Link to={`/${props.id}/places`}>
            <div className="list__container">
                    <div className="user__image">
                        <img src={props.image} alt={props.name}/>
                    </div>
                    <div className="user__info">
                        <h2>{props.name}</h2>
                        <strong>{props.numberOfPlaces} {props.numberOfPlaces === 1 ? 'Place' : 'Places'}</strong>
                    </div>
            </div>
        </Link>
        </li>
    )
}

export default User;
