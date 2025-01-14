import React, { useState } from 'react';
import './Comentario.css';

const Comentario = ({ comentario, onDelete, onEdit }) => {


  // Estado para manejar si el comentario está en modo edición
  const [isEditing, setIsEditing] = useState(false);
  // Estado para almacenar el texto del comentario mientras se edita
  const [editedText, setEditedText] = useState(comentario.texto);

  // Maneja el cambio en el campo de texto mientras se edita
  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  // Función para guardar el comentario editado
  const handleSaveEdit = () => {
    if (editedText.trim() !== comentario.texto) {
      // Llamamos al callback onEdit para actualizar el comentario
      onEdit(comentario.id, editedText);
    }
    setIsEditing(false); // Salimos del modo de edición
  };


  return (
    <div className="comentario-item">
      <p className="comentario-header">
        <strong className="comentario-autor">{comentario.autor}</strong>
        <span className="comentario-fecha">{comentario.fecha}</span>
      </p>
      
      {/* Mostrar el campo de texto si está en modo edición */}
      {isEditing ? (
        <div className='container-edit'>
          <textarea
            className="comentario-edit-text"
            value={editedText}
            onChange={handleTextChange}
          />


          <div className="container-button-edit">
            <button className="save-button" onClick={handleSaveEdit}>
              <span className="IconContainer">
                <svg viewBox="0 0 384 512" height="0.9em" className="icon">
                  <path
                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                  ></path>
                </svg>
              </span>

              <p className="text">Guardar</p>
            </button>

            <button className="cancel-button" onClick={() => setIsEditing(false)}>
              <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024">
                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
              </svg>

              <span>Back</span>
            </button>
          </div>

        </div>
      ) : (
        <p className="comentario-texto">{comentario.texto}</p>
      )}

      <div className="container-button">
        <button className="delete-button" onClick={onDelete}>
          <svg className="delete-svgIcon" viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
          </svg>
        </button>

        {/* Botón de editar */}
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Editar
          <svg className="svg" viewBox="0 0 512 512">
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Comentario;
