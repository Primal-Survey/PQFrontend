import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm from "./OneFiveForm";
import { Route, Link } from "react-router-dom";
import QuestionPage7 from "./QuestionPage7";

function QuestionPage6() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>
        {Questions.Oppositional3.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Agnostic3.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Messianic3.text}
        <OneFiveForm />
      </div>
      <Link to="/questionpage7/">Question page 7</Link>
      <Route path="/questionpage7/" component={QuestionPage7} />
    </div>
  );
}

export default QuestionPage6;
