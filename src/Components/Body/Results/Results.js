import React from 'react';

import styled from 'styled-components';

import DataVisual from './DataVisual';
// import EmailMeForm from "./EmailMeForm.js";

function Results(surveyInfo) {
  return (
    <Container>
      <DataVisual surveyInfo={surveyInfo} />
    </Container>
  );
}
const Container = styled.div`
  /* padding-bottom: 25px; */
  min-height: 75vh;
`;
export default Results;
