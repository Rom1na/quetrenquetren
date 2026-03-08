import React from 'react'
import { useContext } from 'react'
import { TrenesContext } from './TrenesContext'

const Estaciones = () => {

  const {estaciones,handleClickArribos,ramal,agregarFavorito}= useContext(TrenesContext);
  


  return (

    <>
    <h2>Ramal: {ramal}</h2>



    <div className="estaciones-grid">
  {estaciones?.map((e) => (
    <div key={e.id} className="estacion-item">
      {/* Botón principal de la estación */}
      <button onClick={() => handleClickArribos(e.id)} className='btnopt'>
        {e.nombre}
      </button>

      {/* Botón para agregar a favoritos */}
      <button 
        onClick={() => agregarFavorito({"id":e.id,"nombre":e.nombre})} 
        className="btn-fav"
        title="Agregar a mis estaciones"
      >
        +
      </button>
    </div>
  ))}
</div>






{/* 
     {estaciones?.map((e)=>(
            <button key={e.id} onClick={()=>handleClickArribos(e.id)} className='btnopt'>
              {e.nombre}
            </button>
          ))}
 */}

    </>      
  )
}

export default Estaciones