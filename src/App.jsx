import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

// Components
import Navbar from "./components/navbar";
import WelcomeSection from "./components/welcomeSection";
import CreditCardSection from "./components/creditCardSection";
import PixSection from "./components/pixSection";
import CreateAccountSection from "./components/createAccountSection";
import AboutUsSection from "./components/aboutUsSection";
import Footer from "./components/footer";

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
`;

const App = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            <Navbar paddingSize={offset} />
            <WelcomeSection />
            <CreditCardSection />
            <PixSection />
            <CreateAccountSection />
            <AboutUsSection />
            <Footer />
        </>
    );
};

export default App;
