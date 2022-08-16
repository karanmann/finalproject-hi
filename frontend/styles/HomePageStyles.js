import styled from 'styled-components';

// Hero
export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const HeroWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    position: relative;

    &__::-webkit-scrollbar {
        display: none;
    }
`;

export const HeroContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

export const HeroContent = styled.div`
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
    scrollbar-width: none; /* hide scrollbar in Firefox */

    &__::-webkit-scrollbar {
        display: none;
    }

    &__ > * {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 1;
    }

    transform: translateX(-${props => props.currentIndex * 100}%);
`;

export const LeftArrow = styled.div`
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: transparent;
    left: 24px;
    svg {
      font-size: 4rem;
      text-align: center;
      color: white;
    }

    svg:hover {
      color: grey
    }
`;

export const RightArrow = styled.div`
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: transparent;
    right: 24px;
    svg {
      font-size: 4rem;
      text-align: center;
      color: white;
    }
    svg:hover {
      color: grey
    }
`;
