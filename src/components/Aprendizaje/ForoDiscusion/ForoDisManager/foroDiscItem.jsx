import React, { useEffect, useState } from 'react';
import './ForoDiscItem.css';  // Los estilos de este componente
import Comentario from '../comentario/Comentario';

// Componente principal que maneja los comentarios de un tema de discusión
const ForoDiscItem = ({
  tema,
  comentarios,
  onAgregarComentario,
  onDeleteComentario,
  onEditarComentario,
  onGuardarEdicion,  // Esta función debe estar definida en el componente padre
  comentarioEditado
}) => {
  const [nuevoComentario, setNuevoComentario] = useState('');

  // Efecto para llenar el campo de texto con el comentario editado
  useEffect(() => {
    if (comentarioEditado) {
      setNuevoComentario(comentarioEditado.texto);  // Llenar el campo con el texto editado
    }
  }, [comentarioEditado]);

  const handleInputChange = (event) => {
    setNuevoComentario(event.target.value);
  };

  // Maneja el envío del formulario de comentario
  const handleSubmit = (event) => {
    event.preventDefault();  // Evita que la página se recargue

    if (nuevoComentario.trim()) {
      onAgregarComentario(tema.id, nuevoComentario);
      setNuevoComentario('');
    }
  };

  return (
    <div className="foro-discussion">
      <div className="comentarios-lista">
        {comentarios.length === 0 ? (
          <p>No hay comentarios aún. Sé el primero en comentar.</p>
        ) : (
          comentarios.map((comentario) => (
            <Comentario
              key={comentario.id}
              comentario={comentario}
              onDelete={() => onDeleteComentario(tema.id, comentario.id)}
              onEdit={(id, texto) => onEditarComentario(tema.id, id, texto)}
              onGuardarEdicion={(id, texto) => onGuardarEdicion(tema.id, id, texto)} // Asegúrate de pasar esta prop
            />
          ))
        )}
      </div>

      {/* Formulario para agregar comentario */}
      <form onSubmit={handleSubmit} className="comentario-form">
        <textarea
          value={nuevoComentario}
          onChange={handleInputChange}
          placeholder="Escribe tu comentario..."
          rows="4"
          required
        />

        <button className="button-form">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <span>Publicar Comentario</span>
        </button>
      </form>
    </div>
  );
};

export default ForoDiscItem;