import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import Social from '../components/social'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    font-size: 2.9rem;
    margin-left: 5%;
    margin-bottom: 35px;
  }
  h2 {
    font-size: 1.8rem;
    align-self: center;
    font-weight: 500;
    background: linear-gradient(to right, rgba(108, 58, 120, 0.8) 0%, #F65FF9 99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    background: linear-gradient(to right, #00bfff 0%, #5390eb 12%, #d355be 40%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .small-description {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    justify-content: center;
    li {
      font-size: 1.2rem;
      vertical-align:center;
      display: flex;
      justify-content: space-between;
    }
    .circle {
      border-radius: 20px;
      background-color: #00BFFF;
      width: 8px;
      height: 8px;
      vertical-align:center;
      align-self: center;
      margin: 0px 2%;
    }
  }

  .medium-description {
    margin-top: 100px;
    display: flex;
    margin-left: 5%;
    flex-direction: column;
    font-size: 1.1rem;
    .bracket {
      color: #00bfff;
      font-size: 1.2rem;
    }
    p {
      color: white;
      margin-left: 15px;
      margin-bottom: 10px;
      span {
        color: #00bfff;
      }
    }
  }

  @media (min-width: 481px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.9rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    .small-description {
      li {
        font-size: 1.3rem;
      }
      .circle {
        width: 10px;
        height: 10px;
      }
    }
    .medium-description {
      font-size: 1.1rem;
      .bracket {
        font-size: 1.4rem;
      }
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 3.2rem;
    }
    h2 {
      font-size: 2.1rem;
      height: 33px;
    }
    h3 {
      font-size: 1.8rem;
    }
    .small-description {
      li {
        font-size: 1.5rem;
      }
    }
  }
`
const Home = () => (
  <Layout>
    <StyledSection>
      <h3>Hi there ! I am</h3>
      <h1>Oriane Louis</h1>
      <h2>Front-End Developer</h2>
      <ul className="small-description">
        <li>Passionate</li>
        <div className="circle"></div>
        <li>Enthusiast</li>
        <div className="circle"></div>
        <li>ReactJS</li>
      </ul>
      <div className="medium-description">
        <span className="bracket">{"{"}</span>
        <p>
          <span>"description":&nbsp;&nbsp;&nbsp;&nbsp;</span>
          "enjoy JavaScript and its frameworks to build things and improve user experience",
        </p>
        <p>
          <span>"experience":&nbsp;&nbsp;&nbsp;&nbsp;</span>
          "3 years and 1 month",
        </p>
        <p>
          <span>"goals":&nbsp;&nbsp;&nbsp;&nbsp;</span>
          "Go into Fullstack dev in depth",
        </p>
        <span className="bracket">{"}"}</span>
      </div>
    </StyledSection>
    <Social onHomePage="none"/>
  </Layout>
)

export default Home
