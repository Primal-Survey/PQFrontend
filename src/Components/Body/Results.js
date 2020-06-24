import React from "react";
import Fade from "react-reveal/Fade";
import DataVisual from "./DataVisual";
import {Link} from "react-router-dom"

function Results(surveyInfo) {
  return (
    <Fade>
      <div>
        <DataVisual surveyInfo={surveyInfo}/>
        <Link to="/questionpage1/">Question Page 1</Link>
      </div>
    </Fade>
  );
}

export default Results;
