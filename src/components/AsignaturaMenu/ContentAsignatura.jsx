import React, { useState } from 'react'


const ContentAsignatura = () => {
    const [contentVisible, setContentVisible] = useState(false)


    const toggleContent = () => {
        setContentVisible(!contentVisible)
    }


    return (
        <div className='Content-asinatura-container'>

            <div className='card'>
                <div className="prof-teach">
                    <div className="card-body" onClick={toggleContent}>
                        <h3>TECNICAS DE ENTREVISTA</h3>

                        <div className='name-prof'>
                            <span>
                                <p>
                                    El objetivo de esta asignatura es reconocer y aplicar diferentes
                                    modelos de entrevistas en el área de la Psicología ,
                                    pues la entrevista como tal puede ayudar,
                                    limitar o desviar el proceso de intervención ya que tiene
                                    funciones de exploración y diagnóstico en las que se
                                    inician así mismo las funciones terapéuticas.
                                </p>
                            </span>
                        </div>
                    </div>

                    {contentVisible && (
                        <div className="content-content" >

                            <h3>Fecha: 10/01/2025 - Fecha: 15/01/2025</h3>

                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default ContentAsignatura