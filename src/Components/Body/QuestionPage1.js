import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm from "./OneFiveForm";
import { Route, Link } from "react-router-dom";
import QuestionPage2 from "./QuestionPage2";

function QuestionPage1() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>
        {Questions.Relentless1.text}
        <OneFiveForm />
      </div>

      <div>
        {Questions.Oppositional1.text}
        <OneFiveForm />
      </div>

      <div>
        {Questions.Agnostic1.text}
        <OneFiveForm />
      </div>
      <Link to="/questionpage2/">Question page 2</Link>
      <Route path="/questionpage2/" component={QuestionPage2} />
    </div>
  );
}

export default QuestionPage1;
