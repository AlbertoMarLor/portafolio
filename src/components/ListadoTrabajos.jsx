import React from 'react';
import { trabajos } from '../data/Trabajos';
import { Link } from 'react-router-dom';



export const ListadoTrabajos = ({ limite }) => {
    return (


        <section className='works'>
            {
                trabajos.slice(0, limite).map(trabajo => {
                    return (
                        <article key={trabajo.id} className='work-item'>
                            <Link to={"/proyecto/" + trabajo.id}>
                                <div className='mask'>
                                    <img src={`/images/${trabajo.id}1.png`} alt="" />
                                </div>
                            </Link>
                            <span>{trabajo.categorias}</span>
                            <h2> <Link to={"/proyecto/" + trabajo.id}> {trabajo.nombre}</Link> </h2>
                            <h3>{trabajo.tecnologias}</h3>

                        </article>
                    );

                })
            }

        </section>



    )
}
