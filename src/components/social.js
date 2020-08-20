import React from 'react'
import { Link } from 'gatsby'
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

const Social = () => {
    return (
        <StyledSocial className="social-infos" >
            <div className="social-icons">
                <Link to="https://github.com/o-louis" target="blank" className="github"><GithubIcon /></Link>
                <Link to="https://www.linkedin.com/in/oriane-louis/" target="blank"><LinkedInIcon /></Link>
            </div>
            <span className="email">oriane.louis.pro@gmail.com</span>
        </StyledSocial>
    )
}

export default Social;
