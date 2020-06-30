import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import ResultsText from "./ResultsText";
import EmailMeForm from "./EmailMeForm.js";

const ResultVisual = (resultInfo) => {
 

  // const emailInfo =      Build out this object to send to email form

  /////////////////////////////////////////////////  Setting up the resultTotals array
  const resultTotals = [];
  resultTotals[0] = {
    name: "relentless",
    value: resultInfo.resultInfo.relentlessResult,
  };
  resultTotals[1] = {
    name: "oppositional",
    value: resultInfo.resultInfo.oppositionalResult,
  };
  resultTotals[2] = {
    name: "agnostic",
    value: resultInfo.resultInfo.agnosticResult,
  };
  resultTotals[3] = {
    name: "messianic",
    value: resultInfo.resultInfo.messianicResult,
  };
  resultTotals[4] = {
    name: "insecure",
    value: resultInfo.resultInfo.insecureResult,
  };
  resultTotals[5] = {
    name: "nuts",
    value: resultInfo.resultInfo.nutsResult,
  };
  resultTotals[6] = {
    name: "gallant",
    value: resultInfo.resultInfo.gallantResult,
  };


  ///////////////////////////////////////////////////////  sorting the results
  const Sorted = resultTotals.sort(function (a, b) {
    return a.value - b.value;
  });
  console.log("values sorted-->", Sorted);

  /////////////////////////////////////////////////////// taking the last / highest result to display info from result text
  const TopResult = Sorted.pop();
  console.log("TopResult-->", TopResult);

  /////////////////////////////////////////////////////// bringing in data from ResultsText to match the "TopResult" category and value
  const Name = TopResult.name;
  const Value = TopResult.value;
  console.log("Results text-->", ResultsText);

  //////////////////////////////////////////////////////  show results if value not 0 (initial state), if quiz not filled out, push to home

  if (TopResult.value !== 0) {
    return (
      <Fade>
        <Section>
          <P>
            {TopResult.name} {TopResult.value}
          </P>
        </Section>
        <EmailMeForm />
        {/* Add props into form when rdy */}
      </Fade>
    );
  } else {
    return (
      <Fade>
        <Section>
          <P>please fill out quiz to see results</P>
        </Section>
        {/* Have this else statement push to home page automatically if results are at 0 */}
      </Fade>
    );
  }
};

const P = styled.p`
  text-align: justify;
`;

const Section = styled.section`
  display: flex;
  justify-content: space;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;
export default ResultVisual;
