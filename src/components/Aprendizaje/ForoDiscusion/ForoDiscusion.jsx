import React, { useState } from 'react';
import './ForoDiscusion.css';
import ForoDiscItem from './ForoDisManager/foroDiscItem';
import data from './data/data';
import dataComentario from './data/dataComentario';

const ForoDiscusion = () => {
    // Estado que guarda la lista de temas de discusión
    const [temas, setTemas] = useState(data);
    // Estado para los comentarios de cada tema
    const [comentarios, setComentarios] = useState(dataComentario);
    const [temaSeleccionado, setTemaSeleccionado] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nuevoTema, setNuevoTema] = useState({ titulo: '', descripcion: '', creador: '' });
    const [comentarioEditado, setComentarioEditado] = useState(null);

    // Maneja la selección de un tema
    const handleTemaClick = (tema) => {
        if (temaSeleccionado && temaSeleccionado.id === tema.id) {
            setTemaSeleccionado(null);
        } else {
            setTemaSeleccionado(tema);
        }
    };

    // Maneja el cambio de comentario en un tema específico
    const handleAgregarComentario = (idTema, textoComentario) => {
        const nuevoComentario = {
            id: comentarios[idTema].length + 1, // El id del nuevo comentario
            autor: 'Usuario Anónimo',
            texto: textoComentario,
            fecha: new Date().toLocaleString(),
        };

        // Agregar el nuevo comentario al tema específico
        setComentarios((prevComentarios) => ({
            ...prevComentarios,
            [idTema]: [...prevComentarios[idTema], nuevoComentario],
        }));
    };

    // Agregar un nuevo tema
    const handleAgregarTema = () => {
        if (!nuevoTema.titulo || !nuevoTema.descripcion || !nuevoTema.creador) {
            alert("Por favor ingresa un título y una descripción.");
            return;
        }

        const nuevoId = temas.length > 0 ? Math.max(...temas.map(tema => tema.id)) + 1 : 1;

        const tema = {
            id: nuevoId,
            titulo: nuevoTema.titulo,
            descripcion: nuevoTema.descripcion,
            creador: nuevoTema.creador
        };

        setTemas((prevTemas) => [...prevTemas, tema]);

        // Limpiar los campos después de agregar
        setNuevoTema({ titulo: '', descripcion: '', creador: '' });
        setMostrarFormulario(false); // Cerrar el formulario después de agregar el tema
    };

    // Maneja el cambio de valores en el formulario de nuevo tema
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoTema(prevState => ({ ...prevState, [name]: value }));
    };


    const handleEditarComentario = (idTema, idComentario) => {
        const comentario = comentarios[idTema].find(c => c.id === idComentario);
        setComentarioEditado({ ...comentario, texto: comentario.texto });
    };

    const handleGuardarEdicion = (idTema, idComentario, nuevoTexto) => {
        const comentariosActualizados = comentarios[idTema].map(comentario =>
            comentario.id === idComentario
                ? { ...comentario, texto: nuevoTexto, fecha: new Date().toLocaleString() }
                : comentario
        );

        setComentarios(prevComentarios => ({
            ...prevComentarios,
            [idTema]: comentariosActualizados,
        }));

        setComentarioEditado(null);
    };


    // Elimina un comentario
    const handleEliminarComentario = (idTema, idComentario) => {
        const comentariosActualizados = comentarios[idTema].filter(comentario => comentario.id !== idComentario);

        setComentarios((prevComentarios) => ({
            ...prevComentarios,
            [idTema]: comentariosActualizados
        }));
    };

    return (
        <div className="foro-container">
            <div className='container-titulo'>
                <h2>Foro de Discusión</h2>
            </div>

            {/* Mostrar formulario para crear un nuevo tema */}
            {mostrarFormulario && (
                <div className="formulario-tema">
                    <h1>Mantenimiento Tema de Discusiones</h1>
                    <label htmlFor="">
                        Titulo del Tema
                        <input
                            type="text"
                            name="titulo"
                            value={nuevoTema.titulo}
                            onChange={handleInputChange}
                            placeholder="Título del tema"
                        />
                    </label>
                    <label htmlFor="">
                        Descripción del Tema
                        <textarea
                            name="descripcion"
                            value={nuevoTema.descripcion}
                            onChange={handleInputChange}
                            placeholder="Descripción del tema"
                        />
                    </label>

                    <label htmlFor="">
                        Creador
                        <input
                            type="text"
                            name="creador"
                            value={nuevoTema.creador}
                            onChange={handleInputChange}
                            placeholder="Creador del tema"
                        />
                    </label>


                    <div className="container-button-edit">
                        <button className="save-button" onClick={handleAgregarTema}>
                            <span className="IconContainer">
                                <svg viewBox="0 0 384 512" height="0.9em" className="icon">
                                    <path
                                        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                                    ></path>
                                </svg>
                            </span>

                            <p className="text">Guardar</p>
                        </button>

                        <button className="cancel-button" onClick={() => setMostrarFormulario(false)}>
                            <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="0 0 1024 1024">
                                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                            </svg>

                            <span>Cancelar</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Botón para crear un nuevo tema */}
            <div className="temas-lista">
                <div className='tema-title'>
                    <h3>Temas de Discusión</h3>
                    <button className="Btn-create-disc" onClick={() => setMostrarFormulario(true)}>
                        <div className="sign-create-disc">+</div>
                        <div className="text-create-disc">Crear Discusión</div>
                    </button>
                </div>

                {temas.length === 0 ? (
                    <p>No hay temas de discusión aún.</p>
                ) : (
                    <ul>
                        {temas.map((tema) => (
                            <li key={tema.id} className="tema-item">
                                <h4>{tema.titulo}</h4>
                                <p className='text-descrip'>{tema.descripcion}</p>

                                <button className='button-tema' onClick={() => handleTemaClick(tema)}>
                                    {temaSeleccionado && temaSeleccionado.id === tema.id
                                        ? 'Cerrar'
                                        : 'Entrar al tema'
                                    }

                                    <div className="icon">
                                        <svg
                                            height="24"
                                            width="24"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={temaSeleccionado && temaSeleccionado.id === tema.id ? 'icon-rotated' : ''}
                                        >
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>

                                <h5>Profesor: <span>{tema.creador}</span> </h5>

                                {/* Mostrar comentarios solo si este tema es el seleccionado */}
                                {temaSeleccionado && temaSeleccionado.id === tema.id && (
                                    <div className="comentarios">
                                        <ForoDiscItem
                                            tema={temaSeleccionado}
                                            comentarios={comentarios[temaSeleccionado.id] || []}
                                            onAgregarComentario={handleAgregarComentario}
                                            onDeleteComentario={handleEliminarComentario}
                                            onEditarComentario={handleEditarComentario}
                                            onGuardarEdicion={handleGuardarEdicion}
                                            comentarioEditado={comentarioEditado}

                                        />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ForoDiscusion;
