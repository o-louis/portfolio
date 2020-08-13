import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        list-style-type: none;
        font-family: 'Lato', sans-serif;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100vw;
        height: 100vh;
        background-color: #111A28;
        color: white;
        font-size: 62.5%;
        line-height: 1.5rem;
        font-weight: 400;
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
            outline: 0;
        }
    }
    button {
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyle