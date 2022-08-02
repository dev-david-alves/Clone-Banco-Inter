import styled from "styled-components";

export const MainButton = styled.button`
    display: block;
    padding: 0.9rem 2rem;
    width: 80%;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.6rem;
    background-color: #ff7a00;
    border: none;
    border-radius: 0.7rem;
    cursor: pointer;
    transition: all 0.6s ease-in-out;

    &:hover {
        background-color: #ff5e00;
    }
`;

export const svgWidth = {
    width: "100%",
    height: "auto",

    "@media (maxWidth: 992px)": {
        width: "80%",
    },
};
