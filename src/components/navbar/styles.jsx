import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => (props.paddingSize > 200 ? "1.7rem" : "4rem")} 12rem;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.5s ease-in-out;

    @media (max-width: 992px) {
        padding: 1.7rem 2rem;
    }

    @media (max-width: 1200px) {
        padding: 1.4rem 1.7rem;
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    width: ${(props) => (props.paddingSize > 200 ? "6rem" : "8rem")};
    height: auto;
    margin-right: 1rem;
    transition: all 0.5s ease-in-out;

    // responsive
    @media (max-width: 992px) {
        width: 6rem;
    }
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

export const NavLink = styled.a`
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #161616;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 1rem;

    @media (max-width: 992px) {
        font-size: 1.2rem;
        margin: 1rem 0.3rem;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const CreateAccountButton = styled.button`
    display: block;
    padding: ${(props) => (props.paddingSize > 200 ? "0.8rem" : "1.3rem")} 2rem;
    text-decoration: none;
    color: #ffffff;
    font-size: ${(props) => (props.paddingSize > 200 ? "1.2rem" : "1.6rem")};
    font-weight: 500;
    margin-left: 4rem;
    background-color: #ff7a00;
    border: none;
    border-radius: 0.7rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        background-color: #ff5e00;
    }

    @media (max-width: 992px) {
        margin-left: 0;
        padding: 0.8rem 0.8rem;
        font-size: 1.2rem;
        width: 100%;
    }
`;

export const LoginAccount = styled(CreateAccountButton)`
    background-color: transparent;
    color: #ff7a00;
    border: 1px solid #ff7a00;
    margin-left: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #ffffff;
    }
`;
