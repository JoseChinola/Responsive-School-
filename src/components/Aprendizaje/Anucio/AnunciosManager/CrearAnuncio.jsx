// CrearAnuncio.js
import React, { useState } from 'react';

const CrearAnuncio = ({ onNuevoAnuncio }) => {
    const [titulo, setTitulo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [tipo, setTipo] = useState('info');
    const [fecha, setFecha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoAnuncio = {
            id: Date.now(),
            titulo,
            mensaje,
            tipo,
            fecha,
            activo: true,
        };
        onNuevoAnuncio(nuevoAnuncio); // Llama a la función que se pasa como prop
        setTitulo('');
        setMensaje('');
        setTipo('info');
        setFecha('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div>
                <label>Mensaje</label>
                <textarea
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                />
            </div>
            <div>
                <label>Tipo</label>
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="info">Información</option>
                    <option value="advertencia">Advertencia</option>
                    <option value="success">Éxito</option>
                </select>
            </div>
            <div>
                <label>Fecha</label>
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>
            <button type="submit">Crear Anuncio</button>
        </form>
    );
};

export default CrearAnuncio;
