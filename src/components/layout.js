import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Header from "./header"
import SocialAside from "./socialAside"
import GlobalStyle from "../styles/GlobalStyle"

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  overflow-x: hidden;
  position: relative;
  #main-content {
    width: 100%;
    height: 100%;
    max-width: ${props => props.template ? null : "26rem"};
    margin: 0 auto;
    padding-top: 9rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
  @media (min-width: 768px) {
    #main-content {
      max-width: ${props => props.template ? null : "39rem"};
    }
  }
  @media (min-width: 1024px) {
    #main-content {
      margin: 0;
      max-width: ${props => props.template ? null : "1600px"};
    }
  }
`

const Layout = ({ children, template }) => (
  <StyledLayout template={template} >
    <Helmet>
        <title>Oriane Louis | Developer</title>
    </Helmet>
    <GlobalStyle />
    <Header />
    <main id="main-content">
      {children}
      <SocialAside />
    </main>
  </StyledLayout>
)

export default Layout