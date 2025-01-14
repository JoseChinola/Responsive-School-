import React from 'react';

const CardItem = ({ title, children, buttonLabel, buttonClass }) => {
    return (
        <div className='card-item'>
            <h2>{title}</h2>
            <div className='card-body'>
                {children}
                {buttonLabel && (
                    <div className='div-button'>
                        <button className={`btn ${buttonClass}`}>{buttonLabel}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardItem;