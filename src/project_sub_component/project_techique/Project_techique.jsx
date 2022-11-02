import React from "react";
import {AiFillCheckSquare} from "react-icons/ai"
import mysql from "../../assets/mysql.png";
import android from "../../assets/android_logo.png";
import "../project_techique/project_techique.css"

const Project_techique = () => {
    return (
        <section id="techique">
            <h5>설계</h5>
            <h2>사용 기술 및 도구</h2>

            <div className="container project_techique_box">
                <div className="project_context_box">

                    <div className="project_context">
                        <ul className="context_ul">
                            <div className="content_icon">
                                <AiFillCheckSquare className="icon"/>
                                <h3>Language</h3>
                            </div>
                            <li className="context_item text-light">JAVA, PHP</li>
                        </ul>
                    </div>

                    <div className="project_context">
                        <ul className="context_ul">
                            <div className="content_icon">
                                <AiFillCheckSquare className="icon"/>
                                <h3>Database</h3>
                            </div>
                            <li className="context_item text-light">Mysql</li>
                        </ul>
                    </div>

                    <div className="project_context">
                        <ul className="context_ul">
                            <div className="content_icon">
                                <AiFillCheckSquare className="icon"/>
                                <h3>APi</h3>
                            </div>
                            <li className="context_item text-light">Google Login , Kakao Map, 혼잡도 api</li>
                        </ul>
                    </div>

                    <div className="project_context">
                        <ul className="context_ul">
                            <div className="content_icon">
                                <AiFillCheckSquare className="icon"/>
                                <h3>Tool</h3>
                            </div>
                            <li className="context_item text-light">Android Studio, Git</li>
                        </ul>
                    </div>
    
                </div>

            <div className="project_img_box">
                <div className="project_img">
                        <img src={mysql} alt="mysql_img"></img>
                    </div>
                    <div className="project_img left_move">
                        <img src={android} alt="mysql_img"></img>
                    </div>
    
                </div>

            </div>
        </section>
    )
}

export default Project_techique;