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
    width: 40%;
    padding-right: 13rem;
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1.3rem;
`;

export const SubText = styled.p`
    font-size: 1.8rem;
    margin-bottom: 1.3rem;
    color: #292929;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    max-width: 55rem;
`;

export const Card = styled.div`
    background-color: #ffffff;
    border-radius: 0.7rem;
    padding: 3.2rem 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 55rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const CardRightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 2rem;
`;

export const IconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.1rem;
`;

export const CardTitle = styled.h3`
    font-size: 2.1rem;
    margin-bottom: 1.3rem;
`;

export const CardSubText = styled.p`
    font-size: 1.6rem;
    color: #292929;
`;
