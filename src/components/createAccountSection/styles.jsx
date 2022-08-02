import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 6rem 0;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 3rem 0;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 45%;
    padding-left: 10rem;
    padding-right: 5rem;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0.5rem 8rem;
    }

    @media (min-width: 992px) and (max-width: 1200px) {
        padding-right: 2rem;
        padding-left: 5rem;
    }
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1.3rem;

    @media (max-width: 992px) {
        font-size: 4rem;
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding: 0 4rem 0 20rem;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        text-align: center;
    }

    @media (max-width: 992px) {
        padding: 0 4rem;
    }

    @media (min-width: 992px) and (max-width: 1200px) {
        padding: 0 4rem 0 10rem;
    }
`;

export const ListSteps = styled.ul`
    width: 100%;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;
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

    @media (max-width: 768px) {
        padding: 1.3rem;
    }
`;

export const StepNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0;
    height: 0;
    color: #ffffff;
    font-size: 1.7rem;

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

export const StepText = styled.p`
    font-size: 1.4rem;
    color: #777777;
    margin: 0 3.5rem 0 1.5rem;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const StepTextLink = styled(StepText)`
    color: #ff7a00;
    display: inline-block;
    font-weight: 700;
    margin: 0;
    text-decoration: none;
`;
