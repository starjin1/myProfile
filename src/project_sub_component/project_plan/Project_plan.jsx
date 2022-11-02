import React from "react";
import diagram from "../../assets/diagram.png";
import "../project_plan/project_plan.css"

const Project_plan = () => {
    return (
        <section id="line">
            <h5>Myway_Project - 설계</h5>
            <h2>기능구조</h2>
            <div className="container project_plan_box">
                <h3>Use Case Diagram</h3>
                <div className="plan_structure_img">
                    <img src={diagram} alt="structure_img"/>
                </div>

            </div>
        </section>
    


    )
}

export default Project_plan;