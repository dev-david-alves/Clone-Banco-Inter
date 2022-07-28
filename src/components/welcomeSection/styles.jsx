import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 5rem;
    overflow: hidden;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    padding-right: 20rem;
`;

export const Title = styled.h2`
    font-size: 5rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1.6rem;
`;

export const SubText = styled.p`
    font-size: 1.9rem;
    margin-bottom: 4rem;
    color: #5e5e5e;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: 40rem;
`;