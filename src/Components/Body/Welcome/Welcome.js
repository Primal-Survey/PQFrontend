import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import StartButton from "./StartButton";
import WelcomeHeader from "./WelcomeHeader";
import WelcomeContent from "./WelcomeContent";

function Welcome() {
  return (
    <Fade>
      <Container>
        <WelcomeHeader />
        <WelcomeContent />
        <StartButton />
      </Container>
    </Fade>
  );
}

const Container = styled.div`
  /* padding-bottom: 25px; */
  min-height: 72vh;
`;
export default Welcome;
