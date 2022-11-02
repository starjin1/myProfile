import React from "react";
import main_ui from "../../assets/main_ui.jpg";
import {AiTwotoneCalendar} from "react-icons/ai";
import {AiFillPlusCircle} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import "../project_ui_main/project_main.ui.css";

const Project_main_ui = () => {
    return (
        <section id="ui_design">
            <h5>Myway_Project - ui / 개발</h5>
            <h2>Main</h2>
            <div className="container ui_design_box main_ui_box">
                <div className="ui_design_sub_imageBox main_box_ui">
                    <div className="ui_imgae_box main_img">
                        <img className="display_none" src={main_ui} alt="ui_imaage"/>
                    </div>
                    <div className="ui_imgae_box main_img">
                        <img className="display" src={main_ui} alt="ui_imaage"/>
                    </div>
                </div>
                <div className="ui_design_content_box">
                <div className="content_subBox_ui">
                        <h3>Description</h3>
                        <ul className="ui_content">
                            <li className="ui_conent_sub">
                                <p className="ui_icons"><AiFillPlusCircle/></p>
                                <h5>현재 위치 + 카테고리 기능이 있는 지도 페이지로 이동 </h5>
                            </li>

                            <li className="ui_conent_sub">
                                <p className="ui_icons"><AiTwotoneCalendar/></p>
                                <h5>일정 관리 페이지로 이동 </h5>
                            </li>

                            <li className="ui_conent_sub">
                                <p className="ui_icons"><FaUserCircle/></p>
                                <h5> 로그인 페이지로 이동 <br/>(회원가입을 했을 시 회원정보 페이지로 이동)</h5>
                              
                            </li>
                        </ul>
                    </div>
                    <div className="content_subBox_ui">
                        <h3>Check Point</h3>
                        <h5 className="ui_content">
                            전체적인 서비스를 한눈에 볼 수 있는 메인페이지<br/>
                            (해당 버튼을 클릭하면 해당 페이지로 이동 )<br/>
                            현재위치를 알 수 있는 서브지도를 main 배치
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project_main_ui;