import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import javascriptLogo from "../images/javascript.png"
import reactLogo from "../images/react.png"
import typescriptLogo from "../images/typescript.png"
import htmlLogo from "../images/html.png"
import cssLogo from "../images/css.png"
import bootstrapLogo from "../images/bootstrap.png"
import nodejsLogo from "../images/nodejs.png"
import mongodbLogo from "../images/mongodb.png"
import vuejsLogo from "../images/vuejs.png"
import webpackLogo from "../images/webpack.png"
import babelLogo from "../images/babel.png"
import sassLogo from "../images/sass.png"
import pythonLogo from "../images/python.png"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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

    .logos-container {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 50px;
        .logos {
            justify-self: center;
            width: 65%;
            height: 65%;
        }
    }

    @media (min-width: 481px) {
        margin: 0;
        .logos-container {
            grid-template-columns: repeat(4, 1fr);
            grid-row-gap: 50px;
            .logos {
                justify-self: center;
                width: 70%;
                height: 70%;
            }
        }
    }
    @media (min-width: 768px) {
        margin: 0;
        margin-left: 0;
        .logos-container {
            grid-template-columns: repeat(5, 1fr);
            grid-row-gap: 50px;
            .logos {
                justify-self: center;
                width: 65%;
                height: 65%;
            }
        }
    }
    @media (min-width: 1024px) {
        margin-left: 90px;
        max-width: 1400px;
        .logos-container {
            grid-template-columns: repeat(5, 1fr);
            grid-row-gap: 50px;
            .logos {
                justify-self: center;
                width: 60%;
                height: 60%;
            }
        }
    }
`
const Skills = () => (
    <Layout>
        <StyledSection>
            <div className="title-section">
                <div className="title-bloc">
                    <h1>Skills</h1>
                    <div className="circle" />
                </div>
                <div className="line" />
            </div>

            <div className="logos-container">
                <div className="logos">
                    <img src={javascriptLogo}/>
                </div>
                <div className="logos">
                    <img src={reactLogo}/>
                </div>
                <div className="logos">
                    <img src={typescriptLogo}/>
                </div>
                <div className="logos">
                    <img src={htmlLogo}/>
                </div>
                <div className="logos">
                    <img src={cssLogo}/>
                </div>
                <div className="logos">
                    <img src={bootstrapLogo}/>
                </div>

                <div className="logos">
                    <img src={nodejsLogo}/>
                </div>
                <div className="logos">
                    <img src={mongodbLogo}/>
                </div>
                <div className="logos">
                    <img src={vuejsLogo}/>
                </div>
                <div className="logos">
                    <img src={webpackLogo}/>
                </div>
                <div className="logos">
                    <img src={babelLogo}/>
                </div>
                <div className="logos">
                    <img src={pythonLogo}/>
                </div>
                <div className="logos">
                    <img src={sassLogo}/>
                </div>

            </div>
        </StyledSection>
    </Layout>
)

export default Skills
