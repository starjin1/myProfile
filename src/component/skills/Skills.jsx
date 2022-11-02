import React from "react";
import '../skills/skills.css'
import {BiWorld} from "react-icons/bi"
import {BiConversation} from "react-icons/bi"
import {HiComputerDesktop} from "react-icons/hi2"
import {BiCog} from "react-icons/bi"

const Skills = () => {
    return (
        <section id="Skills">
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container experience__container">
                <div className="experience__Languege">
                    <h3>Language</h3>
                    <div className="experience__content">
                        <div className="experience__icon">
                            <BiConversation />
                        </div>
                        <article className="experience__details">
                            <h4>TypeScript</h4>
                            <h4>JavaScript</h4>
                            <h4>JAVA</h4>
                            <h4>SQL</h4>
                            <h4>Python</h4>
                        </article>
                    </div>
                </div>

                <div className="experience__Web_FE">
                    <h3>Web FE</h3>
                    <div className="experience__content">
                        <div className="experience__icon">
                            <BiWorld />
                        </div>
                        <article className="experience__details">
                            <h4>HTML</h4>
                            <h4>CSS</h4>
                            <h4>React</h4>
                        </article>
                    </div>
                </div>

                <div className="Infra_DB">
                    <h3>Infra & DB</h3>
                    <div className="experience__content">
                        <div className="experience__icon">
                            <HiComputerDesktop />
                        </div>
                        <article className="experience__details">
                            <h4>AWS</h4>
                            <h4>MYSQL</h4>
                            <h4>PHP</h4>
                        </article>
                    </div>
                </div>

                <div className="Tool">
                    <h3>Tool</h3>
                    <div className="experience__content">
                        <div className="experience__icon">
                            <BiCog />
                        </div>
                        <article className="experience__details">
                            <h4>Visual Studio</h4>
                            <h4>Git</h4>
                            <h4>Eclipse</h4>
                            <h4>Android Studio</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills