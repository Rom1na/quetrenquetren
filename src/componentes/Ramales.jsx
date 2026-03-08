import React from 'react'
import { useContext } from 'react'
import { TrenesContext } from './TrenesContext'

const Ramales = () => {

  const {handleClickEstaciones,ramales,cabecera,loading}= useContext(TrenesContext);

  return (
    <>

    <h2> Linea {cabecera}</h2>

       
       {loading?(

        <p className='tiempo'>Buscando información</p>

       ):ramales?.length===0 &&<p className='tiempo'>No hay información disponible</p>
       
       }

     {ramales?.map((r)=>(
            <button key={r.id} onClick={()=>handleClickEstaciones(r.id,r.nombre)} className='btnopt'>
              {r.nombre}
            </button>
          ))}


    </>      
  )
}

export default Ramales