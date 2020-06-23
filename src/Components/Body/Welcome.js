import React from "react";
import { Link } from "react-router-dom";

import Fade from "react-reveal/Fade";

function Welcome() {
  return (
    <Fade>
      <p>hello world</p>

      <Link to="/startPage/">
        <a className="waves-effect waves-light btn">
          <i class="material-icons right">send</i>Start the Quiz!
        </a>
      </Link>
    </Fade>
  );
}

export default Welcome;
