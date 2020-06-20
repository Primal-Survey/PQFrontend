import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";

function QuestionPage1() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>{Questions.questionOne.text}</div>
      <div>{Questions.questionTwo.text}</div>
      <div>{Questions.questionThree.text}</div>
    </div>
  );
}

export default QuestionPage1;
