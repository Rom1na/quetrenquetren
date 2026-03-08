import { createContext,useState,useEffect} from "react";
import { formatoGerencias,formatoArribos,formatoEstacionesRamal,formatoRamales} from "../utils/funciones";
import URLS from '../utils/urls.json'

export const TrenesContext = createContext();

export const TrenesProvider =({children}) =>{

  const [gerencias, setGerencias] = useState();
  const [ramales, setRamales] = useState();
  const [estaciones, setEstaciones] = useState([]);
  const [arribos, setArribos] = useState([]);
  const [estacion, setEstacion] = useState();
  const [cabecera,setCabecera] = useState([]);
  const [ramal,setRamal] = useState();
  const [visible,setVisible] = useState("gerencias");
  const [datosMapa, setDatosMapa] = useState(null);
  const [loading,setLoading] = useState(true);
  const [favoritos,setFavoritos] =useState([]);
 
 
  const cerrarMapa = () => {
    setVisible('arribos');
    setDatosMapa(null)}





  const fetchTren = async (opcion,p) => {

   

   switch(opcion){
    case 'g':
       URL = URLS.Gerencias;
    break;
    case 'er':
       URL = URLS.EstacionesRamal+p;
    break;
    case 'en':
       URL = URLS.EstacionNom;
    break;
    case 'r':
       URL = URLS.Ramales+p;
    break;  
     case 'a':
       URL = URLS.Arribos+p;
    break;  
   }

  
  setLoading(true) 
  
  try {

    
    
    const response = await fetch(URL);
    const rawJson = await response.json();
  
   
    switch (opcion){
       case 'g':
       const g= formatoGerencias(rawJson) 
       setGerencias(g);
       break;
       case 'er':
       const er= formatoEstacionesRamal(rawJson) 
       setEstaciones(er);
       break;
       case 'en':
       const en= formatoEstacionesNombre(rawJson) 
       setEstacion(en);
       break;
       case 'r':
       const r= formatoRamales(rawJson) 
       setRamales(r);
       break;
       case 'a':
       const a= formatoArribos(rawJson) 
       setArribos(a);
       break;
      }

     
    
  } catch (error) {
    console.error("Error en el túnel:", error);
  } finally {
    console.log('Finalizado');
    setLoading(false);
  }
};

   



  const handleClickRamales=(param,cab)=>{
     setCabecera(cab);
     setVisible('ramales')
     fetchTren('r',param);
     setGerencias([]);
  }  


  const handleClickEstaciones=(param,ramal)=>{

    

     setRamal(ramal);
     setVisible('estaciones');
     fetchTren('er',param);
     setRamales([]);
  }  


   const handleClickArribos=(param)=>{

     
     setVisible('arribos');
     fetchTren('a',param);
     setEstaciones([]);
    
  };


 




   const handleClickMisEstaciones=()=>{
      setVisible('misestaciones');
      setCabecera('Mis Estaciones')
     
   }
  





  
   

   const volver =()=>{
      
      setVisible('gerencias');
      fetchTren('g');

   }

    const agregarFavorito = (estacion)=>{


    setFavoritos((prev) => {

     
    if (prev.find(fav => fav.id === estacion.id)) return prev;
    
    const nuevosFavoritos = [...prev, estacion];
    localStorage.setItem('mis_estaciones', JSON.stringify(nuevosFavoritos));
   
    return nuevosFavoritos;
    })
    alert(`Estación ${estacion.nombre} fue agregada exitosamente `) 
   
    };



    const eliminarFavorito = (estacion)=>{

      const e = localStorage.getItem("mis_estaciones");
      const est = JSON.parse(e);
      const nuevosFavoritos = est.filter(est => est.id != estacion.id)
      localStorage.setItem('mis_estaciones', JSON.stringify(nuevosFavoritos));
      setFavoritos(nuevosFavoritos);

   
      alert(`Estación ${estacion.nombre} ya no está en tus Estaciones`)
      return estacion;
   };






    const  traerEstacionesFavoritas=()=>{

            const e = localStorage.getItem("mis_estaciones");
            const estaciones = JSON.parse(e);
            return estaciones;
    };







       return(


        <TrenesContext.Provider value={{
            gerencias,setGerencias,
            ramal, setRamal,
            ramales,setRamales,
            estacion,setEstacion,
            estaciones,setEstaciones,
            arribos,setArribos,
            cabecera,setCabecera,
            visible,setVisible,
            datosMapa,setDatosMapa,
            loading,setLoading,
            volver,
            cerrarMapa,
            agregarFavorito,
            eliminarFavorito,
            traerEstacionesFavoritas,
            fetchTren,
            handleClickArribos,
            handleClickEstaciones,
            handleClickRamales,
            handleClickMisEstaciones,







        }}>
          {children}  


        </TrenesContext.Provider>

       );









};
