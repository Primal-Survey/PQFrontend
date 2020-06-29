import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm1 from "./QuestionForms/OneFiveForm";

import SubmitButton from "./QuestionForms/SubmitButton";

function QuestionPage1({ prev, next, questions, keys, ...rest }) {
  const Questions = useContext(QuestionsContext);

  return (
    <Fade>
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
        <br /> <br />
        <ButtonContainer>
          {prev ? (
            <Link to={`/questionpage${prev}/`}>
              <Button className="hoverable  btn">
                <i class="material-icons left">arrow_back</i>
                Previous
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button className="hoverable  btn">
                <i class="material-icons left">arrow_back</i>Back Home
              </Button>
            </Link>
          )}
          {next ? (
            <Link to={`/questionpage${next}/`}>
              <Button className="hoverable  btn">
                <i class="material-icons right">arrow_forward</i>
                Next
              </Button>
            </Link>
          ) : (
            <SubmitButton />
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
  /* border: 1px solid red; */
`;
const Button = styled.button`
  /* margin-bottom: 20px; */
  min-width: 180px;
  /* border: 1px solid red; */
`;
//make agree disagree component

export default QuestionPage1;
