import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import dotscreenLogo from '../images/dotscreen.jpg'
import kameleoonLogo from '../images/kameleoon.png'
import mylittleparisLogo from '../images/mylittleparis.png'

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
    .content {
        margin-bottom: 100px;
        .post {
            .post-experience {
                background-color: rgba(196, 196, 196, 0.1);
                padding: 15px;
            }
            hr {
                margin: 20px 0px;
                border-color: transparent;
            }
            p {
                font-size: 1.4rem;
                line-height: 1.4;
                font-weight: lighter;
                span {
                    color: #FFEA78;
                }
            }
            .company-logo {
                width: 29%;
                height: 39%;
                margin-bottom: 10px;
            }
            h3 {
                font-size: 1.3rem;
                margin-bottom: 5px;
            }
            h6 {
                font-size: 0.9rem;
                color: #C4C4C4;
                font-weight: 300;
            }
            .description {
                color: #747474;
                font-size: 0.9rem;
            }
            .missions {
                margin-top: 10px;
                font-size: 1rem;
                li {
                    &:before {content: "•"; color: white; font-size: 0.9rem; margin-right: 5px; }
                }
            }
            &.interests {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-row-gap: 10px;
                width: 100%;
                div {
                    border-radius: 2px;
                    text-transform: uppercase;
                    text-align: center;
                    font-size: 1rem;
                    padding: 3%;
                    background-color: rgba(196, 196, 196, 0.1);
                }
            }
        }
    }

    @media (min-width: 481px) {
        margin: 0;
        .content {
            .post {
                &.interests {
                    grid-template-columns: repeat(2, 1fr);
                    grid-column-gap: 10px;
                }
            }
        }
    }
    @media (min-width: 768px) {
        padding: 0 3rem;
        margin: 0;
        margin-left: 0;
        .content {
            .post {
                .company-logo {
                    width: 20%;
                    height: 30%;
                }
                &.interests {
                    grid-template-columns: repeat(3, 1fr);
                }
            }
        }
    }
    @media (min-width: 1024px) {
        margin-left: 90px;
        .content {
            .post {
                max-width: 900px;
                .post-experience {
                    padding: 20px;
                }
            }
        }
    }
    @media (min-width: 1224px) {
        max-width: 1400px;
        .content {
            .post {
                p {
                    font-size: 1.6rem;
                }
                .company-logo {
                    width: 18%;
                    height: 18%;
                }
                h3 {
                    font-size: 1.5rem;
                }
                h6 {
                    font-size: 1rem;
                }
                .description {
                    font-size: 1.1rem;
                }
                .missions {
                    margin-top: 10px;
                    font-size: 1.1rem;
                    li {
                        &:before {font-size: 1.1rem; }
                    }
                }
                &.interests {
                    div {
                        font-size: 1.2rem;
                        padding: 10px 0px;
                    }
                }
            }
        }
    }
`
const About = () => (
    <Layout template="about">
        <StyledSection>
            <div class="content">
                <div className="title-section">
                    <div className="title-bloc">
                        <h1>About</h1>
                        <div className="circle" />
                    </div>
                    <div className="line" />
                </div>

                <div className="post">
                    <p>Hello ! i’m <span>Oriane Louis</span>, a passionate 
                        developer. Specialized in <span>front-end</span>. I’m
                        enthusiast about new technologies. I have
                        over three years of experience but I keep 
                        learning everyday.<br /><br /> <span>I love to make
                        beautiful things.</span> <br /><br />
                        Javascript is my main skill and I really love 
                        it. However I use increasingly MERN stack
                        to become a fullstack developer.

                        I also have the curiosity to learn new
                        concept. That’s why I’m not afraid to learn
                        I like <span>challenges</span> and <span>surpass myself.</span>
                    </p>
                </div>
            </div>

            <div class="content">
                <div className="title-section">
                    <div className="title-bloc">
                        <h1>Experience</h1>
                        <div className="circle" />
                    </div>
                    <div className="line" />
                </div>

                <div className="post">
                    <div className="post-experience">
                        <div className="company-logo">
                            <img src={dotscreenLogo} alt="dotscreen" />
                        </div>
                        <h3>Front-End Developer</h3>
                        <h6>Dec 2017 - Jul 2020</h6>
                        <div className="missions">
                            <li>Created and maintained applications from scratch for STBs and TVs.</li>
                            <li>Optimized them due to devices abilities.</li>
                            <li>Collaborated with customers to determine needs and work through user experience.</li>
                        </div>
                    </div>
                    <hr />
                    <div className="post-experience">
                        <div className="company-logo">
                            <img src={kameleoonLogo} alt="kameleoon" />
                        </div>
                        <h3>Front-End Developer</h3>
                        <h6>Jul 2017 - Sept 2020</h6>
                        <div className="missions">
                            <li>Implemented A/B Testing</li>
                            <li>Ensured the smooth running of the simulated Kameleoon product for most popular browsers</li>
                            <li>Responsive Design</li>
                        </div>
                    </div>
                    <hr />
                    <div className="post-experience">
                        <div className="company-logo">
                            <img src={mylittleparisLogo} alt="mylittleparis" />
                        </div>
                        <h3>System and Network Administrator (internship)</h3>
                        <h6>Sep 2015 - Dev 2015</h6>
                        <div className="missions">
                            <li>Analyzed software, network, system issues and assisted users in their resolutions.</li>
                            <li>Prepped and applied basic configurations for various network and system hardwares.</li>
                            <li>Implemented scripts to optimize task</li>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div className="title-section">
                    <div className="title-bloc">
                        <h1>Interests</h1>
                        <div className="circle" />
                    </div>
                    <div className="line" />
                </div>

                <div className="post interests">
                    <div>Astronomy</div>
                    <div>Nature</div>
                    <div>Playing music</div>
                    <div>Books</div>
                    <div>Marketing</div>
                    <div>History</div>
                </div>
            </div>
        </StyledSection>
    </Layout>
)

export default About
