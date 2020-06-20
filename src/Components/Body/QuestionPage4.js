import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm from "./OneFiveForm";
import { Route, Link } from "react-router-dom";
import QuestionPage5 from "./QuestionPage5";

function QuestionPage4() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>
        {Questions.Oppositional2.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Messianic2.text}
        <OneFiveForm />
      </div>
      <div>
        {Questions.Gallant2.text}
        <OneFiveForm />
      </div>
      <Link to="/questionpage5/">Question page 5</Link>
      <Route path="/questionpage5/" component={QuestionPage5} />
    </div>
  );
}

export default QuestionPage4;
