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
    width: 50%;
    padding-right: 20rem;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        margin-bottom: 3rem;
        text-align: center;
    }

    @media (max-width: 992px) {
        padding: 0 4rem;
    }

    @media (min-width: 992px) and (max-width: 1200px) {
        padding-right: 8rem;
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
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: 40rem;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0.5rem 4rem;
    }
`;
