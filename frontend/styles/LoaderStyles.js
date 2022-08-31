import styled from 'styled-components';

export const LoaderWrapper = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoaderStyle = styled.span`
    width: 60px;
    height: 40px;
    position: relative;
    display: inline-block;

    &::before {
        content: '';
        left: 0;
        top: 0;
        position: absolute;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: var(--secondary);
        background-image: radial-gradient(
                circle 8px at 18px 18px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 18px 0px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 0px 18px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 36px 18px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 18px 36px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 30px 5px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 30px 5px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 30px 30px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 5px 30px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 4px at 5px 5px,
                var(--base-color) 100%,
                transparent 0
            );
        background-repeat: no-repeat;
        box-sizing: border-box;
        animation: rotationBack 3s linear infinite;
    }
    &::after {
        content: '';
        left: 35px;
        top: 15px;
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--secondary);
        background-image: radial-gradient(
                circle 5px at 12px 12px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 12px 0px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 0px 12px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 24px 12px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 12px 24px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 20px 3px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 20px 3px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 20px 20px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 3px 20px,
                var(--base-color) 100%,
                transparent 0
            ),
            radial-gradient(
                circle 2.5px at 3px 3px,
                var(--base-color) 100%,
                transparent 0
            );
        background-repeat: no-repeat;
        box-sizing: border-box;
        animation: rotationBack 4s linear infinite reverse;
        -webkit-animation-name: rotationBack;
        -webkit-animation-duration: 4s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -webkit-animation-fill-mode: reverse;
    }
    @keyframes rotationBack {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
`;
