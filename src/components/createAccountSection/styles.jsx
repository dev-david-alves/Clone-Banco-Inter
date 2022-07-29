import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 7rem 0;
    overflow: hidden;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 45%;
    padding-left: 10rem;
    padding-right: 5rem;
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1.3rem;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding: 0 4rem 0 20rem;
`;

export const ListSteps = styled.ul`
    width: 100%;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 80%;
    border-bottom: 1px solid #ebebeb;
    padding: 1.2rem 0;
`;

export const StepNumberDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff7a00;
    border-radius: 50%;
    padding: 1.5rem;
`;

export const StepNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0;
    height: 0;
    color: #ffffff;
    font-size: 1.7rem;
`;

export const StepText = styled.p`
    font-size: 1.4rem;
    color: #777777;
    margin: 0 3.5rem 0 1.5rem;
`;

export const StepTextLink = styled(StepText)`
    color: #ff7a00;
    display: inline-block;
    font-weight: 700;
    margin: 0;
`;
