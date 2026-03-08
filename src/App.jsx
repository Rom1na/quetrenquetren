import { useEffect, useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import URLS from'./utils/urls'
import { formatoGerencias,formatoRamales,formatoEstacionesRamal,formatoArribos } from './utils/funciones'
import Arribos from './componentes/Arribos'
import Ramales from './componentes/Ramales'
import Estaciones from './componentes/Estaciones'
import MisEstaciones from './componentes/MisEstaciones'


import { TrenesContext } from './componentes/TrenesContext'


function App() {

 const{fetchTren,visible,gerencias,handleClickRamales,volver,handleClickMisEstaciones}=useContext(TrenesContext); 



   useEffect(() => {
      fetchTren('g');
    },[]);



  return (
    <>
      <div className='navi'>
      <h1 className='titular'>QueTrenQueTren</h1>
      <div className="card">
      {visible!="gerencias"&&<button style={{marginRight:"10px"}}onClick={()=>volver()}>Volver</button>}
      <button onClick={()=>handleClickMisEstaciones()}>Mis Estaciones</button>
      
      </div>
      </div>  
        <div className="contenedoropciones">

          
        
          {visible === "gerencias" && gerencias?.map((g)=>(
            <button key={g.id} onClick={()=>handleClickRamales(g.id,g.nombre)} className='btnopt'>
              {g.nombre}
            </button>
          ))}
            

          {visible === "ramales" &&<Ramales/>}

           {visible === "estaciones" &&<Estaciones/>}
           {visible === "misestaciones" && <MisEstaciones/>}


           </div>
        
          {visible === "arribos" &&<Arribos/>}

         

         

          

           

           





            <footer className="footer-credits">
            <div className="status-badge">
              <span className="blink-dot"></span> PROYECTO EN DESARROLLO (BETA)
            </div>
            <p>
              Información en tiempo real proporcionada por el <a className='linky' href="https://trenes.sofse.apidocs.ar/">Proyecto de Ariel Aguirre</a>
            </p>
            <p className="legal">
              Desarrollado con fines educativos y de consulta, para uso del público en generaL.
            </p>
             <a className="linky" href="https://rom1na.github.io/portfolio/">Curiosibit 2026</a>

          </footer>
         


    </>
  )
}

export default App
