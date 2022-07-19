import React from "react";
import { createGlobalStyle } from "styled-components";

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
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <WelcomeSection></WelcomeSection>
        </>
    );
};

export default App;
