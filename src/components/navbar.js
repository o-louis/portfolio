import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Social from './social'

const StyledNav = styled.nav`
    position: fixed;
    right: 0;
    height: 100%;
    width: 60%;
    top: 0; 
    transform: translateX(100%);
    background: #1D293A;
    flex-direction: column;
    transition-property: transform;
    transition-duration: 0.5s;
    padding: 20px;
    z-index: 1;
    &.open {
        display: flex;
        transform: translateX(0%);
    }
    ul {
        position: relative;
        font-size: 1.8rem;
        text-transform: uppercase;
        text-align: right;
        margin-top: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 300px;

        li {
            &:hover {
                color: #00BFFF;
                transition: color 0.7s;
                cursor: pointer;
            }
        }
    }
    @media (min-width: 481px) {
        width: 50%;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        transform: translateX(0%);
        background: none;
        height: auto;
        top: inherit;
        right: inherit;
        padding: 0;
        align-self: flex-end;
        vertical-align: bottom;
        position: relative;
        text-align: left;
        ul {
            flex-direction: row;
            margin-top: 0px;
            font-size: 1.5rem;
            font-weight: 500;
            height: auto;
            justify-content: flex-end;
            text-align: center;
            align-items: center;
            li {
                margin-right: 5%;
            }
        }
    }
    @media (min-width: 1024px) {
        ul {
            li {
                margin-right: 10%;
            }
        }
    }
`

const Navbar = ({ status }) => {
    return (
        <StyledNav className={status}>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href="./Oriane_Louis_Resume.pdf" target="blank">Resume</a></li>
            </ul>
            <Social />
        </StyledNav>
    )
}

export default Navbar
