import styled, { keyframes } from 'styled-components';

// HERO

export const slideUp = keyframes`
        0% {
            visibility: visible;
            top: 5rem;
        }
        100% {
            visibility: visible;
            top: 0rem;
        }
`;

export const SliderContainer = styled.div`
    width: 100%;
    height: 50%;
    /* position: relative;
    overflow: hidden; */
    overflow-y: hidden;
    margin-bottom: 1rem;
    /* background-color: black; */

    .slide {
        /* position: absolute; */
        width: 100%;
        height: 50%;
        /* transform: translateX(0%); */
        transition: all 2s ease-in-out;
    }

    /* @media screen and (min-width: 600px) {
        .slide img {
            width: 100%;
            height: 100%;
        }
    } */
    .video__container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .video {
        object-fit: cover;
        width: 100%;
        max-width: 53rem;
        height: 50%;
    }

    .current {
        opacity: 1;
        transform: translateX(0);
    }

    .content {
        position: absolute;
        top: 50;
        left: 30;
        opacity: 0;
        width: 0 auto;
        color: rgba(255, 255, 255, 0.275);
        background: rgba(0, 0, 0, 0.3);
        animation: ${slideUp} 1s ease 0.5s;
        animation-delay: 1s;
        animation-fill-mode: forwards;
        visibility: hidden;
        padding: 1rem;
        animation-direction: reverse;
    }

    @media screen and (max-width: 800px) {
        .content {
            display: none;
        }
    }

    .content > * {
        color: #fff;
    }

    .current .content {
        opacity: 1;
        transition: all 1s ease;
    }
`;

export const SlideTitle = styled.h2`
    font-family: var(--primary-font);
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: -0.11rem;
    display: flex;
    text-align: center;
`;

// Tickers Styles

const scrollY = keyframes`
    from {
        transform: translateY(var(--scroll-start));
    }
    to {
        transform: translateY(var(--scroll-end));
    }
`;

export const TickerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 50vh;
    gap: 1em;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    mask-image: linear-gradient(
        var(--mask-direction, to top),
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 5%,
        hsl(0 0% 0% / 1) 95%,
        hsl(0 0% 0% / 0)
    );
    overflow: hidden;
    
    /* img {
        /* height: 13rem;
        width: 13rem; */
        
    } */

    .marquee {
        display: flex;
        overflow: hidden;
        height: 100vh;
        /* user-select: none; */
        /* gap: var(--gap); */
    }

    .marquee__group {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: var(--gap);
        min-width: 80%;
        animation: ${scrollY} var(--duration) linear infinite;
        flex-direction: column;
    }

    .marquee__group {
        @media (prefers-reduced-motion: reduce) {
            animation-play-state: paused;
        }
    }

    .col__5,
    .col__4,
    .col__3,
    .col__2 {
        @media (max-width: 876px) {
            display: none;
        }
    }

    .marquee__reverse .marquee__group {
        animation: ${scrollY} 200s linear infinite;
        animation-direction: reverse;
        animation-delay: -25s;
    }

    .marquee__group:hover {
        animation-play-state: paused;
    }

    .marquee__reverse {
        /* mask-image: linear-gradient(
        var(--mask-direction, to bottom),
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 20%,
        hsl(0 0% 0% / 1) 80%,
        hsl(0 0% 0% / 0)
    ); */
    }
    
    .ScrollingImages__container {
        cursor: pointer;
        h4 {
            padding-top: 0.5rem;
        }
       
        p {
            width: 200px;
            font-size: 0.7rem;
            padding-top: 0.5rem;
    
        }
    }

`;
