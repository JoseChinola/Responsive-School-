// MainNavigation.js
import React from 'react';
import NavigationItem from './NavigationItem';
import maracuyaImg from '../img/maracuya.png';
import { Link } from 'react-router-dom';

const MainNavigation = ({ selectedLink, handleClick }) => {
    return (
        <aside className="main-navigation">
            <ul>
                <li>
                    <Link>
                        <span className="icon">
                            <img className="logo" src={maracuyaImg} alt="Logo" />
                        </span>
                    </Link>
                </li>
                <NavigationItem
                    linkName="home"
                    selectedLink={selectedLink}
                    iconClass="fa-solid fa-house"
                    label="Inicio"
                    onClick={handleClick}
                />
                <NavigationItem
                    linkName="service"
                    selectedLink={selectedLink}
                    iconClass="fa-solid fa-tools"
                    label="Service"
                    onClick={handleClick}
                />
                <NavigationItem
                    linkName="learning"
                    selectedLink={selectedLink}
                    iconClass="fa-solid fa-graduation-cap"
                    label="Aprendizaje"
                    onClick={handleClick}
                />
                <NavigationItem
                    linkName="account"
                    selectedLink={selectedLink}
                    iconClass="fa-solid fa-user"
                    label="Cuenta"
                    onClick={handleClick}
                />
                <NavigationItem
                    linkName="support"
                    selectedLink={selectedLink}
                    iconClass="fa-solid fa-headset"
                    label="Soporte"
                    onClick={handleClick}
                />
            </ul>
        </aside>
    );
};

export default MainNavigation;
