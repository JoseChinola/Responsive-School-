import React from 'react'

const BaseDeDatosInfo = ({ imagen, nombre, descripcion, link }) => {
    console.log(link)

    return (
        <div className="card">
            <div className="body-recursos-group">
                <div className="img-recurso">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={imagen} alt={nombre} />
                    </a>

                </div>

                <div className="title-recursos-group">
                    <h6>{nombre}</h6>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default BaseDeDatosInfo