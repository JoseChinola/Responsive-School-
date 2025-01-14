import React, { useState } from 'react'
import data from './data/data';
import AnuncioItem from './AnunciosManager/AnuncioItem';


const Anuncio = () => {
  const [anuncios, setAnuncios] = useState(data);

  // Eliminar un anuncio basado en su id
  const eliminarAnuncio = (id) => {
    setAnuncios(anuncios.filter((anuncio) => anuncio.id !== id));
  };

  // Filtramos solo los anuncios activos
  const anunciosActivos = anuncios.filter((anuncio) => anuncio.activo);

  return (
    <>
      <div className='anuncio-header'>
      </div>
      <div className="anuncios-container">
        {anunciosActivos.length > 0 ? (
          anunciosActivos.map((anuncio) => (
            <AnuncioItem
              key={anuncio.id}
              anuncio={anuncio}
              onClose={() => eliminarAnuncio(anuncio.id)}
            />
          ))
        ) : (
          <p>No hay anuncios activos en este momento.</p>
        )}
      </div>
    </>

  );
};

export default Anuncio;