import React from "react";
import { Wrapper, LeftSide, Title, SubText, RightSide } from "./styles";

import { MainButton } from "../common-styles";
import MobileUser from "../../assets/MobileUserSvg";

import { svgWidth } from "../common-styles";

const PixSection = () => {
    return (
        <Wrapper id="pixTransfer">
            <LeftSide>
                <MobileUser style={svgWidth} />
            </LeftSide>
            <RightSide>
                <Title>Pix, transferências e saques gratuitos</Title>
                <SubText>
                    Envie e receba dinheiro de forma mais prática e rápida. Faça
                    Pix, TEDs e transferências com agendamento para todos os
                    bancos sem pagar nada.
                </SubText>
                <MainButton>Saiba mais sobre o Pix</MainButton>
            </RightSide>
        </Wrapper>
    );
};

export default PixSection;
