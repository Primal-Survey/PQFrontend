import React from "react";
import Fade from "react-reveal/Fade";
import DataVisual from "../DataVisual";


function Results(surveyInfo) {
  return (
    <Fade>
      <div>
        <DataVisual surveyInfo={surveyInfo} />
       
      </div>
    </Fade>
  );
}

export default Results;
