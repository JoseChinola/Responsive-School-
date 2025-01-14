import React from 'react'
import './AsignaturaMenu.css'

const HomeAsignatura = () => {
    return (
        <div className='home-asinatura-container'>
            <div className='card'>
                <div className="prof-teach">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh0zffgMWD9e2UUvLQWSk5urKCjPNl2BP2g&s" alt="icon" />
                    <div className="card-body">
                        <div className='name-prof'>
                            <h3>Nombre</h3>
                            <span>
                                <h4>
                                    YESENIA ALTAGRACIA CHAVES RODRIGUEZ
                                </h4>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className='card'>
                <div className='prof-materia'>
                    <h3 className="title">
                        {"Bienvenida de la asignatura"}
                    </h3>
                    <h3 className="title">
                        {"[403331 ] MODIFICACION DE LA CONDUCTA I"}
                    </h3>


                    <div class="card-body">

                        <h3>Buenas noches, jóvenes.</h3>

                        <p>
                            Soy el profesor [Nombre del Profesor].
                            Les pido que, por favor, vayan creando los grupos de WhatsApp para el curso.
                            Este es mi número de contacto: [Número del Profesor].
                            Les agradecería si me agregan como administrador de los grupos.
                            <br />
                            <br />
                            Quedo atento a cualquier duda. ¡Nos vemos en clase!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeAsignatura