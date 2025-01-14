import React from 'react';
import maracuya from '../../../../../assets/icons/maracuya-icon.gif';

const AccessCard = () => {
    return (
        <div className='item4 o-hidden'>
            <img className='card-img-top' src={maracuya} alt="icon" />
            <div className='card-body'>
                <p>Acceso y uso de la plataforma</p>
                <div className='div-button'>
                    <button className='btn btn-success'>
                        Ver Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccessCard;
