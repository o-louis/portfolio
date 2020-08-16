import React from 'react'
import styled from 'styled-components'

import GithubIcon from "./icons/github"
import LinkedInIcon from "./icons/linkedin"

const StyledSocial = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 120px;

    .social-icons {
        display: flex;
        justify-content: center;
        width: 100%;
        // width: ${props => props.onHomePage ? "20%" : "30%"};
        align-self: center;
    }

    a {
        width: 20px;
        height: 20px;
    }

    .github {
        margin-right: 10%;
    }

    span {
        text-align: center;
        font-size: 0.8rem;
        margin-top: 10px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`

const Social = ({ onHomePage}) => {
    return (
        <StyledSocial className="social-infos" >
            <div className="social-icons">
                <a href="https://github.com/o-louis" target="blank" className="github"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/oriane-louis/" target="blank"><LinkedInIcon /></a>
            </div>
            <span className="email">oriane.louis.pro@gmail.com</span>
        </StyledSocial>
    )
}

export default Social;
