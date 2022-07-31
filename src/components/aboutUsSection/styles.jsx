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
    width: 40%;
    padding-right: 13rem;

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
        padding-right: 6rem;
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
    font-size: 1.8rem;
    margin-bottom: 1.3rem;
    color: #292929;

    @media (max-width: 992px) {
        font-size: 1.5rem;
    }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    max-width: 55rem;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0.5rem 4rem;
    }
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

    @media (max-width: 768px) {
        padding: 2rem 1.3rem;
    }
`;

export const CardRightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 2rem;

    @media (max-width: 768px) {
        margin-left: 1.5rem;
    }
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

    @media (max-width: 768px) {
        font-size: 1.9rem;
        margin-bottom: 1rem;
    }
`;

export const CardSubText = styled.p`
    font-size: 1.6rem;
    color: #292929;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
