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
        padding: 0 3rem;
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
    <Layout template="skills">
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
                    <img src={javascriptLogo} alt="javascript-logo"/>
                </div>
                <div className="logos">
                    <img src={reactLogo} alt="react-logo"/>
                </div>
                <div className="logos">
                    <img src={typescriptLogo} alt="typescript-logo"/>
                </div>
                <div className="logos">
                    <img src={htmlLogo} alt="html-logo"/>
                </div>
                <div className="logos">
                    <img src={cssLogo} alt="css-logo"/>
                </div>
                <div className="logos">
                    <img src={bootstrapLogo} alt="bootstrap-logo"/>
                </div>

                <div className="logos">
                    <img src={nodejsLogo} alt="nodejs-logo"/>
                </div>
                <div className="logos">
                    <img src={mongodbLogo} alt="mongodb-logo"/>
                </div>
                <div className="logos">
                    <img src={vuejsLogo} alt="vuejs-logo"/>
                </div>
                <div className="logos">
                    <img src={webpackLogo} alt="webpack-logo"/>
                </div>
                <div className="logos">
                    <img src={babelLogo} alt="babel-logo"/>
                </div>
                <div className="logos">
                    <img src={pythonLogo} alt="python-logo"/>
                </div>
                <div className="logos">
                    <img src={sassLogo} alt="sass-logo"/>
                </div>

            </div>
        </StyledSection>
    </Layout>
)

export default Skills
