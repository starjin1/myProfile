import React from "react";
import Project_plan from "./project_plan/Project_plan";
import Nav from "../project_component/Nav/project_nav";
import Project_techique from "./project_techique/Project_techique";
import Project_erd from "./project_erd/Project_erd";

function Project_sub02() {
    return (
        <>
        <Project_plan />
        <Nav />
        <Project_techique />
        <Project_erd />
        </>
    )
}

export default Project_sub02;