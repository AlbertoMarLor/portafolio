import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


export const HeaderNav = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [burguerMovement, setBurguerMovement] = useState(false);

    return (
        <header className='header'>
            <Link to={"/inicio"} style={{ textDecoration: "none", color: "black" }} >
                <div className="logo">

                    <span>A</span>
                    <h3>Alberto Martín Lorencés</h3>
                </div>
            </Link>
            <nav>
                <div className="menu" onClick={() => {
                    setMenuOpen(!menuOpen);
                    setBurguerMovement(!burguerMovement)
                }}>
                    <span className={burguerMovement ? "change1" : "span1"}></span>
                    <span className={burguerMovement ? "change2" : "span2"}></span>
                    <span className={burguerMovement ? "change3" : "span3"}></span>
                </div>

                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio" className={({ isActive }) => isActive ? "active" : ""}>Proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" className={({ isActive }) => isActive ? "active" : ""}>Tecnologías</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active" : ""}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
