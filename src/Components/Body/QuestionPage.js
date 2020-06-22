import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuestionsContext from "../Contexts/QuestionContext";
import OneFiveForm1 from "./QuestionForms/OneFiveForm";

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
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {prev ? (<Link to={`/questionpage${prev}/`}>
          {`Question page ${prev}`}
          </Link>) : (
            <Link to='/'>Home</Link>
          )}
          {next ?( <Link to={`/questionpage${next}/`}>
            {`Question page ${next}`}
            </Link>) : (<Link to='/results'>Results</Link>)}
      </div>
    
      {/* <Route path="/questionpage2/" component={QuestionPage2} /> */}
    </div>
  );
}

export default QuestionPage1;
