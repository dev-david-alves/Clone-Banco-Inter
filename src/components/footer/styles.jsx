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
`;

export const Logo = styled.img`
    width: ${(props) => (props.paddingSize > 200 ? "6rem" : "8rem")};
    height: auto;
    margin-right: 1rem;
    transition: all 0.5s ease-in-out;
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
`;

export const LoginAccount = styled(CreateAccountButton)`
    background-color: transparent;
    color: #ff7a00;
    border: 1px solid #ff7a00;
    margin-left: 1rem;
`;

export const FooterDiv = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 12rem;
`;

export const UpSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 4rem;
    padding-bottom: 4rem;
    border-bottom: 2px solid #e5e5e5;
`;

export const RightsText = styled.p`
    font-size: 1.5rem;
    color: #424242;
    font-weight: 700;
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
`;

export const Author = styled.p`
    font-size: 1.8rem;
    color: #161616;
    font-weight: 400;
    display: inline-block;
`;

export const AuthorName = styled(Author)`
    color: #ff7a00;
    font-weight: 700;
    transition: all 0.6s ease-in-out;

    &:hover {
        color: #ff5e00;
    }
`;
