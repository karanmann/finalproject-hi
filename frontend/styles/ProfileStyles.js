import styled from "styled-components";


export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Order = styled.div`
    background: white;
    margin: 2rem 0rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h1 {
        font-size: 1rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
        line-height: 2rem;
        text-align: center;
    }
    h2 {
        font-size: 1rem;
        line-height: 2rem;
        color: var(--secondary);
        align-items: flex-start;
    }

    span {
        font-size: 0.9rem;
        font-weight: 400;
    }

    div {
        margin-top: 1rem;
        text-align: center;
    }
`;

export const Logout = styled.button `
    width: 20rem;
    padding: 1rem;
    background: var(--primary);
    color: white;
    font-weight: 700;
    border: none;
`