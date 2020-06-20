import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";

function QuestionPage7() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
    <div>{Questions.questionNineteen.text}</div>
    <div>{Questions.questionTwenty.text}</div>
    <div>{Questions.questionTwentyOne.text}</div>
  </div>

  );
}

export default QuestionPage7;
