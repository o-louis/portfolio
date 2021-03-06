import React, { useState } from 'react'
import Logo from './logo';
import Navbar from './navbar';
import Hamburger from './hamburger';

import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    left: 0;
    z-index: 2;
    width: 100%;
    padding: 35px 24px;
    background-color: #111A28;
`


const Header = () => {
    const [status, setStatus] = useState("");
    const [navStatus, setNavStatus] = useState("");

    const toggleMenu = () => {
        if (status) {
            setStatus(""); setNavStatus("");
        } else {
            setStatus("close"); setNavStatus("open");
        }
    }

    return (
        <StyledHeader>
            <Logo />
            <Hamburger status={status} toggleMenu={toggleMenu}/> {/* Mobile */}
            <Navbar status={navStatus} />
        </StyledHeader>
    )
}

export default Header
