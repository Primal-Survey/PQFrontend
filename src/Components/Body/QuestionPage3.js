import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm from "./QuestionForms/OneFiveForm1";
import { Route, Link } from "react-router-dom";
import QuestionPage4 from "./QuestionPage4";

function QuestionPage3() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>
        {Questions.Nuts1.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Relentless2.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Agnostic2.text}
        <OneFiveForm />
      </div>
      <Link to="/questionpage4/">Question page 4</Link>
      <Route path="/questionpage4/" component={QuestionPage4} />
    </div>
  );
}

export default QuestionPage3;
