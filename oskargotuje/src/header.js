import React from 'react';

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <a href={"/"}><img className={"header-logo"} src="/assets/OskarGotujeLogo-01.png" alt="Oskar Gotuje"/></a>
                <nav>
                    <ul className="header-nav">
                        <li className="nav-element"><a href="#przepisy" className="nav-link">przepisy > </a></li>
                        <li className="nav-element"><a href="#" className="nav-link">o mnie > </a></li>
                        <li className="nav-element"><a href="#kontakt" className="nav-link">kontakt > </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header