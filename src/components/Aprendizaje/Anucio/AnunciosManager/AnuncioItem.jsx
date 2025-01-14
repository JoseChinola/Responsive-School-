// AnuncioItem.js
import React from 'react';
import './AnuncioItem.css'; // Estilos personalizados

const AnuncioItem = ({ anuncio, onClose }) => {
    const { titulo, mensaje, tipo, fecha } = anuncio;
    const tipoClase = tipo || 'info';

    return (
        <div className={`anuncio anuncio-${tipoClase}`}>
            <div className="card">
                <div>
                    <h3 className="title">{titulo}</h3>
                    <span className="fecha">{fecha}</span>
                </div>

                <div className="parrafoBx">
                    <i className="fa-regular fa-comment"></i>
                    <div className='parrafo'>
                        <p>{mensaje}</p>
                    </div>
                </div>

                <div>
                    <button className="but-ver" onClick={onClose}>
                        <span>Cerrar</span>
                        <svg width="15px" height="15px" viewBox="0 0 15 15">
                            <line x1="1" y1="1" x2="14" y2="14" stroke="black" strokeWidth="2" />
                            <line x1="1" y1="14" x2="14" y2="1" stroke="black" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AnuncioItem;
