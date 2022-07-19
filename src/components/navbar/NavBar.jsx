import React from "react";
import {
    Nav,
    Logo,
    MenuWrapper,
    NavLink,
    CreateAccountButton,
    LoginAccount,
} from "./styles";

import InterLogo from "../../assets/logo-inter.png";

const Navbar = () => {
    return (
        <Nav>
            <Logo src={InterLogo} alt="Logo Inter" />
            <MenuWrapper>
                <NavLink href="#">Link 01</NavLink>
                <NavLink href="#">Link 02</NavLink>
                <NavLink href="#">Link 03</NavLink>
                <NavLink href="#">Link 04</NavLink>
                <CreateAccountButton>Abrir sua conta</CreateAccountButton>
                <LoginAccount>Acessar</LoginAccount>
            </MenuWrapper>
        </Nav>
    );
};

export default Navbar;
