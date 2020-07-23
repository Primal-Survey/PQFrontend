import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";


import WelcomeHeader from "./WelcomeHeader";
import WelcomeContent from "./WelcomeContent";

function Welcome() {
  return (
    <Fade>
      <Container>
        <WelcomeHeader />
        <WelcomeContent />
   
      </Container>
    </Fade>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  max-width: 100vw;
`;
export default Welcome;
