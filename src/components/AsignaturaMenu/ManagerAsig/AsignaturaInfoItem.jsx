import React from 'react'

const AsignaturaInfoItem = () => {

    return (
        <div className='asignatura'>
            <div className="card">
                <div>
                    <h3 className="title">
                        {"Name"}
                        <span>
                            {"materia"}
                        </span>
                    </h3>
                </div>

                <div>

                </div>

                <div className="info-bx">
                    <div className='parrafo'>
                        <ul>
                            <li>Sección: <span>{"Sección"}</span></li>
                            <li>Créditos: <span>{"Credito"}</span></li>
                            <li>Profesor: <span>{"Profesor"}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsignaturaInfoItem