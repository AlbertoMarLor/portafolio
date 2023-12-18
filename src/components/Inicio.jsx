import React from 'react'
import { Link } from 'react-router-dom'
import { CarruselTrabajos } from './CarruselTrabajos'

export const Inicio = () => {
    return (
        <div className='home'>

            <h1 >
                <strong>Alberto Martín </strong>- Desarrollador <strong>Web.</strong> Ofrezco mis servicios de <strong>programación </strong> y desarrollo en todo tipo de proyectos web.
            </h1>
            <h2 className='title'>Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo</Link> </h2>

            <section className='lasts-works'>
                <h2 className='heading'>Mis proyectos</h2>
                <p>Estos son mis trabajos de desarrollo web.</p>

                <CarruselTrabajos />
            </section>

        </div>
    )
}
