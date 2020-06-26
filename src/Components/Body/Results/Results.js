import React from "react";
import Fade from "react-reveal/Fade";
import DataVisual from "./DataVisual";
import ResultVisual from "./ResultVisual";

function Results(surveyInfo) {
  return (
    <Fade>
      <div>
        <DataVisual surveyInfo={surveyInfo} />
        <ResultVisual surveyInfo={surveyInfo} />
      </div>
    </Fade>
  );
}

export default Results;
