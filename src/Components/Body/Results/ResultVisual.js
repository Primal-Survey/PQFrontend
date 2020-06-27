import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import ResultsText from "./ResultsText";
import EmailMeForm from "./EmailMeForm.js";

const ResultVisual = (resultInfo) => {
  console.log("PQ short scale -->", resultInfo.resultInfo.PQ_ShortScale);

  // const emailInfo =      Build out this object to send to email form

  const resultTotals = {
    relentlessResult: resultInfo.resultInfo.relentlessResult,
    oppositionalResult: resultInfo.resultInfo.oppositionalResult,
    agnosticResult: resultInfo.resultInfo.agnosticResult,
    messianicResult: resultInfo.resultInfo.messianicResult,
    insecureResult: resultInfo.resultInfo.insecureResult,
    nutsResult: resultInfo.resultInfo.nutsResult,
    gallantResult: resultInfo.resultInfo.gallantResult,
  };
  console.log("resultTotals-->", resultTotals);

  const sortedArr = [];

  const Sorted = Object.values(resultTotals).sort(function (a, b) {
    if (a[0] < b[0]) {
      sortedArr.push();
    }
    return sortedArr;
  });

  console.log("values sorted-->", Sorted);

  //   const TopThree = resultTotals.sort();

  //   console.log("TopThree-->", TopThree);

  return (
    <Fade>
      <Section>
        <P>
          {ResultsText.relentless.catTitle}
          <br />
          The <strong>PQ ROAMING SURVEY</strong> is a 21-question
          self-assessment unlike other personality quizzes. This is not
          corporate BS, business jargon, or filled with platitudes. This survey
          gets to the heart of the matter. It is based on a study conducted by a
          St. Joe’s University Professor of Management in conjunction with a
          methodology developed by Marco Greenberg in his book, "Primitive:
          Tapping the Primal Drive that Powers the World’s Most Successful
          People". Research indicates that you’ll make more money and be more
          fulfilled the more you are able to tap into your primal drive. There
          are seven different types of “Primitives,” each with its own distinct
          qualities. This survey is meant to help stuck individuals feel
          empowered and liberated. It provides you with a lucid roadmap on how
          to start, reinvent, or recalibrate their careers. Likewise, this
          survey seeks to assist managers in becoming conductors, who can more
          effectively manage their teams. <br />
          <br />
          Take it by clicking <strong>“Begin Survey”</strong> below. And don’t
          forget, this is a spectrum. The world cannot blossom without civilized
          people! Civilized folks are key. But with the world changing right
          under our feet, it is now more important than ever to tap into our
          Primal sides.
        </P>
      </Section>
      <EmailMeForm />
      {/* Add props into form when rdy */}
    </Fade>
  );
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
