import React from "react";
import { useContext } from "react";
import QuestionsContext from "../Contexts/QuestionContext";

function QuestionPage5() {
  const Questions = useContext(QuestionsContext);

  return (
    <div>
    <div>{Questions.questionThirteen.text}</div>
    <div>{Questions.questionFourteen.text}</div>
    <div>{Questions.questionFifteen.text}</div>
  </div>
  );
}

export default QuestionPage5;
