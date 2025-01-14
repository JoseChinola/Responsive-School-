import React from 'react';
import './Footer.css';  // Importa el archivo CSS
import maracuya from '../../assets/icons/maracuya.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="app-footer">
                <div className="footer-content">
                    <p>
                        <strong>Sistema de gestión del aprendizaje - Uma</strong>
                    </p>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo">
                        <img className="logo" src={maracuya} alt="Logo" />
                    </div>
                    <div className="footer-text">
                        <p className="m-0">© 2025 Jose Chinola</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;