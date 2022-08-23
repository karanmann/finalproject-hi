import styled from 'styled-components';

export const Gallery = styled.div`
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); */
    /* grid-template-columns: repeat(auto-fit, 200px); */
    /* grid-gap: 2rem; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 2rem;
`;
