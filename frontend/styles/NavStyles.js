import styled from 'styled-components';

export const NavStyles = styled.nav`
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;

    a {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        font-family: var(--primary-font);
        font-weight: 900;
        font-size: 3rem;
        letter-spacing: -0.18rem;
        display: flex;
        cursor: pointer;

        sup {
            font-family: var(--secondary-font);
            font-size: 1.5rem;
            margin-left: 0.2rem;
            margin-top: 0.31rem;
        }
    }
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        justify-content: center;
    }

    div {
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 600px) {
            margin: 1rem;
        }
    }
    h3 {
        font-size: 1rem;
        padding: 0.25rem;
    }
    svg {
        font-size: 1.5rem;
    }

    span {
        background: #ff2626;
        color: white;
        width: 1.3rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 0.75rem;
        position: absolute;
        right: -10%;
        top: -20%;
        pointer-events: none;
    }
`;
