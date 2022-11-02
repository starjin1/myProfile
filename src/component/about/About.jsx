import React from "react";
import Me from '../../assets/my_img.jpg';
import '../about/about.css';

const About = () => {
    return (
        <section id="About">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="image_photo"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <h5> 끈기 있는 </h5>
                        </article>
                        <article className="about__card">
                            <h5>성실한 </h5>
                        </article>
                        <article className="about__card">
                            <h5>열정적인</h5>
                        </article>
                    </div>
                    <p>
                        포기를 모르는 도전정신으로 맡은 일을 끝까지 해내는 신입 개발자 조은채입니다. 
                        열정적인 태도와 끈기 있는 태도로 모든 업무를 성실히 임하겠습니다.<br/> 
                        자신이 맡은 일에 책임감을 느끼고 항상 적극적인 태도를 보이는 매일매일 성장하는 
                        개발자가 될 것입니다. 
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>

    )
}

export default About;