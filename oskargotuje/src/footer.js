import React from 'react';


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <img className={"footer-logo"}src="/assets/OskarGotujeLogo-01.png" alt="Oskar Gotuje"/>
                <nav>
                    <ul className="footer-icons">
                        <a href={"https://www.instagram.com/oskargotuje/"}>
                            <img className={"instagram"} src="/assets/Instagram.png" alt="instagram"/>
                        </a>
                        <a href={"https://www.facebook.com/Oskar-Gotuje-997015737070074"}>
                            <img className={"facebook"}src="/assets/Facebook.png" alt="facebook"/>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    )

}
export default Footer