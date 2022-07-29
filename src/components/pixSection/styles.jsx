import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 7rem 0;
    overflow: hidden;
    background-color: #f5f6fa;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 45%;
    padding: 0 5rem;
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1.3rem;
`;

export const SubText = styled.p`
    font-size: 2rem;
    margin-bottom: 4rem;
    color: #5e5e5e;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding: 0 15rem 0 8rem;
`;
