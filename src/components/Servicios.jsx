import React from "react"
import { DiAngularSimple, DiCss3, DiGit, DiHtml5, DiJavascript1, DiNodejs, DiReact, DiSass } from "react-icons/di"
import { SiBootstrap, SiExpress, SiFirebase, SiGithub, SiMongodb, SiMysql, SiPostman, SiRender, SiSourcetree, SiTypescript, SiVisualstudiocode, SiWebcomponentsdotorg } from "react-icons/si"
import { PiFileSqlDuotone } from "react-icons/pi"

export const Servicios = () => {




    return (

        <>
            <h2 style={{ textAlign: "center" }}>Lenguajes</h2>
            <div className="techs">

                <div className="tech-icons" >
                    <DiJavascript1 />

                    <strong>Javascript</strong>

                </div>

                <div className="tech-icons">
                    <SiTypescript />

                    <strong>Typescript</strong>

                </div>

                <div className="tech-icons">

                    <DiHtml5 />
                    <strong>HTML</strong>
                </div>
                <div className="tech-icons">

                    <DiCss3 />
                    <strong>CSS</strong>
                </div>

                <div className="tech-icons">

                    <PiFileSqlDuotone />
                    <strong>SQL</strong>
                </div>

            </div>

            <h2 style={{ textAlign: "center" }}>Librerías y Frameworks</h2>

            <div className="techs">

                <div className="tech-icons">
                    <DiReact />
                    <strong>React</strong>
                </div>
                <div className="tech-icons">
                    <DiAngularSimple />
                    <strong>Angular</strong>
                </div>

                <div className="tech-icons">

                    <DiNodejs />
                    <strong>NodeJS</strong>
                </div>
                <div className="tech-icons">

                    <SiExpress />
                    <strong>ExpressJS</strong>
                </div>

                <div className="tech-icons">

                    <SiWebcomponentsdotorg />
                    <strong>WebComponents</strong>
                </div>

                <div className="tech-icons">

                    <SiBootstrap />
                    <strong>Bootstrap</strong>
                </div>

                <div className="tech-icons">

                    <DiSass />
                    <strong>SASS</strong>
                </div>


            </div>
            <h2 style={{ textAlign: "center" }}>Herramientas y aplicaciones</h2>
            <div className="techs">
                <div className="tech-icons">

                    <SiVisualstudiocode />
                    <strong>Visual Studio Code</strong>
                </div>
                <div className="tech-icons">

                    <SiPostman />
                    <strong>Postman</strong>
                </div>

                <div className="tech-icons">

                    <DiGit />
                    <strong>Git</strong>
                </div>

                <div className="tech-icons">

                    <SiGithub />
                    <strong>GitHub</strong>
                </div>
                <div className="tech-icons">

                    <SiSourcetree />
                    <strong>SourceTree</strong>
                </div>
                <div className="tech-icons">

                    <SiFirebase />
                    <strong>Firebase</strong>
                </div>
                <div className="tech-icons">

                    <SiRender />
                    <strong>Render</strong>
                </div>
            </div>

            <h2 style={{ textAlign: "center" }}>Bases de datos</h2>
            <div className="techs">
                <div className="tech-icons">

                    <SiMysql />
                    <strong>MySQL</strong>
                </div>
                <div className="tech-icons">

                    <SiMongodb />
                    <strong>MongoDB</strong>
                </div>
            </div>
        </>
    )


}