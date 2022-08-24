import styled from "styled-components";
const { motion } = require('framer-motion')

export const Wrapper = styled.div`
  /* margin: 5rem; */
  text-align: center;
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 3rem;
  h1 {
    color: var(--primary);
    margin: 1rem 0rem;
  }
  h2 {
    color: var(--secondary);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  button {
    background: var(--primary);
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 2rem 0rem;
    cursor: pointer;
    border: none;
    width: 100%;
  }
`;


export const Address = styled.div`
  font-size: 1rem;

`;

export const OrderInfo = styled.div`
  font-size: 1rem;

  div {
    padding-bottom: 1rem;
  }
`;


export const InfoWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;


  @media screen and (max-width: 1100px) {
        flex-direction: column;
        gap: 1rem;
    }


`;