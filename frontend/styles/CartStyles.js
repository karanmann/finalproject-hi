import styled from 'styled-components';

//Animation
const { motion } = require('framer-motion');

export const CartWrapper = styled(motion.div)`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    /* display: none; */
`;

export const CartStyle = styled(motion.div)`
    width: 30%;
    background: #f1f1f1;
    /* padding: 2rem 5rem; */
    overflow-y: scroll;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1600px) {
        width: 40%;
    }

    @media screen and (max-width: 1200px) {
        width: 60%;
    }

    @media screen and (max-width: 800px) {
        width: 90%;
        padding: 2rem 1rem;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
    }

`;

export const Card = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background: white;
    padding: 2rem;
    gap: 1rem;
    margin: 2rem 0rem;
    img {
        /* width: 8rem; */
    }
`;

export const CardInfo = styled(motion.div)`
    width: 50%;
    div {
        display: flex;
        flex-direction: space-between;
    }
`;

export const EmptyStyle = styled(motion.div)`
    position: absolute;
    top: 0;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;
    h1 {
        font-size: 2rem;
        padding: 2rem;
        letter-spacing: 0.002rem;
    }
    /* svg {
        font-size: 10rem;
        color: var(--secondary);
    } */

    .video__emptyCart {
        height: 300px;
        background: #000;
        border-radius: 1000px;
        -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    }
`;


export const Checkout = styled(motion.div)`
    button {
        background: var(--primary);
        padding: .5rem;
        width: 100%;
        color: white;
        margin-top: 2rem;
        cursor: pointer;
        border: none;
    }
`;

export const Cards = styled(motion.div)``;
