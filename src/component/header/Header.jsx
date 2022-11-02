import React from "react";
import CTA from "./CTA";
import my_image from '../../assets/me.jpg'
import HeaderSocials from "./HeaderSocials";
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Jo Eun Chae</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img className="me_img" src={my_image} alt="profile" />
                </div>

                <a href="myProfile/#Contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;