import React from 'react';
import { ListadoTrabajos } from './ListadoTrabajos';
import { HiOutlineArrowUp } from 'react-icons/hi';

export const Portafolio = () => {
    return (
        <div id='projects' className='page'>


            <h1 className='heading'>Proyectos</h1>
            <h3>Haz click en los proyectos para ver detalles</h3>

            <ListadoTrabajos />

            <HiOutlineArrowUp style={{ marginTop: "50px", width: "50px", height: "35px", color: 'black' }} onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }} />
        </div>
    )
}
