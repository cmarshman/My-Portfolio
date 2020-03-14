import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar () {
    const location = useLocation();

    return(
        <div className="hero-foot is-dark">
                <nav className="tabs is-boxed is-dark is-fullwidth">
                    <div className="container is-size-4">
                        <ul>
                            <li>
                                <Link to="/" className={location.pathname === "/" ? "is-active" : ""}>About Me</Link>
                            </li>
                            <li>
                                <Link to="/myportfolio" className={location.pathname === "/myportfolio" ? "is-active" : ""}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={location.pathname === "/contact" ? "is-active" : ""}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
}

export default Navbar;

