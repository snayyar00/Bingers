import React, { useState, useEffect } from 'react';
import "./Nav.css";
import logo from './images/logo.png'

function Nav() {
    const [show, handleshow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true)
            } else handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src={logo}
                alt="Bingers Logo"
            />
            <img
                className="nav_avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Bingers User Logo"
            />
        </div>
    )
}

export default Nav