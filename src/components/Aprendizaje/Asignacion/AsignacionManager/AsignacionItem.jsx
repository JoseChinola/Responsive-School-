import React from 'react'

const AsignacionItem = ({ asignaciones, onDelete, onOpen }) => {
    const { materia, Profesor, Sección, estatus, tema, tiempoInicio, tiempoFin } = asignaciones;

    return (
        <>
            <div className={`asignacion asignacion-${estatus}`}>
                <div className="card">

                    <div className='container-title'>
                        <h3 className="title">
                            {materia}
                        </h3>

                        <h4 className="tema-tarea">
                            {tema}
                        </h4>
                    </div>


                    <div className="info-bx">
                        <div className="info">
                            <ul>
                                <li><strong>Sección:</strong> <span>{Sección}</span></li>
                                <li><strong>Profesor:</strong> <span>{Profesor}</span></li>
                                <li><strong>Estado:</strong> <span>{estatus}</span></li>
                                <li><strong>Inicio:</strong> <span>{new Date(tiempoInicio).toLocaleString()}</span></li>
                                <li><strong>Fin:</strong> <span>{new Date(tiempoFin).toLocaleString()}</span></li>
                            </ul>
                        </div>
                    </div>


                    <div className='container-button'>
                        <button className="but-entrar in" onClick={onOpen}>
                            <span>Entrar</span>
                            <svg width="15px" height="12px" viewBox="0 0 15 15">
                                <polyline points="1,7 10,7 10,2 14,7 10,12 10,7"
                                    fill="none" strokeWidth="2" />
                            </svg>
                        </button>


                        <button className="but-entrar delete" onClick={onDelete}>
                            <span>Eliminar</span>
                            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M19 6H5V19H19V6ZM5 4H19C20.1 4 21 4.9 21 6V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V6C3 4.9 3.9 4 5 4ZM11 9V16H13V9H11Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
            </div >
        </>
    )
}



export default AsignacionItem