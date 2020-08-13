import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
    z-index: 2;

    div {
        width: 100%;
        height: 1px;
        background: white;
        transition: all .3s ease-in-out;
    }

    .line2 {
        opacity: 1;
        transition-property: opacity;
        transition-duration: 0.2s;
        transition-delay: 0.2s;
    }

    &&.close {
        div {
            transform: scale(0);
        }
        .line1 {
            transform: translateY(12px) rotate(135deg);
        }

        .line2 {
            opacity: 0;
        }

        .line3 {
            transform: translateY(-12px) rotate(-135deg);
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
`

const Hamburger = ({status, toggleMenu}) => {
    return (
        <StyledBurger className={status} onClick={toggleMenu}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
        </StyledBurger>
    )
}

export default Hamburger
