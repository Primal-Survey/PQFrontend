import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm1 from "./QuestionForms/OneFiveForm1";

function QuestionPage1({prev, next, questions, keys, ...rest}) {
  const Questions = useContext(QuestionsContext);


  return (
    <div>
      {questions.map((question, i) => (
        <div key={i}>
          {Questions[question].text}
          <OneFiveForm1 questionKey={keys[i]} {...rest} />
         </div> 
      ))}
      {/* <div>
        {Questions.Relentless1.text}
        <OneFiveForm1 questionKey={keys[0]} {...rest} />
      </div>

      <div>
        {Questions.Oppositional1.text}
        <OneFiveForm1 questionKey={keys[1]} {...rest} />
      </div>

      <div>
        {Questions.Agnostic1.text}
        <OneFiveForm1 questionKey={keys[2]} {...rest}  />
      </div> */}
      <div>
        {prev && <Link to={`/questionpage${prev}/`}>
          {`Question page ${prev}`}
          </Link>}
          {next && <Link to={`/questionpage${next}/`}>
            {`Question page ${next}`}
            </Link>}
      </div>
    
      {/* <Route path="/questionpage2/" component={QuestionPage2} /> */}
    </div>
  );
}

export default QuestionPage1;
