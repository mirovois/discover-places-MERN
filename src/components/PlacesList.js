import React from 'react';

import Place from './Place'


const UserPlacesList = (props) => {
    
    console.log(props);
    if (props.data.length === 0) {
        return (
            <div>
                <h2>You haven't put any places yet. Try to create one?</h2>
                <button>Share place</button>
            </div>
        );
    }
    return (
        <div>
            <ul>
                {props.data.map(item =>
                    (<Place 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.imageURL}
                        address={item.address}
                        creatorID={item.creator}
                        coordinates={item.location}
                        />)
                )}
                
            </ul>
        </div>
    )
}

export default UserPlacesList
