import React from 'react';

import {useParams} from 'react-router-dom';
import PlacesList from '../components/PlacesList';
import image1 from '../assets/Mro.jpg';
import image2 from '../assets/Anna.jpg';

const MY_PLACES = [
    {id: 'p1',
    title: 'Empire State Building',
    description: 'The tallest building',
    imageURL: image1,
    address: "New York, USA",
    location: {
        lat: 27.1751,
        lng: 78.0421
    },
    creator: 'p1'
    },
    {id: 'p2',
    title: 'Tadj Makhal',
    description: 'Exquisite temple',
    imageURL: 
    image2,
    address: "Bombay, India",
    location: {
        lat: 27.1751,
        lng: 78.0421
    },
    creator: 'p2'
}
]

const UserPlacesPage = () => {
    console.log("User ID is " + useParams().name)
    const userId = useParams().userId;
    const myPlaces = MY_PLACES.filter(place => place.creator === userId)
    return (
        <div>
            <PlacesList data={myPlaces} />
        </div>
            
    )
}
export default UserPlacesPage;
