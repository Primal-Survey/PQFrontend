import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm from "./QuestionForms/OneFiveForm1";
import { Route, Link } from "react-router-dom";
import QuestionPage6 from "./QuestionPage6";

function QuestionPage5() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>
        {Questions.Nuts2.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Insecure2.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Relentless3.text}
        <OneFiveForm />
      </div>
      <Link to="/questionpage6/">question page 6</Link>
      <Route path="/questionpage6/" component={QuestionPage6} />
    </div>
  );
}

export default QuestionPage5;
