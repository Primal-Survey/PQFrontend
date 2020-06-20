import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";

function QuestionPage2() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>{Questions.questionFour.text}</div>
      <div>{Questions.questionFive.text}</div>
      <div>{Questions.questionSix.text}</div>
    </div>
  );
}

export default QuestionPage2;
