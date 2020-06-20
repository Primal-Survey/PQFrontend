import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";

function QuestionPage3() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
    <div>{Questions.questionSeven.text}</div>
    <div>{Questions.questionEight.text}</div>
    <div>{Questions.questionNine.text}</div>
  </div>
  );
}

export default QuestionPage3;
