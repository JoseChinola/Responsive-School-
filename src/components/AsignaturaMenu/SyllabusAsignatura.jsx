import React, { useEffect, useState } from 'react'
import syllabusData from './data/dataSyllabus.json';

const SyllabusAsignatura = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        setData(syllabusData);
    }, []);

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <div className='Syllabus-asinatura-container'>

            {/* subject */}
            <div className='card'>
                <div className="prof-teach">
                    <div className="card-body">
                        <h3>{data.subject.name}</h3>
                        <div className='divider-cont'></div>
                        <div className='name-prof'>
                            <span>
                                <p>{data.subject.description}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* objectives */}
            <div className='card'>
                <div className="prof-teach">
                    <div className="card-body">
                        <h3>Objetivos</h3>
                        <div className='divider-cont'></div>
                        <div className='obj-prof'>
                            <div className='obj-general'>
                                <p>
                                    <span>
                                        GENERALES
                                    </span>
                                </p>

                                <ol>
                                    {data.objectives.general.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ol>
                            </div>


                            <div className='obj-Especifico'>
                                <p>
                                    <span>
                                        ESPECÍFICOS
                                    </span>
                                </p>

                                <ol>
                                    {data.objectives.specific.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* content*/}
            <div className='card'>
                <div className="prof-teach">
                    <div className="card-body">
                        <h3>Contenido de la asignatura</h3>
                        <div className='divider-cont'></div>
                        <div className='obj-contenido'>
                            {data.content.map((topic, index) => (
                                <div key={index} className='obj-general'>
                                    <p><span>{topic.topic}</span></p>
                                    <ol>
                                        {topic.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ol>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* methodology */}
            <div className='card'>
                <div className="prof-teach">
                    <div className="card-body">
                        <h3>Metodología</h3>
                        <div className='divider-cont'></div>
                        <div className='obj-prof'>
                            <div className='obj-general'>
                                <p>
                                    <span>
                                        El método empleado en esta asignatura se corresponde con los objetivos trazados, desarrollándose de la forma Siguiente:
                                    </span>
                                </p>

                                <ul>
                                    {data.methodology.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


            {/* evaluation */}
            <div className='card'>
                <div className="prof-teach">
                    <div className="card-body">
                        <h3>Evaluación</h3>
                        <div className='divider-cont'></div>
                        <div className='obj-prof'>
                            <div className='obj-general'>

                                <ul>
                                    {data.evaluation.map((evaluation, index) => (
                                        <div key={index} className='evaluacion'>
                                            <li>{evaluation.item}</li>
                                            <span>{evaluation.percentage}</span>
                                        </div>
                                    ))}

                                </ul>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


            {/* bibliography */}
            <div className='card'>
                <div className="prof-teach">
                    <div className="card-body">
                        <h3>Bibliografía</h3>
                        <div className='divider-cont'></div>
                        <div className='obj-prof'>
                            <div className='obj-general'>
                                <ul>
                                    {data.bibliography.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SyllabusAsignatura