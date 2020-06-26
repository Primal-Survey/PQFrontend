import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm1 from "./QuestionForms/OneFiveForm";
import Fade from "react-reveal/Fade";
import SubmitButton from "./QuestionForms/SubmitButton"

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
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {prev ? (
            <Link to={`/questionpage${prev}/`}>{`Question page ${prev}`}</Link>
          ) : (
            <Link to="/startPage/">Meta Data</Link>
          )}
          {next ? (
            <Link to={`/questionpage${next}/`}>{`Question page ${next}`}</Link>
          ) : (
            <SubmitButton/>
          )}
        </div>

        {/* <Route path="/questionpage2/" component={QuestionPage2} /> */}
      </Fade>
    </div>
  );
}

export default QuestionPage1;
