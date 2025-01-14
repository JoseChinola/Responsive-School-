// NavigationItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ linkName, selectedLink, iconClass, label, onClick }) => {
    return (
        <li className={selectedLink === linkName ? 'selected' : ''} onClick={() => onClick(linkName)}>
            <Link>
                <span className="icon">
                    <i className={iconClass}></i>
                </span>
                <span className="title">{label}</span>
            </Link>
        </li>
    );
};

export default NavigationItem;
