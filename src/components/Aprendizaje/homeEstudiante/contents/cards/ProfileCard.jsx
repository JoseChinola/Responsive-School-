import React from 'react';
import Avatar from '../CardItem/Avatar'
import perfil2 from '../../../../../assets/imgs/perfil-2.jpeg';

const ProfileCard = () => {
    return (
        <div className='item3'>
            <div className='card-body card-profile'>
                <Avatar
                    image={perfil2}
                    name="Renny Jose Mateo Matos"
                    id="20-eisn-1-110"
                    location="Santo Domingo Oeste"
                />

            </div>
        </div>
    );
};

export default ProfileCard;
