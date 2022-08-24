import styled from 'styled-components';

export const ProductStyles = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    padding: 0.1rem;
    cursor: pointer;
    img {
        width: 100%;
    }

    h2,
    h3 {
        padding: 0.5rem 1rem;
        position: absolute;
    }

    h2 {
        color: white;
        bottom: 2rem;
    }

    h3 {
        color: white;
        bottom: 0.9rem;
        font-size: 0.8rem;
    }
`;

export const Pill = styled.h4`
    background-color: ${({ availibility }) =>
        availibility ? '#59e391' : '#f94683'};
    border: none;
    color: black;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 16px;
    width: 5rem;
    font-size: 0.7rem;
    font-weight: 700;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1;
`;
