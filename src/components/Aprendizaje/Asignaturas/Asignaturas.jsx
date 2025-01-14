import { useState } from 'react';
import './Asignaturas.css';
import data from './data/data';  // Asegúrate de que 'data' tenga la información correcta
import AsignaturasItem from './AsignaturasManager/AsignaturasItem';

const Asignaturas = () => {
    const [asignatura, setAsignatura] = useState(data); // El estado que guarda todas las asignaturas activas

    // Eliminar asignación
    const eliminarAsignacion = (id) => {
        setAsignatura(asignatura.filter((asignacion) => asignacion.id !== id));
    };

    // Filtrar las asignaturas activas
    const asignaturasActivas = asignatura.filter((asignatura) => asignatura.activo);


    return (
        <>
            <div className='header-asignaturas'>
                <h1>Asignaturas periodo SEPTIEMBRE/DICIEMBRE 2024/3</h1>
            </div>

            <div className='container-asignaturas'>
                {asignaturasActivas.length > 0 ? (
                    asignaturasActivas.map((asignatura) => (
                        <AsignaturasItem
                            key={asignatura.id}
                            asignaciones={asignatura}
                        />
                    ))
                ) : (
                    <p>No hay materias en este momento.</p>
                )}
            </div>
        </>
    );
};

export default Asignaturas;
