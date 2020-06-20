import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";

function QuestionPage6() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
      <div>{Questions.questionSixteen.text}</div>
      <div>{Questions.questionSeventeen.text}</div>
      <div>{Questions.questionEighteen.text}</div>
    </div>
  );
}

export default QuestionPage6;
