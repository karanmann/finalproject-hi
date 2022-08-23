import styled from 'styled-components';

export const ProductStyles = styled.div`
    background-color: white;

    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    cursor: pointer;
    img {
        width: 100%;
    }

    h2 {
        padding: 0.5rem 0rem;
    }
`;

export const Pill = styled.h4`
    background-color: ${({ availibility }) =>
        availibility ? '#59e391' : '#f94683' };
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
    top: 2rem;
    right: 2.2rem;
    z-index: 1;
`;
