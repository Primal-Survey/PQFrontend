import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm from "./QuestionForms/OneFiveForm1";
import { Route, Link } from "react-router-dom";
import Home from "./Home";

function QuestionPage7() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>
        {Questions.Gallant3.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Insecure3.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Nuts3.text}
        <OneFiveForm />
      </div>
      <Link to="/">Home</Link>
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default QuestionPage7;
