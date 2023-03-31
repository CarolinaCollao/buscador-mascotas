import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div> 
                <div>LOGO</div>
            <div>
                <NavLink to='/'>Home </NavLink>
                <NavLink to='/reportes'>Reportes </NavLink>
                <NavLink to='/publicar'>Publicar </NavLink>
                <NavLink to='/perfil'>Perfil </NavLink>
            </div>
            </div>
        </nav>
    )
}

export default Navbar