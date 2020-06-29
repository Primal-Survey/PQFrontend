import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import ResultsText from "./ResultsText";
import EmailMeForm from "./EmailMeForm.js";

const ResultVisual = (resultInfo) => {
  console.log("PQ short scale -->", resultInfo.resultInfo.PQ_ShortScale);

  // const emailInfo =      Build out this object to send to email form

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

  console.log("resultTotals-->", resultTotals);

  const Sorted = resultTotals.sort(function (a, b) {
    return a.value - b.value;
  });

  console.log("values sorted-->", Sorted);

  const TopResult = Sorted.pop();

  console.log("TopResult-->", TopResult);
  const Name = TopResult.name
  const ResultValue = TopResult.value

  while (Name ===)

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
        <EmailMeForm />
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
