import React from 'react';

const ReinscripcionCard = () => {
    return (
        <div className='item1'>
            <h2>Reinscripción <span className='ano-title'>2025/1</span></h2>
            <div className='card-body'>
                <p>
                    El proceso de reinscripción, Selección y
                    Retiro de asignaturas para el período
                    <span> ENERO/ABRIL 2025</span> ya se encuentra disponible.
                </p>
                <div className='div-button'>
                    <button className='btn btn-proceso'>
                        Realizar Proceso
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReinscripcionCard;
