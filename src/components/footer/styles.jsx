import styled from "styled-components";

export const Logo = styled.img`
    width: 8rem;
    height: auto;
    margin-right: 1rem;
    transition: all 0.5s ease-in-out;

    @media (max-width: 768px) {
        width: 6rem;
        margin-bottom: 2rem;
    }
`;

export const FooterDiv = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 12rem;

    @media (max-width: 768px) {
        padding: 4rem;
    }
`;

export const UpSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 2px solid #e5e5e5;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
    }
`;

export const RightsText = styled.p`
    font-size: 1.5rem;
    color: #424242;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const InterAnchor = styled(RightsText)`
    color: #ff7a00;
    text-decoration: none;
    transition: all 0.6s ease-in-out;

    &:hover {
        color: #ff5e00;
    }
`;

export const DownSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const SocialIcon = styled.a`
    display: block;
    width: 5rem;
    height: 5rem;
    margin: 0 1rem;
    background-color: #ff7a00;
    border-radius: 50%;
    text-decoration: none;
    color: #ffffff;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s ease-in-out;

    &:hover {
        background-color: #ff5e00;
    }

    @media (max-width: 768px) {
        width: 4rem;
        height: 4rem;
        font-size: 2rem;
    }
`;

export const Author = styled.p`
    font-size: 1.8rem;
    color: #161616;
    font-weight: 400;
    display: inline-block;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const AuthorName = styled(Author)`
    color: #ff7a00;
    font-weight: 700;
    transition: all 0.6s ease-in-out;

    &:hover {
        color: #ff5e00;
    }
`;
