import React from 'react'

const RecursosDigitalItem = ({ recursosDigital, onDelete, onOpen }) => {
    const { imagen, recursotitle, link } = recursosDigital;

    return (
        <>
            <div className='recursosD' >
                <div className="card">
                    <div className='body-recursos'>
                        <div className='img-recurso'>
                            <img src={imagen} alt={recursotitle} />
                        </div>
                    </div>
                    <div className='title-recursos'>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <span>{recursotitle}</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div >
        </>
    )
}

export default RecursosDigitalItem