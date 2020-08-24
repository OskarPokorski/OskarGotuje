import React from 'react';

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <a href={"/"}><img className={"header-logo"}src="assets/OskarGotujeLogo-01.png" alt="Oskar Gotuje"/></a>
                <nav>
                    <ul className="header-nav">
                        <li className="nav-element"><a href="#" className="nav-link">przepisy > </a></li>
                        <li className="nav-element"><a href="#" className="nav-link">ulubione > </a></li>
                        <li className="nav-element"><a href="#" className="nav-link">zakupy > </a></li>
                        <li className="nav-element"><a href="#form-title" className="nav-link">kontakt > </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header