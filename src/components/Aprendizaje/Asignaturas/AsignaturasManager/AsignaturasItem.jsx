import React from 'react'
import '../Asignaturas.css'
import { Link } from 'react-router-dom';

const AsignaturasItem = ({ asignaciones  }) => {
    const { materia, Profesor, Credito, Sección, code } = asignaciones;

    return (
        <>
            <div className='asignatura'>
                <div className="card">
                    <div>
                        <h3 className="title">{materia} <span>{code}</span></h3>
                    </div>

                    <div>
                        <Link to={`/Asignatura/bienvenida`} className="but-entrar" >
                            <span>Entrar A la asinatura</span>
                            <svg width="20px" height="12px" viewBox="0 0 15 15">
                                <polyline points="1,7 10,7 10,2 14,7 10,12 10,7"
                                    fill="none" stroke="black" strokeWidth="2" />
                            </svg>
                        </Link >
                    </div>

                    <div className="info-bx">
                        <div className='parrafo'>
                            <ul>
                                <li>Sección: <span>{Sección}</span></li>
                                <li>Créditos: <span>{Credito}</span></li>
                                <li>Profesor: <span>{Profesor}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default AsignaturasItem