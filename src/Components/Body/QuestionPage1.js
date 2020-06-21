import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm1 from "./QuestionForms/OneFiveForm1";
import { Route, Link } from "react-router-dom";
import QuestionPage2 from "./QuestionPage2";

function QuestionPage1() {
  const Questions = useContext(QuestionsContext);


  return (
    <div>
      <div>
        {Questions.Relentless1.text}
        <OneFiveForm1 />
      </div>

      <div>
        {Questions.Oppositional1.text}
        <OneFiveForm1 />
      </div>

      <div>
        {Questions.Agnostic1.text}
        <OneFiveForm1 />
      </div>
      <Link to="/questionpage2/">Question page 2</Link>
      <Route path="/questionpage2/" component={QuestionPage2} />
    </div>
  );
}

export default QuestionPage1;
