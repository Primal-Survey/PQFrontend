import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import ResultsText from "./ResultsText";
import EmailMeForm from "./EmailMeForm.js";

const ResultVisual = (resultInfo) => {
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
  let range = "";
  let tips = TextBlock[0].tips;
  console.log(tips);

  let TipList = tips.map((tip) => {
    return { tip };
  });

  console.log(TipList);

  if (TopResult.value !== 0) {
    ///////////////////////////sets range for result range

    Value >= 3 && Value <= 6
      ? (range = TextBlock[0].rangeInfo.low)
      : Value >= 7 && Value <= 11
      ? (range = TextBlock[0].rangeInfo.medium)
      : (range = TextBlock[0].rangeInfo.high);
    // console.log(range);
    // let RangeResult = TextBlock[0].rangeInfo;
    // console.log(RangeResult);

    return (
      <Fade>
        <Header>
          <h4>
            You tend to lean on the <strong>{TextBlock[0].catTitle}</strong>{" "}
            side of life.
          </h4>
        </Header>

        <Section>
          <P>{TextBlock[0].catIntro}</P>
          <P>{range}</P>
          <h5>Tips for the {TextBlock[0].catTitle}</h5>
          <Section>
            {
              <ul>
                {tips.map((tip) => {
                  return (
                    <li>
                      <P>{tip}</P>
                    </li>
                  );
                })}
              </ul>
            }
          </Section>
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
