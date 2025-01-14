import { useState, useMemo } from 'react';
import RecursosDigitalItem from './RecursosDigitalItem';
import dataGrpup from '../data/dataGrpup';
import dbInfoData from '../data/dbInfo';
import './GroupRecursos.css'
import '../RecursosDigitales.css'
import BaseDeDatosInfo from './BaseDeDatosInfo';


const GroupRecursos = () => {
    const [recursosGroup, setRecursosGroup] = useState(dataGrpup);
    const [dbInfo, setDbInfo] = useState(dbInfoData);

    const handleDelete = (id) => {
        setRecursosGroup(recursosGroup.filter((recurso) => recurso.id !== id));
    };

    const handlesubmit = (id) => {
        console.log("Formulario enviado, ID:", id);
    };

    // Agrupar los recursos por carrera, memoizado para evitar agrupamientos innecesarios en cada renderizado
    const groupedByCarrera = useMemo(() => {
        return recursosGroup.reduce((acc, curr) => {
            if (!acc[curr.carrera]) {
                acc[curr.carrera] = [];
            }
            acc[curr.carrera].push(curr);
            return acc;
        }, {});
    }, [recursosGroup]);

    return (
        <>
            <div className='recursos-container'>
                <div className="header-recursos-group">
                    <p>
                        Breve descipción del del recuro BASE DE DATOS.
                    </p>

                    <label htmlFor="">
                        La literatura científica se encuentra en constante evolución;
                        miles y miles de investigadores en cada rincón del mundo producen
                        cada día un informe o dictan una conferencia que permite construir
                        nuevos pilares en el desarrollo del conocimiento de la humanidad.
                        Todo este material esparcido entre millones de revistas especializadas
                        o divulgativas no siempre es alcanzable o manejable para el usuario común.
                        Surgen así los proveedores de Bases de Datos:
                        compañías reconocidas por su seriedad y confiabilidad entre la comunidad
                        científica y universitaria, que recopilan día tras día toda esta información,
                        poniéndola al servicio de los académicos.
                    </label>

                    {dbInfo.map((db) => (
                        <BaseDeDatosInfo
                            key={db.id}
                            imagen={db.imagen}
                            nombre={db.nombre}
                            descripcion={db.descripcion}
                            link={db.link}
                        />
                    ))}
                    <hr />
                </div>

                <div className="recursos-container-group">
                    {/* Mapeamos los grupos de materias */}
                    {Object.keys(groupedByCarrera).map((carrera, index) => (
                        <>
                            <div key={carrera} className="materia-group">
                                <h2>{carrera}</h2>
                                <div className="RecursosDgitales-vista">
                                    {groupedByCarrera[carrera].map((recurso) => (
                                        <RecursosDigitalItem
                                            key={recurso.id}
                                            recursosDigital={recurso}
                                            onDelete={() => handleDelete(recurso.id)}
                                            onOpen={() => handlesubmit(recurso.id)}
                                        />
                                    ))}

                                </div>
                            </div>
                            <hr />
                        </>
                    ))}

                </div>
            </div>
        </>
    );
};

export default GroupRecursos;
