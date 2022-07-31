import React from "react";
import {
    Nav,
    Logo,
    MenuWrapper,
    NavLink,
    CreateAccountButton,
    LoginAccount,
} from "./styles";

import InterLogo from "../../assets/logoInter.png";

const Navbar = ({ paddingSize }) => {
    return (
        <Nav paddingSize={paddingSize}>
            <Logo src={InterLogo} alt="Logo Inter" paddingSize={paddingSize} />
            <MenuWrapper>
                <NavLink href="#creditCard">Cartão de Crédito</NavLink>
                <NavLink href="#pixTransfer">
                    Pix, Transferências e Saques
                </NavLink>
                <NavLink href="#howToOpenAccount">Como abrir conta</NavLink>
                <NavLink href="#aboutUs">Quem somos</NavLink>
                <CreateAccountButton paddingSize={paddingSize}>
                    Abrir sua conta
                </CreateAccountButton>
                <LoginAccount paddingSize={paddingSize}>Acessar</LoginAccount>
            </MenuWrapper>
        </Nav>
    );
};

export default Navbar;
