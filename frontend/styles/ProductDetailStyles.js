import styled from 'styled-components';

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    height: 80%;
    flex-wrap: wrap;
    align-items: flex-start;

    h4 {
        margin: 0.5rem 0 1rem 0;
    }

    hr {
        margin-bottom: 2rem;
        border: 0;
        height: 1px;
        background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0)
        );
    }

    @media screen and (max-width: 1070px) {
        justify-content: center;
    }
`;

export const ProductInfo = styled.div`
    width: 40%;
    button {
        font-size: 1rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    @media screen and (max-width: 1100px) {
        width: 100%;
        margin-top: 2rem;
    }
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0rem;

    button {
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
        padding: 0rem 0.5rem;
    }

    p {
        width: 1rem;
        text-align: center;
    }

    span {
        color: var(--secondary);
    }

    svg {
        color: #494949;
    }
`;

export const Buy = styled.button`
    width: 100%;
    background-color: ${({ availibility }) =>
        availibility ? 'var(--primary)' : '#f94683'};
    color: ${({ availibility }) => (availibility ? 'white' : 'black')};
    font-weight: 500;
    border: none;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

export const Details = styled.section`
    div {
        margin-top: 1rem;
    }

    ul {
        margin-top: 0.5rem;
        margin-left: 3rem;
        line-height: 1.3rem;
    }

    h3 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    .inTheBoxDescription {
        font-weight: 600;
    }
`;
