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
              <a className="  btn">
                <i class="material-icons left">arrow_back</i>
                {`Question page ${prev}`}
              </a>{" "}
            </Link>
          ) : (
            <Link to="/">
              <a className=" btn">
                <i class="material-icons left">arrow_back</i>Back Home
              </a>
            </Link>
          )}
          {next ? (
            <Link to={`/questionpage${next}/`}>
              <a className="  btn">
                <i class="material-icons right">arrow_forward</i>
                {`Question page ${next}`}
              </a>{" "}
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
`;
export default QuestionPage1;
