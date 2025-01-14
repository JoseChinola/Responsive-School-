import React from 'react';
import TableRow from '../CardItem/TableRow';

const SubjectsTable = () => {
    const subjects = [
        { number: 1, code: '601101', name: '90 HORAS DE INGLES', credit: 0, professor: 'JAIME MIGUEL MATEO VILLANUEVA', schedule: 'SABADO EDIFICIO I AULA 1401', description: 'Esta asignatura será impartida bajo la nueva modalidad híbrida (MH-O&M)', isVirtual: false },
        { number: 2, code: '504480', name: 'ROBOTICA', credit: 4, professor: 'JUAN MATA PIMENTEL', schedule: 'MIERCOLES EDIFICIO I AULA 1407', description: 'Esta asignatura será impartida bajo la nueva modalidad híbrida (MH-O&M)', isVirtual: false },
        { number: 3, code: '506456', name: 'GESTION DEL RIESGO', credit: 3, professor: 'Elison Perez Martinez', schedule: 'MARTES EDIFICIO I AULA 1401', description: 'Esta asignatura será impartida bajo la nueva modalidad híbrida (MH-O&M)', isVirtual: false },
        { number: 4, code: '506657', name: 'ARQUITECTURA Y DISEÑO DE SEGURIDAD', credit: 3, professor: 'Elison Perez Martinez', schedule: 'JUEVES EDIFICIO I AULA 1401', description: 'Esta asignatura será impartida bajo la nueva modalidad híbrida (MH-O&M)', isVirtual: false },
        { number: 5, code: '506416', name: 'DISEÑO DE REDES', credit: 4, professor: 'RAMON GONZALEZ CLASSE', schedule: 'LUNES EDIFICIO I AULA 1401', description: 'Esta asignatura será impartida bajo la nueva modalidad híbrida (MH-O&M)', isVirtual: false },
        { number: 6, code: '701345', name: 'REDACCION E INFORMES', credit: 3, professor: 'SOL TERESA MOSQUEA JOAQUIN', schedule: 'VIERNES', description: 'Esta asignatura será impartida 100% online a través de la plataforma', isVirtual: true },
        { number: 7, code: '504999', name: 'PASANTIA', credit: 4, professor: 'CARLOS ZORRILLA GUZMAN', schedule: 'JUEVES / MARTES', description: 'Esta asignatura será impartida 100% online a través de la plataforma', isVirtual: true },
    ];

    return (
        <div className='item7'>
            <div className='table-content'>
                <div className='card-table'>
                    <br />
                    <div className="card-body">
                        <div className="content-title">
                            <div>
                                <h4 className='card-title'>
                                    Asignaturas periodo académico
                                    SEPTIEMBRE/DICIEMBRE 2024
                                </h4>
                            </div>
                            <div>
                                
                            </div>
                        </div>

                        <p>Lista de asignaturas.</p>

                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Código</th>
                                        <th>Asignatura</th>
                                        <th>Crédito</th>
                                        <th>Profesor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjects.map((subject, index) => (
                                        <TableRow
                                            key={index}
                                            number={subject.number}
                                            code={subject.code}
                                            name={subject.name}
                                            credit={subject.credit}
                                            professor={subject.professor}
                                            schedule={subject.schedule}
                                            description={subject.description}
                                            isVirtual={subject.isVirtual}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SubjectsTable;
