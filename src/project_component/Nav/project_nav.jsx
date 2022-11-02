import { useState } from "react"
import {AiOutlineHome} from "react-icons/ai"
import {Link} from "react-router-dom"
import '../Nav/project_nav.css'

const Project_nav = () => {
    const [activeProNav, SetactiveProNav] = useState("/project_sub");
    return (
        <nav>
            <Link className='a_link link_icon' to="/"><AiOutlineHome /></Link>
            <Link to={"/project_sub"} className='a_link'>개요</Link>
            <Link to={"/project_sub02"} className='a_link' >설계</Link>
            <Link to={"/project_sub03"} className='a_link' >UI/개발</Link>  
        </nav>

    )
}

export default Project_nav;