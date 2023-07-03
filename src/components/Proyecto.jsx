import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/Trabajos'

export const Proyecto = () => {


    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id); //filtra del array de proyectos aquel que coincide con el id del params
        setProyecto(proyecto[0])//selecciona el elemento en la primera posicion del array proyecto


    }, []);





    return (
        <div>
            <div className='page page-work'>
                <div className='mask'>
                    <img src={"/images/" + proyecto.id + ".png"} alt="" />
                </div>
                <h1 className='heading'>{proyecto.nombre}</h1>
                <p>{proyecto.tecnologias}</p>
                <p>{proyecto.descripcion}</p>
                <a href={"https://" + proyecto.url} target='_blank'>Ir al proyecto</a>


            </div></div>
    )
}
