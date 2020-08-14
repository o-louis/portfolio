import React from 'react'
import styled from 'styled-components'

import GithubIcon from "./icons/github"
import LinkedInIcon from "./icons/linkedin"

const StyledSocial = styled.div`
    display: none;
    @media (min-width: 768px) {
        position: fixed;
        bottom: 34px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-right: 3.4rem;
        z-index: -1;
        .social {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            .line {
                background-color: white;
                height: 120px;
                width: 1px;
            }
            .social-icons {
                display: flex;
                flex-direction: column;
                align-self: center;
                svg {
                    width: 25px;
                    height: 25px;
                }
                a {
                    margin-bottom: 30px
                }
            }
        }
        .social-email {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            position: relative;
            span {
                position: absolute;
                bottom: 133px;
                transform: rotate(90deg);
                margin-bottom: 133px;
                font-size: 1.1rem;
                display: flex;
                width: 200px;
            }
            .line {
                background-color: white;
                height: 120px;
                width: 1px;
            }
        }
    }
`
const SocialAside = () => (
    <StyledSocial>
        <div className="social">
            <div className="social-icons">
                <a href="https://github.com/o-louis" target="blank" className="github"><GithubIcon /></a>
                <a href="https://linked.com/in/oriane-louis" target="blank"><LinkedInIcon /></a>
            </div>
            <div className="line"></div>
        </div>

        <div className="social-email">
            <span>oriane.louis.pro@gmail.com</span>
            <div className="line"></div>
        </div>
    </StyledSocial>
)

export default SocialAside
