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
    <div>
      <Fade>
        {questions.map((question, i) => (
          <div key={i}>
            {Questions[question].text}
            <OneFiveForm1 questionKey={keys[i]} {...rest} />
          </div>
        ))}
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
        </div>
      </Fade>
    </div>
  );
}
const Button = styled.button`
  margin-bottom: 20px;
  min-width: 175px;
`;
//make buttons same width
const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50vw;
  border: 1px solid blue;
`;

//try to make text bigger, darker, align left on choices?
const Question = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  margin: 1em;
`;

//make agree disagree component

export default QuestionPage1;
