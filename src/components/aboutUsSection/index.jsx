import React from "react";
import {
    Wrapper,
    LeftSide,
    Title,
    SubText,
    RightSide,
    Card,
    CardRightSide,
    CardTitle,
    CardSubText,
    IconDiv,
} from "./styles";

import { BsPhone } from "react-icons/bs";
import { RiHandHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";

const AboutUsSection = () => {
    const iconStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <Wrapper>
            <LeftSide>
                <Title>Por que não cobramos tarifas?</Title>
                <SubText>
                    Nascemos para fazer diferente. Participamos da vida de
                    milhões de pessoas, reunindo em uma mesma plataforma
                    soluções que fazem a diferença no seu dia a dia.
                </SubText>
                <SubText>
                    E por isso, criamos a primeira conta 100% digital e gratuita
                    do Brasil. Como isso é possível? A gente explica.
                </SubText>
            </LeftSide>
            <RightSide>
                <Card>
                    <IconDiv>
                        <BsPhone
                            size="2.5rem"
                            color="#ff7a00"
                            style={iconStyle}
                        />
                    </IconDiv>
                    <CardRightSide>
                        <CardTitle>Somos digitais</CardTitle>
                        <CardSubText>
                            Como você resolve tudo pela internet, não precisamos
                            de agências. Isso aumenta a nossa eficiência e gera
                            economia.
                        </CardSubText>
                    </CardRightSide>
                </Card>
                <Card>
                    <IconDiv>
                        <RiHandHeartLine
                            size="2.5rem"
                            color="#ff7a00"
                            style={iconStyle}
                        />
                    </IconDiv>
                    <CardRightSide>
                        <CardTitle>Somos sustentáveis</CardTitle>
                        <CardSubText>
                            Como não temos agência e somos digitais,
                            economizamos papel, energia e outros recursos.
                        </CardSubText>
                    </CardRightSide>
                </Card>
                <Card>
                    <IconDiv>
                        <HiOutlineLightBulb
                            size="2.5rem"
                            color="#ff7a00"
                            style={iconStyle}
                        />
                    </IconDiv>
                    <CardRightSide>
                        <CardTitle>Temos processos automatizados</CardTitle>
                        <CardSubText>
                            Temos processos automatizados Também economizamos
                            com o custo operacional. Criamos processos
                            inteligentes, que reduzem esforço e burocracia.
                        </CardSubText>
                    </CardRightSide>
                </Card>
                <Card>
                    <IconDiv>
                        <RiMoneyDollarCircleLine
                            size="2.5rem"
                            color="#ff7a00"
                            style={iconStyle}
                        />
                    </IconDiv>
                    <CardRightSide>
                        <CardTitle>Ganhamos em escala</CardTitle>
                        <CardSubText>
                            Você utiliza sua Conta Digital e outros serviços,
                            fica satisfeito com a gente e nos indica para os
                            seus amigos.
                        </CardSubText>
                    </CardRightSide>
                </Card>
            </RightSide>
        </Wrapper>
    );
};

export default AboutUsSection;
