import React from 'react';
import UsersList from '../components/UsersList';
import './UsersPage.css'
import image1 from '../assets/Mro.jpg';
import image2 from '../assets/Anna.jpg';

function UsersPage() {

    const USERSLIST = [
        {
            id:"p1",
            name:"Miro",
            count:"2",
            image:image1
        },
        {
            id:"p2",
            name:"Anna",
            count:2,
            image:image2
        }
    ]
    return (
        <div className="usersPage">
            <UsersList data={USERSLIST}/>
        </div>
    )
}

export default UsersPage
