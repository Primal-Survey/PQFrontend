import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import "../../../App.css";

import ResultsText from "./ResultsText";
import EmailMeForm from "./EmailMeForm.js";

import { Collapsible, CollapsibleItem, Icon } from "react-materialize";
import InviteForm from "./InviteForm.js";
import HeaderBanner from "../../../Assets/Images/HeaderBanner.jpg";
const ResultVisual = (resultInfo) => {
  // const [range, setRange] = useState("")
  let range = "";
  let secondRange = "";
  let thirdRange = "";

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
  const SecondResult = Sorted[0];
  const ThirdResult = Sorted[1];

  //
  //
  //
  /////////////////////////////////////////////////////// bringing in data from ResultsText to match the "TopResult" category and value
  const Name = TopResult.name;
  const SecondName = SecondResult.name;
  const ThirdName = ThirdResult.name;

  const Value = TopResult.value;
  const SecondValue = SecondResult.value;
  const ThirdValue = ThirdResult.value;

  //   console.log("Results text-->", ResultsText);

  const TextBlock = [];
  const SecondTextBlock = [];
  const ThirdTextBlock = [];

  const TopText = ResultsText.map((i) => {
    // console.log(Object.keys(i)[0]);
    if (Name !== Object.keys(i)[0]) {
    } else return TextBlock.push(Object.values(i)[0]);
  });

  const SecondText = ResultsText.map((i) => {
    // console.log(Object.keys(i)[0]);
    if (SecondName !== Object.keys(i)[0]) {
    } else return SecondTextBlock.push(Object.values(i)[0]);
  });

  const ThirdText = ResultsText.map((i) => {
    // console.log(Object.keys(i)[0]);
    if (ThirdName !== Object.keys(i)[0]) {
    } else return ThirdTextBlock.push(Object.values(i)[0]);
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
        <>
          <Section>
            <P>please fill out quiz to see results</P>
          </Section>
          {/* Have this else statement push to home page automatically if results are at 0 */}
        </>
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

    case ThirdValue <= 6:
      thirdRange = ThirdTextBlock[0].rangeInfo.low;
      ThirdTextBlock[0].range = "low";
      break;
    case ThirdValue <= 11:
      thirdRange = ThirdTextBlock[0].rangeInfo.medium;
      ThirdTextBlock[0].range = "medium";
      break;
    case ThirdValue > 11:
      thirdRange = ThirdTextBlock[0].rangeInfo.high;
      ThirdTextBlock[0].range = "high";
      break;

    default:
      console.log(110, "Broken Switch/Case in ResultVisual");
  }

  switch (true) {
    case SecondValue === 0:
      return (
        <>
          <Section>
            <P>please fill out quiz to see results</P>
          </Section>
          {/* Have this else statement push to home page automatically if results are at 0 */}
        </>
      );

    case SecondValue <= 6:
      secondRange = SecondTextBlock[0].rangeInfo.low;
      SecondTextBlock[0].range = "low";
      break;
    case SecondValue <= 11:
      secondRange = SecondTextBlock[0].rangeInfo.medium;
      SecondTextBlock[0].range = "medium";
      break;
    case SecondValue > 11:
      secondRange = SecondTextBlock[0].rangeInfo.high;
      SecondTextBlock[0].range = "high";
      break;
    default:
      console.log(110, "Broken Switch/Case in ResultVisual");
  }

  switch (true) {
    case ThirdValue === 0:
      return (
        <>
          <Section>
            <P>please fill out quiz to see results</P>
          </Section>
          {/* Have this else statement push to home page automatically if results are at 0 */}
        </>
      );
    case ThirdValue <= 6:
      thirdRange = ThirdTextBlock[0].rangeInfo.low;
      ThirdTextBlock[0].range = "low";
      break;
    case ThirdValue <= 11:
      thirdRange = ThirdTextBlock[0].rangeInfo.medium;
      ThirdTextBlock[0].range = "medium";
      break;
    case ThirdValue > 11:
      thirdRange = ThirdTextBlock[0].rangeInfo.high;
      ThirdTextBlock[0].range = "high";
      break;

    default:
      console.log(110, "Broken Switch/Case in ResultVisual");
  }

  let tips = TextBlock[0].tips;
  let SecondTips = SecondTextBlock[0].tips;
  let ThirdTips = ThirdTextBlock[0].tips;

  //   {
  //     console.log("----> textblock", TextBlock);
  //   }

  return (
    <div>
      <Section>
        <H2>Your Top Primitive Qualities</H2>
        {/* Section 1 */}
        <Collapsible accordion className={"Accordian"}>
          <CollapsibleItem
            expanded={true}
            header={
              <H2 style={{ margin: "auto" }}>{TextBlock[0].catTitle}. </H2>
            }
            node="div"
            icon={
              <Icon>
                <LgIcon>looks_one</LgIcon>
              </Icon>
            }
            style={{
              margin: "auto",
              width: "100%",
              //   border: "1px solid red",
            }}
          >
            <P dangerouslySetInnerHTML={{ __html: TextBlock[0].catIntro }} />

            <Collapsible accordion className={"Accordian"}>
              <CollapsibleItem
                style={{
                  margin: "auto",
                  width: "100%",
                  //   border: "1px solid black",
                }}
                expanded={false}
                header={<H3 style={{ margin: "auto" }}>More details</H3>}
                node="div"
              >
                <P dangerouslySetInnerHTML={{ __html: range }} />
              </CollapsibleItem>

              <CollapsibleItem
                expanded={false}
                header={<H3 style={{ margin: "auto" }}>Tips</H3>}
                node="div"
                style={{
                  margin: "auto",
                  width: "100%",
                  //   border: "1px solid pink",
                }}
              >
                <ul>
                  {tips.map((tip) => {
                    return (
                      <li>
                        <p dangerouslySetInnerHTML={{ __html: tip }} />
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleItem>
            </Collapsible>
          </CollapsibleItem>
        </Collapsible>
        {/* Section 2 */}
        <Collapsible accordion className={"Accordian"}>
          <CollapsibleItem
            expanded={false}
            header={
              <H2 style={{ margin: "auto" }}>
                {SecondTextBlock[0].catTitle}.{" "}
              </H2>
            }
            node="div"
            icon={
              <Icon>
                <LgIcon>looks_two</LgIcon>
              </Icon>
            }
          >
            <>
              <P
                dangerouslySetInnerHTML={{
                  __html: SecondTextBlock[0].catIntro,
                }}
              />
            </>
            <Collapsible accordion className={"Accordian"}>
              <CollapsibleItem
                expanded={false}
                header={<H3 style={{ margin: "auto" }}>More details</H3>}
                node="div"
              >
                {" "}
                <>
                  <P dangerouslySetInnerHTML={{ __html: secondRange }} />
                </>
              </CollapsibleItem>

              <CollapsibleItem
                expanded={false}
                header={<H3 style={{ margin: "auto" }}>Tips</H3>}
                node="div"
              >
                <>
                  <ul>
                    {SecondTips.map((tip) => {
                      return (
                        <li>
                          <p dangerouslySetInnerHTML={{ __html: tip }} />
                        </li>
                      );
                    })}
                  </ul>
                </>
              </CollapsibleItem>
            </Collapsible>
          </CollapsibleItem>
        </Collapsible>
        {/* Section 3 */}
        <Collapsible accordion className={"Accordian"}>
          <CollapsibleItem
            expanded={false}
            header={
              <H2 style={{ margin: "auto" }}>{ThirdTextBlock[0].catTitle}. </H2>
            }
            node="div"
            icon={
              <Icon>
                <LgIcon>looks_3</LgIcon>
              </Icon>
            }
          >
            <SubSection>
              <P
                dangerouslySetInnerHTML={{ __html: ThirdTextBlock[0].catIntro }}
              />
            </SubSection>
            <Collapsible accordion className={"Accordian"}>
              <CollapsibleItem
                expanded={false}
                header={<H3 style={{ margin: "auto" }}>More details</H3>}
                node="div"
              >
                {" "}
                <SubSection>
                  <P dangerouslySetInnerHTML={{ __html: thirdRange }} />
                </SubSection>
              </CollapsibleItem>

              <CollapsibleItem
                expanded={false}
                header={<H3 style={{ margin: "auto" }}>Tips</H3>}
                node="div"
              >
                <SubSection>
                  <ul>
                    {ThirdTips.map((tip) => {
                      return (
                        <li>
                          <p dangerouslySetInnerHTML={{ __html: tip }} />
                        </li>
                      );
                    })}
                  </ul>
                </SubSection>
              </CollapsibleItem>
            </Collapsible>
          </CollapsibleItem>
        </Collapsible>
      </Section>

      <EmailMeForm TextBlock={TextBlock} range={range} />

      <InviteForm />
    </div>
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
  max-width: 95%;
`;

const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: justify;
  width: 100%;
`;
const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 70%;
`;
const H2 = styled.h2`
  font-size: 3rem;
  color: black !important;
`;
const H3 = styled.h3`
  font-size: 2rem;
  color: black !important;
`;

const LgIcon = styled.p`
  font-size: 4rem;
`;

export default ResultVisual;
