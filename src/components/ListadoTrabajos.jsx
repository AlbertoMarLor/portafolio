import React from 'react';
import { trabajos } from '../data/Trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({ limite }) => {
    return (


        <section className='works'>
            {
                trabajos.slice(0, limite).map(trabajo => { //al array de trabajos le hacemos un slice para limitar el total de ellos que aparecen en este componente, y luego un map para que a cada elemento del array se le aplique el siguiente jsx.
                    return (
                        <article key={trabajo.id} className='work-item'>
                            <div className='mask'>
                                <img src={"/images/" + trabajo.id + ".png"} alt="" />
                            </div>
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
