import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import "../../../App.css";

import ResultsText from "./ResultsText";
import EmailMeForm from "./EmailMeForm.js";

import { Collapsible, CollapsibleItem, Icon } from "react-materialize";
import InviteForm from "./InviteForm.js";
import HeaderBanner from "../../../Assets/Images/HeaderBanner.jpg"
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
  const BottomResult = Sorted[Sorted.length -1]


  //
  //
  //
  /////////////////////////////////////////////////////// bringing in data from ResultsText to match the "TopResult" category and value
  const Name = TopResult.name;
  const Value = TopResult.value;
  //   console.log("Results text-->", ResultsText);


 


  const TextBlock = [];
  const LowTextBlock = [];


  const LowName = BottomResult.name

  const BottomText = ResultsText.map((i) => {
    // console.log(Object.keys(i)[0]);
    if (LowName !== Object.keys(i)[0]) {
    } else return LowTextBlock.push(Object.values(i)[0]);
  });


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
      <Section>
        <h5 className="teal-text" style={{ margin: "auto" }}>
          You are {TextBlock[0].catTitle}.{" "}
        </h5>
        <P dangerouslySetInnerHTML={{ __html: TextBlock[0].catIntro }} />
      </Section>
      <Collapsible accordion className={"Accordian"}>
        <CollapsibleItem
          expanded={false}
          header={
            <h5 className="teal-text" style={{ margin: "auto" }}>
              Click here for more details.
            </h5>
          }
          node="div"
        >
          {" "}
          <Section>
            <P dangerouslySetInnerHTML={{ __html: range }} />
          </Section>
        </CollapsibleItem>

        <CollapsibleItem
          expanded={false}
          header={
            <h5 className="teal-text" style={{ margin: "auto" }}>
              Tips
            </h5>
          }
          node="div"
        >
          <Section>
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
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header={
            <h5 className="teal-text" style={{ margin: "auto" }}>
              You are least {LowTextBlock[0].catTitle}.  <br/>
            </h5>
          }
          node="div"
        >
          <Section>
            <h5>{LowTextBlock[0].catTitle}'s are described as such.</h5>
          <P dangerouslySetInnerHTML={{ __html: LowTextBlock[0].catIntro }} />
          </Section>
        </CollapsibleItem>
      </Collapsible>
      <BackgroundLayer></BackgroundLayer>
      <EmailMeForm TextBlock={TextBlock} range={range} />
      <InviteForm />
    </Fade>
  );
};

const BackgroundLayer = styled.div`

  text-align: center;
  background: url(${HeaderBanner}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  min-height: 10vh;
  margin: 10px 0;
`;

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
  max-width: 70%;
`;
const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 70%;
`;

export default ResultVisual;
