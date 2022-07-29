import React from "react";
import {
    FooterDiv,
    UpSection,
    RightsText,
    DownSection,
    SocialIcons,
    SocialIcon,
    Author,
    AuthorName,
    InterAnchor,
    Logo,
} from "./styles";

import InterLogo from "../../assets/logoInter.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <FooterDiv>
            <UpSection>
                <Logo src={InterLogo} alt="Logo Inter" />
                <RightsText>
                    Este site é apenas um projeto de estudo, não tenho o
                    objetivo de lucrar com ele ou de infringir os direitos
                    autorais do{" "}
                    <InterAnchor
                        href="https://www.bancointer.com.br/"
                        target="_blank"
                        as="a"
                    >
                        Banco Inter
                    </InterAnchor>
                    .
                </RightsText>
            </UpSection>
            <DownSection>
                <SocialIcons>
                    <SocialIcon
                        href="https://www.linkedin.com/in/dev-david-alves/"
                        target="_blank"
                    >
                        <FaLinkedinIn />
                    </SocialIcon>
                    <SocialIcon
                        href="https://github.com/dev-david-alves"
                        target="_blank"
                    >
                        <FiGithub />
                    </SocialIcon>
                    <SocialIcon
                        href="mailto:david.als.soares@gmail.com"
                        target="_blank"
                    >
                        <HiOutlineMail />
                    </SocialIcon>
                </SocialIcons>
                <Author>
                    Criado por <AuthorName>David Alves Soares</AuthorName>
                </Author>
            </DownSection>
        </FooterDiv>
    );
};

export default Footer;
