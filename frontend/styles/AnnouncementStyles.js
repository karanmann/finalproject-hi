import styled from "styled-components"

export const Container = styled.div`
	height: 40px;
    color: white;
	background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
	max-width: 53rem;
	margin: 0 auto;
	letter-spacing: 0.12rem;
	transition: 0.3s;

    h3 {
    color: white;
	background-color: black;
    font-size: 14px;
    font-weight: 700;
	letter-spacing: 0.12rem;
    text-align: center;
    }

	@media screen and (max-width: 600px) {
	h3{
        font-size: 10px;
    }
}
`