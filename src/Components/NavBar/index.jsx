import React from "react";
import {NavLink} from 'react-router-dom'
import CartWidget from "../CartWidget";
export const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <NavLink className="nav__link" to='/'> CoderHouse</NavLink>
                </div>
                    <ul className="nav__list">
                        <li>
                            <NavLink className="nav__link" to='/categoria/peliculas'>Peliculas</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to='/categoria/series'>Series</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav__link" to='/cart'>Carrito</NavLink>
                        </li>

                    </ul>
            </nav>
            <CartWidget/>

        </div>
    );
}
export default NavBar