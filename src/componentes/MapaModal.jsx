import React from 'react'
import { useContext } from 'react'
import { TrenesContext } from './trenesContext'



 const MapaModal = ({ datos, onClose }) => {

   const {setVisible} = useContext(TrenesContext); 
  

  if (!datos) return null; // Si no hay datos, no renderiza nada

 
  const lat = datos.ubi?.lat;
  const long = datos.ubi?.long;
  
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>Cerrar ventana</button>
        
      
        <div className="map-container">
         {lat && long ?(
            <iframe
              title="mapa-tren"
              width="100%"
              height="100%"
              src={`https://maps.google.com/maps?q=${datos.ubi.lat},${datos.ubi.long}&z=15&output=embed`}
            />
          ) : (
            <div className="error-gps-mensaje">
              <p>🛰️ Posición no disponible</p>
              <small>Este tren no está reportando GPS actualmente.</small>
            </div>
          )};
        </div>
        
        
        <div className="modal-footer">
         {lat && long &&<a 
            href={`https://www.google.com/maps?q=${datos.ubi.lat},${datos.ubi.long}`} 
            target="_blank" 
            rel="noreferrer"
            className="external-link"
          >
            Abrir en Google Maps ↗
          </a>}
        </div>
      </div>
    </div>
  );
};


export default MapaModal