import React from "react";
import { Wrapper, LeftSide, Title, SubText, RightSide } from "./styles";

import { MainButton } from "../common-styles";
import MobileAppSvg from "../../assets/MobileAppSvg";

const WelcomeSection = () => {
    return (
        <Wrapper>
            <LeftSide>
                <Title>Abra sua conta digital gratuita</Title>
                <SubText>
                    Mais que uma conta digital completa: um super app com vários
                    serviços para simplificar seu dia a dia.
                </SubText>
                <MainButton>Abra sua conta</MainButton>
            </LeftSide>
            <RightSide>
                <MobileAppSvg width="100%" height="auto" />
            </RightSide>
        </Wrapper>
    );
};

export default WelcomeSection;
