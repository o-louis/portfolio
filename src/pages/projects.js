import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import starzplay from "../images/starzplay.png"
import arte from "../images/arte.png"
import covidtracker from "../images/covidtracker.png"
import mernblog from "../images/mernblog.png"
import authentication from "../images/authentication.png"
import chatapp from "../images/chatapp.png"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    .title-section {
        margin-bottom: 30px;
    }
    .title-bloc {
        display: flex;
        h1 {
            text-transform: uppercase;
            font-size: 1.4rem
        }

        .circle {
            border-radius: 20px;
            background-color: #00BFFF;
            width: 8px;
            height: 8px;
            align-self: center;
            margin-left: 10px;
        }
    }
    .line {
        width: 40px;
        height: 1px;
        background-color: #00BFFF;
        margin-top: 5px;
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(1, 100%);
        grid-row-gap: 40px;
        .projects-item {
            overflow: hidden;
            color: #747474;
            justify-self: center;
            padding: 15px;
            font-size: 1.3rem;
            background-color: rgba(196, 196, 196, 0.1);
            border-radius: 3px;
            max-width: 400px;
            .projects-img {
                margin-bottom: 10px;
                overflow: hidden;
                height: 166px;
            }
            .projects-infos {
                h4 {
                    margin-bottom: 10px;
                    font-size: 1.2rem;
                    color: white;
                    a {
                        margin-left: 5px;
                    }
                }
                .technologies {
                    display: flex;
                    margin-bottom: 10px;
                    div {
                        width: 90px;
                        margin-right: 10px;
                        text-align: center;
                        background: rgba(30, 38, 51);
                        font-size: 0.9rem;
                        color: white;
                        border: 1px solid white;
                        padding: 0px 4px;
                        &:last-child {
                            margin-right: 0px;
                        }
                    }
                }
                a {
                    font-size: 1rem;
                    text-decoration: underline;
                }
                .disabled {
                    font-size: 1rem;
                }
            }
        }
    }

    @media (min-width: 481px) {
        margin: 0;
        .projects {
            .projects-item {
                font-size: 1.3rem;
                .projects-infos {
                    h4 {
                        font-size: 1.3rem;
                    }
                    .technologies {
                        div {
                            width: 100px;
                            font-size: 1.1rem;
                        }
                    }
                    a {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
    @media (min-width: 768px) {
        padding: 0 3rem;
        margin: 0;
        margin-left: 0;
        .projects {
            grid-template-columns: repeat(2, 50%);
            grid-column-gap: 20px;
            .projects-item {
                
                justify-self: stretch;
            }
        }
    }
    @media (min-width: 1024px) {
        margin-left: 90px;
        .projects {
            grid-template-columns: repeat(3, 30%);
            grid-column-gap: 20px;
        }
    }
    @media (min-width: 1224px) {
        max-width: 1400px;
    }
`
const Projects = () => (
    <Layout template="projects">
        <StyledSection>
            <div className="title-section">
                <div className="title-bloc">
                    <h1>Projects</h1>
                    <div className="circle" />
                </div>
                <div className="line" />
            </div>

            <div className="projects">
                <div className="projects-item">
                    <div className="projects-img">
                        <img src={starzplay} alt="starzplay" />
                    </div>
                    <div className="projects-infos">
                        <h4>STARZPLAY<a href="https://m.boutique.orange.fr/tv/starzplay" target="blank">for Orange STBs</a></h4>
                        <div className="technologies">
                            <div>Javascript</div>
                            <div>JQuery</div>
                            <div>MVC</div>
                        </div>
                        <div className="disabled">Confidential source</div>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="projects-img">
                        <img src={arte} alt="arte" />
                    </div>
                    <div className="projects-infos">
                        <h4>ARTE  <a href="https://www.arte.tv/fr/" target="blank"> for HbbTV</a></h4>
                        <div className="technologies">
                            <div>Javascript</div>
                            <div>MVC</div>
                        </div>
                        <div className="disabled">Confidential source</div>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="projects-img">
                        <img src={mernblog} alt="mernblog" />
                    </div>
                    <div className="projects-infos">
                        <h4>MERN BLOG</h4>
                        <div className="technologies">
                            <div>MERN</div>
                            <div>Reactjs</div>
                            <div>Nodejs</div>
                        </div>
                        <a href="https://github.com/o-louis/MERN-Blog" target="blank">View source</a>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="projects-img">
                        <img src={covidtracker} alt="covidtracker" />
                    </div>
                    <div className="projects-infos">
                        <h4>Covid tracker</h4>
                        <div className="technologies">
                            <div>Reactjs</div>
                            <div>Javascript</div>
                        </div>
                        <a href="https://github.com/o-louis/covid-tracker-19" target="blank">View source</a>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="projects-img">
                        <img src={chatapp} alt="chatapp" />
                    </div>
                    <div className="projects-infos">
                        <h4>Chat app</h4>
                        <div className="technologies">
                            <div>Reactjs</div>
                            <div>SocketIO</div>
                        </div>
                        <a href="https://github.com/o-louis/chat-app" target="blank">View source</a>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="projects-img">
                        <img src={authentication} alt="authentication" />
                    </div>
                    <div className="projects-infos">
                        <h4>Authentication</h4>
                        <div className="technologies">
                            <div>Nodejs</div>
                            <div>Ejs</div>
                            <div>Jwt</div>
                        </div>
                        <a href="https://github.com/o-louis/authentication" target="blank">View source</a>
                    </div>
                </div>
            </div>
        </StyledSection>
    </Layout>
)

export default Projects
