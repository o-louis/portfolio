import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledSpan = styled.span`
    font-size: 2rem;
    color: #00BFFF;
`
const Logo = () => (
    <StyledSpan><Link to="/" >ol.</Link></StyledSpan>
)

export default Logo
