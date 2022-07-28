import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import CreditCardSection from "./components/creditCardSection/creditCardSection";

// Components
import Navbar from "./components/navbar/NavBar";
import WelcomeSection from "./components/welcomeSection/WelcomeSection";

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
  }
`;

const App = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    console.log(offset);
    return (
        <>
            <GlobalStyle />
            <Navbar paddingSize={offset} />
            <WelcomeSection />
            <CreditCardSection />
        </>
    );
};

export default App;
