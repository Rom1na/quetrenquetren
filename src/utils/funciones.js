export const formatoGerencias = (data)=>{
    const gerencias= data.map((gerencia)=>({
        id : gerencia.id,
        nombre: gerencia.nombre

    }))

    return gerencias;
    
}


export const formatoRamales = (data)=>{
    const ramales= data.map((ramal)=>({
        id : ramal.id,
        nombre: ramal.nombre

    }))

    return ramales;
    
}


export const formatoEstacionesRamal = (data)=>{
    const estaciones= data.map((estacion)=>({
        id : estacion.id_estacion,
        nombre: estacion.nombre

    }))

    return estaciones;
    
}

export const formatoArribos = (data)=>{
    const arribos= data.results.map((arr)=>({
        id : arr.servicio.numero,
        id_estacion: arr.arribo.idElemento,
        nombreEstacion : arr.arribo.nombre,
        sentido : arr.servicio.sentido,
        desde : arr.servicio.desde.estacion.nombre,
        hasta : arr.servicio.hasta.estacion.nombre,
        nombre: arr.servicio.ramal.nombre,
        llegadap: arr.arribo.llegada.programada,
        llegadae: arr.arribo.llegada.estimada,
        salidap:  arr.arribo.salida.programada,
        salidae:  arr.arribo.salida.estimada,
        ubi: arr.servicio.location,
        /* lat: arr.servicio.location.lat,
        long: arr.servicio.location.long, */
        //estaciones: results.servicio.estaciones, 

    }))

    return arribos;
    
}