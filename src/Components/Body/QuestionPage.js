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
        <ErrorCardText>Please answer each question before moving to the next page.</ErrorCardText>
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

  // if you're in DEV mode, it will skip the survey.
  // if (process.env.NODE_ENV === "development") {
  //   next = false;
  // }

  const Questions = useContext(QuestionsContext);

  return (
    <Fade>
      <ValidationErrorCard visible={showError} />
      {/* <AgreeBox> */}
      {/* <AgreeBar>
          <i className="material-icons medium left">navigate_before</i>{" "}
          {/* <i className="material-icons small">fiber_manual_record</i> */}
      {/* <P>Completely Disagree</P> */}
      {/* <i className="material-icons tiny">fiber_manual_record</i> */}
      {/* <i className="material-icons " style={{ margin: "0 1%" }}>
            fiber_manual_record
          </i> */}
      {/* <i className="material-icons tiny">fiber_manual_record</i> */}
      {/* <i className="material-icons " style={{ margin: "0 1%" }}>
            fiber_manual_record
          </i> */}
      {/* <i className="material-icons tiny">fiber_manual_record</i> */}
      {/* <i className="material-icons " style={{ margin: "0 1%" }}>
            fiber_manual_record
          </i> */}
      {/* <i className="material-icons tiny">fiber_manual_record</i> */}
      {/* <P>Completely Agree</P> */}
      {/* <i className="material-icons small">fiber_manual_record</i> */}
      {/* <i className="material-icons medium right">navigate_next</i> */}
      {/* </AgreeBar>  */}
      {/* </AgreeBox> */}
      <div>
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
          Page {current} of 7
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

const AgreeBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  /* border: 1px solid red; */
  margin: 0.75em;
`;

const AgreeBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 50%;
  /* border: 1px solid red; */
  /* padding-bottom: 0.5em;
  margin-bottom: 1.5em; */
`;

const P = styled.p`
  font-weight: 650;
  font-size: 1.5em;
`;

export default QuestionPage1;
