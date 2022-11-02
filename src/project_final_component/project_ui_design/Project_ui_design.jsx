import React from "react";
import '../project_ui_design/project_ui_design.css';
import load from '../../assets/load.jpg';
import load1 from '../../assets/load1.jpg';

const Project_ui_design = () => {
    return (
        <section id="ui_design">
            <h5>Myway_Project - ui / 개발</h5>
            <h2>ChatBot</h2>
            <div className="container ui_design_box">
                <div className="ui_design_sub_imageBox">
                    <div className="ui_imgae_box">
                        <img src={load1} alt="ui_imaage"/>
                    </div>
                    <div className="ui_imgae_box">
                        <img src={load} alt="ui_imaage"/>
                    </div>
                </div>
                <div className="ui_design_content_box">
                    <div className="content_subBox_ui">
                        <h3>Description</h3>
                        <h5 className="ui_content">
                            경로 탐색 완료 이후 자동으로 길찾기 페이지로 넘어감
                        </h5>
                    </div>

                    <div className="content_subBox_ui">
                        <h3>Check Point</h3>
                        <h5 className="ui_content">
                            길찾기를 도와주는 챗봇 서비스 이용 페이지<br/>
                            구글의 Dialogflow를 이용<br/>
                            자연어처리 기능을 이용하여 사용자가 오타를 내더라도 올바른 요구를 알아들을 수 있는 기능을 제공
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project_ui_design;