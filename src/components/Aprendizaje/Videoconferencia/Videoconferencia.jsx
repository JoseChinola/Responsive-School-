import React, { useState } from 'react'
import data from './data/data';
import VideoConferenciaItem from './videoManager/videoConferenciaItem';
import './Videoconferencia.css'



const Videoconferencia = () => {
    const [videoCofencia, setvideoCofencia] = useState(data);
    
    // Eliminar un anuncio basado en su id
    const eliminarVideoConferencia = (id) => {
        setvideoCofencia(videoCofencia.filter((video) => video.id !== id));
    };

    // Filtramos solo los anuncios activos
    const VideoConferenciaActivos = videoCofencia.filter((video) => video.Activo);

    return (
        <>
            <div className='Videos-header'>
            </div>
            <div className="videoConferencia-container">
                {VideoConferenciaActivos.length > 0 ? (
                    VideoConferenciaActivos.map((anuncio) => (
                        <VideoConferenciaItem
                            key={anuncio.id}
                            videoConferencia={anuncio}
                            onClose={() => eliminarVideoConferencia(anuncio.id)}
                        />
                    ))
                ) : (
                    <div className='video-nohay'>
                        <p>No hay videoconferencias programada en ninguna de sus asignaturas.</p>
                    </div>

                )}
            </div>
        </>

    );
}

export default Videoconferencia