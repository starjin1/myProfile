import React from "react";
import './line.css';
import {AiFillClockCircle} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs"
import {BsFillCalendar2CheckFill} from "react-icons/bs"
import main_image from '../../assets/main1.png';


const Line = () => {
    return (
        <section id="line">
            <h5>Myway_Project</h5>
            <h2>개요</h2>
            <div className="container project_box">

            {/* ========================= main ============== */}
                <div className="project_textbox">
                    <h1>Myway</h1>
                    <div className="project_contentbox">
                        <h3>나(My)와 Subway(지하철)을 합친 나의 지하철이라는 뜻으로 
                        챗봇과 공공데이터를 이용한 지하철 길찾기앱</h3>

                        <p className="text-light">
                        코로나 시대에 사람들이 많이 모이는 것을 기피하고 있는 상황에서 버스에 있는 혼잡도 시스템을 
                        지하철에 넣으면 좀 더 안심하고 편안하게 목적지에 갈 수 있지 않을까라는 생각에서 개발 시작<br/>
                        챗봇을 이용한 길찾기 기능<br/> 
                        일정 확인과 알림등 일정 관리 기능<br/> 
                        지도 검색 기능 및 지하철 노선도 확인 기능  
                        </p>
                    </div>
                </div>

                {/* ========================= img ============== */}

                <div className="project_imgBox">
                    <img src={main_image} alt="main_image"/>
                </div>

                </div>

     {/* ======================= 팀원 소개 =================== */}


        {/* ========================= detail ================ */}
        <section className="detail_info">
            <h2>Detail</h2>
            <div className="container project_detailBox">
                    <div className="project_subBox">
                        <div className="project_icon">
                        <AiFillClockCircle/>
                        </div>
                        <ul className="detailBox_ul">
                            <li className="detailBox_ll">
                                <h3>개발 기간</h3>
                                <p className="text-light">2022.03 ~ 2022.11</p>
                            </li>
                        </ul>
                    </div>

                    <div className="project_subBox">
                    <div className="project_icon">
                        <BsFillPersonFill/>
                        </div>
                        <ul className="detailBox_ul">
                            <li className="detailBox_ll">
                                <h3>개발 인원</h3>
                                <p className="text-light">5명</p>
                            </li>
                        </ul>
                    </div>

                    <div className="project_subBox">
                    <div className="project_icon">
                        <BsFillCalendar2CheckFill/>
                        </div>
                        <ul className="detailBox_ul">
                            <li className="detailBox_ll">
                                <h3>역할</h3>
                                <p className="text-light detail_text">- DB 설계 및 관리<br/>
                            - 로그인 & 회원가입 & 공지사항 등 회원 관리 모든 기능 담당<br/>
                            - SNS 간편 로그인<br/>
                            - 지도 api 연동 & 검색 기능 구현 & 카테고리 선택 기능</p>
                            </li>
                        </ul>
                    </div>
                </div>

        </section>
  
            
        </section>
    )
}
export default Line;