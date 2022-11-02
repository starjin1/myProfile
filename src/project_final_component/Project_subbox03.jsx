import React from "react";
import Nav from "../project_component/Nav/project_nav";
import Project_ui_design from "./project_ui_design/Project_ui_design";
import Project_main_ui from "./project_ui_main/Project_main_ui";
import Project_ui_final from "./project_ui_final/Project_ui_final";

function Project_sub03() {
    return (
        <>
        <Project_main_ui />
        <Project_ui_design/>
        <Project_ui_final />
        <Nav />
        </>
    )
}

export default Project_sub03;