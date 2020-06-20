import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";

function QuestionPage4() {
  const Questions = useContext(QuestionsContext);

  return (
<div>
      <div>{Questions.questionTen.text}</div>
      <div>{Questions.questionEleven.text}</div>
      <div>{Questions.questionTwelve.text}</div>
    </div>
  );
}

export default QuestionPage4;
