import React from "react"
import styled from "styled-components"

import Header from "./header"
import SocialAside from "./socialAside"
import GlobalStyle from "../styles/GlobalStyle"

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  padding: 0 1.5rem;
  #main-content {
    width: 100%;
    height: 100%;
    max-width: 26rem;
    margin: 0 auto;
    padding-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
  @media (min-width: 768px) {
    #main-content {
      max-width: 39rem;
    }
  }
  @media (min-width: 1024px) {
    #main-content {
      margin: 0;
      max-width: 1600px;
    }
  }
`

const Layout = ({ children }) => (
  <StyledLayout>
    <GlobalStyle />
    <Header />
    <main id="main-content">{children}</main>
    <SocialAside />
  </StyledLayout>
)

export default Layout