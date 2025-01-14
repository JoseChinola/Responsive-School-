import React from 'react';
import "../cards/Card-body.css"

const Avatar = ({ image, name, id, location }) => {
    return (
        <div className='card-profile'>
            <div className='avatar'>
                <img src={image} alt="Perfil" />
                <button className='edit-avatar'>
                    <i className="fa-solid fa-pen"></i>
                </button>
            </div>
            <h4>{name}</h4>
            <p>{id}</p>
            <div className='avatar-border'>
                <div className='card-icon'>
                    <i className="fa-solid fa-building"></i>
                    <br />
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
};

export default Avatar;