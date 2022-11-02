import React from "react";
import erd from "../../assets/database.png";
import '../project_erd/project_erd.css';

const Project_erd = () => {
    return (
        <section id="erd">
            <h5>설계</h5>
            <h2>ERD</h2>

            <div className="container project_erd_box">
                <div className="project_erd_img">
                    <img src={erd} alt="erd_img"></img>
                </div>
            </div>
        </section>
    )
}

export default Project_erd;