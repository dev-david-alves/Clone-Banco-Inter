import React from "react";
import { Wrapper, LeftSide, Title, SubText, RightSide } from "./styles";

import { MainButton } from "../common-styles";
import CreditCard from "../../assets/CreditCardSvg";

import { svgWidth } from "../common-styles";

const CreditCardSection = () => {
    return (
        <Wrapper id="creditCard">
            <LeftSide>
                <Title>Cartão de crédito sem anuidade e com cashback</Title>
                <SubText>
                    Seu novo cartão já vem habilitado para compras no débito e
                    pode ter a função crédito, sujeito a análise. É sem anuidade
                    e você ainda ganha cashback na fatura.
                </SubText>
                <MainButton>Abra sua conta</MainButton>
            </LeftSide>
            <RightSide>
                <CreditCard style={svgWidth} />
            </RightSide>
        </Wrapper>
    );
};

export default CreditCardSection;
