import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 7rem 0;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 13rem;
        height: auto;
    }

    @media (max-width: 992px) {
        margin-top: 3rem;
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
`;

export const Title = styled.h2`
    font-size: 5rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1.6rem;

    @media (max-width: 992px) {
        font-size: 4rem;
    }
`;

export const SubText = styled.p`
    font-size: 1.9rem;
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
