import React, { useState } from 'react';
import './Topbar.css';
import perfil from '../../assets/imgs/perfil-2.jpeg';

export const Topbar = ({ onToggle }) => {
    const [isChecked, setIsChecked] = useState(true);


    // Función para manejar el cambio de estado del checkbox
    const handleToggle = () => {
        setIsChecked(!isChecked);
        onToggle();
    }


    return (
        <div className="topbar">
            <div className="toggle">
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleToggle}
                    onClick={onToggle}
                />
                <label
                    className="toggle-label"
                    htmlFor="checkbox"
                >
                    <div className="bar bar--top"></div>
                    <div className="bar bar--middle"></div>
                    <div className="bar bar--bottom"></div>
                </label>
            </div>

            <div className="search">

            </div>

            <div className={`user`}>
                <img src={perfil} alt="User Profile" />

            </div>

        </div>
    );
};
