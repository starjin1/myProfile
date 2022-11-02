import React from "react";
import {AiOutlineHome} from "react-icons/ai"
import {BiUser} from "react-icons/bi"
import {GrBook} from "react-icons/gr"
import {GiMuscleUp} from "react-icons/gi"
import {AiOutlineProject} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"
import '../nav/nav.css'
import { useState } from "react";

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav className="nav">
            <a href="myProfile/#" onClick = {() => setActiveNav('myProfile/#')} className={activeNav === 'myProfile/#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="myProfile/#About" onClick={() => setActiveNav('myProfile/#About')} className={activeNav === 'myProfile/#About' ? 'active' : ''}><BiUser /></a>
            {/* <a href="#Experiance" onClick={() => setActiveNav('#Experiance')} className={activeNav === '#Experiance' ? 'active' : ''}><GrBook /></a> */}
            <a href="myProfile/#Skills" onClick={() => setActiveNav('myProfile/#Skills')} className={activeNav === 'myProfile/#Skills' ? 'active' : ''}><GiMuscleUp /></a>
            <a href="myProfile/#Project" onClick={() => setActiveNav('myProfile/#Project')} className={activeNav === 'myProfile/#Project' ? 'active' : ''} ><AiOutlineProject /></a>
            <a href="myProfile/#Contact" onClick={() => setActiveNav('myProfile/#Contact')} className={activeNav === 'myProfile/#Contact' ? 'active' : ''}><BsFillTelephoneFill /></a>
        </nav>
    )
}

export default Nav;