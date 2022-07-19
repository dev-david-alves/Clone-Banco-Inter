import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 12rem;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

export const Logo = styled.img`
    width: 8rem;
    height: auto;
    margin-right: 1rem;
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const NavLink = styled.a`
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #161616;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 1rem;
`;

export const CreateAccountButton = styled.button`
    display: block;
    padding: 1.3rem 2rem;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 4rem;
    background-color: #ff7a00;
    border: none;
    border-radius: 0.7rem;
    cursor: pointer;
`;

export const LoginAccount = styled(CreateAccountButton)`
    background-color: transparent;
    color: #ff7a00;
    border: 1px solid #ff7a00;
    margin-left: 1rem;
`;
