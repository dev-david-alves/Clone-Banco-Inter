import React from "react";
import { Wrapper, LeftSide, Title, SubText, RightSide } from "./styles";

import { MainButton } from "../common-styles";
import CreditCard from "../../assets/CreditCard";

const CreditCardSection = () => {
    return (
        <Wrapper>
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
                <CreditCard width="110%" />
            </RightSide>
        </Wrapper>
    );
};

export default CreditCardSection;
