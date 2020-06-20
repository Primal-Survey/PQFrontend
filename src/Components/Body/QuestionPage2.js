import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm from "./OneFiveForm";
import { Route, Link } from "react-router-dom";
import QuestionPage3 from "./QuestionPage3";

function QuestionPage2() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>
        {Questions.Messianic1.text} <OneFiveForm />
      </div>
      <div>
        {Questions.Gallant1.text} <OneFiveForm />
      </div>
      <div>
        {Questions.Insecure1.text} <OneFiveForm />
      </div>
      <Link to="/questionpage3/">Question page 3</Link>
      <Route path="/questionpage3/" component={QuestionPage3} />
    </div>
  );
}

export default QuestionPage2;
