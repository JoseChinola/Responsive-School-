import React, { useState } from 'react'
import data from './data/data'
import AsignacionItem from './AsignacionManager/AsignacionItem'
import './Asignacion.css'


const Asignacion = () => {
    const [asignacion, setAsignacion] = useState(data)

    const handleDelete = (id) => {
        setAsignacion(asignacion.filter((asignar) => asignar.id !== id))
    }

    const handlesubmit = (id) => {
        console.log("Formulario enviado, ID:", id);
    }


    // Agrupar las asignaciones por materia
    const groupedByMateria = asignacion.reduce((acc, curr) => {
        if (!acc[curr.materia]) {
            acc[curr.materia] = [];
        }
        acc[curr.materia].push(curr);
        return acc;
    }, {});

    return (
        <>
            <div className='header-asignacion'>
                <h1>Asignaciones</h1>
            </div>

            <div className="asignacion-container">
                {/* Mapeamos los grupos de materias */}
                {Object.keys(groupedByMateria).map((materia) => (
                    <div key={materia} className="materia-group">
                        <h2>{materia}</h2> {/* Título de la materia */}
                        <div className="asignaciones">
                            {/* Mapeamos las asignaciones de esa materia */}
                            {groupedByMateria[materia].map((asign) => (
                                <AsignacionItem
                                    key={asign.id}
                                    asignaciones={asign}
                                    onOpen={() => handlesubmit(asign.id)}
                                    onDelete={() => handleDelete(asign.id)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Asignacion