import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 6rem 0;
    overflow: hidden;
    background-color: #f5f6fa;

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
    padding: 0 5rem;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0.5rem 4rem;
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

export const SubText = styled.p`
    font-size: 2rem;
    margin-bottom: 4rem;
    color: #5e5e5e;

    @media (max-width: 992px) {
        font-size: 1.6rem;
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding: 0 15rem 0 8rem;

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
        padding: 0 8rem 0 4rem;
    }
`;
