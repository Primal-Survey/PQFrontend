import React from "react";
import Fade from "react-reveal/Fade";

function Welcome() {
  return (
    <Fade>
      <p>hello world</p>
      <a className="waves-effect waves-light btn">
        <i class="material-icons right">send</i>Start the Quiz!
      </a>
    </Fade>
  );
}

export default Welcome;
