import React from 'react'
import { useContext } from 'react'
import { TrenesContext } from './TrenesContext'


const MisEstaciones = () => {

  const {handleClickArribos,traerEstacionesFavoritas,eliminarFavorito}= useContext(TrenesContext);
  const estaciones = traerEstacionesFavoritas();
 
    
  return (

    
    <div className="estaciones-grid">
     {estaciones?.map((e) => (
    <div key={e.id} className="estacion-item">
      {/* Botón principal de la estación */}
      <button onClick={() => handleClickArribos(e.id)} className='btnopt'>
        {e.nombre}
      </button>

      {/* Botón para eliminar de favoritos */}
      <button 
        onClick={() => eliminarFavorito({"id":e.id,"nombre":e.nombre})} 
        className="btn-fav"
        title="Quitar de mis estaciones"
      >
        -
      </button>
    </div>
  ))}
</div>











  )
  
}

export default MisEstaciones