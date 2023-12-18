import React from 'react'
import { trabajos } from '../data/Trabajos';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';


export const CarruselTrabajos = () => {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1
        }
    };



    return (


        <Carousel responsive={responsive} infinite={true} >

            {trabajos.map(trabajo => {

                return (
                    <Link className='carousel link' to={"/proyecto/" + trabajo.id} >
                        <div key={trabajo.id}>
                            <img className='carousel img' src={`/images/${trabajo.id}1.png`} alt={trabajo.nombre} />
                            <h2 >{trabajo.nombre}</h2>
                            <h3 className='carousel h3'>{trabajo.tecnologias}</h3>
                        </div>
                    </Link>
                )

            })}

        </Carousel>

    )


}
