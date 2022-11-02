import React from "react";
import "../project_ui_main/project_main.ui.css";
import find_load from "../../assets/find_load.jpg";

const Project_ui_final = () => {
    return (
        <section id="ui_design">
            <h5>Myway_Project - ui / 개발</h5>
            <h2>Main</h2>
            <div className="container ui_design_box main_ui_box">
                <div className="ui_design_sub_imageBox main_box_ui">
                    <div className="ui_imgae_box main_img">
                        <img className="display_none" src={find_load} alt="ui_imaage"/>
                    </div>
                    <div className="ui_imgae_box main_img">
                        <img src={find_load} alt="ui_imaage"/>
                    </div>
                </div>
                <div className="ui_design_content_box">
                <div className="content_subBox_ui">
                        <h3>Description</h3>
                        <ul className="ui_content">
                            <li className="ui_conent_sub">
                                <h5>Home : Main화면으로 이동 <br />
                                Back : 길찾기 화면으로 이동</h5>
                                
                            </li>
                        </ul>
                    </div>
                    <div className="content_subBox_ui">
                        <h3>Check Point</h3>
                        <h5 className="ui_content">
                            혼잡도 api와 챗봇을 이용한 경로 찾기 결과를 확인하는 페이지
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project_ui_final;