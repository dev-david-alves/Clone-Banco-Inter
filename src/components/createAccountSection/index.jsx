import React from "react";
import {
    Wrapper,
    LeftSide,
    Title,
    RightSide,
    ListSteps,
    ListItem,
    StepNumberDiv,
    StepNumber,
    StepText,
    StepTextLink,
} from "./styles";

import { MainButton } from "../common-styles";
import CreateAccount from "../../assets/CreateAccountSvg";

import { svgWidth } from "../common-styles";

const CreateAccountSection = () => {
    return (
        <Wrapper id="howToOpenAccount">
            <LeftSide>
                <CreateAccount style={svgWidth} />
            </LeftSide>
            <RightSide>
                <Title>Como abrir sua conta pelo celular</Title>
                <ListSteps>
                    <ListItem>
                        <StepNumberDiv>
                            <StepNumber>1</StepNumber>
                        </StepNumberDiv>
                        <StepText>
                            Baixe o{" "}
                            <StepTextLink as="a" href="#">
                                Super App
                            </StepTextLink>{" "}
                            na sua loja, Apple Store ou Google Play
                        </StepText>
                    </ListItem>
                    <ListItem>
                        <StepNumberDiv>
                            <StepNumber>2</StepNumber>
                        </StepNumberDiv>
                        <StepText>
                            Clique em ”Abrir uma conta gratuita”
                        </StepText>
                    </ListItem>
                    <ListItem>
                        <StepNumberDiv>
                            <StepNumber>3</StepNumber>
                        </StepNumberDiv>
                        <StepText>Esteja com seus documentos em mãos</StepText>
                    </ListItem>
                    <ListItem>
                        <StepNumberDiv>
                            <StepNumber>4</StepNumber>
                        </StepNumberDiv>
                        <StepText>
                            Preencha os dados e aguarde a aprovação. Aí é só
                            aproveitar seu acesso à toda plataforma do Inter
                        </StepText>
                    </ListItem>
                </ListSteps>
                <MainButton>Abra sua conta</MainButton>
            </RightSide>
        </Wrapper>
    );
};

export default CreateAccountSection;
