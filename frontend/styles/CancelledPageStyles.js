import styled from "styled-components";
const { motion } = require('framer-motion')


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
	text-align: center;
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
    max-width: 25rem;
  }
`;
