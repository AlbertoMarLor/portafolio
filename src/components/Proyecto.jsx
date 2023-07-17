import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { trabajos } from '../data/Trabajos'
import { HiOutlineArrowLeft, HiOutlineArrowUp } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'


export const Proyecto = () => {


    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0])


    }, []);

    return (
        <div>
            <div className='page page-work'>

                <Link to={'/portafolio'}> <HiOutlineArrowLeft style={{ width: "50px", height: "50px", color: 'black' }} /></Link>
                <div style={{ marginBottom: "30px" }}>
                    <h1 className='heading'>{proyecto.nombre}</h1>
                    <div style={{ marginTop: "20px" }}>
                        <strong >{proyecto.tecnologias}</strong>
                    </div>
                    <p>{proyecto.descripcion}</p>
                    <a href={"https://" + proyecto.url} target='_blank'><SiGithub style={{ width: "50px", height: "50px", color: 'black' }} /></a>
                </div>
                <div className="projects">
                    <div className='mask'>
                        <img className='oneProject' src={`/images/${proyecto.id}1.png`} alt="" />
                    </div>
                    <div className='mask'>
                        <img className='oneProject' src={`/images/${proyecto.id}2.png`} alt="" />
                    </div>
                    <div className='mask'>
                        <img className='oneProject' src={`/images/${proyecto.id}3.png`} alt="" />
                    </div>
                </div>
            </div>

            <HiOutlineArrowUp style={{ marginTop: "50px", width: "50px", height: "35px", color: 'black' }} onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }} />
        </div>

    )
}
