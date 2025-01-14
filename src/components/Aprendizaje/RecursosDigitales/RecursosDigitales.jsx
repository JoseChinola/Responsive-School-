import React, { useState } from 'react'
import RecursosDigitalItem from './RecursoDManager/RecursosDigitalItem'
import data from './data/data'
import './RecursosDigitales.css'


const RecursosDigitales = () => {
    const [recursosDigital, setRecursosDigital] = useState(data)

    const handleDelete = (id) => {
        setRecursosDigital(recursosDigital.filter((recurso) => recurso.id !== id))
    }

    const handlesubmit = (id) => {
        console.log("Formulario enviado, ID:", id);
    }

    return (
        <>
            <div className="recursos-container">
                <div className='RecursosDgitales-header'>
                    <h2>Recursos digitales disponibles en la O&Mas.</h2>
                    <div className="card">
                        <div className='body-recursos'>
                            <h2>Departamento de Monográfico</h2>
                            <p>
                                Trabajos de estudiantes de término de la Universidad
                                entregados al Departamento de Monográfico.
                            </p>

                            <button className='but-recurso-ver'>
                                <span>Ver documentos</span>
                            </button>
                        </div>

                    </div>
                </div>

                
                <div className='RecursosDgitales-vista-grid'>
                    <div className='RecursosDgitales-vista'>
                        {recursosDigital.map((recurso) => (
                            <RecursosDigitalItem
                                key={recurso.id}
                                recursosDigital={recurso}
                                onDelete={() => handleDelete(recurso.id)}
                                onOpen={() => handlesubmit(recurso.id)}
                            />
                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}

export default RecursosDigitales