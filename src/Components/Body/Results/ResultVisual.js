import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import ResultsText from "./ResultsText";
import EmailMeForm from "./EmailMeForm.js";

const ResultVisual = (resultInfo) => {
  // const [range, setRange] = useState("")
  let range = "";

  //   console.log("PQ short scale -->", resultInfo.resultInfo.PQ_ShortScale);

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
  //   console.log("resultTotals-->", resultTotals);

  ///////////////////////////////////////////////////////  sorting the results
  const Sorted = resultTotals.sort(function (a, b) {
    return a.value - b.value;
  });
  //   console.log("values sorted-->", Sorted);

  //
  //
  //
  /////////////////////////////////////////////////////// taking the last / highest result to display info from result text
  const TopResult = Sorted.pop();
  //   console.log("TopResult-->", TopResult);

  //
  //
  //
  /////////////////////////////////////////////////////// bringing in data from ResultsText to match the "TopResult" category and value
  const Name = TopResult.name;
  const Value = TopResult.value;
  //   console.log("Results text-->", ResultsText);

  const TextBlock = [];

  const TopText = ResultsText.map((i) => {
    // console.log(Object.keys(i)[0]);
    if (Name !== Object.keys(i)[0]) {
    } else return TextBlock.push(Object.values(i)[0]);
  });
  //   console.log("TextBlock", TextBlock[0]);
  //   console.log("TextBlock", TextBlock[0].catTitle);
  //   console.log("TextBlock", TextBlock[0].catIntro);
  //   console.log("TextBlock", TextBlock[0].rangeInfo);
  //   console.log("TextBlock", TextBlock[0].tips);
  //   console.log("top text2 -->", ResultsText[[0][0].catTitle]);
  //
  //
  //
  //////////////////////////////////////////////////////  show results if value not 0 (initial state), if quiz not filled out, push to home

  // if (TopResult.value !== 0) {
  /* 		///////////////////////////sets range for result range
			Value >= 3 && Value <= 6
				? (setRange(TextBlock[0].rangeInfo.low))
				: Value >= 7 && Value <= 11
					? (setRange(TextBlock[0].rangeInfo.medium))
					: (setRange(TextBlock[0].rangeInfo.high));
			// console.log(92, range);
			let RangeResult = TextBlock[0].rangeInfo;
			// console.log(94, RangeResult);
			//   if (range) { TextBlock[0].rangeInfo = range;}
	 */
  switch (true) {
    case Value === 0:
      return (
        <Fade>
          <Section>
            <P>please fill out quiz to see results</P>
          </Section>
          {/* Have this else statement push to home page automatically if results are at 0 */}
        </Fade>
      );

    case Value <= 6:
      range = TextBlock[0].rangeInfo.low;
      TextBlock[0].range = "low";
      break;
    case Value <= 11:
      range = TextBlock[0].rangeInfo.medium;
      TextBlock[0].range = "medium";
      break;
    case Value > 11:
      range = TextBlock[0].rangeInfo.high;
      TextBlock[0].range = "high";
      break;
    default:
      console.log(110, "Broken Switch/Case in ResultVisual");
  }

  let tips = TextBlock[0].tips;

  return (
    <Fade>
      <h5 className="teal-text">You are {TextBlock[0].catTitle}. </h5>
      <Section>
        <Section>
          <P dangerouslySetInnerHTML={{ __html: TextBlock[0].catIntro }} />
          <P dangerouslySetInnerHTML={{ __html: range }} />
          <Section>
            <h5>Tips</h5>
            <ul>
              {tips.map((tip) => {
                return (
                  <li>
                    <p dangerouslySetInnerHTML={{ __html: tip }} />
                  </li>
                );
              })}
            </ul>
          </Section>
        </Section>
      </Section>
      <EmailMeForm TextBlock={TextBlock} range={range} />
    </Fade>
  );
};

const P = styled.p`
  text-align: justify;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: justify;
  max-width: 80%;
`;
const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;
export default ResultVisual;
