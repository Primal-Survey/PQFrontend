import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import DataVisual from "./DataVisual";
import ResultVisual from "./ResultVisual";
import EmailMeForm from "./EmailMeForm.js";

function Results(surveyInfo) {
  return (
    <Fade>
      <Container>
        <DataVisual surveyInfo={surveyInfo} />

        <ResultVisual surveyInfo={surveyInfo} />
        <EmailMeForm />
        <p>*Personal information is not collected</p>
      </Container>
    </Fade>
  );
}
const Container = styled.div`
  /* padding-bottom: 25px; */
  min-height: 75vh;
`;
export default Results;
