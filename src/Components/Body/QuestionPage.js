import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm1 from "./QuestionForms/OneFiveForm";

import SubmitButton from "./QuestionForms/SubmitButton";

function ValidationErrorCard({ visible }) {
  return visible ? (
    <Fade>
      <ErrorCard>
        <ErrorCardText>
          Please answer each question before moving to the next page.
        </ErrorCardText>
      </ErrorCard>
    </Fade>
  ) : null;
}

function QuestionPage1({ prev, current, next, questions, keys, ...rest }) {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(false);
  }, [current]);

  function navigate(e) {
    /*
      1. Ignore validation if app env is set to development
      2. Determine if every question has a checked radio button
        2.1. (true) Allow next page render
        2.2. (false) Block and present validation error to user
    */

    if (process.env.REACT_APP_ENV != "development") {
      const valid = keys.every((key) => rest.surveyInfo[key] > 0);

      if (!valid) {
        e.preventDefault();
        setShowError(true);
      }
    }
  }

  const Questions = useContext(QuestionsContext);

  return (
    <Fade>
      <ValidationErrorCard visible={showError} />

      <div>
        <Section>
          <P>
            Thinking about your usual self, please indicate the degree to which
            you agree with the following statements about yourself. <br />
            Be as honest as possible to ensure the most useful feedback.
          </P>
        </Section>

        {questions.map((question, i) => (
          <QuestionContainer>
            <Question key={i}>
              <Text>{Questions[question].text}</Text>
              <Scale>
                <OneFiveForm1 questionKey={keys[i]} {...rest} />
              </Scale>
            </Question>
          </QuestionContainer>
        ))}

        <ButtonContainer>
          {prev ? (
            <Link to={`/questionpage${prev}/`}>
              <Button className="hoverable  btn">
                <i className="material-icons left">arrow_back</i>
                Previous
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button className="hoverable  btn">
                <i className="material-icons left">arrow_back</i>Back Home
              </Button>
            </Link>
          )}
          <P>Page {current} of 7</P>

          {next ? (
            <Link to={`/questionpage${next}/`} onClick={navigate}>
              <Button className="hoverable  btn">
                <i className="material-icons right">arrow_forward</i>
                Next
              </Button>
            </Link>
          ) : (
            <SubmitButton {...rest} />
          )}
        </ButtonContainer>
      </div>
    </Fade>
  );
}

const Section = styled.section`
  margin: auto;
  text-align: center;
  max-width: 75%;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 99vw;
  /* border: 1px solid pink; */
`;

const ErrorCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 4rem;
  background-color: rgba(195, 42, 42, 0.88);
`;

const ErrorCardText = styled.p`
  color: white;
  font-style: italic;
`;

const Question = styled.div`
  /* border: 1px solid purple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  padding: 0.5em;
  margin: 1em;
`;
const Text = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 600;
  /* padding: 0.5em; */
`;
const Scale = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
  /* border: 1px solid red; */
`;
const Button = styled.button`
  /* margin-bottom: 20px; */
  min-width: 180px;
  /* border: 1px solid red; */
`;

const P = styled.p`
  font-weight: 650;
  font-size: 1.5em;
`;

export default QuestionPage1;
