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

const Navbar = ({ paddingSize }) => {
    return (
        <Nav paddingSize={paddingSize}>
            <Logo src={InterLogo} alt="Logo Inter" paddingSize={paddingSize} />
            <MenuWrapper>
                <NavLink href="#">Link 01</NavLink>
                <NavLink href="#">Link 02</NavLink>
                <NavLink href="#">Link 03</NavLink>
                <NavLink href="#">Link 04</NavLink>
                <CreateAccountButton paddingSize={paddingSize}>
                    Abrir sua conta
                </CreateAccountButton>
                <LoginAccount paddingSize={paddingSize}>Acessar</LoginAccount>
            </MenuWrapper>
        </Nav>
    );
};

export default Navbar;
