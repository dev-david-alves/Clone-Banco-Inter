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
                <NavLink href="#">Cartão de Crédito</NavLink>
                <NavLink href="#">Pix, Transferências e Saques</NavLink>
                <NavLink href="#">Como abrir conta</NavLink>
                <NavLink href="#">Quem somos</NavLink>
                <CreateAccountButton paddingSize={paddingSize}>
                    Abrir sua conta
                </CreateAccountButton>
                <LoginAccount paddingSize={paddingSize}>Acessar</LoginAccount>
            </MenuWrapper>
        </Nav>
    );
};

export default Navbar;
