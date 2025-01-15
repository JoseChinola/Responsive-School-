import React from 'react'

const VideoConferenciaItem = ({ videoConferencia, onClose, onOpen }) => {
    const { Materia, Profesor, Tema, Fecha, Sección, Image } = videoConferencia;


    return (
        <div className='videoCoferencia'>
            <div className="card-video">
                <div className="video-front">
                    <div className="card-top">
                        <p className="card-top-para">Video conferencia</p>
                    </div>

                    <div className='videos-perfil'>
                        <img src={Image} alt="perfil maestro" />
                    </div>

                    
                        <p className="video-profe">{Profesor}</p>
                        <p className="video-materia">{Materia}
                        </p>
                    
                </div>


                <div className="video-back">

                    <div className='div-but-cerrar'>
                        <button className="but-Cerrar" onClick={onClose}>
                            <span>Cerrar</span>
                            <svg width="15px" height="15px" viewBox="0 0 15 15">
                                <line x1="1" y1="1" x2="14" y2="14" stroke="black" strokeWidth="2" />
                                <line x1="1" y1="14" x2="14" y2="1" stroke="black" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>

                    <div className='title-container'>
                        <h5>Tema</h5>
                        <p className="video-tema">{Tema}</p>

                        <h5>Fecha</h5>
                        <p className="video-tema">{Fecha}</p>

                        <h5>Sección</h5>
                        <p className="video-tema">{Sección}</p>
                    </div>

                    <div className="icons">
                        <button className="btn-class" onClick={onOpen}>
                            <span className="btn-circle" aria-hidden="true">
                                <span className="btn-icon arrow"></span>
                            </span>
                            <span className="button-text">Entrar a clase</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default VideoConferenciaItem