import React from "react";
import CartWidget from "../CartWidget";
export const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#"> CoderHouse</a>
                </div>
                    <ul className="nav__list">
                        <li>
                            <a className="nav__link" href="#">Categoria 1</a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">Categoria 2</a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">Categoria 3</a>
                        </li>

                    </ul>
            </nav>
            <CartWidget/>

        </div>
    );
}
export default NavBar