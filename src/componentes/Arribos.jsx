import React, { useState } from 'react'
import { useContext } from 'react'
import { TrenesContext } from './trenesContext'
import MapaModal from './MapaModal'

const Arribos = () => {

   
   const {cabecera,arribos,setArribos,setDatosMapa,datosMapa,cerrarMapa,loading,fetchTren}= useContext(TrenesContext);
   const [filtroVisible,setFiltroVisible] = useState (true);     

  
    

    const calcularMinutos = (fechaISO) => {
    const ahora = new Date();
    const llegada = new Date(fechaISO);
    const diferenciaMs = llegada - ahora;
    const minutos = Math.ceil(diferenciaMs / (1000 * 60));
    return minutos > 0 ? minutos : 0;
       };



   const mapa =(lat,long) =>{

        
        const url = `https://maps.google.com/maps?q=${lat},${long}`;
        const newTab = window.open(url, '_blank');
       

   }

   const handlerTodos =()=>{
        
           fetchTren('a',arribos[0].id_estacion)
          setFiltroVisible(true);
        


   }


   const filtrar = (arribos,sentido) =>{
       
         
     const arribodFiltrado = arribos.filter(item => item.sentido == sentido);
     setArribos(arribodFiltrado);
     setFiltroVisible(false);

   }
   
   
  return (
    <>
         <h2> Linea:{cabecera}</h2>
              
                        
                {arribos?.length>0 &&<div className="filtro">

                        <button onClick={()=>handlerTodos()}>Actualizar</button>

                        {filtroVisible && <div>
                                <p>Filtrar resultados</p>
                        <button style={{margin:"15px"}}onClick={()=>filtrar(arribos,1)}>1</button>
                        <button style={{margin:"15px"}}onClick={()=>filtrar(arribos,2)}>2</button>
                         </div>
                        }

                       
                        
                        </div>}
                      
                {loading ? (
                <div className="tiempo">Buscando información...</div> // O un spinner sutil
                ) : arribos.length > 0 ? (
                <div className="arribos-container">
                        {arribos?.map((tren) => {
                                const min = calcularMinutos(tren.llegadap);
                                return (
                                <div key={tren.id} className="arribo-card">
                                
                                <span className="ramal">Ramal: {tren.nombre}</span>   
                                <span className='sentido'> Estación: {tren.nombreEstacion} </span> 
                                <span className='sentido'> Desde {tren.desde} a {tren.hasta} ({tren.sentido}) </span> 
                                

                                <div className="info">
                                <span className="tren-id">Llegada programada</span>
                                <span className='hora'>
                                {isNaN(new Date(tren.llegadap)) 
                                        ? "---" 
                                        : new Date(tren.llegadap).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>
                                <span className="tren-id">Salida programada</span>                    
                                <span className='hora'>
                                {isNaN(new Date(tren.salidap)) 
                                        ? "---" 
                                        : new Date(tren.salidap).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>               
                                
                                </div>
                        
                                
                                
                                <div className="info">
                                <span className="tren-id">Llegada estimada</span>
                                <span className='hora'>
                                {isNaN(new Date(tren.llegadae)) 
                                        ? "---" 
                                        : new Date(tren.llegadae).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>
                                <span className="tren-id">Salida estimada</span>
                                <span className='hora'>
                                {isNaN(new Date(tren.salidae)) 
                                        ? "---" 
                                        : new Date(tren.salidae).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>               
                                
                                </div>
                                <div className="tiempo"><span className="unidad">en </span>
                                {min}<span className="unidad">min</span>


                                
                                </div>
                                
                                <button className='btn-maps' onClick={()=>setDatosMapa(tren)}>Ver posición real  del tren en mapa</button>  
                                

                                <MapaModal datos={datosMapa} onClose ={cerrarMapa}></MapaModal>   



                                
                                </div>

                                

                                );

                        

                                
                })}
                        </div>
                        

                ) : (
                <div className="tiempo">Información no disponible</div>
                )}











          
          
 

         
        
    
    
    
    </>
  )
}

export default Arribos