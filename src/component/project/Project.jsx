import React from "react";
import '../project/project.css';
import Main_img from '../../assets/mainlogo.png';
import {Routes,Route,Link} from "react-router-dom";



const Project = () => {
    return (
        <section id="Project">
            <h5>My Recent Work</h5>
            <h2>Project</h2>
            <div className="project__container">
                
                <article className="project__article">
                <h3>Myway Project</h3>
                    <div className="project_mainImge">
                        <img className="project_img" src={Main_img} alt="Main_logo" />
                    </div>
                        <a href="https://github.com/sally001020/Myway" className="btn" target='_blank'>Github</a>
                        <Link to="/project_sub" className="btn btn-primary">More Than</Link>
                </article>
            </div>            
        </section>
    )
}

export default Project;