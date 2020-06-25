import React from "react";
import Fade from "react-reveal/Fade";

import StartButton from "./StartButton";
import WelcomeHeader from "./WelcomeHeader";
import WelcomeContent from "./WelcomeContent";

function Welcome() {
  return (
    <Fade>
      <WelcomeHeader />
      <WelcomeContent />
      <StartButton />
    </Fade>
  );
}

export default Welcome;
