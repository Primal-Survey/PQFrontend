import React from "react";
import { Link } from "react-router-dom";

const StartButton = () => {
  return (
    <Link to="/startPage/">
      <button className="waves-effect waves-light btn">
        <i class="material-icons right">send</i>Begin Survey
      </button>
    </Link>
  );
};

export default StartButton;
